<?php
$input_args = [
    'label' => $attributes['label'] ?? '',
    'placeholder' => $attributes['placeholder'] ?? '',
    'caption' => $attributes['caption'] ?? '',
    'icon' => $attributes['icon'] ?? '',
    'input_type' => $attributes['inputType'] ?? 'text',
    'input_name' => $attributes['inputName'] ?? '',
    'input_id' => $attributes['inputId'] ?? '',
    'required' => $attributes['required'] ?? false,
    'disabled' => $attributes['disabled'] ?? false,
    'variant' => $attributes['variant'] ?? 'default',
    'padding' => $attributes['padding'] ?? [
        'top' => '0',
        'right' => '0',
        'bottom' => '0',
        'left' => '0'
    ],
    'wrapper' => false
];

$input_html = ifc_ds_render_input($input_args);

$wrapper_classes = [
    'ifc-ds-input-wrapper',
    'ifc-ds-input-wrapper--' . $input_args['variant']
];

if (!empty($input_args['icon'])) {
    $wrapper_classes[] = 'ifc-ds-input-wrapper--with-icon';
}

if ($input_args['disabled']) {
    $wrapper_classes[] = 'ifc-ds-input-wrapper--disabled';
}
?>

<div <?php echo get_block_wrapper_attributes(['class' => implode(' ', $wrapper_classes)]); ?>>
    <?php echo $input_html; ?>
</div>