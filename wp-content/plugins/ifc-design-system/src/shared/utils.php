<?php
/**
 * IFC Design System - Utilitários PHP Compartilhados
 */

/**
 * @param string $text_type
 * @param string $weight
 * @param string $color
 * @param string $alignment
 * @param string $additional_class
 * @return string
 */
if (!function_exists('ifc_ds_build_text_classes')) {
    function ifc_ds_build_text_classes($text_type = 'body', $weight = 'regular', $color = 'primary', $alignment = 'left', $additional_class = '') {
        $classes = array(
            'ifc-ds-text',
            'ifc-ds-text--' . esc_attr($text_type),
            'ifc-ds-text--' . esc_attr($weight),
            'ifc-ds-text--' . esc_attr($color),
            'ifc-ds-text--align-' . esc_attr($alignment)
        );
        
        if (!empty($additional_class)) {
            $classes[] = esc_attr($additional_class);
        }
        
        return implode(' ', array_filter($classes));
    }
}

/**
 * @param string $text_type
 * @return string
 */
if (!function_exists('ifc_ds_get_html_tag_for_text_type')) {
    function ifc_ds_get_html_tag_for_text_type($text_type) {
        $tag_map = array(
            'title' => 'h1',
            'subtitle' => 'h2',
            'body' => 'p',
            'detail' => 'p',
            'caption' => 'small'
        );
        
        return isset($tag_map[$text_type]) ? $tag_map[$text_type] : 'p';
    }
}

/**
 * @param array $args
 * @return string
 */
if (!function_exists('ifc_ds_render_text')) {
    function ifc_ds_render_text($args = array()) {
        $defaults = array(
            'content' => '',
            'textType' => 'body',
            'weight' => 'regular',
            'color' => 'primary',
            'alignment' => 'left',
            'className' => ''
        );
        
        $args = wp_parse_args($args, $defaults);
        
        if (empty($args['content'])) {
            return '';
        }
        
        $tag = ifc_ds_get_html_tag_for_text_type($args['textType']);
        $classes = ifc_ds_build_text_classes(
            $args['textType'],
            $args['weight'],
            $args['color'],
            $args['alignment'],
            $args['className']
        );
        
        return sprintf(
            '<%s class="%s">%s</%s>',
            esc_attr($tag),
            esc_attr($classes),
            wp_kses_post($args['content']),
            esc_attr($tag)
        );
    }
}

/**
 * @param array $link
 * @return string
 */
if (!function_exists('ifc_ds_render_navigation_skip_link')) {
    function ifc_ds_render_navigation_skip_link($link) {
        $target = $link['target'];
        
        if (!str_starts_with($target, '#') && !in_array($target, array('nav', 'main', 'footer', 'header'))) {
            $target = '#' . $target;
        }
        
        return ifc_ds_render_link(array(
            'label' => $link['label'],
            'url' => $target,
            'type' => 'white',
            'size' => 'medium',
            'class' => 'ifc-ds-skip-navigation__link',
            'wrapper' => true,
            'additional_attributes' => array(
                'aria-label' => isset($link['description']) ? $link['description'] : $link['label']
            )
        ));
    }
}


if (!function_exists('ifc_ds_get_valid_weights')) {
    function ifc_ds_get_valid_weights() {
        return array('regular', 'semibold', 'bold');
    }
}
