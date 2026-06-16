<?php
/**
 * @param array    $attributes
 * @param string   $content
 * @param WP_Block $block
 */

$campus      = isset($attributes['campus']) ? $attributes['campus'] : 'camboriu';
$orientation = isset($attributes['orientation']) ? $attributes['orientation'] : 'horizontal';
$variant     = isset($attributes['variant']) ? $attributes['variant'] : 'default';
$width       = isset($attributes['width']) ? intval($attributes['width']) : 200;
$height      = isset($attributes['height']) ? intval($attributes['height']) : 60;
$link_url    = isset($attributes['linkUrl']) ? $attributes['linkUrl'] : '';
$link_target = isset($attributes['linkTarget']) ? $attributes['linkTarget'] : '_self';
$alt_text    = isset($attributes['altText']) ? $attributes['altText'] : 'Logo IFC';

$campus      = sanitize_key($campus);
$orientation = in_array($orientation, ['horizontal', 'vertical'], true) ? $orientation : 'horizontal';
$variant     = in_array($variant, ['default', 'white'], true) ? $variant : 'default';
$width       = max(50, min(400, $width));
$height      = max(30, min(300, $height));
$link_target = in_array($link_target, ['_self', '_blank'], true) ? $link_target : '_self';

$logo_url = ifc_ds_get_logo_url($campus, $orientation, $variant);

$classes = [
    'ifc-ds-logo',
    'ifc-ds-logo--' . $orientation,
    'ifc-ds-logo--' . $variant,
];

$image_style = sprintf(
    'width: %dpx; height: %dpx; max-width: 100%%; display: block;',
    $width,
    $height
);

$image_html = sprintf(
    '<img src="%s" alt="%s" width="%d" height="%d" style="%s" class="ifc-ds-logo__image" loading="lazy" decoding="async" />',
    esc_url($logo_url),
    esc_attr($alt_text),
    $width,
    $height,
    $image_style
);

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $classes),
]);

$logo_html = sprintf('<div %s>%s</div>', $wrapper_attributes, $image_html);

if (!empty($link_url)) {
    $link_attrs = [
        'href'  => esc_url($link_url),
        'class' => 'ifc-ds-logo__link',
    ];

    if ($link_target === '_blank') {
        $link_attrs['target'] = '_blank';
        $link_attrs['rel']    = 'noopener noreferrer';
    }

    $link_attrs_str = '';
    foreach ($link_attrs as $attr => $value) {
        $link_attrs_str .= sprintf(' %s="%s"', $attr, esc_attr($value));
    }

    $logo_html = sprintf('<a%s>%s</a>', $link_attrs_str, $logo_html);
}

echo $logo_html;
