<?php
/**
 * Helpers de renderização do átomo "link".
 *
 * Acessibilidade:
 *  - eMAG 1.7 / 3.5 — descrições de link claras e suficientes fora do contexto.
 *  - eMAG 1.9 / WCAG 3.2.5 — quando `target="_blank"`, o nome acessível é
 *    enriquecido com "(abre em nova janela)".
 *  - WCAG 2.4.4 — `aria-label` permite enriquecer o nome acessível de links
 *    sem texto suficiente (ex.: links apenas com ícone).
 *  - eMAG 3.5 — o atributo `title` é desencorajado por compatibilidade com
 *    leitores de tela; preferimos `aria-label`.
 */

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
                '<span class="ifc-ds-link__icon %s" style="%s" aria-hidden="true"><img src="%s" alt="" style="%s" role="presentation" /></span>',
                esc_attr($position_class),
                esc_attr($icon_style),
                esc_url($icon),
                esc_attr($icon_style)
            );
        }

        return sprintf(
            '<span class="ifc-ds-link__icon %s dashicon dashicons-%s" style="%s" aria-hidden="true"></span>',
            esc_attr($position_class),
            esc_attr($icon),
            esc_attr($icon_style)
        );
    }
}

if (!function_exists('ifc_ds_render_link')) {
    function ifc_ds_render_link($args = []) {
        $defaults = [
            'label'                 => 'Clique aqui',
            'url'                   => '#',
            'icon'                  => '',
            'icon_position'         => 'left',
            'type'                  => 'neutral',
            'size'                  => 'medium',
            'weight'                => 'regular',
            'padding'               => [
                'top'    => '0',
                'right'  => '0',
                'bottom' => '0',
                'left'   => '0',
            ],
            'open_in_new_tab'       => false,
            'class'                 => '',
            'wrapper'               => true,
            'tabindex'              => null,
            'icon_only'             => false,
            'additional_attributes' => [],
        ];

        $args = wp_parse_args($args, $defaults);

        $classes = [
            'ifc-ds-link',
            'ifc-ds-link--' . $args['type'],
            'ifc-ds-link--' . $args['size'],
        ];

        if ($args['icon_only']) {
            $classes[] = 'ifc-ds-link--icon-only';
        }

        if (!empty($args['class'])) {
            $classes[] = $args['class'];
        }

        $padding_style = sprintf(
            'padding: var(--ifc-spacing-%s) var(--ifc-spacing-%s) var(--ifc-spacing-%s) var(--ifc-spacing-%s);',
            esc_attr($args['padding']['top'] ?? '0'),
            esc_attr($args['padding']['right'] ?? '0'),
            esc_attr($args['padding']['bottom'] ?? '0'),
            esc_attr($args['padding']['left'] ?? '0')
        );

        $link_attributes = array_merge([
            'href'  => esc_url($args['url']),
            'class' => 'ifc-ds-link__element',
            'style' => $padding_style,
        ], $args['additional_attributes']);

        $accessible_name_suffix = '';
        if ($args['open_in_new_tab']) {
            $link_attributes['target'] = '_blank';
            $link_attributes['rel']    = isset($link_attributes['rel'])
                ? $link_attributes['rel'] . ' noopener noreferrer'
                : 'noopener noreferrer';

            $accessible_name_suffix = ' ' . ifc_ds_external_link_suffix();

            if (!isset($link_attributes['aria-label'])) {
                $link_attributes['aria-label'] = trim($args['label']) . $accessible_name_suffix;
            } else {
                $link_attributes['aria-label'] = trim($link_attributes['aria-label']) . $accessible_name_suffix;
            }
        }

        if (isset($link_attributes['title'])) {
            unset($link_attributes['title']);
        }

        if ($args['tabindex'] !== null) {
            $link_attributes['tabindex'] = (int) $args['tabindex'];
        }

        $icon_html = ifc_ds_render_link_icon($args['icon'], $args['size'], $args['icon_position']);

        $link_content = '';

        if ($args['icon_position'] === 'left' && $icon_html) {
            $link_content .= $icon_html;
        }

        $text_type     = ($args['size'] === 'small' || $args['size'] === 'detail') ? 'detail' : 'body';
        $valid_weights = function_exists('ifc_ds_get_valid_weights') ? ifc_ds_get_valid_weights() : ['regular', 'semibold', 'bold'];
        $fallback_weight = $args['size'] === 'detail' ? 'regular' : 'semibold';
        $text_weight   = in_array($args['weight'], $valid_weights, true) ? $args['weight'] : $fallback_weight;
        $text_color    = $args['type'] === 'neutral' ? 'neutral' : 'primary';

        if ($args['icon_only']) {
            if (!isset($link_attributes['aria-label']) || empty($link_attributes['aria-label'])) {
                $link_attributes['aria-label'] = $args['label'] . $accessible_name_suffix;
            }
            $link_content .= sprintf(
                '<span class="screen-reader-text">%s</span>',
                esc_html($args['label'])
            );
        } else {
            $link_content .= sprintf(
                '<span class="ifc-ds-text ifc-ds-text--%s ifc-ds-text--%s ifc-ds-text--%s ifc-ds-text--align-left ifc-ds-link__label">%s</span>',
                esc_attr($text_type),
                esc_attr($text_weight),
                esc_attr($text_color),
                esc_html($args['label'])
            );
        }

        if ($args['icon_position'] === 'right' && $icon_html) {
            $link_content .= $icon_html;
        }

        $attributes_string = implode(' ', array_map(function ($key, $value) {
            return sprintf('%s="%s"', esc_attr($key), esc_attr($value));
        }, array_keys($link_attributes), $link_attributes));

        $link_html = sprintf('<a %s>%s</a>', $attributes_string, $link_content);

        if (!$args['wrapper']) {
            return $link_html;
        }

        return sprintf(
            '<span class="%s">%s</span>',
            esc_attr(implode(' ', $classes)),
            $link_html
        );
    }
}
