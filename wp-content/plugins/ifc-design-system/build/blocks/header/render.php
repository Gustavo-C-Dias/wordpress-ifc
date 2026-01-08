<?php
// Atributos do bloco
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

// Links padrão do Skip Navigation
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

// Função para gerar URL do logo (com verificação de existência)
if (!function_exists('get_logo_url')) {
    function get_logo_url($orientation, $variant) {
        $plugin_url = plugin_dir_url(__FILE__);
        return $plugin_url . "assets/{$orientation}/logo-{$orientation}-{$variant}.svg";
    }
}

// Função para renderizar ícone de rede social (com verificação de existência)
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
    <!-- Primeira seção: Skip Navigation + Links de Acessibilidade -->
    <div class="ifc-ds-header__top-section">
        <div class="ifc-ds-header__accessibility">
            <!-- Skip Navigation Component -->
            <div class="ifc-ds-skip-navigation">
                <div class="ifc-ds-skip-navigation__container">
                    <div class="ifc-ds-skip-navigation__links">
                        <?php foreach ($skip_links as $link): ?>
                            <a 
                                href="<?php echo esc_attr($link['target']); ?>"
                                class="ifc-ds-skip-navigation__link"
                                title="<?php echo esc_attr($link['description']); ?>"
                            >
                                <?php echo esc_html($link['label']); ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            
            <!-- Links de Acessibilidade -->
            <div class="ifc-ds-header__accessibility-links">
                <?php foreach ($accessibilityLinks as $link): ?>
                    <a 
                        href="<?php echo esc_url($link['url']); ?>"
                        class="ifc-ds-link ifc-ds-link--small ifc-ds-link--regular"
                    >
                        <?php echo esc_html($link['label']); ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <!-- Segunda seção: Logo + Busca + Redes Sociais -->
    <div class="ifc-ds-header__main-section">
        <div class="ifc-ds-header__brand">
            <!-- Logo Component -->
            <div class="ifc-ds-logo ifc-ds-header__logo">
                <img 
                    src="<?php echo esc_url(get_logo_url($logoOrientation, $logoVariant)); ?>"
                    alt="Instituto Federal Catarinense"
                    class="ifc-ds-logo__image ifc-ds-logo__image--<?php echo esc_attr($logoOrientation); ?> ifc-ds-logo__image--<?php echo esc_attr($logoVariant); ?>"
                />
            </div>
        </div>
        
        <!-- Ações: Busca + Redes Sociais -->
        <div class="ifc-ds-header__actions">
            <div class="ifc-ds-header__search">
                <input 
                    type="search" 
                    placeholder="<?php echo esc_attr(__('Buscar...', 'ifc-design-system')); ?>"
                    class="ifc-ds-header__search-input"
                />
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

    <!-- Terceira seção: Links de Navegação com Dividers -->
    <div class="ifc-ds-header__navigation">
        <?php foreach ($navigationLinks as $index => $link): ?>
            <div class="ifc-ds-header__nav-item">
                <a 
                    href="<?php echo esc_url($link['url']); ?>"
                    class="ifc-ds-link ifc-ds-link--medium ifc-ds-link--medium-weight"
                >
                    <?php echo esc_html($link['label']); ?>
                </a>
                
                <?php if ($index < count($navigationLinks) - 1): ?>
                    <div class="ifc-ds-divider ifc-ds-divider--vertical ifc-ds-divider--gray"></div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
</header>