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

// Registra padrão de blocos para template de curso
function ifc_ds_register_block_patterns() {
    register_block_pattern(
        'ifc-ds/template-curso-padrao',
        array(
            'title'         => __('Template Padrão de Curso IFC', 'ifc-ds'),
            'description'   => __('Layout padrão para páginas de curso com componentes do IFC', 'ifc-ds'),
            'categories'    => array('ifc-ds'),
            'content'       => '<!-- wp:ifc-ds/header /-->

<!-- wp:ifc-ds/accordion {"title":"Menu do Curso","content":"<ul><li><a href=\"#sobre\">Sobre o Curso</a></li><li><a href=\"#matriz\">Matriz Curricular</a></li><li><a href=\"#professores\">Professores</a></li><li><a href=\"#contato\">Contato</a></li></ul>"} /-->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Sobre o Curso</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Este curso tem como objetivo formar profissionais qualificados para atuar em diferentes áreas do conhecimento.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Contato</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Coordenação:</strong> [Nome do coordenador]<br><strong>E-mail:</strong> [email@ifc.edu.br]</p>
<!-- /wp:paragraph -->',
        )
    );
}
add_action('init', 'ifc_ds_register_block_patterns');

// Registra categoria para padrões de blocos
function ifc_ds_register_block_pattern_categories() {
    register_block_pattern_category(
        'ifc-ds',
        array('label' => __('IFC Design System', 'ifc-ds'))
    );
}
add_action('init', 'ifc_ds_register_block_pattern_categories');

// Carrega script para auto-inserir conteúdo no editor
function ifc_ds_enqueue_editor_assets() {
    // Só carrega no editor de páginas
    $screen = get_current_screen();
    if (!$screen || ($screen->id !== 'page' && $screen->base !== 'post')) {
        return;
    }
    
    // Verifica permissões
    if (!current_user_can('edit_posts')) {
        return;
    }
    
    $script_path = get_template_directory() . '/assets/js/template-auto-content.js';
    
    if (file_exists($script_path)) {
        wp_enqueue_script(
            'ifc-ds-template-auto-content',
            get_template_directory_uri() . '/assets/js/template-auto-content.js',
            array('jquery', 'wp-blocks', 'wp-data', 'wp-block-editor'),
            '1.0.2',
            true
        );
    }
}
add_action('admin_enqueue_scripts', 'ifc_ds_enqueue_editor_assets');

// Hook para inserir conteúdo automaticamente - versão estável
function ifc_ds_auto_insert_template_content($post_id, $post, $update) {
    // Validações de segurança rigorosas
    if ($update || 
        $post->post_type !== 'page' || 
        !current_user_can('edit_post', $post_id) ||
        wp_is_post_revision($post_id) ||
        wp_is_post_autosave($post_id)) {
        return;
    }
    
    // Só funciona se o template for page-curso.php
    $template = get_page_template_slug($post_id);
    if ($template !== 'page-curso.php') {
        return;
    }
    
    // Só insere conteúdo se a página estiver completamente vazia
    if (!empty(trim($post->post_content))) {
        return;
    }
    
    // Verifica se não foi processado antes
    if (get_post_meta($post_id, '_ifc_template_content_inserted', true)) {
        return;
    }
    
    // Conteúdo simplificado para evitar conflitos
    $default_content = '<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Sobre o Curso</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Este curso tem como objetivo formar profissionais qualificados para atuar em diferentes áreas do conhecimento.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Contato</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Coordenação:</strong> [Nome do coordenador]<br><strong>E-mail:</strong> [email@ifc.edu.br]</p>
<!-- /wp:paragraph -->';
    
    // Atualização segura sem remoção de hooks
    $result = wp_update_post(array(
        'ID' => $post_id,
        'post_content' => $default_content
    ), true);
    
    // Marca como processado apenas se bem-sucedida
    if (!is_wp_error($result)) {
        update_post_meta($post_id, '_ifc_template_content_inserted', true);
    }
}
add_action('wp_insert_post', 'ifc_ds_auto_insert_template_content', 10, 3);

// Hook simplificado para mudanças de template (desabilitado temporariamente para estabilidade)
// add_action('admin_init', 'ifc_ds_handle_template_change');

// Função para limpar meta em caso de problemas (apenas para debug)
function ifc_ds_reset_template_meta($post_id = null) {
    if ($post_id && current_user_can('edit_post', $post_id)) {
        delete_post_meta($post_id, '_ifc_template_content_inserted');
        return true;
    }
    return false;
}

// Adiciona um botão de reset na tela de edição (apenas para desenvolvimento)
if (defined('WP_DEBUG') && WP_DEBUG) {
    function ifc_ds_add_reset_button() {
        global $post;
        if ($post && $post->post_type === 'page' && get_page_template_slug($post->ID) === 'page-curso.php') {
            echo '<div style="margin: 10px 0; padding: 10px; background: #f0f0f1; border: 1px solid #ddd;">
                    <strong>Debug IFC Template:</strong> 
                    <a href="?reset_template_meta=1&post=' . $post->ID . '" class="button">Limpar Meta e Recarregar Template</a>
                  </div>';
        }
    }
    add_action('edit_form_after_title', 'ifc_ds_add_reset_button');
    
    // Processa o reset
    if (isset($_GET['reset_template_meta']) && isset($_GET['post'])) {
        $post_id = intval($_GET['post']);
        if (ifc_ds_reset_template_meta($post_id)) {
            wp_redirect(admin_url('post.php?post=' . $post_id . '&action=edit&template_reset=1'));
            exit;
        }
    }
}