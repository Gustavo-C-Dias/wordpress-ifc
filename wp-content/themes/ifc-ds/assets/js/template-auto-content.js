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
                // 1. Header IFC DS
                if (wp.blocks.getBlockType('ifc-ds/header')) {
                    blocks.push(createBlock('ifc-ds/header', {}));
                    debugLog('Header IFC DS criado');
                }

                // 2. Breadcrumb
                if (wp.blocks.getBlockType('ifc-ds/breadcrumb')) {
                    blocks.push(createBlock('ifc-ds/breadcrumb', {
                        items: [
                            { label: 'IFC Camboriú', url: '/' },
                            { label: 'Cursos', url: '/cursos' },
                            { label: 'Ensino Superior', url: '/cursos/ensino-superior' },
                            { label: 'Bacharelado em Sistemas de Informação', url: '' }
                        ]
                    }));
                    debugLog('Breadcrumb criado');
                }

                // 3. Layout Container com sidebar + conteúdo
                if (wp.blocks.getBlockType('ifc-ds/layout-container')) {
                    const layoutInnerBlocks = [];

                    // Coluna 1: Sidebar Esquerda (col-span-3) - 4 Accordions empilhados
                    const sidebarBlocks = [];
                    if (wp.blocks.getBlockType('ifc-ds/accordion')) {
                        // Accordion Aluno
                        sidebarBlocks.push(
                            createBlock('ifc-ds/accordion', {
                                title: 'Aluno',
                                isOpen: false
                            }, [
                                createBlock('core/paragraph', {
                                    content: '<a href="#matricula">Matrícula</a><br><a href="#calendario">Calendário Acadêmico</a><br><a href="#biblioteca">Biblioteca</a><br><a href="#servicos">Serviços</a>'
                                })
                            ])
                        );
                        
                        // Accordion Documentação
                        sidebarBlocks.push(
                            createBlock('ifc-ds/accordion', {
                                title: 'Documentação',
                                isOpen: false
                            }, [
                                createBlock('core/paragraph', {
                                    content: '<a href="#ppc">Projeto Pedagógico</a><br><a href="#regulamentos">Regulamentos</a><br><a href="#documentos">Documentos</a>'
                                })
                            ])
                        );
                        
                        // Accordion RACI
                        sidebarBlocks.push(
                            createBlock('ifc-ds/accordion', {
                                title: 'RACI',
                                isOpen: false
                            }, [
                                createBlock('core/paragraph', {
                                    content: '<a href="#nucleo">Núcleo Docente</a><br><a href="#colegiado">Colegiado</a>'
                                })
                            ])
                        );
                        
                        // Accordion Coordenação
                        sidebarBlocks.push(
                            createBlock('ifc-ds/accordion', {
                                title: 'Coordenação',
                                isOpen: false
                            }, [
                                createBlock('core/paragraph', {
                                    content: '<a href="#coordenador">Coordenador</a><br><a href="#horarios">Horário de Atendimento</a><br><a href="#contato-coord">Contato</a>'
                                })
                            ])
                        );
                    }
                    
                    // Adiciona sidebar como primeira coluna (col-span-3)
                    layoutInnerBlocks.push(
                        createBlock('core/group', { className: 'col-span-3' }, sidebarBlocks)
                    );

                    // Coluna 2: Conteúdo Principal (col-span-9)
                    const contentBlocks = [];
                    
                    // Logo
                    if (wp.blocks.getBlockType('ifc-ds/logo')) {
                        contentBlocks.push(
                            createBlock('ifc-ds/logo', {
                                width: 150
                            })
                        );
                    }
                    
                    // Título do curso
                    contentBlocks.push(
                        createBlock('core/heading', {
                            level: 1,
                            content: 'Bacharelado em Sistemas de Informação'
                        })
                    );
                    
                    // Data de modificação
                    contentBlocks.push(
                        createBlock('core/paragraph', {
                            content: '<small>Última modificação: [data]</small>',
                            className: 'has-small-font-size'
                        })
                    );
                    
                    // Container de informações do curso
                    if (wp.blocks.getBlockType('ifc-ds/container')) {
                        const infoBlocks = [];
                        
                        // Grid 3x2 de informações
                        const infos = [
                            { label: 'Duração', value: '4 anos' },
                            { label: 'Modalidade', value: 'Presencial' },
                            { label: 'Carga Horária', value: '3.200 horas' },
                            { label: 'Período', value: 'Noturno' },
                            { label: 'Vagas Anuais', value: '40 vagas' },
                            { label: 'Conceito', value: '5 (MEC)' }
                        ];
                        
                        infos.forEach(info => {
                            infoBlocks.push(
                                createBlock('core/group', {}, [
                                    createBlock('core/heading', {
                                        level: 4,
                                        content: info.label,
                                        className: 'has-small-font-size'
                                    }),
                                    createBlock('core/paragraph', {
                                        content: `<strong>${info.value}</strong>`
                                    })
                                ])
                            );
                        });
                        
                        contentBlocks.push(
                            createBlock('ifc-ds/container', {
                                backgroundColor: 'light-gray',
                                padding: 'large'
                            }, infoBlocks)
                        );
                    }
                    
                    // Seções de conteúdo
                    const sections = [
                        { 
                            title: 'Sobre o Curso', 
                            id: 'sobre-curso',
                            content: 'O curso de Bacharelado em Sistemas de Informação do IFC Câmpus Camboriú forma profissionais capacitados para atuar no desenvolvimento, implantação e gestão de sistemas de informação.'
                        },
                        {
                            title: 'Mercado de Trabalho e Atuação',
                            id: 'mercado-trabalho',
                            content: 'O profissional formado em Sistemas de Informação pode atuar em diversas áreas:'
                        },
                        {
                            title: 'Grades Curriculares',
                            id: 'grades-curriculares',
                            content: 'A grade curricular está organizada em 8 semestres, contemplando disciplinas teóricas e práticas que garantem uma formação sólida e completa.'
                        },
                        {
                            title: 'Forma de Ingresso',
                            id: 'forma-ingresso',
                            content: 'O ingresso no curso ocorre através do SISU, transferência ou reopção de curso.'
                        },
                        {
                            title: 'Informações Legais',
                            id: 'informacoes-legais',
                            content: 'Informações sobre autorização e reconhecimento do curso.'
                        },
                        {
                            title: 'Contato',
                            id: 'contato',
                            content: 'Entre em contato com a coordenação do curso.'
                        }
                    ];
                    
                    sections.forEach(section => {
                        contentBlocks.push(
                            createBlock('core/heading', {
                                level: 2,
                                content: section.title,
                                anchor: section.id
                            })
                        );
                        contentBlocks.push(
                            createBlock('core/paragraph', {
                                content: section.content,
                                placeholder: 'Adicione o conteúdo aqui...'
                            })
                        );
                    });
                    
                    // Adiciona conteúdo como segunda coluna (col-span-9)
                    layoutInnerBlocks.push(
                        createBlock('core/group', { className: 'col-span-9' }, contentBlocks)
                    );

                    // Cria o Layout Container com 12 colunas (3 + 9)
                    blocks.push(
                        createBlock('ifc-ds/layout-container', {
                            containerType: 'fixed',
                            maxColumns: 12,
                            verticalSpacing: 'large',
                            horizontalAlignment: 'center'
                        }, layoutInnerBlocks)
                    );
                    debugLog('Layout container criado: col-span-3 (accordions) + col-span-9 (conteúdo)');
                }

                // 4. Footer IFC DS
                if (wp.blocks.getBlockType('ifc-ds/footer')) {
                    blocks.push(createBlock('ifc-ds/footer', {}));
                    debugLog('Footer IFC DS criado');
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