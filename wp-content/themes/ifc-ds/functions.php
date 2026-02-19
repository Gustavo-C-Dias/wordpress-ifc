<?php
/**
 * Tema IFC Design System 
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
}
    
add_action('init', 'ifc_ds_register_block_patterns');

/**
 * Conteúdo do padrão de curso completo
 */
function ifc_ds_get_curso_pattern_content() {
    return '
<!-- wp:ifc-ds/layout-container {"containerType":"fixed","maxColumns":12} -->
    <!-- wp:group -->
    <div class="wp-block-group ifc-ds-curso-breadcrumb col-span-full">
        <!-- wp:ifc-ds/breadcrumb
            {"items":[
                {"label":"IFC Camboriú","url":"/"},
                {"label":"Cursos","url":"/cursos"},
                {"label":"Nome do Curso","url":""}
            ]}
        /-->
    </div>
    <!-- /wp:group -->

    <!-- wp:group -->
    <div class="wp-block-group ifc-ds-curso-sidebar">
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
    </div>
    <!-- /wp:group -->


    <!-- wp:group -->
    <div class="wp-block-group ifc-ds-curso-main">
        <!-- wp:group -->
        <div class="wp-block-group ifc-ds-curso-heading">
            <!-- wp:image {"sizeSlug":"full","linkDestination":"none"} -->
            <figure class="wp-block-image size-full"><img src="' . esc_url( get_template_directory_uri() . '/assets/img/bsi.png' ) . '" alt="Imagem do curso"/></figure>
            <!-- /wp:image -->

            <!-- wp:ifc-ds/text {"content":"Nome do Curso","textType":"title","weight":"semibold"} /-->

            <!-- wp:ifc-ds/text {"content":"' . esc_html( 'Atualizado em ' . date_i18n( 'j \d\e F \d\e Y', get_post_modified_time( 'U' ) ) ) . '","textType":"detail","weight":"regular","className":"ifc-ds-text--neutral ifc-ds-text--align-left"} /-->
        </div>
        <!-- /wp:group -->

        <!-- wp:ifc-ds/container {"backgroundColor":"neutral-200","padding":{"top":"4","right":"4","bottom":"4","left":"4"}} -->
            <!-- wp:group -->
            <div class="wp-block-group ifc-ds-info-list">
                <!-- wp:group -->
                <div class="wp-block-group ifc-ds-info-item">
                    <!-- wp:paragraph -->
                        <p>Duração</p><p>4 anos</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->

                <!-- wp:group -->
                <div class="wp-block-group ifc-ds-info-item">
                    <!-- wp:paragraph -->
                        <p>Modalidade</p><p>Presencial</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->

                <!-- wp:group -->
                <div class="wp-block-group ifc-ds-info-item">
                    <!-- wp:paragraph -->
                        <p>Carga Horária</p><p>3.200h</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->

                <!-- wp:group -->
                <div class="wp-block-group ifc-ds-info-item">
                    <!-- wp:paragraph -->
                        <p>Vagas</p><p>40</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:group -->
        <!-- /wp:ifc-ds/container -->

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
    </div>
    <!-- /wp:group -->
<!-- /wp:ifc-ds/layout-container -->';
}

function ifc_ds_add_frontend_curso_grid_styles() {
    if (is_admin()) {
        return;
    }

    $frontend_css = '
        .ifc-ds-info-list {
            display: flex;
            flex-wrap: wrap;
            gap: var(--ifc-space-4);
            align-items: flex-start;
        }

        .ifc-ds-info-list > .ifc-ds-info-item {
            display: flex;
            flex-direction: column;
            gap: var(--ifc-space-1);
            min-width: max-content;
        }

        .ifc-ds-info-list > .ifc-ds-info-item p {
            margin: 0;
        }

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