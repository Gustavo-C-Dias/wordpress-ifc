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
        } else {
            return sprintf(
                '<span class="ifc-ds-input__icon" aria-hidden="true"><i class="%s" style="%s"></i></span>',
                esc_attr($icon),
                esc_attr($icon_style)
            );
        }
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
            'padding' => [
                'top' => '0',
                'right' => '0',
                'bottom' => '0',
                'left' => '0'
            ],
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
        
        $args['label'] = sanitize_text_field($args['label']);
        $args['placeholder'] = sanitize_text_field($args['placeholder']);
        $args['caption'] = sanitize_text_field($args['caption']);
        $args['input_type'] = sanitize_text_field($args['input_type']);
        $args['input_name'] = sanitize_text_field($args['input_name']);
        $args['input_id'] = sanitize_text_field($args['input_id']);
        $args['input_value'] = sanitize_text_field($args['input_value']);
        $args['variant'] = sanitize_text_field($args['variant']);

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

        $padding_style = '';
        if (!empty($args['padding']) && is_array($args['padding'])) {
            $padding_styles = [];
            
            foreach (['top', 'right', 'bottom', 'left'] as $side) {
                $value = $args['padding'][$side] ?? '0';
                if ($value !== '0') {
                    $padding_styles[] = "padding-{$side}: var(--ifc-spacing-{$value})";
                }
            }
            
            if (!empty($padding_styles)) {
                $padding_style = 'style="' . implode('; ', $padding_styles) . '"';
            }
        }

        $unique_id = !empty($args['input_id']) 
            ? $args['input_id'] 
            : 'ifc-input-' . uniqid();

        $input_name = !empty($args['input_name']) 
            ? $args['input_name'] 
            : $unique_id;

        $caption_id = !empty($args['caption']) ? $unique_id . '-caption' : '';
        $described_by = !empty($caption_id) ? 'aria-describedby="' . $caption_id . '"' : '';

        $input_attributes = [
            'id="' . esc_attr($unique_id) . '"',
            'name="' . esc_attr($input_name) . '"',
            'type="' . esc_attr($args['input_type']) . '"',
            'class="' . esc_attr(implode(' ', $input_classes)) . '"'
        ];

        if (!empty($args['input_value'])) {
            $input_attributes[] = 'value="' . esc_attr($args['input_value']) . '"';
        }

        if (!empty($args['placeholder'])) {
            $input_attributes[] = 'placeholder="' . esc_attr($args['placeholder']) . '"';
        }

        if ($args['required']) {
            $input_attributes[] = 'required';
        }

        if ($args['disabled']) {
            $input_attributes[] = 'disabled';
        }

        if ($args['readonly']) {
            $input_attributes[] = 'readonly';
        }

        if (!empty($described_by)) {
            $input_attributes[] = $described_by;
        }

        if (!empty($args['autocomplete'])) {
            $input_attributes[] = 'autocomplete="' . esc_attr($args['autocomplete']) . '"';
        }

        if (!empty($args['maxlength'])) {
            $input_attributes[] = 'maxlength="' . esc_attr($args['maxlength']) . '"';
        }

        if (!empty($args['pattern'])) {
            $input_attributes[] = 'pattern="' . esc_attr($args['pattern']) . '"';
        }

        if (!empty($args['min'])) {
            $input_attributes[] = 'min="' . esc_attr($args['min']) . '"';
        }

        if (!empty($args['max'])) {
            $input_attributes[] = 'max="' . esc_attr($args['max']) . '"';
        }

        if (!empty($args['step'])) {
            $input_attributes[] = 'step="' . esc_attr($args['step']) . '"';
        }

        $html = '';

        if ($args['wrapper']) {
            $html .= '<div class="' . esc_attr(implode(' ', $wrapper_classes)) . '" ' . $padding_style . '>';
        }

        if (!empty($args['label'])) {
            $html .= '<label for="' . esc_attr($unique_id) . '" class="ifc-ds-input__label">';
            $html .= esc_html($args['label']);
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
            $html .= '<div id="' . esc_attr($caption_id) . '" class="ifc-ds-input__caption">';
            $html .= esc_html($args['caption']);
            $html .= '</div>';
        }

        if ($args['wrapper']) {
            $html .= '</div>';
        }

        return $html;
    }
}