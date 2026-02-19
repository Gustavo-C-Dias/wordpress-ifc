<?php
/**
 * Funções auxiliares para renderização dos blocos do IFC Design System
 * 
 * Estas funções são usadas pelos arquivos render.php dos blocos individuais
 * 
 * NOTA: As funções utilitárias base estão em /src/shared/utils.php
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Função para renderizar link do skip navigation do header
 * DEPRECATED: Use ifc_ds_render_navigation_skip_link() de utils.php
 */
if (!function_exists('ifc_ds_render_header_skip_link')) {
    function ifc_ds_render_header_skip_link($link) {
        // Redireciona para função unificada
        return ifc_ds_render_navigation_skip_link($link);
    }
}

/**
 * Função para renderizar link do breadcrumb
 */
if (!function_exists('ifc_ds_render_breadcrumb_link')) {
    function ifc_ds_render_breadcrumb_link($item, $link_type, $link_size) {
        return ifc_ds_render_link([
            'label' => $item['label'],
            'url' => $item['url'],
            'icon' => $item['icon'] ?? '',
            'icon_position' => 'left',
            'type' => $link_type,
            'size' => $link_size,
            'class' => 'ifc-ds-breadcrumb__link',
            'wrapper' => true
        ]);
    }
}

/**
 * Função para renderizar link do skip navigation
 * DEPRECATED: Use ifc_ds_render_navigation_skip_link() de utils.php
 */
if (!function_exists('ifc_ds_render_skip_navigation_link')) {
    function ifc_ds_render_skip_navigation_link($link) {
        // Redireciona para função unificada
        return ifc_ds_render_navigation_skip_link($link);
    }
}

/**
 * Função para renderizar componente Text
 * Wrapper para uso interno - usa ifc_ds_render_text() de utils.php
 */
if (!function_exists('render_text_component')) {
    function render_text_component($args) {
        return ifc_ds_render_text($args);
    }
}

/**
 * Função para renderizar componente Link
 * Para novos usos, prefira ifc_ds_render_link() de link/functions.php
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
        
        // Usa função centralizada para construir classes
        $classes = ifc_ds_build_link_classes($type, $size, $class_name);
        
        if ($icon) {
            $classes .= ' ifc-ds-link--with-icon ifc-ds-link--icon-' . esc_attr($icon_position);
        }
        
        $icon_html = '';
        if ($icon) {
            $icon_size = ifc_ds_get_icon_size($size);
            $icon_html = sprintf(
                '<span class="ifc-ds-link__icon" style="width: %spx; height: %spx;">%s</span>',
                esc_attr($icon_size),
                esc_attr($icon_size),
                esc_html($icon)
            );
        }
        
        $label_html = sprintf('<span class="ifc-ds-link__label">%s</span>', esc_html($label));
        
        $link_content = $icon_position === 'left' 
            ? $icon_html . $label_html 
            : $label_html . $icon_html;
        
        return sprintf(
            '<a href="%s" class="%s" target="%s" rel="%s">%s</a>',
            esc_url($url),
            esc_attr($classes),
            esc_attr($target),
            $target === '_blank' ? 'noopener noreferrer' : '',
            $link_content
        );
    }
}
