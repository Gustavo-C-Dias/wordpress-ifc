<?php
/**
 * Render do bloco ifc-ds/input.
 *
 * Acessibilidade:
 *  - eMAG 6.2 — `<label>` é obrigatório para qualquer campo; quando o
 *    bloco for usado sem label visível (ex.: campo de busca no header),
 *    o autor deve fornecer `aria_label` ou ativar `hideLabel=true`.
 *  - eMAG 6.5 — `required` é refletido tanto pelo atributo HTML5 quanto
 *    por `aria-required="true"`.
 */

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
    'label'         => $attributes['label'] ?? '',
    'aria_label'    => $attributes['ariaLabel'] ?? '',
    'placeholder'   => $attributes['placeholder'] ?? '',
    'caption'       => $attributes['caption'] ?? '',
    'icon'          => $attributes['icon'] ?? '',
    'input_type'    => $attributes['inputType'] ?? 'text',
    'input_name'    => $attributes['inputName'] ?? '',
    'input_id'      => $attributes['inputId'] ?? '',
    'required'      => $attributes['required'] ?? false,
    'disabled'      => $attributes['disabled'] ?? false,
    'variant'       => $attributes['variant'] ?? 'default',
    'hide_label'    => $attributes['hideLabel'] ?? false,
    'autocomplete'  => $attributes['autocomplete'] ?? '',
    'padding'       => $attributes['padding'] ?? [
        'top'    => '0',
        'right'  => '0',
        'bottom' => '0',
        'left'   => '0',
    ],
    'wrapper_class' => implode(' ', array_filter($wrapper_classes)),
];

$input_html = ifc_ds_render_input($input_args);
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-input']); ?>>
    <?php echo $input_html; ?>
</div>
