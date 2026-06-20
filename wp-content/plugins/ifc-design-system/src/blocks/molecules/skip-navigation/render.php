<?php
/**
 * Render do bloco ifc-ds/skip-navigation.
 *
 * Acessibilidade:
 *  - eMAG 1.5 / WCAG 2.4.1 — provê âncoras para os blocos principais
 *    da página (conteúdo, menu, busca e rodapé).
 *  - eMAG 4.1 — atalhos de teclado padronizados via `accesskey`:
 *      1 = Conteúdo, 2 = Menu, 3 = Busca, 4 = Rodapé.
 *  - O wrapper é um `<nav>` com `aria-label` para que leitores de
 *    tela exponham essa região como "Atalhos de acessibilidade".
 */

$links = $attributes['links'] ?? ifc_ds_get_default_skip_links();
$nav_label = $attributes['ariaLabel'] ?? __('Atalhos de acessibilidade', 'ifc-design-system');
?>

<nav <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-skip-navigation']); ?> aria-label="<?php echo esc_attr($nav_label); ?>">
    <div class="ifc-ds-skip-navigation__container">
        <ul class="ifc-ds-skip-navigation__links">
            <?php foreach ($links as $link) : ?>
                <li class="ifc-ds-skip-navigation__item">
                    <?php echo ifc_ds_render_navigation_skip_link($link); ?>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</nav>
