<?php
/**
 * Render do bloco ifc-ds/accordion.
 *
 * Acessibilidade — segue o padrão WAI-ARIA Authoring Practices Guide
 * para o pattern "Accordion" e a Recomendação 1.2 do eMAG (marcação
 * semântica adequada):
 *
 *  - O título é um cabeçalho real (`<h2>`/`<h3>`/`<h4>` configurável)
 *    para preservar a hierarquia da página (eMAG 1.3 / WCAG 2.4.10).
 *  - O `<button>` fica DENTRO do cabeçalho — nunca o contrário.
 *  - `aria-expanded` reflete o estado, `aria-controls` aponta para o
 *    painel.
 *  - `type="button"` evita submit indesejado quando o accordion estiver
 *    em formulário.
 *  - O painel usa `role="region"` e `aria-labelledby` apontando para o
 *    título, tornando-o um marco navegável.
 *
 * @param array    $attributes
 * @param string   $content
 * @param WP_Block $block
 */

$title         = $attributes['title'] ?? 'Título do Accordion';
$is_open       = !empty($attributes['isOpen']);
$heading_level = isset($attributes['headingLevel']) ? (int) $attributes['headingLevel'] : 3;
$heading_level = ($heading_level >= 2 && $heading_level <= 6) ? $heading_level : 3;
$heading_tag   = 'h' . $heading_level;

$panel_id     = 'accordion-panel-' . wp_unique_id();
$button_id    = 'accordion-button-' . wp_unique_id();

$title_classes = ifc_ds_build_text_classes('body', 'bold', 'primary', 'left', 'ifc-ds-accordion__title-text');
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-accordion']); ?>>
    <<?php echo esc_attr($heading_tag); ?> class="ifc-ds-accordion__title">
        <button
            type="button"
            id="<?php echo esc_attr($button_id); ?>"
            class="ifc-ds-accordion__toggle <?php echo $is_open ? 'is-open' : ''; ?>"
            aria-expanded="<?php echo $is_open ? 'true' : 'false'; ?>"
            aria-controls="<?php echo esc_attr($panel_id); ?>"
        >
            <span class="<?php echo esc_attr($title_classes); ?>">
                <?php echo esc_html($title); ?>
            </span>
            <span class="ifc-ds-accordion__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                    <path d="M7 9.5L12 14.5L17 9.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </button>
    </<?php echo esc_attr($heading_tag); ?>>

    <div
        id="<?php echo esc_attr($panel_id); ?>"
        class="ifc-ds-accordion__content <?php echo $is_open ? 'is-open' : ''; ?>"
        role="region"
        aria-labelledby="<?php echo esc_attr($button_id); ?>"
        <?php echo $is_open ? '' : 'hidden'; ?>
    >
        <div class="ifc-ds-accordion__items">
            <?php echo $content; ?>
        </div>
    </div>
</div>
