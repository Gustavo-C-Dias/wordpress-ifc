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
$link_type = 'neutral';
$link_size = $attributes['linkSize'] ?? 'small';

$separator_svg = '<svg viewBox="0 0 20 20" role="presentation" focusable="false" aria-hidden="true"><path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>';

// Gerar classes CSS
$classes = ['ifc-ds-breadcrumb'];
?>

<nav <?php echo get_block_wrapper_attributes(['class' => implode(' ', $classes)]); ?>>
    <ol class="ifc-ds-breadcrumb__list">
        <?php foreach ($items as $index => $item): ?>
            <li class="ifc-ds-breadcrumb__item">
                <?php 
                echo ifc_ds_render_link([
                    'label' => $item['label'],
                    'url' => $item['url'],
                    'icon' => $item['icon'] ?? '',
                    'icon_position' => 'left',
                    'type' => $link_type,
                    'size' => $link_size,
                    'weight' => 'semibold',
                    'class' => 'ifc-ds-breadcrumb__link',
                    'wrapper' => true
                ]); 
                ?>
                <?php if ($index < count($items)): ?>
                    <span class="ifc-ds-breadcrumb__separator" aria-hidden="true">
                        <?php echo $separator_svg; ?>
                    </span>
                <?php endif; ?>
            </li>
        <?php endforeach; ?>
        
        <li class="ifc-ds-breadcrumb__item ifc-ds-breadcrumb__item--current">
            <?php 
            // Usa função centralizada para construir classes
            $current_classes = ifc_ds_build_text_classes('detail', 'regular', 'neutral', 'left', 'ifc-ds-breadcrumb__current');
            ?>
            <span class="<?php echo esc_attr($current_classes); ?>" aria-current="page">
                <?php echo esc_html($current_page_title); ?>
            </span>
        </li>
    </ol>
</nav>