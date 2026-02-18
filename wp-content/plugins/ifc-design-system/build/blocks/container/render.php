<?php
if (!defined('ABSPATH')) {
    exit;
}

$padding = isset($attributes['padding']) ? $attributes['padding'] : [
    'top' => '30',
    'right' => '30',
    'bottom' => '30',
    'left' => '30'
];

$margin = isset($attributes['margin']) ? $attributes['margin'] : [
    'top' => '0',
    'right' => '0',
    'bottom' => '20',
    'left' => '0'
];

$border_width = isset($attributes['borderWidth']) ? $attributes['borderWidth'] : '1';
$border_color = isset($attributes['borderColor']) ? $attributes['borderColor'] : 'neutral-300';
$shadow_enabled = isset($attributes['shadowEnabled']) ? $attributes['shadowEnabled'] : true;
$background_color = isset($attributes['backgroundColor']) ? $attributes['backgroundColor'] : 'white';

$content = is_string($content) ? $content : '';

$classes = [
    'ifc-ds-container',
    'ifc-ds-container--border-' . $border_color,
    'ifc-ds-container--bg-' . $background_color
];

if ($shadow_enabled) {
    $classes[] = 'ifc-ds-container--shadow';
}

if ($border_width === '0') {
    $classes[] = 'ifc-ds-container--no-border';
} else {
    $classes[] = 'ifc-ds-container--border-' . $border_width;
}

$styles = [];
if (isset($padding['top'])) $styles[] = 'padding-top: var(--ifc-space-' . $padding['top'] . ')';
if (isset($padding['right'])) $styles[] = 'padding-right: var(--ifc-space-' . $padding['right'] . ')';
if (isset($padding['bottom'])) $styles[] = 'padding-bottom: var(--ifc-space-' . $padding['bottom'] . ')';
if (isset($padding['left'])) $styles[] = 'padding-left: var(--ifc-space-' . $padding['left'] . ')';
if (isset($margin['top'])) $styles[] = 'margin-top: var(--ifc-space-' . $margin['top'] . ')';
if (isset($margin['right'])) $styles[] = 'margin-right: var(--ifc-space-' . $margin['right'] . ')';
if (isset($margin['bottom'])) $styles[] = 'margin-bottom: var(--ifc-space-' . $margin['bottom'] . ')';
if (isset($margin['left'])) $styles[] = 'margin-left: var(--ifc-space-' . $margin['left'] . ')';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $classes),
    'style' => implode('; ', $styles)
]);

$inner_content = $content;

if (trim($inner_content) === '') {
    $inner_content = '<div class="ifc-ds-container__empty" aria-hidden="true"></div>';
}

echo sprintf('<div %s>%s</div>', $wrapper_attributes, $inner_content);
