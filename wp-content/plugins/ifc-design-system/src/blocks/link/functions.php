<?php
if (!function_exists('ifc_ds_render_link_icon')) {
    function ifc_ds_render_link_icon($icon, $size = 'medium', $position = 'left') {
        if (empty($icon)) {
            return '';
        }

        $icon_size = ($size === 'small' || $size === 'detail') ? '16' : ($size === 'large' ? '24' : '20');
        $icon_style = sprintf('width: %spx; height: %spx;', $icon_size, $icon_size);
        $position_class = $position ? 'ifc-ds-link__icon--' . $position : '';

        if (filter_var($icon, FILTER_VALIDATE_URL)) {
            return sprintf(
                '<span class="ifc-ds-link__icon %s" style="%s"><img src="%s" alt="" style="%s" /></span>',
                esc_attr($position_class),
                esc_attr($icon_style),
                esc_url($icon),
                esc_attr($icon_style)
            );
        } else {
            return sprintf(
                '<span class="ifc-ds-link__icon %s dashicon dashicons-%s" style="%s"></span>',
                esc_attr($position_class),
                esc_attr($icon),
                esc_attr($icon_style)
            );
        }
    }
}

if (!function_exists('ifc_ds_render_link')) {
    /**
     * Renderiza um link completo do IFC Design System
     *
     * @param array $args Argumentos do link
     * @return string HTML do link
     */
    function ifc_ds_render_link($args = []) {
        $defaults = [
            'label' => 'Clique aqui',
            'url' => '#',
            'icon' => '',
            'icon_position' => 'left',
            'type' => 'neutral',
            'size' => 'medium',
            'padding' => [
                'top' => '0',
                'right' => '0',
                'bottom' => '0',
                'left' => '0'
            ],
            'open_in_new_tab' => false,
            'class' => '',
            'wrapper' => true,
            'tabindex' => null,
            'additional_attributes' => []
        ];

        $args = wp_parse_args($args, $defaults);

        $classes = [
            'ifc-ds-link',
            'ifc-ds-link--' . $args['type'],
            'ifc-ds-link--' . $args['size']
        ];

        if (!empty($args['class'])) {
            $classes[] = $args['class'];
        }

        $padding_style = sprintf(
            'padding: var(--ifc-space-%s) var(--ifc-space-%s) var(--ifc-space-%s) var(--ifc-space-%s);',
            esc_attr($args['padding']['top'] ?? '0'),
            esc_attr($args['padding']['right'] ?? '0'),
            esc_attr($args['padding']['bottom'] ?? '0'),
            esc_attr($args['padding']['left'] ?? '0')
        );

        $link_attributes = array_merge([
            'href' => esc_url($args['url']),
            'class' => 'ifc-ds-link__element',
            'style' => $padding_style
        ], $args['additional_attributes']);

        if ($args['open_in_new_tab']) {
            $link_attributes['target'] = '_blank';
            $link_attributes['rel'] = 'noopener noreferrer';
        }

        if ($args['tabindex'] !== null) {
            $link_attributes['tabindex'] = $args['tabindex'];
        }

        $icon_html = ifc_ds_render_link_icon($args['icon'], $args['size'], $args['icon_position']);

        $link_content = '';
        
        // Ícone à esquerda
        if ($args['icon_position'] === 'left' && $icon_html) {
            $link_content .= $icon_html;
        }
        
        // Label com classes do componente de texto
        $text_type = ($args['size'] === 'small' || $args['size'] === 'detail') ? 'detail' : 'body';
        $text_weight = $args['size'] === 'detail' ? 'regular' : 'semibold';
        $link_content .= sprintf(
            '<span class="ifc-ds-text ifc-ds-text--' . $text_type . ' ifc-ds-text--' . $text_weight . ' ifc-ds-text--primary ifc-ds-text--align-left ifc-ds-link__label">%s</span>', 
            esc_html($args['label'])
        );
        
        // Ícone à direita
        if ($args['icon_position'] === 'right' && $icon_html) {
            $link_content .= $icon_html;
        }

        // Gerar atributos do link
        $attributes_string = implode(' ', array_map(function($key, $value) {
            return sprintf('%s="%s"', $key, esc_attr($value));
        }, array_keys($link_attributes), $link_attributes));

        $link_html = sprintf('<a %s>%s</a>', $attributes_string, $link_content);

        // Se wrapper for false, retorna apenas o link
        if (!$args['wrapper']) {
            return $link_html;
        }

        // Retorna com wrapper
        return sprintf(
            '<span class="%s">%s</span>',
            esc_attr(implode(' ', $classes)),
            $link_html
        );
    }
}