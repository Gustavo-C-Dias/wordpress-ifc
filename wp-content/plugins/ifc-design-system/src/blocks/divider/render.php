<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Renderiza o bloco de divisor
 *
 * @param array $attributes Os atributos do bloco
 * @param string $content O conteúdo interno do bloco (não usado neste componente)
 * @param WP_Block $block A instância do bloco
 * @return string O HTML renderizado
 */
if (!function_exists('ifc_ds_render_divider_block')) {
    function ifc_ds_render_divider_block($attributes, $content, $block) {
        // Valores padrão
        $orientation = isset($attributes['orientation']) ? $attributes['orientation'] : 'horizontal';
        $color = isset($attributes['color']) ? $attributes['color'] : 'gray';
        $thickness = isset($attributes['thickness']) ? $attributes['thickness'] : '1';
        $length = isset($attributes['length']) ? $attributes['length'] : '100';
        $custom_height = isset($attributes['customHeight']) ? $attributes['customHeight'] : 40;

        // Validar valores
        $orientation = in_array($orientation, ['horizontal', 'vertical']) ? $orientation : 'horizontal';
        $color = in_array($color, ['gray', 'black', 'white']) ? $color : 'gray';
        $thickness = in_array($thickness, ['1', '2', '3', '4', '5']) ? $thickness : '1';
        $length = max(10, min(100, intval($length)));
        $custom_height = max(20, min(200, intval($custom_height)));

        // Montar classes CSS
        $classes = array(
            'ifc-ds-divider',
            'ifc-ds-divider--' . $orientation,
            'ifc-ds-divider--' . $color,
            'ifc-ds-divider--thickness-' . $thickness
        );

        // Estilos inline baseados nos atributos
        $styles = array();
        
        if ($orientation === 'horizontal') {
            $styles[] = 'width: ' . $length . '%';
            $styles[] = 'height: ' . $thickness . 'px';
        } else {
            $styles[] = 'width: ' . $thickness . 'px';
            $styles[] = 'height: ' . $custom_height . 'px';
        }

        // Montar HTML
        $wrapper_attributes = get_block_wrapper_attributes(array(
            'class' => implode(' ', $classes),
            'style' => implode('; ', $styles),
            'aria-hidden' => 'true',
            'role' => 'separator'
        ));

        $html = sprintf(
            '<div %s><div class="ifc-ds-divider__line"></div></div>',
            $wrapper_attributes
        );

        return $html;
    }
}

// Registrar o callback de renderização
return 'ifc_ds_render_divider_block';