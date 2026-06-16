<?php
/**
 * Bloco IFC Header — render server-side.
 *
 * @param array    $attributes
 * @param string   $content
 * @param WP_Block $block
 */

$logo_campus     = $attributes['logoCampus'] ?? 'camboriu';
$logo_orientation = $attributes['logoOrientation'] ?? 'horizontal';
$logo_variant    = $attributes['logoVariant'] ?? 'default';

$accessibility_links = $attributes['accessibilityLinks'] ?? [
    ['label' => 'Acessibilidade', 'url' => '#acessibilidade'],
    ['label' => 'Alto Contraste', 'url' => '#alto-contraste'],
    ['label' => 'Mapa do Site', 'url' => '#mapa-site'],
];

$navigation_links = $attributes['navigationLinks'] ?? [
    ['label' => 'Contato', 'url' => '#contato'],
    ['label' => 'Ouvidoria', 'url' => '#ouvidoria'],
    ['label' => 'Acesso à Informação', 'url' => '#acesso-informacao'],
    ['label' => 'Imprensa', 'url' => '#imprensa'],
];

$social_media = $attributes['socialMedia'] ?? [
    ['platform' => 'youtube',   'url' => '#youtube'],
    ['platform' => 'facebook',  'url' => '#facebook'],
    ['platform' => 'instagram', 'url' => '#instagram'],
];

$skip_links = [
    [
        'id'          => 1,
        'label'       => __('Ir para o conteúdo', 'ifc-design-system'),
        'target'      => '#main',
        'description' => __('Pula para o conteúdo principal da página', 'ifc-design-system'),
    ],
    [
        'id'          => 2,
        'label'       => __('Ir para o menu', 'ifc-design-system'),
        'target'      => '#nav',
        'description' => __('Pula para a navegação principal', 'ifc-design-system'),
    ],
    [
        'id'          => 3,
        'label'       => __('Ir para o rodapé', 'ifc-design-system'),
        'target'      => '#footer',
        'description' => __('Pula para o rodapé da página', 'ifc-design-system'),
    ],
];
?>

<header <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-header']); ?>>
    <div class="ifc-ds-header__top-section">
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <div class="ifc-ds-header__accessibility">
                    <div class="ifc-ds-skip-navigation">
                        <div class="ifc-ds-skip-navigation__container">
                            <div class="ifc-ds-skip-navigation__links">
                                <?php foreach ($skip_links as $link): ?>
                                    <?php
                                    echo ifc_ds_render_link([
                                        'label'  => $link['label'],
                                        'url'    => $link['target'],
                                        'type'   => 'white',
                                        'size'   => 'detail',
                                        'weight' => 'regular',
                                    ]);
                                    ?>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>

                    <div class="ifc-ds-header__accessibility-links">
                        <?php foreach ($accessibility_links as $link): ?>
                            <?php
                            echo ifc_ds_render_link([
                                'label'  => $link['label'],
                                'url'    => $link['url'],
                                'type'   => 'white',
                                'size'   => 'detail',
                                'weight' => 'regular',
                            ]);
                            ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="ifc-ds-header__main-section">
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <div class="ifc-ds-header__main-content">
                    <div class="ifc-ds-header__brand">
                        <div class="ifc-ds-logo ifc-ds-header__logo">
                            <img
                                src="<?php echo esc_url(ifc_ds_get_logo_url($logo_campus, $logo_orientation, $logo_variant)); ?>"
                                alt="Instituto Federal Catarinense"
                                class="ifc-ds-logo__image ifc-ds-logo__image--<?php echo esc_attr($logo_orientation); ?> ifc-ds-logo__image--<?php echo esc_attr($logo_variant); ?>"
                                loading="eager"
                                fetchpriority="high"
                                decoding="async"
                            />
                        </div>
                    </div>

                    <div class="ifc-ds-header__actions">
                        <div class="ifc-ds-header__search">
                            <?php
                            echo ifc_ds_render_input([
                                'input_type'  => 'search',
                                'placeholder' => __('Buscar no portal', 'ifc-design-system'),
                                'wrapper'     => false,
                            ]);
                            ?>
                        </div>

                        <div class="ifc-ds-header__social">
                            <?php foreach ($social_media as $social): ?>
                                <a
                                    href="<?php echo esc_url($social['url']); ?>"
                                    class="ifc-ds-link ifc-ds-link--medium ifc-ds-link--icon-only"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="<?php echo esc_attr(ucfirst($social['platform'])); ?>"
                                >
                                    <span class="dashicons <?php echo esc_attr(ifc_ds_get_social_icon($social['platform'])); ?>"></span>
                                    <span class="screen-reader-text"><?php echo esc_html(ucfirst($social['platform'])); ?></span>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="ifc-ds-header__navigation">
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <div class="ifc-ds-header__nav-items">
                    <?php foreach ($navigation_links as $index => $link): ?>
                        <div class="ifc-ds-header__nav-item">
                            <?php
                            echo ifc_ds_render_link([
                                'label' => $link['label'],
                                'url'   => $link['url'],
                                'type'  => 'white',
                                'size'  => 'small',
                            ]);
                            ?>
                            <?php if ($index < count($navigation_links) - 1): ?>
                                <div class="ifc-ds-divider ifc-ds-divider--vertical ifc-ds-divider--gray"></div>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</header>
