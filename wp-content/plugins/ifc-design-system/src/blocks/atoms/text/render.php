<?php
/**
 * Render do bloco ifc-ds/text.
 *
 * Acessibilidade:
 *  - eMAG 1.2 / 1.3 — utiliza marcação semântica adequada para cada
 *    `textType`. Para evitar múltiplos `<h1>` na mesma página, o
 *    autor pode informar `tag` explicitamente (h2/h3/...).
 *  - O alinhamento vem de classes BEM (`ifc-ds-text--align-*`); o
 *    estilo inline foi removido para reduzir duplicação.
 */

if (!function_exists('ifc_ds_render_text_block')) {
    function ifc_ds_render_text_block($attributes, $content, $block) {
        $text_content = isset($attributes['content']) ? $attributes['content'] : '';

        if (empty($text_content)) {
            return '';
        }

        return ifc_ds_render_text([
            'content'   => $text_content,
            'textType'  => isset($attributes['textType']) ? $attributes['textType'] : 'body',
            'weight'    => isset($attributes['weight']) ? $attributes['weight'] : 'regular',
            'color'     => isset($attributes['color']) ? $attributes['color'] : 'primary',
            'alignment' => isset($attributes['alignment']) ? $attributes['alignment'] : 'left',
            'className' => isset($attributes['className']) ? $attributes['className'] : '',
            'tag'       => isset($attributes['tag']) ? $attributes['tag'] : '',
        ]);
    }
}

echo ifc_ds_render_text_block($attributes, $content, $block);
