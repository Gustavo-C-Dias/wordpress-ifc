<?php

$logoCampus = $attributes['logoCampus'] ?? 'camboriu';
$logoOrientation = $attributes['logoOrientation'] ?? 'horizontal';
$logoVariant = $attributes['logoVariant'] ?? 'default';
$accessibilityLinks = $attributes['accessibilityLinks'] ?? [
    ['label' => 'Acessibilidade', 'url' => '#acessibilidade'],
    ['label' => 'Alto Contraste', 'url' => '#alto-contraste'],
    ['label' => 'Mapa do Site', 'url' => '#mapa-site']
];
$navigationLinks = $attributes['navigationLinks'] ?? [
    ['label' => 'Contato', 'url' => '#contato'],
    ['label' => 'Ouvidoria', 'url' => '#ouvidoria'],
    ['label' => 'Acesso à Informação', 'url' => '#acesso-informacao'],
    ['label' => 'Imprensa', 'url' => '#imprensa']
];
$socialMedia = $attributes['socialMedia'] ?? [
    ['platform' => 'youtube', 'url' => '#youtube'],
    ['platform' => 'facebook', 'url' => '#facebook'],
    ['platform' => 'instagram', 'url' => '#instagram']
];

$skip_links = [
    [
        'id' => 1,
        'label' => __('Ir para o conteúdo', 'ifc-design-system'),
        'target' => '#main',
        'description' => __('Pula para o conteúdo principal da página', 'ifc-design-system')
    ],
    [
        'id' => 2,
        'label' => __('Ir para o menu', 'ifc-design-system'), 
        'target' => '#nav',
        'description' => __('Pula para a navegação principal', 'ifc-design-system')
    ],
    [
        'id' => 3,
        'label' => __('Ir para o rodapé', 'ifc-design-system'),
        'target' => '#footer', 
        'description' => __('Pula para o rodapé da página', 'ifc-design-system')
    ]
];

if (!function_exists('get_logo_url')) {
    function get_logo_url($campus, $orientation, $variant) {
        $plugin_url = defined('IFC_DS_PLUGIN_URL')
            ? IFC_DS_PLUGIN_URL
            : plugin_dir_url(dirname(dirname(dirname(dirname(__FILE__)))));
        return $plugin_url . "src/blocks/logo/assets/{$campus}/{$orientation}/{$variant}.png";
    }
}

if (!function_exists('get_social_icon')) {
    function get_social_icon($platform) {
        $icons = [
            'youtube' => 'dashicons-video-alt3',
            'facebook' => 'dashicons-facebook',
            'instagram' => 'dashicons-instagram'
        ];
        return $icons[$platform] ?? 'dashicons-share';
    }
}
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
                                            'label' => $link['label'],
                                            'url' => $link['target'],
                                            'type' => 'white',
                                            'size' => 'detail',
                                            'weight' => 'regular',
                                        ]);
                                    ?>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>

                    <div class="ifc-ds-header__accessibility-links">
                        <?php foreach ($accessibilityLinks as $link): ?>
                            <?php
                                echo ifc_ds_render_link([
                                    'label' => $link['label'],
                                    'url' => $link['url'],
                                    'type' => 'white',
                                    'size' => 'detail',
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
                                src="<?php echo esc_url(get_logo_url($logoCampus, $logoOrientation, $logoVariant)); ?>"
                                alt="Instituto Federal Catarinense"
                                class="ifc-ds-logo__image ifc-ds-logo__image--<?php echo esc_attr($logoOrientation); ?> ifc-ds-logo__image--<?php echo esc_attr($logoVariant); ?>"
                            />
                        </div>
                    </div>

                    <div class="ifc-ds-header__actions">
                        <div class="ifc-ds-header__search">
                            <?php
                                echo ifc_ds_render_input([
                                    'input_type' => 'search',
                                    'placeholder' => __('Buscar no portal', 'ifc-design-system'),
                                    'wrapper' => false
                                ]);
                            ?>
                        </div>

                        <div class="ifc-ds-header__social">
                            <?php foreach ($socialMedia as $social): ?>
                                <a
                                    href="<?php echo esc_url($social['url']); ?>"
                                    class="ifc-ds-link ifc-ds-link--medium ifc-ds-link--icon-only"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="<?php echo esc_attr(ucfirst($social['platform'])); ?>"
                                >
                                    <span class="dashicons <?php echo esc_attr(get_social_icon($social['platform'])); ?>"></span>
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
                    <?php foreach ($navigationLinks as $index => $link): ?>
                        <div class="ifc-ds-header__nav-item">
                            <?php
                                echo ifc_ds_render_link([
                                    'label' => $link['label'],
                                    'url' => $link['url'],
                                    'type' => 'white',
                                    'size' => 'small'
                                ]);
                            ?>
                            <?php if ($index < count($navigationLinks) - 1): ?>
                                <div class="ifc-ds-divider ifc-ds-divider--vertical ifc-ds-divider--gray"></div>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</header>