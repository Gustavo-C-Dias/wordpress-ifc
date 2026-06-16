<?php
/**
 * IFC Design System - Utilitários PHP Compartilhados
 *
 * Helpers reutilizáveis pelos render.php dos blocos.
 * Todas as funções são prefixadas com ifc_ds_* para evitar colisões.
 */

if (!function_exists('ifc_ds_build_text_classes')) {
    /**
     * Constrói as classes CSS BEM para o componente Text.
     */
    function ifc_ds_build_text_classes($text_type = 'body', $weight = 'regular', $color = 'primary', $alignment = 'left', $additional_class = '') {
        $classes = [
            'ifc-ds-text',
            'ifc-ds-text--' . esc_attr($text_type),
            'ifc-ds-text--' . esc_attr($weight),
            'ifc-ds-text--' . esc_attr($color),
            'ifc-ds-text--align-' . esc_attr($alignment),
        ];

        if (!empty($additional_class)) {
            $classes[] = esc_attr($additional_class);
        }

        return implode(' ', array_filter($classes));
    }
}

if (!function_exists('ifc_ds_get_html_tag_for_text_type')) {
    /**
     * Mapeia o textType semântico para o elemento HTML adequado.
     */
    function ifc_ds_get_html_tag_for_text_type($text_type) {
        $tag_map = [
            'title'    => 'h1',
            'subtitle' => 'h2',
            'body'     => 'p',
            'detail'   => 'p',
            'caption'  => 'small',
        ];

        return isset($tag_map[$text_type]) ? $tag_map[$text_type] : 'p';
    }
}

if (!function_exists('ifc_ds_render_text')) {
    /**
     * Renderiza um componente Text completo (tag + classes + conteúdo).
     */
    function ifc_ds_render_text($args = []) {
        $defaults = [
            'content'   => '',
            'textType'  => 'body',
            'weight'    => 'regular',
            'color'     => 'primary',
            'alignment' => 'left',
            'className' => '',
        ];

        $args = wp_parse_args($args, $defaults);

        if (empty($args['content'])) {
            return '';
        }

        $tag     = ifc_ds_get_html_tag_for_text_type($args['textType']);
        $classes = ifc_ds_build_text_classes(
            $args['textType'],
            $args['weight'],
            $args['color'],
            $args['alignment'],
            $args['className']
        );

        return sprintf(
            '<%s class="%s">%s</%s>',
            esc_attr($tag),
            esc_attr($classes),
            wp_kses_post($args['content']),
            esc_attr($tag)
        );
    }
}

if (!function_exists('ifc_ds_render_navigation_skip_link')) {
    /**
     * Renderiza um único skip-link de acessibilidade.
     */
    function ifc_ds_render_navigation_skip_link($link) {
        $target = $link['target'];

        if (!str_starts_with($target, '#') && !in_array($target, ['nav', 'main', 'footer', 'header'], true)) {
            $target = '#' . $target;
        }

        return ifc_ds_render_link([
            'label'                  => $link['label'],
            'url'                    => $target,
            'type'                   => 'white',
            'size'                   => 'medium',
            'class'                  => 'ifc-ds-skip-navigation__link',
            'wrapper'                => true,
            'additional_attributes'  => [
                'aria-label' => isset($link['description']) ? $link['description'] : $link['label'],
            ],
        ]);
    }
}

if (!function_exists('ifc_ds_get_valid_weights')) {
    function ifc_ds_get_valid_weights() {
        return ['regular', 'semibold', 'bold'];
    }
}

if (!function_exists('ifc_ds_get_logo_url')) {
    /**
     * Retorna a URL absoluta do logo de um campus/orientação/variante.
     *
     * Pode ser substituída por filtro `ifc_ds_logo_url` para suportar
     * campi adicionais sem editar o plugin.
     */
    function ifc_ds_get_logo_url($campus = 'camboriu', $orientation = 'horizontal', $variant = 'default') {
        $plugin_url = defined('IFC_DS_PLUGIN_URL')
            ? IFC_DS_PLUGIN_URL
            : plugin_dir_url(dirname(dirname(__FILE__)));

        $url = $plugin_url . 'src/blocks/atoms/logo/assets/' . $campus . '/' . $orientation . '/' . $variant . '.png';

        return apply_filters('ifc_ds_logo_url', $url, $campus, $orientation, $variant);
    }
}

if (!function_exists('ifc_ds_get_social_icon')) {
    /**
     * Mapeia uma plataforma social ao Dashicon correspondente.
     *
     * Filtro `ifc_ds_social_icons` permite estender a tabela.
     */
    function ifc_ds_get_social_icon($platform) {
        $icons = apply_filters('ifc_ds_social_icons', [
            'youtube'   => 'dashicons-video-alt3',
            'facebook'  => 'dashicons-facebook',
            'instagram' => 'dashicons-instagram',
            'twitter'   => 'dashicons-twitter',
            'linkedin'  => 'dashicons-linkedin',
        ]);

        return isset($icons[$platform]) ? $icons[$platform] : 'dashicons-share';
    }
}
