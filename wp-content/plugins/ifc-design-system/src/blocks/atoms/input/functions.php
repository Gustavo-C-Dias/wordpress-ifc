<?php
/**
 * Helpers de renderização do átomo "input".
 *
 * Acessibilidade:
 *  - eMAG 6.2 / WCAG 1.3.1 — todo INPUT tem `<label for>` ou `aria-label`
 *    associado (placeholder NÃO substitui label).
 *  - eMAG 6.5 — `aria-required="true"` reforça o atributo HTML5 `required`
 *    em leitores de tela mais antigos.
 *  - eMAG 6.6 — `aria-invalid` é exposto quando o campo for marcado com
 *    erro (`error=true`) e a mensagem é vinculada via `aria-describedby`.
 *  - eMAG 4.4 / WCAG 2.4.7 — foco visível mantido pelo CSS
 *    (`:focus`/`:focus-visible`).
 */

if (!function_exists('ifc_ds_render_input_icon')) {
    function ifc_ds_render_input_icon($icon) {
        if (empty($icon)) {
            return '';
        }

        $icon_size = '20';
        $icon_style = sprintf('width: %spx; height: %spx;', $icon_size, $icon_size);

        if (filter_var($icon, FILTER_VALIDATE_URL)) {
            return sprintf(
                '<span class="ifc-ds-input__icon" aria-hidden="true" style="%s"><img src="%s" alt="" role="presentation" style="%s" /></span>',
                esc_attr($icon_style),
                esc_url($icon),
                esc_attr($icon_style)
            );
        }

        return sprintf(
            '<span class="ifc-ds-input__icon" aria-hidden="true"><i class="%s" style="%s"></i></span>',
            esc_attr($icon),
            esc_attr($icon_style)
        );
    }
}

if (!function_exists('ifc_ds_build_input_classes')) {
    function ifc_ds_build_input_classes($args) {
        $wrapper_classes = [
            'ifc-ds-input-wrapper',
            'ifc-ds-input-wrapper--' . $args['variant'],
        ];

        if (!empty($args['icon'])) {
            $wrapper_classes[] = 'ifc-ds-input-wrapper--with-icon';
        }

        if ($args['disabled']) {
            $wrapper_classes[] = 'ifc-ds-input-wrapper--disabled';
        }

        if (!empty($args['error'])) {
            $wrapper_classes[] = 'ifc-ds-input-wrapper--error';
        }

        if (!empty($args['wrapper_class'])) {
            $wrapper_classes[] = $args['wrapper_class'];
        }

        $input_classes = [
            'ifc-ds-input',
            'ifc-ds-input--' . $args['variant'],
        ];

        if (!empty($args['icon'])) {
            $input_classes[] = 'ifc-ds-input--with-icon';
        }

        if (!empty($args['input_class'])) {
            $input_classes[] = $args['input_class'];
        }

        return [
            'wrapper' => $wrapper_classes,
            'input'   => $input_classes,
        ];
    }
}

if (!function_exists('ifc_ds_build_padding_style')) {
    function ifc_ds_build_padding_style($padding) {
        if (empty($padding) || !is_array($padding)) {
            return '';
        }

        $padding_styles = [];

        foreach (['top', 'right', 'bottom', 'left'] as $side) {
            $value = $padding[$side] ?? '0';
            if ($value !== '0') {
                $padding_styles[] = "padding-{$side}: var(--ifc-spacing-{$value})";
            }
        }

        return !empty($padding_styles)
            ? 'style="' . implode('; ', $padding_styles) . '"'
            : '';
    }
}

if (!function_exists('ifc_ds_build_input_attributes')) {
    function ifc_ds_build_input_attributes($args, $unique_id, $input_name, $describedby_ids, $input_classes) {
        $attributes = [
            'id="' . esc_attr($unique_id) . '"',
            'name="' . esc_attr($input_name) . '"',
            'type="' . esc_attr($args['input_type']) . '"',
            'class="' . esc_attr(implode(' ', $input_classes)) . '"',
        ];

        if (empty($args['label']) && !empty($args['aria_label'])) {
            $attributes[] = 'aria-label="' . esc_attr($args['aria_label']) . '"';
        }

        $optional_attrs = [
            'input_value' => 'value',
            'placeholder' => 'placeholder',
            'autocomplete' => 'autocomplete',
            'maxlength'   => 'maxlength',
            'pattern'     => 'pattern',
            'min'         => 'min',
            'max'         => 'max',
            'step'        => 'step',
            'inputmode'   => 'inputmode',
        ];

        foreach ($optional_attrs as $key => $attr) {
            if (!empty($args[$key])) {
                $attributes[] = $attr . '="' . esc_attr($args[$key]) . '"';
            }
        }

        $boolean_attrs = ['required', 'disabled', 'readonly'];
        foreach ($boolean_attrs as $attr) {
            if (!empty($args[$attr])) {
                $attributes[] = $attr;
            }
        }

        if (!empty($args['required'])) {
            $attributes[] = 'aria-required="true"';
        }

        if (!empty($args['error'])) {
            $attributes[] = 'aria-invalid="true"';
        }

        $describedby_ids = array_filter($describedby_ids);
        if (!empty($describedby_ids)) {
            $attributes[] = 'aria-describedby="' . esc_attr(implode(' ', $describedby_ids)) . '"';
        }

        return $attributes;
    }
}

