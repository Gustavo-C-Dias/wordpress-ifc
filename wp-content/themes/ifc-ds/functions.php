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

// Registra padrões de blocos para templates
function ifc_ds_register_block_patterns() {
    
    // Padrão: Template de Curso Completo
    register_block_pattern(
        'ifc-ds/template-curso',
        array(
            'title'       => __('Página de Curso IFC', 'ifc-ds'),
            'description' => __('Template completo para páginas de curso com header, sidebar, conteúdo e footer', 'ifc-ds'),
            'categories'  => array('ifc-ds'),
            'keywords'    => array('curso', 'template', 'ifc', 'educação'),
            'content'     => ifc_ds_get_curso_pattern_content(),
        )
    );
    
    // Padrão: Sidebar com Accordions
    register_block_pattern(
        'ifc-ds/sidebar-accordions',
        array(
            'title'       => __('Sidebar com Accordions', 'ifc-ds'),
            'description' => __('Menu lateral com accordions para navegação', 'ifc-ds'),
            'categories'  => array('ifc-ds'),
            'content'     => ifc_ds_get_sidebar_pattern_content(),
        )
    );
    
    // Padrão: Card de Informações
    register_block_pattern(
        'ifc-ds/info-card',
        array(
            'title'       => __('Card de Informações do Curso', 'ifc-ds'),
            'description' => __('Card com informações básicas do curso', 'ifc-ds'),
            'categories'  => array('ifc-ds'),
            'content'     => '<!-- wp:ifc-ds/container {"listMode":true,"listDirection":"horizontal","backgroundColor":"neutral-200","padding":{"top":"4","right":"4","bottom":"4","left":"4"},"listItems":[{"label":"Duração","value":"4 anos","type":"text"},{"label":"Modalidade","value":"Presencial","type":"text"},{"label":"Carga Horária","value":"3.200 horas","type":"text"},{"label":"Período","value":"Noturno","type":"text"}]} /-->',
        )
    );
}
add_action('init', 'ifc_ds_register_block_patterns');

/**
 * Conteúdo do padrão de curso completo
 */
function ifc_ds_get_curso_pattern_content() {
    return '<!-- wp:ifc-ds/header /-->

<!-- wp:ifc-ds/layout-container {"containerType":"fixed","maxColumns":12} -->
<!-- wp:group {"tagName":"div","className":"ifc-ds-curso-breadcrumb col-span-full","layout":{"type":"default"}} -->
<!-- wp:ifc-ds/breadcrumb {"items":[{"label":"IFC Camboriú","url":"/"},{"label":"Cursos","url":"/cursos"},{"label":"Nome do Curso","url":""}]} /-->
<!-- /wp:group -->

<!-- wp:group {"tagName":"div","className":"ifc-ds-curso-sidebar","layout":{"type":"default"}} -->
<!-- wp:ifc-ds/accordion {"title":"Aluno","isOpen":false} -->
<!-- wp:paragraph -->
<p><a href="#matricula">Matrícula</a><br><a href="#calendario">Calendário Acadêmico</a><br><a href="#biblioteca">Biblioteca</a></p>
<!-- /wp:paragraph -->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"Documentação","isOpen":false} -->
<!-- wp:paragraph -->
<p><a href="#ppc">Projeto Pedagógico</a><br><a href="#regulamentos">Regulamentos</a></p>
<!-- /wp:paragraph -->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"Coordenação","isOpen":false} -->
<!-- wp:paragraph -->
<p><a href="#coordenador">Coordenador</a><br><a href="#contato">Contato</a></p>
<!-- /wp:paragraph -->
<!-- /wp:ifc-ds/accordion -->
<!-- /wp:group -->


<!-- wp:group {"tagName":"div","className":"ifc-ds-curso-main","layout":{"type":"default"}} -->
<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Nome do Curso</h1>
<!-- /wp:heading -->

