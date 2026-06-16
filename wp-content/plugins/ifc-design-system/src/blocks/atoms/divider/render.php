<?php
/**
 * @param array    $attributes
 * @param string   $content
 * @param WP_Block $block
 */

$orientation   = isset($attributes['orientation']) ? $attributes['orientation'] : 'horizontal';
$color         = isset($attributes['color']) ? $attributes['color'] : 'gray';
$thickness     = isset($attributes['thickness']) ? $attributes['thickness'] : '1';
$length        = isset($attributes['length']) ? $attributes['length'] : '100';
$custom_height = isset($attributes['customHeight']) ? $attributes['customHeight'] : 40;

$orientation   = in_array($orientation, ['horizontal', 'vertical'], true) ? $orientation : 'horizontal';
$color         = in_array($color, ['gray', 'black', 'white'], true) ? $color : 'gray';
$thickness     = in_array($thickness, ['1', '2', '3', '4', '5'], true) ? $thickness : '1';
$length        = max(10, min(100, intval($length)));
$custom_height = max(20, min(200, intval($custom_height)));

$classes = [
    'ifc-ds-divider',
    'ifc-ds-divider--' . $orientation,
    'ifc-ds-divider--' . $color,
    'ifc-ds-divider--thickness-' . $thickness,
];

$styles = [];
if ($orientation === 'horizontal') {
    $styles[] = 'width: ' . $length . '%';
    $styles[] = 'height: ' . $thickness . 'px';
} else {
    $styles[] = 'width: ' . $thickness . 'px';
    $styles[] = 'height: ' . $custom_height . 'px';
}

$wrapper_attributes = get_block_wrapper_attributes([
    'class'       => implode(' ', $classes),
    'style'       => implode('; ', $styles),
    'aria-hidden' => 'true',
    'role'        => 'separator',
]);

printf(
    '<div %s><div class="ifc-ds-divider__line"></div></div>',
    $wrapper_attributes
);
