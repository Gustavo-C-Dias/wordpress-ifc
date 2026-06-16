<?php
/**
 * Tema IFC Design System — Block Theme (FSE)
 *
 * Responsabilidades do tema (camada fina):
 *  1. Declarar suportes do WordPress (title-tag, post-thumbnails, FSE).
 *  2. Enfileirar as fontes externas, o CSS de design tokens e o script
 *     da Barra do Governo (este último era inline em footer.php no tema
 *     clássico; agora é enfileirado via wp_enqueue_scripts).
 *  3. Expor block patterns descobertos automaticamente em /patterns.
 *  4. Helpers de formatação de data PT-BR.
 *
 * Toda a UI (header, footer, conteúdo, hierarquia de templates) é
 * renderizada via Site Editor:
 *   templates/{index,page,single,404}.html  + parts/{header,footer}.html.
 *
 * Os blocos são registrados pelo plugin `ifc-design-system`.
 */

if (!defined('ABSPATH')) {
    exit;
}

/* =====================================================================
 * 1. Helpers
 * ================================================================== */

function ifc_ds_format_date_pt_br($timestamp) {
    if (!$timestamp || $timestamp <= 0) {
        $timestamp = current_time('timestamp');
    }

    $months_pt = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];

    $day   = date('j', $timestamp);
    $month = $months_pt[(int) date('n', $timestamp) - 1];
    $year  = date('Y', $timestamp);

    return sprintf('%d de %s de %d', $day, $month, $year);
}

/* =====================================================================
 * 2. Setup do tema
 * ================================================================== */

function ifc_ds_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');

    /*
     * FSE explícito. Em WP >= 5.9 a presença de `templates/index.html`
     * já habilita o site editor, mas declarar os supports torna a
     * intenção evidente e destrava o gerenciamento de template parts
     * por área (header/footer) no editor.
     */
    add_theme_support('block-templates');
    add_theme_support('block-template-parts');

    /*
     * Carrega CSS no iframe do block editor:
     *  - design-tokens é a base (cores/espaçamentos)
     *  - pattern-curso é específico do pattern "Página de Curso", mas
     *    seus seletores são namespaced em `.ifc-ds-curso-*`, então é
     *    inerte em outros editores.
     */
    add_editor_style([
        'assets/css/design-tokens.css',
        'assets/css/pattern-curso.css',
    ]);
}
add_action('after_setup_theme', 'ifc_ds_theme_setup');

/* =====================================================================
 * 3. Resource hints (preconnect Google Fonts)
 *    Reduz o handshake TLS antes do request real do CSS.
 * ================================================================== */

function ifc_ds_resource_hints($urls, $relation_type) {
    if ($relation_type === 'preconnect') {
        $urls[] = [
            'href'        => 'https://fonts.googleapis.com',
            'crossorigin' => 'anonymous',
        ];
        $urls[] = [
            'href'        => 'https://fonts.gstatic.com',
            'crossorigin' => 'anonymous',
        ];
    }
    return $urls;
}
add_filter('wp_resource_hints', 'ifc_ds_resource_hints', 10, 2);

/* =====================================================================
 * 4. Enqueue de fontes
 * ================================================================== */

function ifc_ds_enqueue_fonts() {
    wp_enqueue_style(
        'ifc-ds-google-fonts',
        'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
        [],
        null
    );
}
add_action('wp_enqueue_scripts', 'ifc_ds_enqueue_fonts');
add_action('admin_enqueue_scripts', 'ifc_ds_enqueue_fonts');

/* =====================================================================
 * 4.1. Script da Barra do Governo (defer, no footer)
 *      No tema clássico esse <script> ficava inline em footer.php; com
 *      a migração para FSE precisa ser registrado como asset.
 * ================================================================== */

function ifc_ds_enqueue_barra_brasil() {
    wp_enqueue_script(
        'ifc-ds-barra-brasil',
        'https://barra.brasil.gov.br/barra.js',
        [],
        null,
        [
            'in_footer' => true,
            'strategy'  => 'defer',
        ]
    );
}
add_action('wp_enqueue_scripts', 'ifc_ds_enqueue_barra_brasil');

/* =====================================================================
 * 5. Design tokens (CSS Custom Properties)
 *    Versionados via filemtime para invalidação correta de cache.
 * ================================================================== */

function ifc_ds_enqueue_design_tokens() {
    $tokens_path = get_stylesheet_directory() . '/assets/css/design-tokens.css';
    $tokens_url  = get_stylesheet_directory_uri() . '/assets/css/design-tokens.css';

    wp_enqueue_style(
        'ifc-ds-design-tokens',
        $tokens_url,
        [],
        file_exists($tokens_path) ? filemtime($tokens_path) : null
    );
}
add_action('wp_enqueue_scripts', 'ifc_ds_enqueue_design_tokens', 1);
add_action('admin_enqueue_scripts', 'ifc_ds_enqueue_design_tokens', 1);
add_action('enqueue_block_editor_assets', 'ifc_ds_enqueue_design_tokens', 1);

/* =====================================================================
 * 6. CSS específico do block pattern "Página de Curso"
 *    Carrega APENAS quando a página renderizada contém o pattern.
 * ================================================================== */

function ifc_ds_enqueue_pattern_curso_assets() {
    if (!is_singular()) {
        return;
    }

    $post = get_post();
    if (!$post) {
        return;
    }

    $needs_curso_css = (
        has_block('ifc-ds/layout-container', $post)
        || strpos($post->post_content, 'ifc-ds-curso-') !== false
    );

    if (!$needs_curso_css) {
        return;
    }

    $css_path = get_stylesheet_directory() . '/assets/css/pattern-curso.css';
    $css_url  = get_stylesheet_directory_uri() . '/assets/css/pattern-curso.css';

    if (!file_exists($css_path)) {
        return;
    }

    wp_enqueue_style(
        'ifc-ds-pattern-curso',
        $css_url,
        ['ifc-ds-design-tokens'],
        filemtime($css_path)
    );
}
add_action('wp_enqueue_scripts', 'ifc_ds_enqueue_pattern_curso_assets', 20);

/* =====================================================================
 * 7. Block pattern category
 *    O pattern em si é descoberto automaticamente em /patterns/curso.php.
 * ================================================================== */

function ifc_ds_register_block_pattern_categories() {
    register_block_pattern_category(
        'ifc-ds',
        ['label' => __('IFC Design System', 'ifc-ds')]
    );
}
add_action('init', 'ifc_ds_register_block_pattern_categories');
