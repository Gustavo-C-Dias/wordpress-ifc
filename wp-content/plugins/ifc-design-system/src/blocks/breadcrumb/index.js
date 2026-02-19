import { 
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    Button,
    __experimentalInputControl as InputControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { LinkComponent } from '../link/component';
import { TextComponent } from '../text/component';
import './style.scss';

registerBlockType('ifc-ds/breadcrumb', {
    edit: ({ attributes, setAttributes }) => {
        const {
            items,
            currentPageTitle,
            separator,
            linkSize
        } = attributes;

        const renderBreadcrumbLink = (item, isLast = false) => {
            if (isLast) {
                return (
                    <TextComponent
                        key="current"
                        content={currentPageTitle}
                        textType="detail"
                        weight="regular"
                        color="neutral"
                        className="ifc-ds-breadcrumb__current"
                        aria-current="page"
                    />
                );
            }

            return (
                <LinkComponent
                    key={item.id}
                    label={item.label}
                    url={item.url}
                    icon={item.icon || null}
                    iconPosition="left"
                    type="neutral"
                    size={linkSize}
                    className="ifc-ds-breadcrumb__link"
                    onClick={(e) => e.preventDefault()}
                />
            );
        };

        // Função para adicionar novo item
        const addItem = () => {
            const newItem = {
                id: Math.max(...items.map(item => item.id), 0) + 1,
                label: 'Novo Link',
                url: '',
                icon: ''
            };
            setAttributes({ items: [...items, newItem] });
        };

        // Função para remover item
        const removeItem = (itemId) => {
            setAttributes({ 
                items: items.filter(item => item.id !== itemId)
            });
        };

        // Função para atualizar item
        const updateItem = (itemId, field, value) => {
            setAttributes({
                items: items.map(item => 
                    item.id === itemId 
                        ? { ...item, [field]: value }
                        : item
                )
            });
        };

        return (
            <>
                <InspectorControls>
                    <PanelBody title={'Configurações do Breadcrumb'}>
                        <TextControl
                            label={'Título da Página Atual'}
                            value={currentPageTitle}
                            onChange={(value) => setAttributes({ currentPageTitle: value })}
                            placeholder="Ex: Curso de Informática"
                        />
                        
                        <TextControl
                            label={'Separador'}
                            value={separator}
                            onChange={(value) => setAttributes({ separator: value })}
                            placeholder="/"
                            help={'Caractere usado para separar os itens'}
                        />
                    </PanelBody>

                    <PanelBody title={'Aparência dos Links'}>
                        <SelectControl
                            label={'Tamanho dos Links'}
                            value={linkSize}
                            options={[
                                { label: 'Pequeno', value: 'small' },
                                { label: 'Médio', value: 'medium' },
                                { label: 'Grande', value: 'large' }
                            ]}
                            onChange={(value) => setAttributes({ linkSize: value })}
                        />
                    </PanelBody>

                    <PanelBody title={'Gerenciar Links'} initialOpen={false}>
                        {items.map((item) => (
                            <div key={item.id} style={{ marginBottom: '16px', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}>
                                <InputControl
                                    label={'Texto do Link'}
                                    value={item.label}
                                    onChange={(value) => updateItem(item.id, 'label', value)}
                                    style={{ marginBottom: '8px' }}
                                />
                                <InputControl
                                    label={'URL'}
                                    value={item.url}
                                    onChange={(value) => updateItem(item.id, 'url', value)}
                                    placeholder="https://exemplo.com"
                                    style={{ marginBottom: '8px' }}
                                />
                                <InputControl
                                    label={'Ícone (opcional)'}
                                    value={item.icon || ''}
                                    onChange={(value) => updateItem(item.id, 'icon', value)}
                                    placeholder="admin-home"
                                    help="Use um nome de ícone do Dashicons ou URL de uma imagem. Deixe em branco para não exibir ícone."
                                    style={{ marginBottom: '8px' }}
                                />
                                <Button 
                                    isDestructive
                                    isSmall
                                    onClick={() => removeItem(item.id)}
                                    disabled={items.length <= 1}
                                >
                                    {'Remover'}
                                </Button>
                            </div>
                        ))}
                        
                        <Button 
                            isPrimary
                            onClick={addItem}
                            style={{ marginTop: '12px' }}
                        >
                            {'Adicionar Link'}
                        </Button>
                    </PanelBody>
                </InspectorControls>

                <nav {...useBlockProps({ className: 'ifc-ds-breadcrumb' })}>
                    <ol className="ifc-ds-breadcrumb__list">
                        {items.map((item, index) => (
                            <li key={item.id} className="ifc-ds-breadcrumb__item">
                                {renderBreadcrumbLink(item)}
                                {index < items.length && (
                                    <span 
                                        className="ifc-ds-breadcrumb__separator"
                                        aria-hidden="true"
                                    >
                                        {separator}
                                    </span>
                                )}
                            </li>
                        ))}
                        <li className="ifc-ds-breadcrumb__item ifc-ds-breadcrumb__item--current">
                            {renderBreadcrumbLink(null, true)}
                        </li>
                    </ol>
                </nav>
            </>
        );
    }
});