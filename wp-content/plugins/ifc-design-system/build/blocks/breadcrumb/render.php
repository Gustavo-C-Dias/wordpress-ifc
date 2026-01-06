<?php
/**
 * Breadcrumb Component
 * 
 * @param array $attributes Os atributos do bloco
 * @param string $content O conteúdo do bloco
 * @param WP_Block $block A instância do bloco
 * @return string
 */

$items = $attributes['items'] ?? [
    ['label' => 'Início', 'url' => '/', 'icon' => 'admin-home', 'id' => 1]
];
$current_page_title = $attributes['currentPageTitle'] ?? 'Página Atual';
$separator = $attributes['separator'] ?? '/';
$link_type = $attributes['linkType'] ?? 'neutral';
$link_size = $attributes['linkSize'] ?? 'small';

// Função ifc_ds_render_breadcrumb_link está definida em render-functions.php

// Gerar classes CSS
$classes = ['ifc-ds-breadcrumb'];
?>

<nav <?php echo get_block_wrapper_attributes(['class' => implode(' ', $classes)]); ?>>
    <ol class="ifc-ds-breadcrumb__list">
        <?php foreach ($items as $index => $item): ?>
            <li class="ifc-ds-breadcrumb__item">
                <?php 
                echo ifc_ds_render_breadcrumb_link($item, $link_type, $link_size); 
                ?>
                <?php if ($index < count($items)): ?>
                    <span class="ifc-ds-breadcrumb__separator" aria-hidden="true">
                        <?php echo esc_html($separator); ?>
                    </span>
                <?php endif; ?>
            </li>
        <?php endforeach; ?>
        
        <li class="ifc-ds-breadcrumb__item ifc-ds-breadcrumb__item--current">
            <?php 
            $text_type = $link_size === 'small' ? 'detail' : 'body';
            ?>
            <span class="ifc-ds-text ifc-ds-text--<?php echo $text_type; ?> ifc-ds-text--semibold ifc-ds-text--neutral ifc-ds-text--align-left ifc-ds-breadcrumb__current" aria-current="page">
                <?php echo esc_html($current_page_title); ?>
            </span>
        </li>
    </ol>
</nav>