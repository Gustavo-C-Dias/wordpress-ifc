<?php
/**
 * IFC Design System - Utilitários PHP Compartilhados
 * Centraliza funções auxiliares para renderização de componentes
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Constrói classes CSS para o componente Text
 * 
 * @param string $text_type Tipo do texto (title, subtitle, body, detail, caption)
 * @param string $weight Peso da fonte (regular, semibold, bold)
 * @param string $color Cor (primary, secondary, neutral, etc)
 * @param string $alignment Alinhamento (left, center, right)
 * @param string $additional_class Classes adicionais
 * @return string String de classes CSS
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
 * Constrói classes CSS para o componente Link
 * 
 * @param string $type Tipo do link (neutral, primary, white)
 * @param string $size Tamanho (small, medium, large, detail)
 * @param string $additional_class Classes adicionais
 * @return string String de classes CSS
 */
if (!function_exists('ifc_ds_build_link_classes')) {
    function ifc_ds_build_link_classes($type = 'neutral', $size = 'medium', $additional_class = '') {
        $classes = array(
            'ifc-ds-link',
            'ifc-ds-link--' . esc_attr($type),
            'ifc-ds-link--' . esc_attr($size)
        );
        
        if (!empty($additional_class)) {
            $classes[] = esc_attr($additional_class);
        }
        
        return implode(' ', array_filter($classes));
    }
}

/**
 * Constrói classes CSS para o componente Container
 * 
 * @param array $options Opções de configuração
 * @return string String de classes CSS
 */
if (!function_exists('ifc_ds_build_container_classes')) {
    function ifc_ds_build_container_classes($options = array()) {
        $defaults = array(
            'border_color' => 'neutral-300',
            'background_color' => 'white',
            'shadow_enabled' => true,
            'border_width' => '1',
            'additional_class' => ''
        );
        
        $options = wp_parse_args($options, $defaults);
        
        $classes = array(
            'ifc-ds-container',
            'ifc-ds-container--border-' . esc_attr($options['border_color']),
            'ifc-ds-container--bg-' . esc_attr($options['background_color'])
        );
        
        if ($options['shadow_enabled']) {
            $classes[] = 'ifc-ds-container--shadow';
        }
        
        if ($options['border_width'] === '0') {
            $classes[] = 'ifc-ds-container--no-border';
        } else {
            $classes[] = 'ifc-ds-container--border-' . esc_attr($options['border_width']);
        }
        
        if (!empty($options['additional_class'])) {
            $classes[] = esc_attr($options['additional_class']);
        }
        
        return implode(' ', array_filter($classes));
    }
}

/**
 * Constrói classes CSS para o componente Divider
 * 
 * @param string $orientation Orientação (horizontal, vertical)
 * @param string $color Cor (gray, black, white)
 * @param string $thickness Espessura (1-5)
 * @param string $additional_class Classes adicionais
 * @return string String de classes CSS
 */
if (!function_exists('ifc_ds_build_divider_classes')) {
    function ifc_ds_build_divider_classes($orientation = 'horizontal', $color = 'gray', $thickness = '1', $additional_class = '') {
        $classes = array(
            'ifc-ds-divider',
            'ifc-ds-divider--' . esc_attr($orientation),
            'ifc-ds-divider--' . esc_attr($color),
            'ifc-ds-divider--thickness-' . esc_attr($thickness)
        );
        
        if (!empty($additional_class)) {
            $classes[] = esc_attr($additional_class);
        }
        
        return implode(' ', array_filter($classes));
    }
}

/**
 * Constrói classes CSS para o componente Input
 * 
 * @param array $options Opções de configuração
 * @return string String de classes CSS
 */
if (!function_exists('ifc_ds_build_input_classes')) {
    function ifc_ds_build_input_classes($options = array()) {
        $defaults = array(
            'size' => 'medium',
            'variant' => 'default',
            'has_icon' => false,
            'disabled' => false,
            'additional_class' => ''
        );
        
        $options = wp_parse_args($options, $defaults);
        
        $classes = array(
            'ifc-ds-input-wrapper',
            'ifc-ds-input-wrapper--' . esc_attr($options['size']),
            'ifc-ds-input-wrapper--' . esc_attr($options['variant'])
        );
        
        if ($options['has_icon']) {
            $classes[] = 'ifc-ds-input-wrapper--with-icon';
        }
        
        if ($options['disabled']) {
            $classes[] = 'ifc-ds-input-wrapper--disabled';
        }
        
        if (!empty($options['additional_class'])) {
            $classes[] = esc_attr($options['additional_class']);
        }
        
        return implode(' ', array_filter($classes));
    }
}

/**
 * Constrói classes CSS para o componente Logo
 * 
 * @param string $orientation Orientação (horizontal, vertical)
 * @param string $variant Variante (default, white)
 * @param string $additional_class Classes adicionais
 * @return string String de classes CSS
 */
if (!function_exists('ifc_ds_build_logo_classes')) {
    function ifc_ds_build_logo_classes($orientation = 'horizontal', $variant = 'default', $additional_class = '') {
        $classes = array(
            'ifc-ds-logo',
            'ifc-ds-logo--' . esc_attr($orientation),
            'ifc-ds-logo--' . esc_attr($variant)
        );
        
        if (!empty($additional_class)) {
            $classes[] = esc_attr($additional_class);
        }
        
        return implode(' ', array_filter($classes));
    }
}

