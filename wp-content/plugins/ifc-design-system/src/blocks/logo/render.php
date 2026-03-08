<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Renderiza o bloco de logo
 *
 * @param array $attributes Os atributos do bloco
 * @param string $content O conteúdo interno do bloco (não usado neste componente)
 * @param WP_Block $block A instância do bloco
 * @return string O HTML renderizado
 */
if (!function_exists('ifc_ds_render_logo_block')) {
    function ifc_ds_render_logo_block($attributes, $content, $block) {
        // Valores padrão
        $campus = isset($attributes['campus']) ? $attributes['campus'] : 'camboriu';
        $orientation = isset($attributes['orientation']) ? $attributes['orientation'] : 'horizontal';
        $variant = isset($attributes['variant']) ? $attributes['variant'] : 'default';
        $width = isset($attributes['width']) ? intval($attributes['width']) : 200;
        $height = isset($attributes['height']) ? intval($attributes['height']) : 60;
        $link_url = isset($attributes['linkUrl']) ? $attributes['linkUrl'] : '';
        $link_target = isset($attributes['linkTarget']) ? $attributes['linkTarget'] : '_self';
        $alt_text = isset($attributes['altText']) ? $attributes['altText'] : 'Logo IFC';

        // Validar valores
        $campus = esc_attr($campus);
        $orientation = in_array($orientation, ['horizontal', 'vertical']) ? $orientation : 'horizontal';
        $variant = in_array($variant, ['default', 'white']) ? $variant : 'default';
        $width = max(50, min(400, $width));
        $height = max(30, min(300, $height));
        $link_target = in_array($link_target, ['_self', '_blank']) ? $link_target : '_self';

        // Gerar URL da imagem
        $plugin_url = defined('IFC_DS_PLUGIN_URL')
            ? IFC_DS_PLUGIN_URL
            : plugin_dir_url(dirname(dirname(dirname(dirname(__FILE__)))));
        $logo_url = $plugin_url . 'src/blocks/logo/assets/' . $campus . '/' . $orientation . '/' . $variant . '.png';

        // Montar classes CSS
        $classes = array(
            'ifc-ds-logo',
            'ifc-ds-logo--' . $orientation,
            'ifc-ds-logo--' . $variant
        );

        // Estilos da imagem
        $image_style = sprintf(
            'width: %dpx; height: %dpx; max-width: 100%%; height: auto; display: block;',
            $width,
            $height
        );

        // Criar elemento da imagem
        $image_html = sprintf(
            '<img src="%s" alt="%s" style="%s" class="ifc-ds-logo__image" loading="lazy" />',
            esc_url($logo_url),
            esc_attr($alt_text),
            $image_style
        );

        // Wrapper attributes
        $wrapper_attributes = get_block_wrapper_attributes(array(
            'class' => implode(' ', $classes)
        ));

        // Container do logo
        $logo_html = sprintf(
            '<div %s>%s</div>',
            $wrapper_attributes,
            $image_html
        );

        // Se há URL de link, envolver em um link
        if (!empty($link_url)) {
            $link_attributes = array(
                'href' => esc_url($link_url),
                'class' => 'ifc-ds-logo__link'
            );

            if ($link_target === '_blank') {
                $link_attributes['target'] = '_blank';
                $link_attributes['rel'] = 'noopener noreferrer';
            }

            $link_attrs_string = '';
            foreach ($link_attributes as $attr => $value) {
                $link_attrs_string .= sprintf(' %s="%s"', $attr, esc_attr($value));
            }

            $logo_html = sprintf(
                '<a%s>%s</a>',
                $link_attrs_string,
                $logo_html
            );
        }

        return $logo_html;
    }
}

/**
 * Função auxiliar para obter URL do logo
 */
if (!function_exists('ifc_ds_get_logo_url')) {
    function ifc_ds_get_logo_url($campus = 'camboriu', $orientation = 'horizontal', $variant = 'default') {
        $plugin_url = defined('IFC_DS_PLUGIN_URL')
            ? IFC_DS_PLUGIN_URL
            : plugin_dir_url(dirname(dirname(dirname(dirname(__FILE__)))));
        return $plugin_url . 'src/blocks/logo/assets/' . $campus . '/' . $orientation . '/' . $variant . '.png';
    }
}

/**
 * Função auxiliar para renderizar logo em templates PHP
 */
if (!function_exists('ifc_ds_render_logo')) {
    function ifc_ds_render_logo($args = array()) {
        $defaults = array(
            'campus' => 'camboriu',
            'orientation' => 'horizontal',
            'variant' => 'default',
            'width' => 200,
            'height' => 60,
            'link_url' => '',
            'link_target' => '_self',
            'alt_text' => 'Logo IFC',
            'echo' => true
        );

        $args = wp_parse_args($args, $defaults);

        // Simular atributos do bloco
        $attributes = array(
            'campus' => $args['campus'],
            'orientation' => $args['orientation'],
            'variant' => $args['variant'],
            'width' => $args['width'],
            'height' => $args['height'],
            'linkUrl' => $args['link_url'],
            'linkTarget' => $args['link_target'],
            'altText' => $args['alt_text']
        );

        $html = ifc_ds_render_logo_block($attributes, '', null);

        if ($args['echo']) {
            echo $html;
        } else {
            return $html;
        }
    }
}

// Registrar o callback de renderização
return 'ifc_ds_render_logo_block';