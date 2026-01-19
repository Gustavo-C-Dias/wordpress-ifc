<?php
/**
 * Tema Base IFC Design System - Versão Limpa
 * 
 * Este tema fornece apenas a estrutura base e tokens de design.
 * Os componentes são fornecidos pelo plugin IFC Design System.
 */

// Evita acesso direto
if (!defined('ABSPATH')) {
    exit;
}

// Suporte a recursos do WordPress
function ifc_ds_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
}
add_action('after_setup_theme', 'ifc_ds_theme_setup');

// Registra templates customizados
function ifc_ds_register_page_templates($templates) {
    $templates['page-curso.php'] = 'Página de Curso IFC';
    return $templates;
}
add_filter('theme_page_templates', 'ifc_ds_register_page_templates');

// Registra categoria para padrões de blocos
function ifc_ds_register_block_pattern_categories() {
    register_block_pattern_category(
        'ifc-ds',
        array('label' => __('IFC Design System', 'ifc-ds'))
    );
}
add_action('init', 'ifc_ds_register_block_pattern_categories');

// Registra padrão de blocos para template de curso
function ifc_ds_register_block_patterns() {
    $curso_pattern_content = '<!-- wp:ifc-ds/header /-->

<!-- wp:ifc-ds/layout-container {"containerType":"fixed","maxColumns":12,"verticalSpacing":"large","horizontalAlignment":"center"} -->
<!-- wp:group {"className":"col-span-2"} -->
<div class="wp-block-group col-span-2">
<!-- wp:ifc-ds/accordion {"title":"Menu do Curso","items":[{"id":1,"type":"link","label":"Sobre o Curso","url":"#sobre"},{"id":2,"type":"link","label":"Matriz Curricular","url":"#matriz"},{"id":3,"type":"link","label":"Professores","url":"#professores"},{"id":4,"type":"link","label":"Infraestrutura","url":"#infraestrutura"},{"id":5,"type":"link","label":"Contato","url":"#contato"}],"isOpen":true} /-->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-span-8"} -->
<div class="wp-block-group col-span-8">
<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Nome do Curso</h1>
<!-- /wp:heading -->

<!-- wp:heading {"level":2,"anchor":"sobre"} -->
<h2 class="wp-block-heading" id="sobre">Sobre o Curso</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Este curso tem como objetivo formar profissionais qualificados para atuar em diferentes áreas do conhecimento.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Objetivos</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
<li>Formar profissionais com sólida base técnica e científica</li>
<li>Desenvolver competências para atuação no mercado de trabalho</li>
<li>Promover a pesquisa e extensão na área do curso</li>
<li>Contribuir para o desenvolvimento regional</li>
</ul>
<!-- /wp:list -->

<!-- wp:heading {"level":2,"anchor":"matriz"} -->
<h2 class="wp-block-heading" id="matriz">Matriz Curricular</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Adicione aqui a matriz curricular do curso.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2,"anchor":"professores"} -->
<h2 class="wp-block-heading" id="professores">Professores</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Apresente a equipe de professores do curso.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2,"anchor":"infraestrutura"} -->
<h2 class="wp-block-heading" id="infraestrutura">Infraestrutura</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Descreva a infraestrutura disponível para o curso.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2,"anchor":"contato"} -->
<h2 class="wp-block-heading" id="contato">Contato</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Coordenação:</strong> [Nome do coordenador]<br><strong>E-mail:</strong> [email@ifc.edu.br]<br><strong>Telefone:</strong> [(XX) XXXX-XXXX]</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-span-2"} -->
<div class="wp-block-group col-span-2">
<!-- wp:ifc-ds/accordion {"title":"Links Úteis","items":[{"id":1,"type":"link","label":"Regulamento do Curso","url":"#regulamento"},{"id":2,"type":"link","label":"Calendário Acadêmico","url":"#calendario"},{"id":3,"type":"link","label":"Processo Seletivo","url":"#processo"},{"id":4,"type":"link","label":"Documentos","url":"#documentos"}],"isOpen":true} /-->
</div>
<!-- /wp:group -->
<!-- /wp:ifc-ds/layout-container -->

<!-- wp:ifc-ds/footer /-->'; 

    register_block_pattern(
        'ifc-ds/template-curso-padrao',
        array(
            'title'         => __('Template Padrão de Curso IFC', 'ifc-ds'),
            'description'   => __('Layout completo para páginas de curso com header, grid 2-8-2, menus e footer', 'ifc-ds'),
            'categories'    => array('ifc-ds'),
            'keywords'      => array('curso', 'ifc', 'template', 'layout'),
            'blockTypes'    => array('core/post-content'),
            'content'       => $curso_pattern_content,
        )
    );
}
add_action('init', 'ifc_ds_register_block_patterns');

// Carrega script para auto-inserir conteúdo no editor Gutenberg
function ifc_ds_enqueue_editor_assets() {
    // Só carrega no editor de páginas
    $screen = get_current_screen();
    if (!$screen || $screen->id !== 'page') {
        return;
    }
    
    // Verifica permissões
    if (!current_user_can('edit_pages')) {
        return;
    }
    
    $script_path = get_template_directory() . '/assets/js/template-auto-content.js';
    
    if (file_exists($script_path)) {
        wp_enqueue_script(
            'ifc-ds-template-auto-content',
            get_template_directory_uri() . '/assets/js/template-auto-content.js',
            array('wp-blocks', 'wp-data', 'wp-block-editor', 'wp-element'),
            filemtime($script_path), // Usa timestamp do arquivo para cache busting
            true
        );

        // Adiciona flag de debug se WP_DEBUG estiver ativo
        wp_add_inline_script(
            'ifc-ds-template-auto-content',
            'window.IFC_DEBUG = ' . (defined('WP_DEBUG') && WP_DEBUG ? 'true' : 'false') . ';',
            'before'
        );
    }
}
add_action('enqueue_block_editor_assets', 'ifc_ds_enqueue_editor_assets');

