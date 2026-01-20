<?php
/*
Template Name: Página do Curso
Description: Template editável para páginas de curso do IFC
*/

get_header();
?>

<!-- Barra do Governo Federal -->
<div id="barra-brasil" style="background:#7F7F7F; height: 20px; padding:0 0 0 10px;display:block;">
  <ul id="menu-barra-temp" style="list-style:none;">
    <li style="display:inline; float:left;padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED">
        <a href="http://brasil.gov.br" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Portal do Governo Brasileiro</a>
    </li>
    <li>
       <a style="font-family:sans,sans-serif; text-decoration:none; color:white;" href="http://epwg.governoeletronico.gov.br/barra/atualize.html">Atualize sua Barra de Governo</a>
    </li>
  </ul>
</div>

<?php
$header_output = '';
$main_output = '';
$footer_output = '';

while (have_posts()) : 
    the_post();
    
    $content = get_the_content();
    
    // Se não houver conteúdo, mostra template padrão
    if (empty(trim($content))) {
        // Renderiza um template padrão quando não há conteúdo
        $main_output = ifc_ds_get_default_course_content();
    } else {
        // Processa os blocos
        $blocks = parse_blocks($content);
        
        foreach ($blocks as $block) {
            // Ignora blocos vazios
            if (empty($block['blockName'])) {
                continue;
            }
            
            $rendered_block = render_block($block);
            
            // Separa header, footer e conteúdo principal
            switch ($block['blockName']) {
                case 'ifc-ds/header':
                    $header_output .= $rendered_block;
                    break;
                case 'ifc-ds/footer':
                    $footer_output .= $rendered_block;
                    break;
                default:
                    $main_output .= $rendered_block;
                    break;
            }
        }
    }
endwhile;

// Renderiza header
if (!empty($header_output)) {
    echo $header_output;
}

// Estilos específicos para o template de curso
?>
<style>
    .ifc-curso-template {
        width: 100%;
    }
    
    /* Layout Container com Grid de 12 colunas - Alta especificidade */
    .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 24px;
        width: 100%;
    }
    
    /* IMPORTANTE: Sobrescreve o padrão do plugin que define span 1 para todos os filhos */
    .ifc-ds-layout-container__content > .wp-block-group.col-span-3,
    .ifc-ds-layout-container__content > .col-span-3.wp-block-group,
    .wp-block-group.col-span-3 {
        grid-column: span 3 !important;
        min-width: 0;
    }
    
    .ifc-ds-layout-container__content > .wp-block-group.col-span-9,
    .ifc-ds-layout-container__content > .col-span-9.wp-block-group,
    .wp-block-group.col-span-9 {
        grid-column: span 9 !important;
        min-width: 0;
    }
    
    /* Estilos para fallback quando não há blocos */
    .ifc-curso-container {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .ifc-curso-sidebar {
        position: sticky;
        top: 20px;
        align-self: start;
    }
    
    .ifc-accordion details {
        transition: all 0.3s ease;
    }
    
    .ifc-accordion details:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .ifc-accordion summary::-webkit-details-marker {
        display: none;
    }
    
    .ifc-accordion summary::after {
        content: '▼';
        float: right;
        transition: transform 0.3s ease;
    }
    
    .ifc-accordion details[open] summary::after {
        transform: rotate(-180deg);
    }
    
    .ifc-accordion a {
        color: #0066cc;
        text-decoration: none;
        transition: color 0.2s ease;
    }
    
    .ifc-accordion a:hover {
        color: #004c99;
        text-decoration: underline;
    }
    
    /* Responsividade */
    @media (max-width: 1024px) {
        .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content {
            grid-template-columns: 1fr !important;
        }
        
        .wp-block-group.col-span-3,
        .wp-block-group.col-span-9 {
            grid-column: 1 / -1 !important;
        }
        
        .ifc-curso-container > div {
            grid-template-columns: 1fr !important;
        }
        
        .ifc-curso-sidebar {
            position: static;
        }
        
        .ifc-curso-info {
            grid-template-columns: repeat(2, 1fr) !important;
        }
    }
    
    @media (max-width: 640px) {
        .ifc-curso-info {
            grid-template-columns: 1fr !important;
        }
    }
</style>

<main id="main" class="ifc-curso-template">
    <?php 
    if (empty($main_output)) {
        echo '<div class="ifc-curso-template__empty" style="padding: 40px; text-align: center; background: #f5f5f5; margin: 20px;">';
        echo '<h2>Esta página ainda não possui conteúdo.</h2>';
        echo '<p>Edite a página no WordPress para adicionar o conteúdo do curso.</p>';
        echo '</div>';
    } else {
        echo $main_output;
    }
    ?>
</main>

<?php
// Renderiza footer
if (!empty($footer_output)) {
    echo $footer_output;
}

get_footer();
?>