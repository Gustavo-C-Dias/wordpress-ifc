<?php
/**
 * @param array $attributes 
 * @param string $content    
 * @param WP_Block $block      
 */

$link_sections = isset($attributes['linkSections']) ? $attributes['linkSections'] : [];
$address = isset($attributes['address']) ? $attributes['address'] : '';
$campus = isset($attributes['campus']) ? $attributes['campus'] : '';
?>

<footer id="footer" class="ifc-ds-footer">
    <div class="ifc-ds-footer__section-links">
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <?php foreach ($link_sections as $section): ?>
                    <div class="ifc-ds-footer__section">
                        <?php
                        echo ifc_ds_render_text([
                            'content' => $section['titleSection'],
                            'textType' => 'body',
                            'weight' => 'bold',
                            'color' => 'neutral-100',
                        ]);
                        ?>
                        <div class="ifc-ds-footer__links">
                            <?php foreach ($section['links'] as $link): ?>
                                <?php
                                    echo ifc_ds_render_link([
                                        'url' => $link['url'],
                                        'label' => $link['label'],
                                        'type' => 'white',
                                        'size' => 'detail',
                                        'padding' => [
                                            'top' => '0-5',
                                            'right' => '0',
                                            'bottom' => '0-5',
                                            'left' => '2'
                                        ]   
                                    ]);
                                ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <div class="ifc-ds-footer__address">
        <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div class="ifc-ds-layout-container__content">
                <div class="ifc-ds-footer__address-content">
                    <?php
                    echo ifc_ds_render_text([
                        'content' => $campus,
                        'textType' => 'detail',
                        'weight' => 'regular',
                        'color' => 'neutral-100',
                        'alignment' => 'center'
                    ]);
                    ?>
                    <?php
                    echo ifc_ds_render_text([
                        'content' => $address,
                        'textType' => 'detail',
                        'weight' => 'regular',
                        'color' => 'neutral-100',
                        'alignment' => 'center'
                    ]);
                    ?>
                </div>
            </div>
        </div>
    </div>
</footer>
