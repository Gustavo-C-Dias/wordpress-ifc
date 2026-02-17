<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Renderiza o bloco de texto
 * Usa funções centralizadas de /src/shared/utils.php
 *
 * @param array $attributes Os atributos do bloco
 * @param string $content O conteúdo interno do bloco
 * @param WP_Block $block A instância do bloco
 * @return string O HTML renderizado
 */
if (!function_exists('ifc_ds_render_text_block')) {
    function ifc_ds_render_text_block($attributes, $content, $block) {
        // Valores padrão
        $text_type = isset($attributes['textType']) ? $attributes['textType'] : 'body';
        $weight = isset($attributes['weight']) ? $attributes['weight'] : 'regular';
        $color = isset($attributes['color']) ? $attributes['color'] : 'primary';
        $alignment = isset($attributes['alignment']) ? $attributes['alignment'] : 'left';
        $text_content = isset($attributes['content']) ? $attributes['content'] : '';

        // Se não há conteúdo, não renderiza nada
        if (empty($text_content)) {
            return '';
        }

        // Usa funções centralizadas
        $html_tag = ifc_ds_get_html_tag_for_text_type($text_type);
        $classes = ifc_ds_build_text_classes($text_type, $weight, $color, $alignment);

        // Sanitizar e escapar conteúdo
        $escaped_content = wp_kses_post($text_content);

        // Montar HTML
        return sprintf(
            '<%s class="%s">%s</%s>',
            esc_attr($html_tag),
            esc_attr($classes),
            $escaped_content,
            esc_attr($html_tag)
        );
    }
}

// Registrar o callback de renderização
return 'ifc_ds_render_text_block';