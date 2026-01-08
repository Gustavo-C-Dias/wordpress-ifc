(function($) {
    'use strict';
    
    $(document).ready(function() {
        $('#page_template').on('change', function() {
            if ($(this).val() === 'page-curso.php') {
                insertCourseTemplateClassic();
            }
        });
        
        // Para Gutenberg (Block Editor) - versão simplificada
        if (typeof wp !== 'undefined' && wp.data && wp.blocks) {
            try {
                const { select, subscribe } = wp.data;
                
                let previousTemplate = '';
                
                const unsubscribe = subscribe(() => {
                    try {
                        const currentTemplate = select('core/editor').getEditedPostAttribute('template');
                        
                        if (currentTemplate === 'page-curso.php' && currentTemplate !== previousTemplate) {
                            setTimeout(() => {
                                const blocks = select('core/block-editor').getBlocks();
                                if (blocks && blocks.length === 0) {
                                    insertCourseTemplateGutenberg();
                                }
                            }, 1000);
                        }
                        
                        previousTemplate = currentTemplate;
                    } catch (error) {
                        console.error('Erro no subscribe:', error);
                    }
                });
            } catch (error) {
                console.error('Erro na inicialização:', error);
            }
        }
        
        function insertCourseTemplateClassic() {
            const content = `
                <!-- wp:ifc-ds/header /-->
                <!-- wp:ifc-ds/accordion {"title":"Menu do Curso","content":"<ul><li><a href='#sobre'>Sobre o Curso</a></li><li><a href='#matriz'>Matriz Curricular</a></li><li><a href='#professores'>Professores</a></li><li><a href='#contato'>Contato</a></li></ul>"} /-->

                <!-- wp:heading {"level":2} -->
                <h2>Sobre o Curso</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>Este curso tem como objetivo formar profissionais qualificados para atuar em diferentes áreas do conhecimento.</p>
                <!-- /wp:paragraph -->

                <!-- wp:heading {"level":3} -->
                <h3>Objetivos</h3>
                <!-- /wp:heading -->

                <!-- wp:list -->
                <ul><li>Formar profissionais com sólida base técnica e científica</li><li>Desenvolver competências para atuação no mercado de trabalho</li><li>Promover a pesquisa e extensão na área do curso</li><li>Contribuir para o desenvolvimento regional</li></ul>
                <!-- /wp:list -->

                <!-- wp:heading {"level":3} -->
                <h3>Contato</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p><strong>Coordenação:</strong> [Nome do coordenador]<br><strong>E-mail:</strong> [email@ifc.edu.br]<br><strong>Telefone:</strong> [Inserir telefone]</p>
                <!-- /wp:paragraph -->
            `;

            if ($('#content').length && $('#content').val().trim() === '') {
                $('#content').val(content);
            } else if (typeof tinymce !== 'undefined') {
                const editor = tinymce.get('content');
                if (editor && editor.getContent().trim() === '') {
                    editor.setContent(content);
                }
            }
        }
        
        function insertCourseTemplateGutenberg() {
            if (!wp.blocks || !wp.data) return;
            
            try {
                const { createBlock } = wp.blocks;
                const { insertBlocks } = wp.data.dispatch('core/block-editor');
                
                const blocks = [];
                
                // Verifica se os blocos existem antes de usar
                if (wp.blocks.getBlockType('ifc-ds/header')) {
                    blocks.push(createBlock('ifc-ds/header'));
                }
                
                if (wp.blocks.getBlockType('ifc-ds/accordion')) {
                    blocks.push(createBlock('ifc-ds/accordion', {
                        title: 'Menu do Curso',
                        content: '<ul><li><a href="#sobre">Sobre o Curso</a></li><li><a href="#matriz">Matriz Curricular</a></li><li><a href="#professores">Professores</a></li><li><a href="#contato">Contato</a></li></ul>'
                    }));
                }
                
                // Adiciona blocos básicos do WordPress
                blocks.push(
                    createBlock('core/heading', {
                        level: 2,
                        content: 'Sobre o Curso'
                    }),
                    createBlock('core/paragraph', {
                        content: 'Este curso tem como objetivo formar profissionais qualificados para atuar em diferentes áreas do conhecimento.'
                    }),
                    createBlock('core/heading', {
                        level: 3,
                        content: 'Objetivos'
                    }),
                    createBlock('core/list', {
                        values: '<li>Formar profissionais com sólida base técnica e científica</li><li>Desenvolver competências para atuação no mercado de trabalho</li><li>Promover a pesquisa e extensão na área do curso</li><li>Contribuir para o desenvolvimento regional</li>'
                    }),
                    createBlock('core/heading', {
                        level: 3,
                        content: 'Contato'
                    }),
                    createBlock('core/paragraph', {
                        content: '<strong>Coordenação:</strong> [Nome do coordenador]<br><strong>E-mail:</strong> [email@ifc.edu.br]<br><strong>Telefone:</strong> [Inserir telefone]'
                    })
                );
                
                if (blocks.length > 0) {
                    insertBlocks(blocks);
                }
            } catch (error) {
                console.error('Erro ao inserir template de curso:', error);
            }
        }
    });
    
})(jQuery);