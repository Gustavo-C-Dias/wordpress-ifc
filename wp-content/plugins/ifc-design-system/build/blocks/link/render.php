<?php
$link_args = [
    'label' => $attributes['label'] ?? 'Clique aqui',
    'url' => $attributes['url'] ?? '#',
    'icon' => $attributes['icon'] ?? '',
    'icon_position' => $attributes['iconPosition'] ?? 'left',
    'type' => $attributes['type'] ?? 'neutral',
    'size' => $attributes['size'] ?? 'medium',
    'padding' => $attributes['padding'] ?? [
        'top' => '0',
        'right' => '0',
        'bottom' => '0',
        'left' => '0'
    ],
    'open_in_new_tab' => $attributes['openInNewTab'] ?? false,
    'wrapper' => false // Usar get_block_wrapper_attributes no lugar do wrapper
];

$link_html = ifc_ds_render_link($link_args);
$wrapper_classes = [
    'ifc-ds-link',
    'ifc-ds-link--' . $link_args['type'],
    'ifc-ds-link--' . $link_args['size']
];
?>

<div <?php echo get_block_wrapper_attributes(['class' => implode(' ', $wrapper_classes)]); ?>>
    <?php echo $link_html; ?>
</div>