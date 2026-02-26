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

$content = is_string($content) ? $content : '';

$styles = [];
if (isset($padding['top'])) $styles[] = 'padding-top: var(--ifc-spacing-' . $padding['top'] . ')';
if (isset($padding['right'])) $styles[] = 'padding-right: var(--ifc-spacing-' . $padding['right'] . ')';
if (isset($padding['bottom'])) $styles[] = 'padding-bottom: var(--ifc-spacing-' . $padding['bottom'] . ')';
if (isset($padding['left'])) $styles[] = 'padding-left: var(--ifc-spacing-' . $padding['left'] . ')';
if (isset($margin['top'])) $styles[] = 'margin-top: var(--ifc-spacing-' . $margin['top'] . ')';
if (isset($margin['right'])) $styles[] = 'margin-right: var(--ifc-spacing-' . $margin['right'] . ')';
if (isset($margin['bottom'])) $styles[] = 'margin-bottom: var(--ifc-spacing-' . $margin['bottom'] . ')';
if (isset($margin['left'])) $styles[] = 'margin-left: var(--ifc-spacing-' . $margin['left'] . ')';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'ifc-ds-container',
    'style' => implode('; ', $styles)
]);

$inner_content = $content;

if (trim($inner_content) === '') {
    $inner_content = '<div class="ifc-ds-container__empty" aria-hidden="true"></div>';
}

echo sprintf('<div %s>%s</div>', $wrapper_attributes, $inner_content);
