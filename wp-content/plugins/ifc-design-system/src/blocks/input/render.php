<?php
$wrapper_classes = [
    'ifc-ds-input-wrapper--' . ($attributes['variant'] ?? 'default'),
];

if (!empty($attributes['icon'])) {
    $wrapper_classes[] = 'ifc-ds-input-wrapper--with-icon';
}

if ($attributes['disabled'] ?? false) {
    $wrapper_classes[] = 'ifc-ds-input-wrapper--disabled';
}

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
    'wrapper_class' => implode(' ', array_filter($wrapper_classes))
];

$input_html = ifc_ds_render_input($input_args);
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-input']); ?>>
    <?php echo $input_html; ?>
</div>