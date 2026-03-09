<?php
/**
 * Accordion
 * 
 * @param array $attributes
 * @param string $content
 * @param WP_Block $block
 */

$title = $attributes['title'] ?? 'Título do Accordion';
$is_open = $attributes['isOpen'] ?? false;
$unique_id = 'accordion-' . wp_unique_id();
$title_classes = ifc_ds_build_text_classes('body', 'bold', 'primary', 'left', 'ifc-ds-accordion__title-text');
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-accordion']); ?>>
    <button 
        class="ifc-ds-accordion__toggle <?php echo $is_open ? 'is-open' : ''; ?>"
        aria-expanded="<?php echo $is_open ? 'true' : 'false'; ?>"
        aria-controls="<?php echo esc_attr($unique_id); ?>"
    >
        <h3 class="<?php echo esc_attr($title_classes); ?>"><?php echo esc_html($title); ?></h3>
        <span class="ifc-ds-accordion__icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" role="presentation" focusable="false">
                <path d="M7 9.5L12 14.5L17 9.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </span>
    </button>
    
    <div 
        id="<?php echo esc_attr($unique_id); ?>"
        class="ifc-ds-accordion__content <?php echo $is_open ? 'is-open' : ''; ?>"
        aria-hidden="<?php echo $is_open ? 'false' : 'true'; ?>"
    >
        <div class="ifc-ds-accordion__items">
            <?php echo $content; ?>
        </div>
    </div>
</div>