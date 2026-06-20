<?php
/**
 * Render do bloco ifc-ds/header.
 *
 * Acessibilidade:
 *  - eMAG 1.8 / WCAG 2.4.1 — `<header role="banner">` envolve as
 *    informações de cabeçalho (eMAG: "Banner — informações voltadas
 *    ao site como um todo").
 *  - eMAG 4.3 — barra de acessibilidade no topo, contendo skip-links
 *    com `accesskey` (1, 2, 3, 4) e os links institucionais.
 *  - eMAG 3.5 — links com texto descritivo; o atributo `title` foi
 *    removido (não é bem suportado por leitores de tela). Para links
 *    apenas com ícone (redes sociais) usamos `aria-label` + texto
 *    `screen-reader-text`.
 *  - eMAG 1.9 — links de redes sociais que abrem em nova aba têm o
 *    fato anunciado no nome acessível ("X (abre em nova janela)").
 *  - eMAG 6.2 — o campo de busca está dentro de `<form role="search">`
 *    com `<label>` real (mesmo que oculto visualmente) — o
 *    placeholder NÃO é label.
 *
 * @param array    $attributes
 * @param string   $content
 * @param WP_Block $block
 */

$logo_campus      = $attributes['logoCampus'] ?? 'camboriu';
$logo_orientation = $attributes['logoOrientation'] ?? 'horizontal';
$logo_variant     = $attributes['logoVariant'] ?? 'default';
$logo_link_url    = $attributes['logoLinkUrl'] ?? home_url('/');
$logo_alt_text    = $attributes['logoAltText'] ?? __('Instituto Federal Catarinense — Página inicial', 'ifc-design-system');

$accessibility_links = $attributes['accessibilityLinks'] ?? [
    ['label' => __('Acessibilidade', 'ifc-design-system'), 'url' => '#acessibilidade'],
    ['label' => __('Alto Contraste', 'ifc-design-system'), 'url' => '#alto-contraste'],
    ['label' => __('Mapa do Site', 'ifc-design-system'), 'url' => '#mapa-site'],
];

$navigation_links = $attributes['navigationLinks'] ?? [
    ['label' => __('Contato', 'ifc-design-system'), 'url' => '#contato'],
    ['label' => __('Ouvidoria', 'ifc-design-system'), 'url' => '#ouvidoria'],
    ['label' => __('Acesso à Informação', 'ifc-design-system'), 'url' => '#acesso-informacao'],
    ['label' => __('Imprensa', 'ifc-design-system'), 'url' => '#imprensa'],
];

$social_media = $attributes['socialMedia'] ?? [
    ['platform' => 'youtube',   'url' => '#youtube'],
    ['platform' => 'facebook',  'url' => '#facebook'],
    ['platform' => 'instagram', 'url' => '#instagram'],
];

$skip_links = function_exists('ifc_ds_get_default_skip_links')
    ? ifc_ds_get_default_skip_links()
    : [];
?>

