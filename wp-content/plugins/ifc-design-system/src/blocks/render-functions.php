<?php
/**
 * Funções auxiliares para renderização dos blocos do IFC Design System
 * 
 * Estas funções são usadas pelos arquivos render.php dos blocos individuais
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Função para renderizar item do accordion
 */
if (!function_exists('ifc_ds_render_accordion_item')) {
    function ifc_ds_render_accordion_item($item) {
        if ($item['type'] === 'link') {
            return ifc_ds_render_link([
                'label' => $item['label'] ?? 'Link',
                'url' => $item['url'] ?? '#',
                'type' => 'primary',
                'size' => 'medium',
                'class' => 'ifc-ds-accordion__link',
                'wrapper' => true
            ]);
        } else {
            return sprintf(
                '<p class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--neutral ifc-ds-text--align-left ifc-ds-accordion__text">%s</p>',
                esc_html($item['content'] ?? '')
            );
        }
    }
}

/**
 * Função para renderizar link do skip navigation do header
 */
if (!function_exists('ifc_ds_render_header_skip_link')) {
    function ifc_ds_render_header_skip_link($link) {
        $target = $link['target'];
        if (!str_starts_with($target, '#') && !in_array($target, ['nav', 'main', 'footer', 'header'])) {
            $target = '#' . $target;
        }
        
        return ifc_ds_render_link([
            'label' => $link['label'],
            'url' => $target,
            'type' => 'white',
            'size' => 'medium',
            'class' => 'ifc-ds-skip-navigation__link',
            'wrapper' => true,
            'additional_attributes' => [
                'aria-label' => $link['description'] ?? $link['label']
            ]
        ]);
    }
}

/**
 * Função para renderizar link do breadcrumb
 */
if (!function_exists('ifc_ds_render_breadcrumb_link')) {
    function ifc_ds_render_breadcrumb_link($item, $link_type, $link_size) {
        $link_args = [
            'label' => $item['label'],
            'url' => $item['url'],
            'icon' => $item['icon'] ?? '',
            'icon_position' => 'left',
            'type' => $link_type,
            'size' => $link_size,
            'padding' => [
                'top' => '1',
                'right' => '2',
                'bottom' => '1',
                'left' => '2'
            ],
            'class' => 'ifc-ds-breadcrumb__link',
            'wrapper' => true
        ];
        
        return ifc_ds_render_link($link_args);
    }
}

/**
 * Função para renderizar link do skip navigation
 */
if (!function_exists('ifc_ds_render_skip_navigation_link')) {
    function ifc_ds_render_skip_navigation_link($link) {
        $target = $link['target'];
        if (!str_starts_with($target, '#') && !in_array($target, ['nav', 'main', 'footer', 'header'])) {
            $target = '#' . $target;
        }
        
        return ifc_ds_render_link([
            'label' => $link['label'],
            'url' => $target,
            'type' => 'white',
            'size' => 'medium',
            'class' => 'ifc-ds-skip-navigation__link',
            'wrapper' => true,
            'additional_attributes' => [
                'aria-label' => $link['description'] ?? $link['label']
            ]
        ]);
    }
}

/**
 * Função para renderizar componente Text
 */
if (!function_exists('render_text_component')) {
    function render_text_component($args) {
        $content = $args['content'] ?? '';
        $text_type = $args['textType'] ?? 'body';
        $weight = $args['weight'] ?? 'regular';
        $color = $args['color'] ?? 'primary';
        $alignment = $args['alignment'] ?? 'left';
        $class_name = $args['className'] ?? '';
        
        $classes = [
            'ifc-ds-text',
            'ifc-ds-text--' . $text_type,
            'ifc-ds-text--' . $weight,
            'ifc-ds-text--' . $color,
            'ifc-ds-text--align-' . $alignment
        ];
        
        if ($class_name) {
            $classes[] = $class_name;
        }
        
        $tag_map = [
            'title' => 'h1',
            'subtitle' => 'h2',
            'body' => 'p',
            'detail' => 'span',
            'caption' => 'span'
        ];
        
        $tag = $tag_map[$text_type] ?? 'p';
        
        return sprintf(
            '<%s class="%s">%s</%s>',
            $tag,
            esc_attr(implode(' ', $classes)),
            esc_html($content),
            $tag
        );
    }
}

/**
 * Função para renderizar componente Link
 */
if (!function_exists('render_link_component')) {
    function render_link_component($args) {
        $url = $args['url'] ?? '#';
        $label = $args['label'] ?? 'Link';
        $type = $args['type'] ?? 'neutral';
        $size = $args['size'] ?? 'medium';
        $icon = $args['icon'] ?? '';
        $icon_position = $args['iconPosition'] ?? 'left';
        $target = $args['target'] ?? '_self';
        $class_name = $args['className'] ?? '';
        
        $classes = [
            'ifc-ds-link',
            'ifc-ds-link--' . $type,
            'ifc-ds-link--' . $size
        ];
        
        if ($icon) {
            $classes[] = 'ifc-ds-link--with-icon';
            $classes[] = 'ifc-ds-link--icon-' . $icon_position;
        }
        
        if ($class_name) {
            $classes[] = $class_name;
        }
        
        $icon_html = '';
        if ($icon) {
            $icon_html = sprintf('<span class="ifc-ds-link__icon">%s</span>', esc_html($icon));
        }
        
        $label_html = sprintf('<span class="ifc-ds-link__label">%s</span>', esc_html($label));
        
        $link_content = $icon_position === 'left' 
            ? $icon_html . $label_html 
            : $label_html . $icon_html;
        
        return sprintf(
            '<a href="%s" class="%s" target="%s" rel="%s">%s</a>',
            esc_url($url),
            esc_attr(implode(' ', $classes)),
            esc_attr($target),
            $target === '_blank' ? 'noopener noreferrer' : '',
            $link_content
        );
    }
}
