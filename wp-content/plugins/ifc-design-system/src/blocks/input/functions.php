<?php
if (!function_exists('ifc_ds_render_input_icon')) {
    /**
     * @param string $icon 
     * @return string
     */
    function ifc_ds_render_input_icon($icon) {
        if (empty($icon)) {
            return '';
        }

        $icon_size = '20';
        $icon_style = sprintf('width: %spx; height: %spx;', $icon_size, $icon_size);

        if (filter_var($icon, FILTER_VALIDATE_URL)) {
            return sprintf(
                '<span class="ifc-ds-input__icon" aria-hidden="true" style="%s"><img src="%s" alt="" style="%s" /></span>',
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
    /**
     * @param array $args
     * @return array
     */
    function ifc_ds_build_input_classes($args) {
        $wrapper_classes = [
            'ifc-ds-input-wrapper',
            'ifc-ds-input-wrapper--' . $args['variant']
        ];

        if (!empty($args['icon'])) {
            $wrapper_classes[] = 'ifc-ds-input-wrapper--with-icon';
        }

        if ($args['disabled']) {
            $wrapper_classes[] = 'ifc-ds-input-wrapper--disabled';
        }

        if (!empty($args['wrapper_class'])) {
            $wrapper_classes[] = $args['wrapper_class'];
        }

        $input_classes = [
            'ifc-ds-input',
            'ifc-ds-input--' . $args['variant']
        ];

        if (!empty($args['icon'])) {
            $input_classes[] = 'ifc-ds-input--with-icon';
        }

        if (!empty($args['input_class'])) {
            $input_classes[] = $args['input_class'];
        }

        return [
            'wrapper' => $wrapper_classes,
            'input' => $input_classes
        ];
    }
}

if (!function_exists('ifc_ds_build_padding_style')) {
    /**
     * @param array $padding
     * @return string
     */
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
    /**
     * @param array $args
     * @param string $unique_id
     * @param string $input_name
     * @param string $caption_id
     * @param array $input_classes
     * @return array
     */
    function ifc_ds_build_input_attributes($args, $unique_id, $input_name, $caption_id, $input_classes) {
        $attributes = [
            'id="' . esc_attr($unique_id) . '"',
            'name="' . esc_attr($input_name) . '"',
            'type="' . esc_attr($args['input_type']) . '"',
            'class="' . esc_attr(implode(' ', $input_classes)) . '"'
        ];

        $optional_attrs = [
            'input_value' => 'value',
            'placeholder' => 'placeholder',
            'autocomplete' => 'autocomplete',
            'maxlength' => 'maxlength',
            'pattern' => 'pattern',
            'min' => 'min',
            'max' => 'max',
            'step' => 'step'
        ];

        foreach ($optional_attrs as $key => $attr) {
            if (!empty($args[$key])) {
                $attributes[] = $attr . '="' . esc_attr($args[$key]) . '"';
            }
        }

        $boolean_attrs = ['required', 'disabled', 'readonly'];
        foreach ($boolean_attrs as $attr) {
            if ($args[$attr]) {
                $attributes[] = $attr;
            }
        }

        if (!empty($caption_id)) {
            $attributes[] = 'aria-describedby="' . esc_attr($caption_id) . '"';
        }

        return $attributes;
    }
}

if (!function_exists('ifc_ds_render_input')) {
    /**
     * @param array $args
     * @return string
     */
    function ifc_ds_render_input($args = []) {
        $defaults = [
            'label' => '',
            'placeholder' => '',
            'caption' => '',
            'icon' => '',
            'input_type' => 'text',
            'input_name' => '',
            'input_id' => '',
            'input_value' => '',
            'required' => false,
            'disabled' => false,
            'readonly' => false,
            'variant' => 'default',
            'padding' => ['top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0'],
            'wrapper' => true,
            'wrapper_class' => '',
            'input_class' => '',
            'autocomplete' => '',
            'maxlength' => '',
            'pattern' => '',
            'min' => '',
            'max' => '',
            'step' => ''
        ];

        $args = wp_parse_args($args, $defaults);
        
        foreach (['label', 'placeholder', 'caption', 'input_type', 'input_name', 'input_id', 'input_value', 'variant'] as $field) {
            $args[$field] = sanitize_text_field($args[$field]);
        }

        $classes = ifc_ds_build_input_classes($args);
        $unique_id = !empty($args['input_id']) ? $args['input_id'] : 'ifc-input-' . uniqid();
        $input_name = !empty($args['input_name']) ? $args['input_name'] : $unique_id;
        $caption_id = !empty($args['caption']) ? $unique_id . '-caption' : '';
        $input_attributes = ifc_ds_build_input_attributes($args, $unique_id, $input_name, $caption_id, $classes['input']);
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
            $html .= sprintf('<label for="%s" class="ifc-ds-input__label">', esc_attr($unique_id));
            $html .= sprintf(
                '<span class="%s">%s</span>',
                esc_attr(ifc_ds_build_text_classes('detail', 'semibold', 'neutral', 'left', 'ifc-ds-input__label-text')),
                esc_html($args['label'])
            );
            if ($args['required']) {
                $html .= '<span class="ifc-ds-input__required" aria-label="Campo obrigatório">*</span>';
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

        if ($args['wrapper']) {
            $html .= '</div>';
        }

        return $html;
    }
}