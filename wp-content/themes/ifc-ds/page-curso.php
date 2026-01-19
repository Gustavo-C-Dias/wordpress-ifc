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
    
    /* Garante que as colunas do grid funcionem corretamente */
    .ifc-ds-layout-container__content {
        display: grid;
        gap: 24px;
    }
    
    /* Desktop: Grid 12 colunas */
    @media (min-width: 1280px) {
        .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content {
            grid-template-columns: repeat(12, 1fr);
        }
        
        .ifc-ds-layout-container__content .col-span-2 {
            grid-column: span 2;
        }
        
        .ifc-ds-layout-container__content .col-span-8 {
            grid-column: span 8;
        }
    }
    
    /* Tablet: Stack vertical */
    @media (max-width: 1279px) and (min-width: 768px) {
        .ifc-ds-layout-container__content .col-span-2,
        .ifc-ds-layout-container__content .col-span-8 {
            grid-column: span 8;
        }
    }
    
    /* Mobile: Full width */
    @media (max-width: 767px) {
        .ifc-ds-layout-container__content .col-span-2,
        .ifc-ds-layout-container__content .col-span-8 {
            grid-column: 1 / -1;
        }
    }
    
    /* Estilo do menu lateral (accordion) */
    .ifc-ds-layout-container__content .col-span-2 {
        position: sticky;
        top: 20px;
        align-self: start;
    }
    
    /* Conteúdo principal */
    .ifc-ds-layout-container__content .col-span-8 h1 {
        margin-top: 0;
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