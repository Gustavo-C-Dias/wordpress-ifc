(function($) {
    'use strict';
    
    $(document).ready(function() {
        // Para Editor Clássico
        $('#page_template').on('change', function() {
            if ($(this).val() === 'page-curso.php') {
                insertCourseTemplateClassic();
            }
        });
        
        // Para Gutenberg (Block Editor)
        if (typeof wp !== 'undefined' && wp.data && wp.blocks) {
            const { select, subscribe, dispatch } = wp.data;
            
            let previousTemplate = '';
            
            const unsubscribe = subscribe(() => {
                if (!select('core/editor')) return;
                
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
                    console.log('Aguardando editor carregar...');
                }
            });
        }
        
        function insertCourseTemplateClassic() {
            const content = `<!-- wp:ifc-ds/header /-->

<!-- wp:ifc-ds/accordion {"title":"Menu do Curso","content":"<ul><li><a href=\\"#sobre\\">Sobre o Curso</a></li><li><a href=\\"#matriz\\">Matriz Curricular</a></li><li><a href=\\"#professores\\">Professores</a></li><li><a href=\\"#contato\\">Contato</a></li></ul>"} /-->

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
<!-- /wp:paragraph -->`;

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
                        content: 'Contato'
                    }),
                    createBlock('core/paragraph', {
                        content: '<strong>Coordenação:</strong> [Nome do coordenador]<br><strong>E-mail:</strong> [email@ifc.edu.br]'
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