<!-- wp:ifc-ds/container {"listMode":true,"listDirection":"horizontal","backgroundColor":"neutral-200","padding":{"top":"4","right":"4","bottom":"4","left":"4"},"listItems":[{"label":"Duração","value":"4 anos","type":"text"},{"label":"Modalidade","value":"Presencial","type":"text"},{"label":"Carga Horária","value":"3.200h","type":"text"},{"label":"Vagas","value":"40","type":"text"}]} /-->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Sobre o Curso</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Descrição do curso...</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Mercado de Trabalho</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Informações sobre mercado de trabalho...</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Contato</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Informações de contato...</p>
<!-- /wp:paragraph -->
<!-- /wp:group -->
<!-- /wp:ifc-ds/layout-container -->

<!-- wp:ifc-ds/footer /-->';
}

/**
 * Conteúdo do padrão de sidebar
 */
function ifc_ds_get_sidebar_pattern_content() {
    return '<!-- wp:group {"tagName":"div","className":"col-span-3"} -->
<!-- wp:ifc-ds/accordion {"title":"Menu 1","isOpen":false} -->
<!-- wp:paragraph -->
<p><a href="#">Link 1</a><br><a href="#">Link 2</a><br><a href="#">Link 3</a></p>
<!-- /wp:paragraph -->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"Menu 2","isOpen":false} -->
<!-- wp:paragraph -->
<p><a href="#">Link 1</a><br><a href="#">Link 2</a></p>
<!-- /wp:paragraph -->
<!-- /wp:ifc-ds/accordion -->
<!-- /wp:group -->';
}

// Estilos do editor para templates (não carrega mais script de auto-content)
function ifc_ds_enqueue_editor_assets() {
    // Fluxo adotado: inserção manual via Block Patterns.
    // O usuário pode inserir patterns via: + > Patterns > IFC Design System.
}
add_action('enqueue_block_editor_assets', 'ifc_ds_enqueue_editor_assets');