<header <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-header']); ?> role="banner">
    <div class="ifc-ds-header__top-section">
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <div class="ifc-ds-header__accessibility">
                    <nav
                        class="ifc-ds-skip-navigation"
                        aria-label="<?php echo esc_attr__('Atalhos de acessibilidade', 'ifc-design-system'); ?>"
                    >
                        <div class="ifc-ds-skip-navigation__container">
                            <ul class="ifc-ds-skip-navigation__links">
                                <?php foreach ($skip_links as $link) : ?>
                                    <li class="ifc-ds-skip-navigation__item">
                                        <?php echo ifc_ds_render_navigation_skip_link($link); ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </nav>

                    <nav
                        class="ifc-ds-header__accessibility-links"
                        aria-label="<?php echo esc_attr__('Recursos de acessibilidade', 'ifc-design-system'); ?>"
                    >
                        <ul class="ifc-ds-header__accessibility-list">
                            <?php foreach ($accessibility_links as $link) : ?>
                                <li>
                                    <?php
                                    echo ifc_ds_render_link([
                                        'label'   => $link['label'],
                                        'url'     => $link['url'],
                                        'type'    => 'white',
                                        'size'    => 'detail',
                                        'weight'  => 'regular',
                                        'wrapper' => false,
                                    ]);
                                    ?>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="ifc-ds-header__main-section">
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <div class="ifc-ds-header__main-content">
                    <div class="ifc-ds-header__brand">
                        <a
                            class="ifc-ds-header__logo-link"
                            href="<?php echo esc_url($logo_link_url); ?>"
                            aria-label="<?php echo esc_attr($logo_alt_text); ?>"
                        >
                            <div class="ifc-ds-logo ifc-ds-header__logo">
                                <img
                                    src="<?php echo esc_url(ifc_ds_get_logo_url($logo_campus, $logo_orientation, $logo_variant)); ?>"
                                    alt="<?php echo esc_attr($logo_alt_text); ?>"
                                    class="ifc-ds-logo__image ifc-ds-logo__image--<?php echo esc_attr($logo_orientation); ?> ifc-ds-logo__image--<?php echo esc_attr($logo_variant); ?>"
                                    loading="eager"
                                    fetchpriority="high"
                                    decoding="async"
                                />
                            </div>
                        </a>
                    </div>

                    <div class="ifc-ds-header__actions">
                        <form
                            class="ifc-ds-header__search"
                            role="search"
                            method="get"
                            action="<?php echo esc_url(home_url('/')); ?>"
                            aria-label="<?php echo esc_attr__('Buscar no portal', 'ifc-design-system'); ?>"
                        >
                            <?php
                            echo ifc_ds_render_input([
                                'input_type'  => 'search',
                                'input_id'    => 'busca',
                                'input_name'  => 's',
                                'label'       => __('Buscar no portal', 'ifc-design-system'),
                                'hide_label'  => true,
                                'placeholder' => __('Buscar no portal', 'ifc-design-system'),
                                'autocomplete' => 'off',
                                'wrapper'     => false,
                            ]);
                            ?>
                            <button
                                type="submit"
                                class="ifc-ds-header__search-submit screen-reader-text"
                            >
                                <?php esc_html_e('Pesquisar', 'ifc-design-system'); ?>
                            </button>
                        </form>

                        <nav
                            class="ifc-ds-header__social"
                            aria-label="<?php echo esc_attr__('Redes sociais oficiais', 'ifc-design-system'); ?>"
                        >
                            <ul class="ifc-ds-header__social-list">
                                <?php foreach ($social_media as $social) :
                                    $platform_label = ifc_ds_get_social_label($social['platform']);
                                    $aria_label = sprintf(
                                        /* translators: %s: nome da rede social */
                                        __('%s (abre em nova janela)', 'ifc-design-system'),
                                        $platform_label
                                    );
                                ?>
                                    <li class="ifc-ds-header__social-item">
                                        <a
                                            href="<?php echo esc_url($social['url']); ?>"
                                            class="ifc-ds-link ifc-ds-link--medium ifc-ds-link--icon-only"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="<?php echo esc_attr($aria_label); ?>"
                                        >
                                            <span class="dashicons <?php echo esc_attr(ifc_ds_get_social_icon($social['platform'])); ?>" aria-hidden="true"></span>
                                            <span class="screen-reader-text"><?php echo esc_html($platform_label); ?></span>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <nav
        class="ifc-ds-header__navigation"
        id="nav"
        aria-label="<?php echo esc_attr__('Menu institucional', 'ifc-design-system'); ?>"
    >
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <ul class="ifc-ds-header__nav-items">
                    <?php foreach ($navigation_links as $index => $link) : ?>
                        <li class="ifc-ds-header__nav-item">
                            <?php
                            echo ifc_ds_render_link([
                                'label'   => $link['label'],
                                'url'     => $link['url'],
                                'type'    => 'white',
                                'size'    => 'small',
                                'wrapper' => false,
                            ]);
                            ?>
                            <?php if ($index < count($navigation_links) - 1) : ?>
                                <span
                                    class="ifc-ds-divider ifc-ds-divider--vertical ifc-ds-divider--gray"
                                    role="separator"
                                    aria-hidden="true"
                                ></span>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </nav>
</header>