/**
 * Constrói classes CSS para o componente Layout Container
 * 
 * @param array $options Opções de configuração
 * @return string String de classes CSS
 */
if (!function_exists('ifc_ds_build_layout_container_classes')) {
    function ifc_ds_build_layout_container_classes($options = array()) {
        $defaults = array(
            'container_type' => 'fluid',
            'vertical_spacing' => 'medium',
            'horizontal_alignment' => 'center',
            'max_columns' => 12,
            'allow_bleed' => false,
            'additional_class' => ''
        );
        
        $options = wp_parse_args($options, $defaults);
        
        $classes = array(
            'ifc-ds-layout-container',
            'ifc-ds-layout-container--' . esc_attr($options['container_type']),
            'ifc-ds-layout-container--spacing-' . esc_attr($options['vertical_spacing']),
            'ifc-ds-layout-container--align-' . esc_attr($options['horizontal_alignment']),
            'ifc-ds-layout-container--columns-' . esc_attr($options['max_columns'])
        );
        
        if ($options['allow_bleed']) {
            $classes[] = 'ifc-ds-layout-container--bleed';
        }
        
        if (!empty($options['additional_class'])) {
            $classes[] = esc_attr($options['additional_class']);
        }
        
        return implode(' ', array_filter($classes));
    }
}

/**
 * Retorna a tag HTML apropriada para um tipo de texto
 * 
 * @param string $text_type Tipo de texto
 * @return string Tag HTML
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
 * Constrói string de estilo para padding
 * 
 * @param array $padding Objeto com top, right, bottom, left
 * @return string String CSS inline
 */
if (!function_exists('ifc_ds_build_padding_style')) {
    function ifc_ds_build_padding_style($padding = array()) {
        $defaults = array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
        $padding = wp_parse_args($padding, $defaults);
        
        return sprintf(
            'padding: var(--ifc-space-%s) var(--ifc-space-%s) var(--ifc-space-%s) var(--ifc-space-%s);',
            esc_attr(str_replace(array('spacing-', 'space-'), '', $padding['top'])),
            esc_attr(str_replace(array('spacing-', 'space-'), '', $padding['right'])),
            esc_attr(str_replace(array('spacing-', 'space-'), '', $padding['bottom'])),
            esc_attr(str_replace(array('spacing-', 'space-'), '', $padding['left']))
        );
    }
}

/**
 * Constrói string de estilo para margin
 * 
 * @param array $margin Objeto com top, right, bottom, left
 * @return string String CSS inline
 */
if (!function_exists('ifc_ds_build_margin_style')) {
    function ifc_ds_build_margin_style($margin = array()) {
        $defaults = array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
        $margin = wp_parse_args($margin, $defaults);
        
        return sprintf(
            'margin: var(--ifc-space-%s) var(--ifc-space-%s) var(--ifc-space-%s) var(--ifc-space-%s);',
            esc_attr(str_replace(array('spacing-', 'space-'), '', $margin['top'])),
            esc_attr(str_replace(array('spacing-', 'space-'), '', $margin['right'])),
            esc_attr(str_replace(array('spacing-', 'space-'), '', $margin['bottom'])),
            esc_attr(str_replace(array('spacing-', 'space-'), '', $margin['left']))
        );
    }
}

/**
 * Retorna o tamanho de ícone baseado no size do componente
 * 
 * @param string $size Tamanho do componente
 * @return string Tamanho do ícone em pixels
 */
if (!function_exists('ifc_ds_get_icon_size')) {
    function ifc_ds_get_icon_size($size) {
        $size_map = array(
            'small' => '16',
            'detail' => '16',
            'medium' => '20',
            'large' => '24'
        );
        
        return isset($size_map[$size]) ? $size_map[$size] : '20';
    }
}

/**
 * Renderiza um componente de texto usando as funções centralizadas
 * 
 * @param array $args Argumentos do componente
 * @return string HTML renderizado
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
 * Renderiza link de navegação de skip (unificada)
 * Usada tanto para Skip Navigation quanto para Header Skip Links
 * 
 * @param array $link Dados do link
 * @return string HTML renderizado
 */
if (!function_exists('ifc_ds_render_navigation_skip_link')) {
    function ifc_ds_render_navigation_skip_link($link) {
        $target = $link['target'];
        
        // Adiciona # se necessário
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

/**
 * Tipos de texto para validação
 */
if (!function_exists('ifc_ds_get_valid_text_types')) {
    function ifc_ds_get_valid_text_types() {
        return array('title', 'subtitle', 'body', 'detail', 'caption');
    }
}

/**
 * Pesos de fonte para validação
 */
if (!function_exists('ifc_ds_get_valid_weights')) {
    function ifc_ds_get_valid_weights() {
        return array('regular', 'semibold', 'bold');
    }
}

/**
 * Cores para validação
 */
if (!function_exists('ifc_ds_get_valid_colors')) {
    function ifc_ds_get_valid_colors() {
        return array('primary', 'secondary', 'neutral', 'success', 'warning', 'error');
    }
}

/**
 * Alinhamentos para validação
 */
if (!function_exists('ifc_ds_get_valid_alignments')) {
    function ifc_ds_get_valid_alignments() {
        return array('left', 'center', 'right');
    }
}
