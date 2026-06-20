<?php
/**
 * IFC Design System - Utilitários PHP Compartilhados
 *
 * Helpers reutilizáveis pelos render.php dos blocos.
 * Todas as funções são prefixadas com ifc_ds_* para evitar colisões.
 *
 * Acessibilidade: este arquivo concentra os helpers responsáveis por
 * construir markup conforme as recomendações do eMAG 3.1, WCAG 2.0 e
 * WAI-ARIA 1.1 (atributos `aria-*`, `accesskey`, `role`).
 */

if (!function_exists('ifc_ds_build_text_classes')) {
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
     *
     * eMAG 1.2 / 1.3 — marcação semântica e hierarquia de cabeçalhos.
     * O nível de cabeçalho (h1/h2/...) deve ser definido pelo autor do
     * conteúdo via filtro `ifc_ds_text_tag_for_type` quando necessário,
     * para evitar duplicação de h1 em uma mesma página.
     */
    function ifc_ds_get_html_tag_for_text_type($text_type) {
        $tag_map = [
            'title'    => 'h1',
            'subtitle' => 'h2',
            'body'     => 'p',
            'detail'   => 'p',
            'caption'  => 'span',
        ];

        $tag = isset($tag_map[$text_type]) ? $tag_map[$text_type] : 'p';

        return apply_filters('ifc_ds_text_tag_for_type', $tag, $text_type);
    }
}

if (!function_exists('ifc_ds_render_text')) {
    function ifc_ds_render_text($args = []) {
        $defaults = [
            'content'   => '',
            'textType'  => 'body',
            'weight'    => 'regular',
            'color'     => 'primary',
            'alignment' => 'left',
            'className' => '',
            'tag'       => '',
        ];

        $args = wp_parse_args($args, $defaults);

        if (empty($args['content'])) {
            return '';
        }

        $tag = !empty($args['tag'])
            ? $args['tag']
            : ifc_ds_get_html_tag_for_text_type($args['textType']);

        $allowed_tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'small', 'strong', 'em'];
        if (!in_array($tag, $allowed_tags, true)) {
            $tag = 'p';
        }

        $classes = ifc_ds_build_text_classes(
            $args['textType'],
            $args['weight'],
            $args['color'],
            $args['alignment'],
            $args['className']
        );

        return sprintf(
            '<%1$s class="%2$s">%3$s</%1$s>',
            esc_attr($tag),
            esc_attr($classes),
            wp_kses_post($args['content'])
        );
    }
}

if (!function_exists('ifc_ds_external_link_suffix')) {
    /**
     * Sufixo adicionado ao nome acessível de links que abrem em nova janela.
     *
     * eMAG 1.9 / WCAG 3.2.5 — quando for realmente necessária a abertura
     * de um link em nova janela é recomendado que tal ação seja informada
     * ao usuário no próprio texto do link.
     */
    function ifc_ds_external_link_suffix() {
        return apply_filters(
            'ifc_ds_external_link_suffix',
            __('(abre em nova janela)', 'ifc-design-system')
        );
    }
}

if (!function_exists('ifc_ds_render_navigation_skip_link')) {
    /**
     * Renderiza um único skip-link de acessibilidade.
     *
     * eMAG 1.5 / 4.1 — fornece âncoras para ir direto a um bloco de
     * conteúdo, com `accesskey` quando aplicável.
     */
    function ifc_ds_render_navigation_skip_link($link) {
        $target = isset($link['target']) ? $link['target'] : '#main';

        if (!str_starts_with($target, '#')) {
            $target = '#' . ltrim($target, '#');
        }

        $additional_attributes = [
            'aria-label' => isset($link['description']) && !empty($link['description'])
                ? $link['description']
                : $link['label'],
        ];

        if (!empty($link['accesskey'])) {
            $additional_attributes['accesskey'] = sanitize_text_field((string) $link['accesskey']);
        }

        return ifc_ds_render_link([
            'label'                 => $link['label'],
            'url'                   => $target,
            'type'                  => isset($link['type']) ? $link['type'] : 'white',
            'size'                  => isset($link['size']) ? $link['size'] : 'medium',
            'class'                 => 'ifc-ds-skip-navigation__link',
            'wrapper'               => true,
            'additional_attributes' => $additional_attributes,
        ]);
    }
}

if (!function_exists('ifc_ds_get_default_skip_links')) {
    /**
     * Retorna os skip-links padrão do governo federal.
     *
     * eMAG 4.1 — atalhos de teclado padronizados:
     *   accesskey 1 = Conteúdo
     *   accesskey 2 = Menu
     *   accesskey 3 = Busca
     *   accesskey 4 = Rodapé
     */
    function ifc_ds_get_default_skip_links() {
        return apply_filters('ifc_ds_default_skip_links', [
            [
                'id'          => 1,
                'label'       => __('Ir para o conteúdo [1]', 'ifc-design-system'),
                'target'      => '#main',
                'description' => __('Pula para o conteúdo principal da página', 'ifc-design-system'),
                'accesskey'   => '1',
            ],
            [
                'id'          => 2,
                'label'       => __('Ir para o menu [2]', 'ifc-design-system'),
                'target'      => '#nav',
                'description' => __('Pula para a navegação principal', 'ifc-design-system'),
                'accesskey'   => '2',
            ],
            [
                'id'          => 3,
                'label'       => __('Ir para a busca [3]', 'ifc-design-system'),
                'target'      => '#busca',
                'description' => __('Pula para o campo de busca', 'ifc-design-system'),
                'accesskey'   => '3',
            ],
            [
                'id'          => 4,
                'label'       => __('Ir para o rodapé [4]', 'ifc-design-system'),
                'target'      => '#footer',
                'description' => __('Pula para o rodapé da página', 'ifc-design-system'),
                'accesskey'   => '4',
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

if (!function_exists('ifc_ds_get_social_label')) {
    /**
     * Retorna o nome legível de uma plataforma social, usado como
     * `aria-label` em links que contêm apenas ícone (eMAG 3.5/3.6).
     */
    function ifc_ds_get_social_label($platform) {
        $labels = apply_filters('ifc_ds_social_labels', [
            'youtube'   => 'YouTube',
            'facebook'  => 'Facebook',
            'instagram' => 'Instagram',
            'twitter'   => 'Twitter',
            'linkedin'  => 'LinkedIn',
        ]);

        return isset($labels[$platform]) ? $labels[$platform] : ucfirst($platform);
    }
}
