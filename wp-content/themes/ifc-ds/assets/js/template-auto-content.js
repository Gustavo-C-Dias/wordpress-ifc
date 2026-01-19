(function() {
    'use strict';
    
    // Debug logger
    const debugLog = (message, data = null) => {
        if (typeof console !== 'undefined' && window.IFC_DEBUG) {
            console.log('[IFC Template Auto-Content]', message, data || '');
        }
    };

    // Aguarda o DOM e as APIs do WordPress estarem prontos
    function initTemplateAutoContent() {
        // Verifica se estamos no Gutenberg
        if (typeof wp === 'undefined' || !wp.data || !wp.blocks) {
            debugLog('Gutenberg NÃO detectado, saindo...');
            return;
        }

        debugLog('Gutenberg detectado, iniciando...');

        const { select, subscribe, dispatch } = wp.data;
        const { createBlock } = wp.blocks;

        let previousTemplate = null;
        let hasInserted = false;
        let isReady = false;

        // Aguarda o editor estar completamente pronto
        const waitForEditor = () => {
            return new Promise((resolve) => {
                const checkEditor = setInterval(() => {
                    const editor = select('core/editor');
                    const blockEditor = select('core/block-editor');
                    
                    if (editor && blockEditor) {
                        try {
                            const postId = editor.getCurrentPostId();
                            const postType = editor.getCurrentPostType();
                            
                            if (postId && postType === 'page') {
                                clearInterval(checkEditor);
                                resolve(true);
                            }
                        } catch (e) {
                            // Editor ainda não está pronto
                        }
                    }
                }, 300);

                // Timeout de segurança
                setTimeout(() => {
                    clearInterval(checkEditor);
                    resolve(false);
                }, 15000);
            });
        };

        // Função para verificar se o editor está vazio
        const isEditorEmpty = (blocks) => {
            if (!blocks || blocks.length === 0) return true;
            
            // Verifica se só tem um parágrafo vazio
            if (blocks.length === 1 && blocks[0].name === 'core/paragraph') {
                const content = blocks[0].attributes.content || '';
                return content.trim() === '';
            }
            
            return false;
        };

        // Função para criar os blocos do template de curso
        const createCourseTemplateBlocks = () => {
            const blocks = [];
            
            try {
                // 1. Header
                if (wp.blocks.getBlockType('ifc-ds/header')) {
                    blocks.push(createBlock('ifc-ds/header', {}));
                    debugLog('Bloco header criado');
                }

                // 2. Layout Container com grid 2-8-2
                if (wp.blocks.getBlockType('ifc-ds/layout-container')) {
                    const layoutInnerBlocks = [];

                    // Coluna Esquerda (2 colunas) - Menu do Curso
                    const leftColumnBlocks = [];
                    if (wp.blocks.getBlockType('ifc-ds/accordion')) {
                        leftColumnBlocks.push(
                            createBlock('ifc-ds/accordion', {
                                title: 'Menu do Curso',
                                items: [
                                    { id: 1, type: 'link', label: 'Sobre o Curso', url: '#sobre' },
                                    { id: 2, type: 'link', label: 'Matriz Curricular', url: '#matriz' },
                                    { id: 3, type: 'link', label: 'Professores', url: '#professores' },
                                    { id: 4, type: 'link', label: 'Infraestrutura', url: '#infraestrutura' },
                                    { id: 5, type: 'link', label: 'Contato', url: '#contato' }
                                ],
                                isOpen: true
                            })
                        );
                    }
                    layoutInnerBlocks.push(
                        createBlock('core/group', { className: 'col-span-2' }, leftColumnBlocks)
                    );

                    // Coluna Central (8 colunas) - Conteúdo Principal
                    const centerColumnBlocks = [
                        createBlock('core/heading', {
                            level: 1,
                            content: 'Nome do Curso',
                            placeholder: 'Digite o nome do curso...'
                        }),
                        createBlock('core/heading', {
                            level: 2,
                            content: 'Sobre o Curso',
                            anchor: 'sobre'
                        }),
                        createBlock('core/paragraph', {
                            content: 'Este curso tem como objetivo formar profissionais qualificados para atuar em diferentes áreas do conhecimento.',
                            placeholder: 'Descreva o curso aqui...'
                        }),
                        createBlock('core/heading', {
                            level: 3,
                            content: 'Objetivos'
                        }),
                        createBlock('core/list', {}, [
                            createBlock('core/list-item', { content: 'Formar profissionais com sólida base técnica e científica' }),
                            createBlock('core/list-item', { content: 'Desenvolver competências para atuação no mercado de trabalho' }),
                            createBlock('core/list-item', { content: 'Promover a pesquisa e extensão na área do curso' }),
                            createBlock('core/list-item', { content: 'Contribuir para o desenvolvimento regional' })
                        ]),
                        createBlock('core/heading', {
                            level: 2,
                            content: 'Matriz Curricular',
                            anchor: 'matriz'
                        }),
                        createBlock('core/paragraph', {
                            content: 'Adicione aqui a matriz curricular do curso.',
                            placeholder: 'Descreva a matriz curricular...'
                        }),
                        createBlock('core/heading', {
                            level: 2,
                            content: 'Professores',
                            anchor: 'professores'
                        }),
                        createBlock('core/paragraph', {
                            content: 'Apresente a equipe de professores do curso.',
                            placeholder: 'Liste os professores...'
                        }),
                        createBlock('core/heading', {
                            level: 2,
                            content: 'Infraestrutura',
                            anchor: 'infraestrutura'
                        }),
                        createBlock('core/paragraph', {
                            content: 'Descreva a infraestrutura disponível para o curso.',
                            placeholder: 'Descreva a infraestrutura...'
                        }),
                        createBlock('core/heading', {
                            level: 2,
                            content: 'Contato',
                            anchor: 'contato'
                        }),
                        createBlock('core/paragraph', {
                            content: '<strong>Coordenação:</strong> [Nome do coordenador]<br><strong>E-mail:</strong> [email@ifc.edu.br]<br><strong>Telefone:</strong> [(XX) XXXX-XXXX]'
                        })
                    ];
                    layoutInnerBlocks.push(
                        createBlock('core/group', { className: 'col-span-8' }, centerColumnBlocks)
                    );

                    // Coluna Direita (2 colunas) - Links Úteis
                    const rightColumnBlocks = [];
                    if (wp.blocks.getBlockType('ifc-ds/accordion')) {
                        rightColumnBlocks.push(
                            createBlock('ifc-ds/accordion', {
                                title: 'Links Úteis',
                                items: [
                                    { id: 1, type: 'link', label: 'Regulamento do Curso', url: '#regulamento' },
                                    { id: 2, type: 'link', label: 'Calendário Acadêmico', url: '#calendario' },
                                    { id: 3, type: 'link', label: 'Processo Seletivo', url: '#processo' },
                                    { id: 4, type: 'link', label: 'Documentos', url: '#documentos' }
                                ],
                                isOpen: true
                            })
                        );
                    }
                    layoutInnerBlocks.push(
                        createBlock('core/group', { className: 'col-span-2' }, rightColumnBlocks)
                    );

                    // Cria o Layout Container
                    blocks.push(
                        createBlock('ifc-ds/layout-container', {
                            containerType: 'fixed',
                            maxColumns: 12,
                            verticalSpacing: 'large',
                            horizontalAlignment: 'center'
                        }, layoutInnerBlocks)
                    );
                    debugLog('Layout container criado com', layoutInnerBlocks.length, 'colunas');
                }

                // 3. Footer
                if (wp.blocks.getBlockType('ifc-ds/footer')) {
                    blocks.push(createBlock('ifc-ds/footer', {}));
                    debugLog('Bloco footer criado');
                }

            } catch (error) {
                console.error('[IFC Template] Erro ao criar blocos:', error);
            }

            return blocks;
        };

        // Função principal para inserir o template
        const insertCourseTemplate = () => {
            if (hasInserted) return;

            const { replaceBlocks, resetBlocks, insertBlocks, removeBlocks } = dispatch('core/block-editor');
            const existingBlocks = select('core/block-editor').getBlocks();
            
            debugLog('Inserindo template de curso...');

            try {
                // Remove blocos existentes
                if (existingBlocks.length > 0) {
                    const blockIds = existingBlocks.map(block => block.clientId);
                    removeBlocks(blockIds, false);
                }

                // Cria e insere os novos blocos
                const newBlocks = createCourseTemplateBlocks();
                
                if (newBlocks.length > 0) {
                    // Usa resetBlocks para garantir que o editor é completamente substituído
                    resetBlocks(newBlocks);
                    hasInserted = true;
                    debugLog('Template inserido com sucesso!', newBlocks.length, 'blocos');
                } else {
                    debugLog('ERRO: Nenhum bloco foi criado');
                }
            } catch (error) {
                console.error('[IFC Template] Erro ao inserir template:', error);
            }
        };

        // Inicia o monitoramento
        waitForEditor().then((ready) => {
            if (!ready) {
                debugLog('Editor não ficou pronto a tempo');
                return;
            }

            isReady = true;
            debugLog('Editor pronto, iniciando monitoramento de template');

            // Verifica o template inicial
            const initialTemplate = select('core/editor').getEditedPostAttribute('template');
            previousTemplate = initialTemplate;
            debugLog('Template inicial:', initialTemplate);

            // Se já estiver com o template de curso e vazio, insere
            if (initialTemplate === 'page-curso.php') {
                const blocks = select('core/block-editor').getBlocks();
                if (isEditorEmpty(blocks)) {
                    // Pequeno delay para garantir que tudo está pronto
                    setTimeout(insertCourseTemplate, 500);
                }
            }

            // Subscribe para mudanças de template
            const unsubscribe = subscribe(() => {
                if (!isReady || hasInserted) return;

                try {
                    const currentTemplate = select('core/editor').getEditedPostAttribute('template');
                    
                    if (currentTemplate !== previousTemplate) {
                        debugLog('Template mudou:', previousTemplate, '->', currentTemplate);
                        previousTemplate = currentTemplate;

                        if (currentTemplate === 'page-curso.php') {
                            // Verifica se o editor está vazio
                            setTimeout(() => {
                                const blocks = select('core/block-editor').getBlocks();
                                if (isEditorEmpty(blocks)) {
                                    insertCourseTemplate();
                                } else {
                                    debugLog('Editor já possui conteúdo, não inserindo template');
                                }
                            }, 300);
                        }
                    }
                } catch (error) {
                    // Ignora erros durante a transição
                }
            });
        });
    }

    // Inicia quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTemplateAutoContent);
    } else {
        // Pequeno delay para garantir que as APIs do WP estejam carregadas
        setTimeout(initTemplateAutoContent, 100);
    }

})();