function ifc_ds_force_curso_layout_wrappers($block_content, $block) {
    if (is_admin()) {
        return $block_content;
    }

    if (($block['blockName'] ?? '') !== 'ifc-ds/layout-container') {
        return $block_content;
    }

    if (strpos($block_content, 'ifc-ds-layout-container__content') === false) {
        return $block_content;
    }

    if (strpos($block_content, 'ifc-ds-curso-sidebar') !== false && strpos($block_content, 'ifc-ds-curso-main') !== false) {
        return $block_content;
    }

    if (strpos($block_content, 'ifc-ds-accordion') === false && strpos($block_content, 'wp-block-ifc-ds-accordion') === false) {
        return $block_content;
    }

    $previous_use_internal_errors = libxml_use_internal_errors(true);
    $dom = new DOMDocument('1.0', 'UTF-8');
    $loaded = $dom->loadHTML('<?xml encoding="utf-8" ?>' . $block_content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
    libxml_clear_errors();
    libxml_use_internal_errors($previous_use_internal_errors);

    if (!$loaded) {
        return $block_content;
    }

    $xpath = new DOMXPath($dom);
    $content_nodes = $xpath->query('//div[contains(concat(" ", normalize-space(@class), " "), " ifc-ds-layout-container__content ")]');

    if (!$content_nodes || $content_nodes->length === 0) {
        return $block_content;
    }

    $content_node = $content_nodes->item(0);

    $breadcrumb_nodes = [];
    $sidebar_nodes = [];
    $main_nodes = [];

    foreach ($content_node->childNodes as $child) {
        if ($child->nodeType !== XML_ELEMENT_NODE) {
            continue;
        }

        $class_attr = ' ' . trim((string) $child->attributes->getNamedItem('class')?->nodeValue) . ' ';
        $tag_name = strtolower($child->nodeName);

        $is_breadcrumb = strpos($class_attr, ' ifc-ds-breadcrumb ') !== false
            || strpos($class_attr, ' wp-block-ifc-ds-breadcrumb ') !== false
            || strpos($class_attr, ' ifc-ds-curso-breadcrumb ') !== false
            || ($tag_name === 'nav' && strpos($class_attr, ' breadcrumb ') !== false);

        if ($is_breadcrumb) {
            $breadcrumb_nodes[] = $child;
            continue;
        }

        $is_accordion = strpos($class_attr, ' ifc-ds-accordion ') !== false
            || strpos($class_attr, ' wp-block-ifc-ds-accordion ') !== false;

        if ($is_accordion) {
            $sidebar_nodes[] = $child;
            continue;
        }

        $main_nodes[] = $child;
    }

    if (empty($sidebar_nodes) || empty($main_nodes)) {
        return $block_content;
    }

    while ($content_node->firstChild) {
        $content_node->removeChild($content_node->firstChild);
    }

    foreach ($breadcrumb_nodes as $node) {
        $content_node->appendChild($node);
    }

    $sidebar_wrapper = $dom->createElement('div');
    $sidebar_wrapper->setAttribute('class', 'ifc-ds-curso-sidebar');
    foreach ($sidebar_nodes as $node) {
        $sidebar_wrapper->appendChild($node);
    }

    $main_wrapper = $dom->createElement('div');
    $main_wrapper->setAttribute('class', 'ifc-ds-curso-main');
    foreach ($main_nodes as $node) {
        $main_wrapper->appendChild($node);
    }

    $content_node->appendChild($sidebar_wrapper);
    $content_node->appendChild($main_wrapper);

    return $dom->saveHTML();
}
add_filter('render_block', 'ifc_ds_force_curso_layout_wrappers', 10, 2);

function ifc_ds_add_frontend_curso_grid_styles() {
    if (is_admin()) {
        return;
    }

    $frontend_css = '
        .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
        }

        @media (min-width: 576px) {
            .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content {
                grid-template-columns: repeat(8, 1fr);
            }
        }

        @media (min-width: 1280px) {
            .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content {
                grid-template-columns: repeat(12, 1fr);
            }
        }

        .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content > .wp-block-ifc-ds-breadcrumb,
        .ifc-ds-layout-container__content .ifc-ds-curso-breadcrumb {
            grid-column: 1 / -1;
            min-width: 0;
        }

        .ifc-ds-layout-container__content .ifc-ds-curso-sidebar,
        .ifc-ds-layout-container__content .ifc-ds-curso-main {
            grid-column: 1 / -1;
            min-width: 0;
        }

        @media (min-width: 1280px) {
            .ifc-ds-layout-container__content .ifc-ds-curso-sidebar {
                grid-column: 1 / span 3;
                grid-row: 2;
                align-self: start;
            }

            .ifc-ds-layout-container__content .ifc-ds-curso-main {
                grid-column: 4 / -1;
                grid-row: 2;
            }

            .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content > .wp-block-ifc-ds-accordion {
                grid-column: 1 / span 3;
                align-self: start;
            }
        }
    ';

    echo '<style id="ifc-ds-curso-grid-inline">' . $frontend_css . '</style>';
}
add_action('wp_head', 'ifc_ds_add_frontend_curso_grid_styles');

// Mostra dica de uso de Block Patterns ao usar o template de curso
function ifc_ds_add_pattern_usage_info() {
    global $post;

    if (!$post || $post->post_type !== 'page') {
        return;
    }

    $selected_template = get_post_meta($post->ID, '_wp_page_template', true);
    if ($selected_template !== 'page-curso.php') {
        return;
    }

    $content = trim((string) $post->post_content);
    if (!empty($content)) {
        return;
    }

    echo '<div style="margin: 10px 0; padding: 10px; background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px;">';
    echo '<strong>💡 Página de Curso:</strong> insira o pattern inicial para montar a estrutura editável.<br>';
    echo '<small>Gutenberg: clique em + > Patterns > IFC Design System > "Página de Curso IFC".</small>';
    echo '</div>';
}
add_action('edit_form_after_title', 'ifc_ds_add_pattern_usage_info');