/**
 * Retorna o conteúdo padrão do curso para uso no template PHP
 * Usado quando a página está vazia no frontend
 */
function ifc_ds_get_default_course_content() {
    ob_start();
    ?>
    <div class="ifc-ds-layout-container ifc-ds-layout-container--fixed ifc-ds-layout-container--spacing-large ifc-ds-layout-container--align-center ifc-ds-layout-container--columns-12">
        <div class="ifc-ds-layout-container__content">
            <div class="wp-block-group col-span-2">
                <div class="ifc-ds-accordion" data-is-open="true">
                    <button class="ifc-ds-accordion__header" aria-expanded="true">
                        <span class="ifc-ds-accordion__title">Menu do Curso</span>
                        <span class="ifc-ds-accordion__icon"></span>
                    </button>
                    <div class="ifc-ds-accordion__content">
                        <ul>
                            <li><a href="#sobre">Sobre o Curso</a></li>
                            <li><a href="#matriz">Matriz Curricular</a></li>
                            <li><a href="#professores">Professores</a></li>
                            <li><a href="#infraestrutura">Infraestrutura</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="wp-block-group col-span-8">
                <h1>Nome do Curso</h1>
                
                <h2 id="sobre">Sobre o Curso</h2>
                <p>Este curso tem como objetivo formar profissionais qualificados para atuar em diferentes áreas do conhecimento.</p>
                
                <h3>Objetivos</h3>
                <ul>
                    <li>Formar profissionais com sólida base técnica e científica</li>
                    <li>Desenvolver competências para atuação no mercado de trabalho</li>
                    <li>Promover a pesquisa e extensão na área do curso</li>
                    <li>Contribuir para o desenvolvimento regional</li>
                </ul>
                
                <h2 id="matriz">Matriz Curricular</h2>
                <p>Adicione aqui a matriz curricular do curso.</p>
                
                <h2 id="professores">Professores</h2>
                <p>Apresente a equipe de professores do curso.</p>
                
                <h2 id="infraestrutura">Infraestrutura</h2>
                <p>Descreva a infraestrutura disponível para o curso.</p>
                
                <h2 id="contato">Contato</h2>
                <p>
                    <strong>Coordenação:</strong> [Nome do coordenador]<br>
                    <strong>E-mail:</strong> [email@ifc.edu.br]<br>
                    <strong>Telefone:</strong> [(XX) XXXX-XXXX]
                </p>
            </div>
            
            <div class="wp-block-group col-span-2">
                <div class="ifc-ds-accordion" data-is-open="true">
                    <button class="ifc-ds-accordion__header" aria-expanded="true">
                        <span class="ifc-ds-accordion__title">Links Úteis</span>
                        <span class="ifc-ds-accordion__icon"></span>
                    </button>
                    <div class="ifc-ds-accordion__content">
                        <ul>
                            <li><a href="#regulamento">Regulamento do Curso</a></li>
                            <li><a href="#calendario">Calendário Acadêmico</a></li>
                            <li><a href="#processo">Processo Seletivo</a></li>
                            <li><a href="#documentos">Documentos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}

// Adiciona estilos do editor para o template de curso
function ifc_ds_add_editor_styles() {
    $custom_css = '
        /* Estilos para o editor Gutenberg - Template de Curso */
        .editor-styles-wrapper .col-span-2 {
            grid-column: span 2;
            min-width: 0;
        }
        
        .editor-styles-wrapper .col-span-8 {
            grid-column: span 8;
            min-width: 0;
        }
        
        .editor-styles-wrapper .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 24px;
        }
        
        /* Indicadores visuais no editor */
        .editor-styles-wrapper .col-span-2,
        .editor-styles-wrapper .col-span-8 {
            border: 1px dashed #ccc;
            padding: 16px;
            border-radius: 4px;
        }
        
        .editor-styles-wrapper .col-span-2:hover,
        .editor-styles-wrapper .col-span-8:hover {
            border-color: #007cba;
        }
    ';
    
    wp_add_inline_style('wp-edit-blocks', $custom_css);
}
add_action('enqueue_block_editor_assets', 'ifc_ds_add_editor_styles');

// Debug: Adiciona botão de reset na tela de edição (apenas em desenvolvimento)
if (defined('WP_DEBUG') && WP_DEBUG) {
    function ifc_ds_add_debug_info() {
        global $post;
        if ($post && $post->post_type === 'page') {
            $template = get_page_template_slug($post->ID);
            if ($template === 'page-curso.php') {
                echo '<div style="margin: 10px 0; padding: 10px; background: #fff3cd; border: 1px solid #ffc107; border-radius: 4px;">';
                echo '<strong>🛠 Debug IFC Template:</strong> Template "Página de Curso" ativo<br>';
                echo '<small>O template será carregado automaticamente se a página estiver vazia.</small>';
                echo '</div>';
            }
        }
    }
    add_action('edit_form_after_title', 'ifc_ds_add_debug_info');
}