if (!function_exists('ifc_ds_render_input')) {
    function ifc_ds_render_input($args = []) {
        $defaults = [
            'label'         => '',
            'aria_label'    => '',
            'placeholder'   => '',
            'caption'       => '',
            'error_message' => '',
            'error'         => false,
            'icon'          => '',
            'input_type'    => 'text',
            'input_name'    => '',
            'input_id'      => '',
            'input_value'   => '',
            'required'      => false,
            'disabled'      => false,
            'readonly'      => false,
            'variant'       => 'default',
            'padding'       => ['top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0'],
            'wrapper'       => true,
            'wrapper_class' => '',
            'input_class'   => '',
            'autocomplete'  => '',
            'maxlength'     => '',
            'pattern'       => '',
            'min'           => '',
            'max'           => '',
            'step'          => '',
            'inputmode'     => '',
            'hide_label'    => false,
        ];

        $args = wp_parse_args($args, $defaults);

        foreach (['label', 'aria_label', 'placeholder', 'caption', 'error_message', 'input_type', 'input_name', 'input_id', 'input_value', 'variant'] as $field) {
            $args[$field] = sanitize_text_field($args[$field]);
        }

        $classes      = ifc_ds_build_input_classes($args);
        $unique_id    = !empty($args['input_id']) ? $args['input_id'] : 'ifc-input-' . uniqid();
        $input_name   = !empty($args['input_name']) ? $args['input_name'] : $unique_id;

        $caption_id = !empty($args['caption']) ? $unique_id . '-caption' : '';
        $error_id   = (!empty($args['error']) && !empty($args['error_message'])) ? $unique_id . '-error' : '';

        $input_attributes = ifc_ds_build_input_attributes(
            $args,
            $unique_id,
            $input_name,
            [$caption_id, $error_id],
            $classes['input']
        );

        $padding_style = ifc_ds_build_padding_style($args['padding']);
        $html = '';

        if ($args['wrapper']) {
            $html .= sprintf(
                '<div class="%s" %s>',
                esc_attr(implode(' ', $classes['wrapper'])),
                $padding_style
            );
        }

        if (!empty($args['label'])) {
            $label_class = 'ifc-ds-input__label';
            if (!empty($args['hide_label'])) {
                $label_class .= ' screen-reader-text';
            }

            $html .= sprintf('<label for="%s" class="%s">', esc_attr($unique_id), esc_attr($label_class));
            $html .= sprintf(
                '<span class="%s">%s</span>',
                esc_attr(ifc_ds_build_text_classes('detail', 'semibold', 'neutral', 'left', 'ifc-ds-input__label-text')),
                esc_html($args['label'])
            );
            if ($args['required']) {
                /*
                 * eMAG 6.5 — o asterisco visual é apenas decorativo;
                 * a obrigatoriedade real é exposta por `required` /
                 * `aria-required="true"` no input.
                 */
                $html .= '<span class="ifc-ds-input__required" aria-hidden="true">*</span>';
            }
            $html .= '</label>';
        }

        $html .= '<div class="ifc-ds-input__field-wrapper">';

        if (!empty($args['icon'])) {
            $html .= ifc_ds_render_input_icon($args['icon']);
        }

        $html .= '<input ' . implode(' ', $input_attributes) . ' />';
        $html .= '</div>';

        if (!empty($args['caption'])) {
            $html .= sprintf('<div id="%s" class="ifc-ds-input__caption">', esc_attr($caption_id));
            $html .= sprintf(
                '<span class="%s">%s</span>',
                esc_attr(ifc_ds_build_text_classes('caption', 'regular', 'neutral', 'left')),
                esc_html($args['caption'])
            );
            $html .= '</div>';
        }

        if (!empty($error_id)) {
            $html .= sprintf(
                '<div id="%s" class="ifc-ds-input__error" role="alert">%s</div>',
                esc_attr($error_id),
                esc_html($args['error_message'])
            );
        }

        if ($args['wrapper']) {
            $html .= '</div>';
        }

        return $html;
    }
}
