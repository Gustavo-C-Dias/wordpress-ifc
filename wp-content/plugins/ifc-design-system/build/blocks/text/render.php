<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Renderiza o bloco de texto
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

    // Definir tag HTML baseada no tipo
    $html_tag = 'p'; // padrão
    switch ($text_type) {
        case 'title':
            $html_tag = 'h1';
            break;
        case 'subtitle':
            $html_tag = 'h2';
            break;
        case 'caption':
            $html_tag = 'small';
            break;
        case 'body':
        case 'detail':
        default:
            $html_tag = 'p';
            break;
    }

    // Montar classes CSS
    $classes = array(
        'ifc-ds-text',
        'ifc-ds-text--' . $text_type,
        'ifc-ds-text--' . $weight,
        'ifc-ds-text--' . $color,
        'ifc-ds-text--align-' . $alignment
    );

    // Sanitizar e escapar conteúdo
    $escaped_content = wp_kses_post($text_content);

    // Montar HTML
    $html = sprintf(
        '<%s class="%s">%s</%s>',
        esc_attr($html_tag),
        esc_attr(implode(' ', $classes)),
        $escaped_content,
        esc_attr($html_tag)
    );

    return $html;
    }
}

// Registrar o callback de renderização
return 'ifc_ds_render_text_block';