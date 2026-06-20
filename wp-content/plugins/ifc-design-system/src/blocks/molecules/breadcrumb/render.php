<?php
/**
 * Render do bloco ifc-ds/breadcrumb.
 *
 * Acessibilidade:
 *  - eMAG 3.4 / WCAG 2.4.8 — informa ao usuário sua localização. O
 *    `<nav>` recebe `aria-label="Navegação estrutural"` para que
 *    leitores de tela diferenciem dele do menu principal.
 *  - A página atual é a última `<li>` com `aria-current="page"`
 *    (não é um link).
 *  - Cada separador é decorativo (`aria-hidden="true"`).
 *
 * @param array    $attributes
 * @param string   $content
 * @param WP_Block $block
 */

$items              = $attributes['items'] ?? [
    ['label' => 'Início', 'url' => '/', 'icon' => 'admin-home', 'id' => 1],
];
$current_page_title = $attributes['currentPageTitle'] ?? 'Página Atual';
$nav_label          = $attributes['ariaLabel'] ?? __('Navegação estrutural (você está em)', 'ifc-design-system');
$link_type          = 'neutral';
$link_size          = $attributes['linkSize'] ?? 'small';

$separator_svg = '<svg viewBox="0 0 20 20" role="presentation" focusable="false" aria-hidden="true"><path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>';
?>

<nav <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-breadcrumb']); ?> aria-label="<?php echo esc_attr($nav_label); ?>">
    <ol class="ifc-ds-breadcrumb__list">
        <?php foreach ($items as $index => $item) : ?>
            <li class="ifc-ds-breadcrumb__item">
                <?php
                echo ifc_ds_render_link([
                    'label'         => $item['label'],
                    'url'           => $item['url'],
                    'icon'          => $item['icon'] ?? '',
                    'icon_position' => 'left',
                    'type'          => $link_type,
                    'size'          => $link_size,
                    'weight'        => 'semibold',
                    'class'         => 'ifc-ds-breadcrumb__link',
                    'wrapper'       => true,
                ]);
                ?>
                <span class="ifc-ds-breadcrumb__separator" aria-hidden="true">
                    <?php echo $separator_svg; ?>
                </span>
            </li>
        <?php endforeach; ?>

        <li class="ifc-ds-breadcrumb__item ifc-ds-breadcrumb__item--current">
            <?php $current_classes = ifc_ds_build_text_classes('detail', 'regular', 'neutral', 'left', 'ifc-ds-breadcrumb__current'); ?>
            <span class="<?php echo esc_attr($current_classes); ?>" aria-current="page">
                <?php echo esc_html($current_page_title); ?>
            </span>
        </li>
    </ol>
</nav>
