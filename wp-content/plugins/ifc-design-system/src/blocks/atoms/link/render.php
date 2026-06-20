<?php
/**
 * Render do bloco ifc-ds/link.
 *
 * Acessibilidade:
 *  - Wrapper é `<span>` (inline) — `<a>` não pode estar dentro de `<div>` em
 *    contextos inline (eMAG 1.1 / Padrões W3C).
 *  - Quando `openInNewTab=true` o helper anexa "(abre em nova janela)" ao
 *    nome acessível (eMAG 1.9 / WCAG 3.2.5).
 */

$link_args = [
    'label'           => $attributes['label'] ?? 'Clique aqui',
    'url'             => $attributes['url'] ?? '#',
    'icon'            => $attributes['icon'] ?? '',
    'icon_position'   => $attributes['iconPosition'] ?? 'left',
    'type'            => $attributes['type'] ?? 'neutral',
    'size'            => $attributes['size'] ?? 'medium',
    'weight'          => $attributes['weight'] ?? 'regular',
    'padding'         => $attributes['padding'] ?? [
        'top'    => '0',
        'right'  => '0',
        'bottom' => '0',
        'left'   => '0',
    ],
    'open_in_new_tab' => $attributes['openInNewTab'] ?? false,
    'wrapper'         => false,
];

$link_html = ifc_ds_render_link($link_args);

$wrapper_classes = [
    'ifc-ds-link',
    'ifc-ds-link--' . $link_args['type'],
    'ifc-ds-link--' . $link_args['size'],
];
?>

<span <?php echo get_block_wrapper_attributes(['class' => implode(' ', $wrapper_classes)]); ?>>
    <?php echo $link_html; ?>
</span>
