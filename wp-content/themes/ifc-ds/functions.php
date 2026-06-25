<?php
/**
 * Tema IFC Design System — Block Theme (FSE)
 *
 * Responsabilidades do tema (camada fina):
 *  1. Declarar suportes do WordPress (title-tag, post-thumbnails, FSE).
 *  2. Enfileirar as fontes externas, o CSS de design tokens e o script
 *     da Barra do Governo.
 *  3. Expor block patterns descobertos automaticamente em /patterns.
 *  4. Helpers de formatação de data PT-BR.
 *  5. Reforçar acessibilidade global (eMAG 1.5 / WCAG 2.4.1):
 *     skip-link primário injetado em `wp_body_open`, idioma da página
 *     fixado em pt-BR e foco visível no `<main>` quando alvo de
 *     skip-link.
 *
 * Toda a UI (header, footer, conteúdo) é renderizada via Site Editor.
 * O tema mantém um único template (`templates/index.html`) que o WP
 * resolve como fallback universal para qualquer rota — incluindo a
 * página de curso, que é uma Página estática contendo o block pattern
 * `ifc-ds/template-curso`. Os template parts ficam em
 * `parts/{header,footer}.html`.
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
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    /*
     * FSE explícito.
     */
    add_theme_support('block-templates');
    add_theme_support('block-template-parts');

    add_editor_style([
        'assets/css/design-tokens.css',
        'assets/css/pattern-curso.css',
    ]);

    /*
     * Carrega tradução do tema (eMAG 3.1 — idioma identificado).
     */
    load_theme_textdomain('ifc-ds', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'ifc_ds_theme_setup');

/* =====================================================================
 * 3. Resource hints (preconnect Google Fonts)
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
 * ================================================================== */

function ifc_ds_register_block_pattern_categories() {
    register_block_pattern_category(
        'ifc-ds',
        ['label' => __('IFC Design System', 'ifc-ds')]
    );
}
add_action('init', 'ifc_ds_register_block_pattern_categories');

/* =====================================================================
 * 8. Acessibilidade global (eMAG / WCAG)
 * ================================================================== */

/**
 * Garante `lang="pt-BR"` no <html> mesmo quando a configuração do
 * WordPress estiver em outro idioma. eMAG 3.1 / WCAG 3.1.1.
 */
function ifc_ds_force_language_attributes($output) {
    if (strpos($output, 'lang=') === false) {
        $output .= ' lang="pt-BR"';
    }
    return $output;
}
add_filter('language_attributes', 'ifc_ds_force_language_attributes');

/**
 * Skip-link global como PRIMEIRO elemento focalizável da página.
 * eMAG 1.5 / 4.1 — "É importante ressaltar que o primeiro link da
 * página deve ser o de ir para o conteúdo".
 *
 * O link fica visualmente oculto até receber foco (sr-only-focusable).
 */
function ifc_ds_render_global_skip_link() {
    $href  = '#main';
    $label = __('Ir para o conteúdo principal', 'ifc-ds');
    ?>
    <a class="ifc-ds-skip-link" href="<?php echo esc_attr($href); ?>" accesskey="1">
        <?php echo esc_html($label); ?>
    </a>
    <style>
        .ifc-ds-skip-link {
            position: absolute;
            left: -9999px;
            top: 0;
            z-index: 100000;
            padding: 12px 24px;
            background-color: #237631;
            color: #ffffff;
            font-weight: 700;
            text-decoration: underline;
            font-family: 'Open Sans', sans-serif;
        }
        .ifc-ds-skip-link:focus,
        .ifc-ds-skip-link:focus-visible {
            left: 0;
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
        /* Foco visível no <main> quando alvo de skip-link (WCAG 2.4.7). */
        main:focus,
        main:focus-visible {
            outline: 2px solid #237631;
            outline-offset: 4px;
        }
    </style>
    <?php
}
add_action('wp_body_open', 'ifc_ds_render_global_skip_link', 1);

/**
 * Adiciona o ID `main` ao <main> emitido pelo `wp:group {tagName:"main"}`,
 * caso o autor não tenha definido — garantindo que o skip-link
 * "Ir para o conteúdo" sempre encontre seu alvo.
 *
 * Também adiciona `tabindex="-1"` para que o foco programático
 * funcione em todos os navegadores (eMAG 4.1 / WCAG 2.4.1).
 */
function ifc_ds_ensure_main_id($block_content, $block) {
    if (!isset($block['blockName']) || $block['blockName'] !== 'core/group') {
        return $block_content;
    }

    $tag_name = $block['attrs']['tagName'] ?? 'div';
    if ($tag_name !== 'main') {
        return $block_content;
    }

    if (preg_match('/<main\b[^>]*\bid=/i', $block_content)) {
        return $block_content;
    }

    $block_content = preg_replace(
        '/<main\b/i',
        '<main id="main" tabindex="-1"',
        $block_content,
        1
    );

    return $block_content;
}
add_filter('render_block', 'ifc_ds_ensure_main_id', 10, 2);
