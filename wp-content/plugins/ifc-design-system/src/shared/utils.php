<?php
/**
 * IFC Design System - Utilitários PHP Compartilhados
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
 * Pesos de fonte para validação
 */
if (!function_exists('ifc_ds_get_valid_weights')) {
    function ifc_ds_get_valid_weights() {
        return array('regular', 'semibold', 'bold');
    }
}
