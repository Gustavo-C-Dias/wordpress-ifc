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

// Registra padrão de blocos para template de curso (desabilitado - usando template PHP)
function ifc_ds_register_block_patterns() {
    // Padrão de blocos desabilitado - template é renderizado via PHP no page-curso.php
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
            filemtime($script_path),
            true
        );

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
    $last_modified = get_the_modified_date('d/m/Y');
    ?>
    
    <!-- Breadcrumb -->
    <div class="ifc-breadcrumb" style="padding: 20px 0; background: #f8f9fa;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <nav aria-label="Breadcrumb">
                <span><a href="/">IFC Camboriú</a></span>
                <span style="margin: 0 8px;">></span>
                <span><a href="/cursos">Cursos</a></span>
                <span style="margin: 0 8px;">></span>
                <span><a href="/cursos/ensino-superior">Ensino Superior</a></span>
                <span style="margin: 0 8px;">></span>
                <span aria-current="page">Bacharelado em Sistemas de Informação</span>
            </nav>
        </div>
    </div>

    <!-- Container principal com grid 2 colunas -->
    <div class="ifc-curso-container" style="max-width: 1200px; margin: 40px auto; padding: 0 20px;">
        <div style="display: grid; grid-template-columns: 250px 1fr; gap: 40px;">
            
            <!-- Menu lateral esquerdo -->
            <aside class="ifc-curso-sidebar">
                <div class="ifc-accordion">
                    <details style="margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <summary style="padding: 15px; background: #f5f5f5; cursor: pointer; font-weight: 600;">Aluno</summary>
                        <div style="padding: 15px;">
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin-bottom: 8px;"><a href="#matricula">Matrícula</a></li>
                                <li style="margin-bottom: 8px;"><a href="#calendario">Calendário Acadêmico</a></li>
                                <li style="margin-bottom: 8px;"><a href="#biblioteca">Biblioteca</a></li>
                                <li style="margin-bottom: 8px;"><a href="#servicos">Serviços</a></li>
                            </ul>
                        </div>
                    </details>
                    
                    <details style="margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <summary style="padding: 15px; background: #f5f5f5; cursor: pointer; font-weight: 600;">Documentação</summary>
                        <div style="padding: 15px;">
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin-bottom: 8px;"><a href="#ppc">Projeto Pedagógico</a></li>
                                <li style="margin-bottom: 8px;"><a href="#regulamentos">Regulamentos</a></li>
                                <li style="margin-bottom: 8px;"><a href="#documentos">Documentos</a></li>
                            </ul>
                        </div>
                    </details>
                    
                    <details style="margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <summary style="padding: 15px; background: #f5f5f5; cursor: pointer; font-weight: 600;">RACI</summary>
                        <div style="padding: 15px;">
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin-bottom: 8px;"><a href="#nucleo">Núcleo Docente</a></li>
                                <li style="margin-bottom: 8px;"><a href="#colegiado">Colegiado</a></li>
                            </ul>
                        </div>
                    </details>
                    
                    <details style="margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <summary style="padding: 15px; background: #f5f5f5; cursor: pointer; font-weight: 600;">Coordenação</summary>
                        <div style="padding: 15px;">
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin-bottom: 8px;"><a href="#coordenador">Coordenador</a></li>
                                <li style="margin-bottom: 8px;"><a href="#horarios">Horário de Atendimento</a></li>
                                <li style="margin-bottom: 8px;"><a href="#contato-coord">Contato</a></li>
                            </ul>
                        </div>
                    </details>
                </div>
            </aside>

            <!-- Conteúdo principal -->
            <main class="ifc-curso-main">
                
                <!-- Cabeçalho do curso -->
                <header style="margin-bottom: 30px;">
                    <div style="margin-bottom: 20px;">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-ifc.png" 
                             alt="Logo IFC" 
                             style="max-width: 150px; height: auto;" 
                             onerror="this.style.display='none'">
                    </div>
                    <h1 style="margin: 0 0 10px 0; font-size: 2.5rem; color: #1a1a1a;">
                        Bacharelado em Sistemas de Informação
                    </h1>
                    <p style="color: #666; font-size: 0.9rem;">
                        Última modificação: <?php echo $last_modified; ?>
                    </p>
                </header>

                <!-- Informações do curso em grid -->
                <div class="ifc-curso-info" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px; padding: 30px; background: #f8f9fa; border-radius: 8px;">
                    <div>
                        <h3 style="margin: 0 0 10px 0; font-size: 0.9rem; color: #666; text-transform: uppercase;">Duração</h3>
                        <p style="margin: 0; font-size: 1.2rem; font-weight: 600;">4 anos</p>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 10px 0; font-size: 0.9rem; color: #666; text-transform: uppercase;">Modalidade</h3>
                        <p style="margin: 0; font-size: 1.2rem; font-weight: 600;">Presencial</p>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 10px 0; font-size: 0.9rem; color: #666; text-transform: uppercase;">Carga Horária</h3>
                        <p style="margin: 0; font-size: 1.2rem; font-weight: 600;">3.200 horas</p>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 10px 0; font-size: 0.9rem; color: #666; text-transform: uppercase;">Período</h3>
                        <p style="margin: 0; font-size: 1.2rem; font-weight: 600;">Noturno</p>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 10px 0; font-size: 0.9rem; color: #666; text-transform: uppercase;">Vagas Anuais</h3>
                        <p style="margin: 0; font-size: 1.2rem; font-weight: 600;">40 vagas</p>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 10px 0; font-size: 0.9rem; color: #666; text-transform: uppercase;">Conceito</h3>
                        <p style="margin: 0; font-size: 1.2rem; font-weight: 600;">5 (MEC)</p>
                    </div>
                </div>

                <!-- Sobre o curso -->
                <section id="sobre-curso" style="margin-bottom: 40px;">
                    <h2 style="margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #0066cc;">Sobre o Curso</h2>
                    <p style="line-height: 1.6; color: #333;">
                        O curso de Bacharelado em Sistemas de Informação do IFC Câmpus Camboriú forma profissionais capacitados 
                        para atuar no desenvolvimento, implantação e gestão de sistemas de informação. Com uma grade curricular 
                        atualizada e infraestrutura moderna, o curso prepara os alunos para os desafios do mercado de tecnologia.
                    </p>
                    <p style="line-height: 1.6; color: #333;">
                        Durante a formação, os estudantes têm contato com disciplinas que abrangem programação, banco de dados, 
                        engenharia de software, redes de computadores, inteligência artificial e gestão de projetos.
                    </p>
                </section>

                <!-- Mercado de trabalho -->
                <section id="mercado-trabalho" style="margin-bottom: 40px;">
                    <h2 style="margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #0066cc;">Mercado de Trabalho e Atuação</h2>
                    <p style="line-height: 1.6; color: #333;">
                        O profissional formado em Sistemas de Informação pode atuar em diversas áreas:
                    </p>
                    <ul style="line-height: 1.8; color: #333;">
                        <li>Desenvolvimento de software e aplicações web/mobile</li>
                        <li>Análise e projeto de sistemas</li>
                        <li>Administração de bancos de dados</li>
                        <li>Gestão de projetos de TI</li>
                        <li>Consultoria em tecnologia da informação</li>
                        <li>Segurança da informação</li>
                        <li>Ciência de dados e inteligência artificial</li>
                    </ul>
                </section>

                <!-- Grades curriculares -->
                <section id="grades-curriculares" style="margin-bottom: 40px;">
                    <h2 style="margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #0066cc;">Grades Curriculares</h2>
                    <p style="line-height: 1.6; color: #333;">
                        A grade curricular está organizada em 8 semestres, contemplando disciplinas teóricas e práticas 
                        que garantem uma formação sólida e completa.
                    </p>
                    <p>
                        <a href="#" style="color: #0066cc; text-decoration: none; font-weight: 600;">
                            📄 Baixar Grade Curricular Completa (PDF)
                        </a>
                    </p>
                </section>

                <!-- Forma de ingresso -->
                <section id="forma-ingresso" style="margin-bottom: 40px;">
                    <h2 style="margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #0066cc;">Forma de Ingresso</h2>
                    <p style="line-height: 1.6; color: #333;">
                        O ingresso no curso ocorre através de:
                    </p>
                    <ul style="line-height: 1.8; color: #333;">
                        <li><strong>SISU:</strong> Sistema de Seleção Unificada, utilizando a nota do ENEM</li>
                        <li><strong>Transferência:</strong> Para estudantes de outras instituições</li>
                        <li><strong>Reopção de Curso:</strong> Para alunos já matriculados no IFC</li>
                    </ul>
                    <p>
                        <a href="#" style="color: #0066cc; text-decoration: none; font-weight: 600;">
                            📋 Ver Edital Vigente
                        </a>
                    </p>
                </section>

                <!-- Informações legais -->
                <section id="informacoes-legais" style="margin-bottom: 40px;">
                    <h2 style="margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #0066cc;">Informações Legais</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                        <p style="margin: 0 0 10px 0;"><strong>Autorização:</strong> Resolução CONSUP nº XX/20XX</p>
                        <p style="margin: 0 0 10px 0;"><strong>Reconhecimento:</strong> Portaria MEC nº XXX de XX/XX/XXXX</p>
                        <p style="margin: 0;"><strong>Renovação de Reconhecimento:</strong> Portaria MEC nº XXX de XX/XX/XXXX</p>
                    </div>
                </section>

                <!-- Contato -->
                <section id="contato" style="margin-bottom: 40px;">
                    <h2 style="margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #0066cc;">Contato</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                        <p style="margin: 0 0 10px 0;">
                            <strong>Coordenação do Curso</strong><br>
                            E-mail: sistemas.camboriu@ifc.edu.br<br>
                            Telefone: (47) 3367-8100
                        </p>
                        <p style="margin: 20px 0 0 0;">
                            <strong>Campus Camboriú</strong><br>
                            Rua Joaquim Garcia, s/n - Centro<br>
                            Camboriú - SC, CEP 88340-055
                        </p>
                    </div>
                </section>

            </main>

        </div>
    </div>

    <?php
    return ob_get_clean();
}

