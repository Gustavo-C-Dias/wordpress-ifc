<?php
if (!function_exists('ifc_ds_render_input_icon')) {
    /**
     * Renderiza o ícone do input
     *
     * @param string $icon Classe do ícone ou URL da imagem
     * @param string $size Tamanho do input (small, medium, large)
     * @return string HTML do ícone
     */
    function ifc_ds_render_input_icon($icon, $size = 'medium') {
        if (empty($icon)) {
            return '';
        }

        $icon_sizes = [
            'small' => '16',
            'medium' => '20',
            'large' => '24'
        ];
        
        $icon_size = $icon_sizes[$size] ?? '20';
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
     * Renderiza um input completo do IFC Design System
     *
     * @param array $args Argumentos do input
     * @return string HTML do input
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
            'size' => 'medium',
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
        
        // Sanitização dos argumentos
        $args['label'] = sanitize_text_field($args['label']);
        $args['placeholder'] = sanitize_text_field($args['placeholder']);
        $args['caption'] = sanitize_text_field($args['caption']);
        $args['input_type'] = sanitize_text_field($args['input_type']);
        $args['input_name'] = sanitize_text_field($args['input_name']);
        $args['input_id'] = sanitize_text_field($args['input_id']);
        $args['input_value'] = sanitize_text_field($args['input_value']);
        $args['size'] = sanitize_text_field($args['size']);
        $args['variant'] = sanitize_text_field($args['variant']);

        // Classes CSS para o wrapper
        $wrapper_classes = [
            'ifc-ds-input-wrapper',
            'ifc-ds-input-wrapper--' . $args['size'],
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

        // Classes CSS para o input
        $input_classes = [
            'ifc-ds-input',
            'ifc-ds-input--' . $args['size'],
            'ifc-ds-input--' . $args['variant']
        ];

        if (!empty($args['icon'])) {
            $input_classes[] = 'ifc-ds-input--with-icon';
        }

        if (!empty($args['input_class'])) {
            $input_classes[] = $args['input_class'];
        }

        // Estilos inline para padding
        $padding_style = '';
        if (!empty($args['padding']) && is_array($args['padding'])) {
            $padding_styles = [];
            
            foreach (['top', 'right', 'bottom', 'left'] as $side) {
                $value = $args['padding'][$side] ?? '0';
                if ($value !== '0') {
                    $padding_styles[] = "padding-{$side}: var(--wp--preset--spacing--{$value})";
                }
            }
            
            if (!empty($padding_styles)) {
                $padding_style = 'style="' . implode('; ', $padding_styles) . '"';
            }
        }

        // ID único se não fornecido
        $unique_id = !empty($args['input_id']) 
            ? $args['input_id'] 
            : 'ifc-input-' . uniqid();

        // Nome do campo
        $input_name = !empty($args['input_name']) 
            ? $args['input_name'] 
            : $unique_id;

        // IDs para acessibilidade
        $caption_id = !empty($args['caption']) ? $unique_id . '-caption' : '';
        $described_by = !empty($caption_id) ? 'aria-describedby="' . $caption_id . '"' : '';

        // Atributos do input
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

        // Atributos adicionais
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

        // Montagem do HTML
        $html = '';

        if ($args['wrapper']) {
            $html .= '<div class="' . esc_attr(implode(' ', $wrapper_classes)) . '" ' . $padding_style . '>';
        }

        // Label
        if (!empty($args['label'])) {
            $html .= '<label for="' . esc_attr($unique_id) . '" class="ifc-ds-input__label">';
            $html .= esc_html($args['label']);
            if ($args['required']) {
                $html .= '<span class="ifc-ds-input__required" aria-label="Campo obrigatório">*</span>';
            }
            $html .= '</label>';
        }

        // Field wrapper
        $html .= '<div class="ifc-ds-input__field-wrapper">';

        // Ícone
        if (!empty($args['icon'])) {
            $html .= ifc_ds_render_input_icon($args['icon'], $args['size']);
        }

        // Input
        $html .= '<input ' . implode(' ', $input_attributes) . ' />';

        $html .= '</div>'; // fim field-wrapper

        // Caption
        if (!empty($args['caption'])) {
            $html .= '<div id="' . esc_attr($caption_id) . '" class="ifc-ds-input__caption">';
            $html .= esc_html($args['caption']);
            $html .= '</div>';
        }

        if ($args['wrapper']) {
            $html .= '</div>'; // fim wrapper
        }

        return $html;
    }
}