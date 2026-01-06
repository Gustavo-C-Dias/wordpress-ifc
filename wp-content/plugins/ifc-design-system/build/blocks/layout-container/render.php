<?php
/**
 * Layout Container Render
 * Sistema de Grid baseado no Design System do Governo Federal
 */

// Atributos do bloco
$containerType = $attributes['containerType'] ?? 'fluid';
$allowBleed = $attributes['allowBleed'] ?? false;
$maxColumns = $attributes['maxColumns'] ?? 12;
$verticalSpacing = $attributes['verticalSpacing'] ?? 'medium';
$horizontalAlignment = $attributes['horizontalAlignment'] ?? 'center';
$customMaxWidth = $attributes['customMaxWidth'] ?? '';

// Constrói as classes CSS
$classes = [
    'ifc-ds-layout-container',
    'ifc-ds-layout-container--' . $containerType,
    'ifc-ds-layout-container--spacing-' . $verticalSpacing,
    'ifc-ds-layout-container--align-' . $horizontalAlignment,
    'ifc-ds-layout-container--columns-' . $maxColumns
];

if ($allowBleed) {
    $classes[] = 'ifc-ds-layout-container--bleed';
}

// Estilos inline para largura personalizada
$inline_styles = '';
if ($containerType === 'fixed' && !empty($customMaxWidth)) {
    $inline_styles = 'max-width: ' . esc_attr($customMaxWidth) . ';';
}

// Wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $classes),
    'style' => $inline_styles,
    'data-columns' => $maxColumns,
    'data-container-type' => $containerType
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="ifc-ds-layout-container__content">
        <?php echo $content; ?>
    </div>
</div>