// Adiciona estilos do editor para o template de curso
function ifc_ds_add_editor_styles() {
    $custom_css = '
        /* Estilos para o editor Gutenberg - Template de Curso */
        
        /* Grid de 12 colunas */
        .editor-styles-wrapper .ifc-ds-layout-container--columns-12 .ifc-ds-layout-container__content {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 24px;
        }
        
        /* Coluna 3 - Sidebar com Accordions */
        .editor-styles-wrapper .col-span-3 {
            grid-column: span 3;
            min-width: 0;
        }
        
        /* Coluna 9 - Conteúdo principal */
        .editor-styles-wrapper .col-span-9 {
            grid-column: span 9;
            min-width: 0;
        }
        
        /* Indicadores visuais no editor */
        .editor-styles-wrapper .col-span-3,
        .editor-styles-wrapper .col-span-9 {
            border: 1px dashed #ccc;
            padding: 16px;
            border-radius: 4px;
            position: relative;
        }
        
        .editor-styles-wrapper .col-span-3:hover,
        .editor-styles-wrapper .col-span-9:hover {
            border-color: #007cba;
        }
        
        /* Labels para identificação no editor */
        .editor-styles-wrapper .col-span-3::before {
            content: "Sidebar (3 colunas)";
            display: block;
            font-size: 11px;
            color: #666;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .editor-styles-wrapper .col-span-9::before {
            content: "Conteúdo (9 colunas)";
            display: block;
            font-size: 11px;
            color: #666;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        /* Responsivo no editor */
        @media (max-width: 1024px) {
            .editor-styles-wrapper .col-span-3,
            .editor-styles-wrapper .col-span-9 {
                grid-column: 1 / -1 !important;
            }
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