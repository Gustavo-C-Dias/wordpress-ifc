<?php
/**
 * Accordion Block Render
 * 
 * @param array $attributes Block attributes
 * @param string $content Block content
 * @param WP_Block $block Block instance
 */

$title = $attributes['title'] ?? 'Título do Accordion';
$items = $attributes['items'] ?? [];
$is_open = $attributes['isOpen'] ?? false;
$unique_id = 'accordion-' . wp_unique_id();

// Usa função centralizada para construir classes do título
$title_classes = ifc_ds_build_text_classes('body', 'bold', 'primary', 'left', 'ifc-ds-accordion__title-text');
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-accordion']); ?>>
    <button 
        class="ifc-ds-accordion__toggle <?php echo $is_open ? 'is-open' : ''; ?>"
        aria-expanded="<?php echo $is_open ? 'true' : 'false'; ?>"
        aria-controls="<?php echo esc_attr($unique_id); ?>"
    >
        <h3 class="<?php echo esc_attr($title_classes); ?>"><?php echo esc_html($title); ?></h3>
        <span class="ifc-ds-accordion__icon">▼</span>
    </button>
    
    <div 
        id="<?php echo esc_attr($unique_id); ?>"
        class="ifc-ds-accordion__content <?php echo $is_open ? 'is-open' : ''; ?>"
        aria-hidden="<?php echo $is_open ? 'false' : 'true'; ?>"
    >
        <div class="ifc-ds-accordion__items">
            <?php foreach ($items as $item): ?>
                <?php echo ifc_ds_render_accordion_item($item, $is_open); ?>
            <?php endforeach; ?>
        </div>
    </div>
</div>