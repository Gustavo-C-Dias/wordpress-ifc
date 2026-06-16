<?php

if (!function_exists('ifc_ds_render_text_block')) {
    function ifc_ds_render_text_block($attributes, $content, $block) {

        $text_type = isset($attributes['textType']) ? $attributes['textType'] : 'body';
        $weight = isset($attributes['weight']) ? $attributes['weight'] : 'regular';
        $color = isset($attributes['color']) ? $attributes['color'] : 'primary';
        $alignment = isset($attributes['alignment']) ? $attributes['alignment'] : 'left';
        $text_content = isset($attributes['content']) ? $attributes['content'] : '';
        $additional_class = isset($attributes['className']) ? $attributes['className'] : '';

        if (empty($text_content)) {
            return '';
        }

        $html_tag = ifc_ds_get_html_tag_for_text_type($text_type);
        $classes = ifc_ds_build_text_classes($text_type, $weight, $color, $alignment, $additional_class);
        $escaped_content = wp_kses_post($text_content);

        $style = '';
        if ($alignment === 'center') {
            $style = 'style="text-align: center;"';
        } elseif ($alignment === 'right') {
            $style = 'style="text-align: right;"';
        }

        return sprintf(
            '<%s class="%s" %s>%s</%s>',
            esc_attr($html_tag),
            esc_attr($classes),
            $style,
            $escaped_content,
            esc_attr($html_tag)
        );
    }
}

echo ifc_ds_render_text_block($attributes, $content, $block);