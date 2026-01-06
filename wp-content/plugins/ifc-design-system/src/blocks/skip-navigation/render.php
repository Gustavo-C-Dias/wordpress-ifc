<?php
$links = $attributes['links'] ?? [
    [
        'id' => 1,
        'label' => 'Ir para o conteúdo',
        'target' => '#main',
        'description' => 'Pula para o conteúdo principal da página'
    ],
    [
        'id' => 2,
        'label' => 'Ir para o menu',
        'target' => 'nav',
        'description' => 'Pula para a navegação principal'
    ],
    [
        'id' => 3,
        'label' => 'Ir para o rodapé',
        'target' => 'footer',
        'description' => 'Pula para o rodapé da página'
    ]
];

// Função ifc_ds_render_skip_navigation_link está definida em render-functions.php

?>

<div <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-skip-navigation']); ?>>
    <div class="ifc-ds-skip-navigation__container">
        <div class="ifc-ds-skip-navigation__links">
            <?php foreach ($links as $link): ?>
                <?php echo ifc_ds_render_skip_navigation_link($link); ?>
            <?php endforeach; ?>
        </div>
    </div>
</div>