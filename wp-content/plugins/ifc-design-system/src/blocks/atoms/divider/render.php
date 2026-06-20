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

/*
 * Acessibilidade — eMAG 1.2 / WAI-ARIA:
 *  - Quando o divisor é puramente decorativo (`isDecorative=true`,
 *    padrão), usamos `role="presentation"` + `aria-hidden="true"`,
 *    removendo-o totalmente da árvore de acessibilidade.
 *  - Quando o divisor separa logicamente blocos de conteúdo, usamos
 *    `role="separator"` (sem `aria-hidden`, para que leitores de
 *    tela anunciem a separação) e `aria-orientation` reflete a
 *    orientação visual.
 */
$is_decorative = !isset($attributes['isDecorative']) ? true : (bool) $attributes['isDecorative'];

$aria_attrs = $is_decorative
    ? ['role' => 'presentation', 'aria-hidden' => 'true']
    : ['role' => 'separator', 'aria-orientation' => $orientation];

$wrapper_attributes = get_block_wrapper_attributes(array_merge([
    'class' => implode(' ', $classes),
    'style' => implode('; ', $styles),
], $aria_attrs));

printf(
    '<div %s><div class="ifc-ds-divider__line"></div></div>',
    $wrapper_attributes
);
