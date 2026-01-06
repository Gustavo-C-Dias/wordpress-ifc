<?php
/**
 * Render do bloco Footer
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 */

$link_sections = isset($attributes['linkSections']) ? $attributes['linkSections'] : [];
$address = isset($attributes['address']) ? $attributes['address'] : '';

// Importar as funções de renderização do diretório pai
$render_functions_path = dirname(__FILE__, 2) . '/render-functions.php';
if (file_exists($render_functions_path)) {
    require_once $render_functions_path;
}
?>

<footer class="ifc-ds-footer">
    <div class="ifc-ds-footer__sections">
        <?php foreach ($link_sections as $section): ?>
            <div class="ifc-ds-footer__section">
                <?php
                // Renderizar título da seção usando o componente Text
                echo render_text_component([
                    'content' => $section['titleSection'],
                    'textType' => 'subtitle',
                    'weight' => 'bold',
                    'color' => 'primary',
                    'className' => 'ifc-ds-footer__section-title'
                ]);
                ?>
                <div class="ifc-ds-footer__links">
                    <?php foreach ($section['links'] as $link): ?>
                        <?php
                        // Renderizar cada link usando o componente Link
                        echo render_link_component([
                            'url' => $link['url'],
                            'label' => $link['label'],
                            'type' => 'neutral',
                            'size' => 'medium',
                            'className' => 'ifc-ds-footer__link'
                        ]);
                        ?>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <div class="ifc-ds-footer__address">
        <?php
        // Renderizar endereço usando o componente Text
        echo render_text_component([
            'content' => $address,
            'textType' => 'body',
            'weight' => 'regular',
            'color' => 'primary',
            'className' => 'ifc-ds-footer__address-text'
        ]);
        ?>
    </div>
</footer>
