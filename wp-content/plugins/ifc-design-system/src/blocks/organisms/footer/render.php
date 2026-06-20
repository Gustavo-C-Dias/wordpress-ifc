<?php
/**
 * Render do bloco ifc-ds/footer.
 *
 * Acessibilidade:
 *  - eMAG 1.8 — `<footer role="contentinfo">` agrupa as informações
 *    gerais do site (rodapé global). O ID `footer` é o alvo padrão do
 *    skip-link "Ir para o rodapé [4]".
 *  - eMAG 1.3 — cada seção de links tem um `<h2>` (configurável) para
 *    preservar a hierarquia de cabeçalhos.
 *  - eMAG 1.7 — links agrupados em `<ul>/<li>`, separados de forma
 *    semântica (não apenas por espaços).
 *  - eMAG 1.8 — `<address>` envolve as informações de contato.
 *
 * @param array    $attributes
 * @param string   $content
 * @param WP_Block $block
 */

$link_sections = isset($attributes['linkSections']) ? $attributes['linkSections'] : [];
$address       = isset($attributes['address']) ? $attributes['address'] : '';
$campus        = isset($attributes['campus']) ? $attributes['campus'] : '';
$heading_level = isset($attributes['sectionHeadingLevel']) ? (int) $attributes['sectionHeadingLevel'] : 2;
$heading_level = ($heading_level >= 2 && $heading_level <= 6) ? $heading_level : 2;
$heading_tag   = 'h' . $heading_level;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'ifc-ds-footer',
    'id'    => 'footer',
]);
?>

<footer <?php echo $wrapper_attributes; ?> role="contentinfo">
    <?php if (!empty($link_sections)) : ?>
        <div class="ifc-ds-footer__section-links">
            <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
                <div class="ifc-ds-layout-container__content">
                    <?php foreach ($link_sections as $section) : ?>
                        <section class="ifc-ds-footer__section" aria-labelledby="<?php echo esc_attr('ifc-footer-section-' . sanitize_title($section['titleSection'] ?? 'sec')); ?>">
                            <<?php echo esc_attr($heading_tag); ?>
                                id="<?php echo esc_attr('ifc-footer-section-' . sanitize_title($section['titleSection'] ?? 'sec')); ?>"
                                class="ifc-ds-footer__section-title <?php echo esc_attr(ifc_ds_build_text_classes('body', 'bold', 'neutral-100', 'left')); ?>"
                            >
                                <?php echo esc_html($section['titleSection'] ?? ''); ?>
                            </<?php echo esc_attr($heading_tag); ?>>

                            <ul class="ifc-ds-footer__links">
                                <?php foreach ($section['links'] as $link) : ?>
                                    <li class="ifc-ds-footer__link-item">
                                        <?php
                                        echo ifc_ds_render_link([
                                            'url'             => $link['url'],
                                            'label'           => $link['label'],
                                            'type'            => 'white',
                                            'size'            => 'detail',
                                            'open_in_new_tab' => !empty($link['openInNewTab']),
                                            'wrapper'         => false,
                                            'padding'         => [
                                                'top'    => '0-5',
                                                'right'  => '0',
                                                'bottom' => '0-5',
                                                'left'   => '2',
                                            ],
                                        ]);
                                        ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </section>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    <?php endif; ?>

    <div class="ifc-ds-footer__address">
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <address class="ifc-ds-footer__address-content">
                    <?php
                    if (!empty($campus)) {
                        echo ifc_ds_render_text([
                            'content'   => $campus,
                            'textType'  => 'detail',
                            'weight'    => 'regular',
                            'color'     => 'neutral-100',
                            'alignment' => 'center',
                            'tag'       => 'span',
                        ]);
                    }
                    if (!empty($address)) {
                        echo ifc_ds_render_text([
                            'content'   => $address,
                            'textType'  => 'detail',
                            'weight'    => 'regular',
                            'color'     => 'neutral-100',
                            'alignment' => 'center',
                            'tag'       => 'span',
                        ]);
                    }
                    ?>
                </address>
            </div>
        </div>
    </div>
</footer>
