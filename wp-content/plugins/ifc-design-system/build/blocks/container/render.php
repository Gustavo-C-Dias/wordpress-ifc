<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Renderiza o bloco de container
 *
 * @param array $attributes Os atributos do bloco
 * @param string $content O conteúdo interno do bloco (InnerBlocks)
 * @param WP_Block $block A instância do bloco
 * @return string O HTML renderizado
 */
if (!function_exists('ifc_ds_render_container_block')) {
    function ifc_ds_render_container_block($attributes, $content, $block) {
    // Valores padrão
    $padding = isset($attributes['padding']) ? $attributes['padding'] : [
        'top' => '30',
        'right' => '30', 
        'bottom' => '30',
        'left' => '30'
    ];
    
    $margin = isset($attributes['margin']) ? $attributes['margin'] : [
        'top' => '0',
        'right' => '0',
        'bottom' => '20',
        'left' => '0'
    ];
    
    $border_width = isset($attributes['borderWidth']) ? $attributes['borderWidth'] : '1';
    $border_color = isset($attributes['borderColor']) ? $attributes['borderColor'] : 'neutral-300';
    $shadow_enabled = isset($attributes['shadowEnabled']) ? $attributes['shadowEnabled'] : true;
    $background_color = isset($attributes['backgroundColor']) ? $attributes['backgroundColor'] : 'white';
    
    // Atributos do modo lista
    $list_mode = isset($attributes['listMode']) ? $attributes['listMode'] : false;
    $list_direction = isset($attributes['listDirection']) ? $attributes['listDirection'] : 'vertical';
    $list_items = isset($attributes['listItems']) ? $attributes['listItems'] : [];
    $list_spacing = isset($attributes['listSpacing']) ? $attributes['listSpacing'] : '20';
    $list_alignment = isset($attributes['listAlignment']) ? $attributes['listAlignment'] : 'left';

    // Se não há conteúdo interno e não está no modo lista, não renderiza nada
    if (empty($content) && !$list_mode) {
        return '';
    }

    // Montar classes CSS
    $classes = array(
        'ifc-ds-container',
        'ifc-ds-container--border-' . $border_color,
        'ifc-ds-container--bg-' . $background_color
    );

    // Adicionar classe de sombra se habilitada
    if ($shadow_enabled) {
        $classes[] = 'ifc-ds-container--shadow';
    }

    // Adicionar classes de borda
    if ($border_width === '0') {
        $classes[] = 'ifc-ds-container--no-border';
    } else {
        $classes[] = 'ifc-ds-container--border-' . $border_width;
    }

    // Adicionar classes do modo lista
    if ($list_mode) {
        $classes[] = 'ifc-ds-container--list-mode';
        $classes[] = 'ifc-ds-container--list-' . $list_direction;
        $classes[] = 'ifc-ds-container--align-' . $list_alignment;
    }

    // Montar estilos CSS inline
    $styles = array();
    
    // Padding
    if (isset($padding['top'])) $styles[] = 'padding-top: var(--wp--preset--spacing--' . $padding['top'] . ')';
    if (isset($padding['right'])) $styles[] = 'padding-right: var(--wp--preset--spacing--' . $padding['right'] . ')';
    if (isset($padding['bottom'])) $styles[] = 'padding-bottom: var(--wp--preset--spacing--' . $padding['bottom'] . ')';
    if (isset($padding['left'])) $styles[] = 'padding-left: var(--wp--preset--spacing--' . $padding['left'] . ')';
    
    // Margin
    if (isset($margin['top'])) $styles[] = 'margin-top: var(--wp--preset--spacing--' . $margin['top'] . ')';
    if (isset($margin['right'])) $styles[] = 'margin-right: var(--wp--preset--spacing--' . $margin['right'] . ')';
    if (isset($margin['bottom'])) $styles[] = 'margin-bottom: var(--wp--preset--spacing--' . $margin['bottom'] . ')';
    if (isset($margin['left'])) $styles[] = 'margin-left: var(--wp--preset--spacing--' . $margin['left'] . ')';

    // Montar HTML
    $wrapper_attributes = get_block_wrapper_attributes(array(
        'class' => implode(' ', $classes),
        'style' => implode('; ', $styles)
    ));

    // Renderizar conteúdo baseado no modo
    $inner_content = $content;
    
    if ($list_mode) {
        $list_html = '';
        
        if (!empty($list_items)) {
            $list_html .= '<div class="ifc-ds-container__list ifc-ds-container__list--' . esc_attr($list_direction) . '">';
            
            foreach ($list_items as $item) {
                $item_spacing_style = $list_direction === 'vertical' 
                    ? 'margin-bottom: var(--wp--preset--spacing--' . $list_spacing . ')'
                    : 'margin-right: var(--wp--preset--spacing--' . $list_spacing . ')';
                
                $item_type = $item['type'] ?? 'text';
                
                switch ($item_type) {
                    case 'text-component':
                        $text_type = $item['textType'] ?? 'body';
                        $weight = $item['weight'] ?? 'regular';
                        $color = $item['color'] ?? 'primary';
                        
                        $list_html .= '<div class="ifc-ds-container__component-item" style="' . $item_spacing_style . '">';
                        $list_html .= '<span class="ifc-ds-text ifc-ds-text--' . esc_attr($text_type) . ' ifc-ds-text--' . esc_attr($weight) . ' ifc-ds-text--' . esc_attr($color) . ' ifc-ds-text--align-left">';
                        $list_html .= esc_html($item['value'] ?? '');
                        $list_html .= '</span>';
                        $list_html .= '</div>';
                        break;
                    
                    case 'link':
                        $link_text = $item['linkText'] ?? 'Link';
                        $url = $item['url'] ?? '#';
                        $new_tab = $item['newTab'] ?? false;
                        $icon = $item['icon'] ?? '';
                        $icon_position = $item['iconPosition'] ?? 'right';
                        
                        $list_html .= '<div class="ifc-ds-container__component-item" style="' . $item_spacing_style . '">';
                        $list_html .= '<span class="ifc-ds-link ifc-ds-link--primary ifc-ds-link--medium">';
                        $list_html .= '<a href="' . esc_url($url) . '" class="ifc-ds-link__element"';
                        if ($new_tab) {
                            $list_html .= ' target="_blank" rel="noopener noreferrer"';
                        }
                        $list_html .= '>';
                        
                        // Ícone à esquerda
                        if ($icon && $icon_position === 'left') {
                            $list_html .= '<span class="ifc-ds-link__icon ifc-ds-link__icon--left">';
                            $list_html .= '<span class="dashicons dashicons-' . esc_attr($icon) . '"></span>';
                            $list_html .= '</span>';
                        }
                        
                        // Texto do link
                        $list_html .= '<span class="ifc-ds-text ifc-ds-text--body ifc-ds-text--semibold ifc-ds-text--primary ifc-ds-link__label">';
                        $list_html .= esc_html($link_text);
                        $list_html .= '</span>';
                        
                        // Ícone à direita
                        if ($icon && $icon_position === 'right') {
                            $list_html .= '<span class="ifc-ds-link__icon ifc-ds-link__icon--right">';
                            $list_html .= '<span class="dashicons dashicons-' . esc_attr($icon) . '"></span>';
                            $list_html .= '</span>';
                        }
                        
                        $list_html .= '</a>';
                        $list_html .= '</span>';
                        $list_html .= '</div>';
                        break;
                    
                    case 'html':
                        $html_content = $item['htmlContent'] ?? '';
                        $list_html .= '<div class="ifc-ds-container__component-item" style="' . $item_spacing_style . '">';
                        $list_html .= wp_kses_post($html_content);
                        $list_html .= '</div>';
                        break;
                    
                    case 'text':
                    default:
                        $list_html .= '<div class="ifc-ds-container__list-item" style="' . $item_spacing_style . '">';
                        
                        // Label
                        $list_html .= '<span class="ifc-ds-text ifc-ds-text--detail ifc-ds-text--semibold ifc-ds-text--neutral ifc-ds-text--align-left ifc-ds-container__list-label">';
                        $list_html .= esc_html($item['label'] ?? '');
                        $list_html .= '</span>';
                        
                        // Separator
                        if ($list_direction === 'vertical') {
                            $list_html .= '<br>';
                        } else {
                            $list_html .= ': ';
                        }
                        
                        // Value
                        $list_html .= '<span class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--primary ifc-ds-text--align-left ifc-ds-container__list-value">';
                        $list_html .= esc_html($item['value'] ?? '');
                        $list_html .= '</span>';
                        
                        $list_html .= '</div>';
                        break;
                }
            }
            
            $list_html .= '</div>';
        } else {
            $list_html = '<div class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--neutral ifc-ds-text--align-left ifc-ds-container__list-empty">Nenhum item configurado.</div>';
        }
        
        $inner_content = $list_html;
    }

    $html = sprintf(
        '<div %s>%s</div>',
        $wrapper_attributes,
        $inner_content
    );

    return $html;
    }
}

// Registrar o callback de renderização
return 'ifc_ds_render_container_block';