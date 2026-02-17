import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { 
    PanelBody, 
    SelectControl, 
    ToggleControl,
    RangeControl,
    TextControl,
    Button,
    __experimentalBoxControl as BoxControl,
    __experimentalInputControl as InputControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { TextComponent } from '../text/component';
import { LinkComponent } from '../link/component';

// Importa opções centralizadas
import { 
    spacingOptions, 
    colorOptions, 
    borderWidthOptions, 
    directionOptions as listDirectionOptions,
    alignmentOptions as listAlignmentOptions,
    componentTypeOptions,
    textTypeOptions,
    weightOptions
} from '../../shared/options';

import './style.scss';

registerBlockType('ifc-ds/container', {
    edit: ({ attributes, setAttributes }) => {
        const { 
            padding, 
            margin, 
            borderWidth, 
            borderColor, 
            shadowEnabled, 
            backgroundColor,
            listMode,
            listDirection,
            listItems,
            listSpacing,
            listAlignment
        } = attributes;

        // Converter valores de spacing para BoxControl
        const paddingValue = {
            top: padding?.top || '30',
            right: padding?.right || '30',
            bottom: padding?.bottom || '30',
            left: padding?.left || '30'
        };

        const marginValue = {
            top: margin?.top || '0',
            right: margin?.right || '0',
            bottom: margin?.bottom || '20',
            left: margin?.left || '0'
        };

        // Função para converter valores de BoxControl
        const handlePaddingChange = (newPadding) => {
            setAttributes({
                padding: {
                    top: newPadding?.top || '0',
                    right: newPadding?.right || '0',
                    bottom: newPadding?.bottom || '0',
                    left: newPadding?.left || '0'
                }
            });
        };

        const handleMarginChange = (newMargin) => {
            setAttributes({
                margin: {
                    top: newMargin?.top || '0',
                    right: newMargin?.right || '0',
                    bottom: newMargin?.bottom || '0',
                    left: newMargin?.left || '0'
                }
            });
        };

        // Funções para gerenciar itens da lista
        const addListItem = (type = 'text') => {
            const newItem = {
                id: Math.max(...listItems.map(item => item.id || 0), 0) + 1,
                type: type,
                label: __('Novo item', 'ifc-design-system'),
                value: type === 'link' ? 'https://exemplo.com' : __('Valor do item', 'ifc-design-system'),
                url: type === 'link' ? 'https://exemplo.com' : undefined,
                linkText: type === 'link' ? __('Link de exemplo', 'ifc-design-system') : undefined,
                icon: type === 'link' ? 'arrow-right-alt2' : undefined,
                iconPosition: type === 'link' ? 'right' : undefined,
                textType: type === 'text-component' ? 'body' : undefined,
                weight: type === 'text-component' ? 'regular' : undefined,
                color: type === 'text-component' ? 'primary' : undefined
            };
            setAttributes({ listItems: [...listItems, newItem] });
        };

        const updateListItem = (itemId, field, value) => {
            setAttributes({
                listItems: listItems.map(item => {
                    if (item.id === itemId) {
                        const updatedItem = { ...item, [field]: value };
                        
                        // Se mudou o tipo, resetar campos específicos
                        if (field === 'type') {
                            switch (value) {
                                case 'link':
                                    updatedItem.url = updatedItem.url || 'https://exemplo.com';
                                    updatedItem.linkText = updatedItem.linkText || __('Link de exemplo', 'ifc-design-system');
                                    updatedItem.icon = updatedItem.icon || 'arrow-right-alt2';
                                    updatedItem.iconPosition = updatedItem.iconPosition || 'right';
                                    break;
                                case 'text-component':
                                    updatedItem.textType = updatedItem.textType || 'body';
                                    updatedItem.weight = updatedItem.weight || 'regular';
                                    updatedItem.color = updatedItem.color || 'primary';
                                    break;
                                case 'html':
                                    updatedItem.htmlContent = updatedItem.htmlContent || '<p>Conteúdo HTML</p>';
                                    break;
                            }
                        }
                        
                        return updatedItem;
                    }
                    return item;
                })
            });
        };

        const removeListItem = (itemId) => {
            setAttributes({ 
                listItems: listItems.filter(item => item.id !== itemId)
            });
        };

        const addDefaultItems = () => {
            const defaultItems = [
                { 
                    id: 1, 
                    type: 'text-component',
                    value: 'Informações do Curso',
                    textType: 'subtitle',
                    weight: 'semibold',
                    color: 'primary'
                },
                { 
                    id: 2, 
                    type: 'text',
                    label: __('Duração', 'ifc-design-system'), 
                    value: '8 semestres' 
                },
                { 
                    id: 3, 
                    type: 'text',
                    label: __('Modalidade', 'ifc-design-system'), 
                    value: 'Presencial' 
                },
                { 
                    id: 4, 
                    type: 'text',
                    label: __('Carga horária', 'ifc-design-system'), 
                    value: '2000 horas' 
                },
                { 
                    id: 5, 
                    type: 'text',
                    label: __('Período', 'ifc-design-system'), 
                    value: 'Matutino' 
                },
                { 
                    id: 6, 
                    type: 'text',
                    label: __('Conceito', 'ifc-design-system'), 
                    value: '4' 
                },
                {
                    id: 7,
                    type: 'link',
                    linkText: 'Mais informações sobre o curso',
                    url: 'https://ifc.edu.br',
                    icon: 'external',
                    iconPosition: 'right',
                    newTab: true
                }
            ];
            setAttributes({ listItems: defaultItems });
        };

        // Classes CSS
        const classes = [
            'ifc-ds-container',
            `ifc-ds-container--border-${borderColor}`,
            `ifc-ds-container--bg-${backgroundColor}`,
            shadowEnabled ? 'ifc-ds-container--shadow' : '',
            borderWidth === '0' ? 'ifc-ds-container--no-border' : `ifc-ds-container--border-${borderWidth}`,
            listMode ? 'ifc-ds-container--list-mode' : '',
            listMode ? `ifc-ds-container--list-${listDirection}` : '',
            listMode ? `ifc-ds-container--align-${listAlignment}` : ''
        ].filter(Boolean).join(' ');

        // Estilos inline para o editor
        const containerStyle = {
            paddingTop: `var(--ifc-space-${padding?.top || '30'})`,
            paddingRight: `var(--ifc-space-${padding?.right || '30'})`,
            paddingBottom: `var(--ifc-space-${padding?.bottom || '30'})`,
            paddingLeft: `var(--ifc-space-${padding?.left || '30'})`,
            marginTop: `var(--ifc-space-${margin?.top || '0'})`,
            marginRight: `var(--ifc-space-${margin?.right || '0'})`,
            marginBottom: `var(--ifc-space-${margin?.bottom || '20'})`,
            marginLeft: `var(--ifc-space-${margin?.left || '0'})`,
        };

        // Função para renderizar diferentes tipos de componentes
        const renderComponent = (item) => {
            const itemStyle = {
                [listDirection === 'vertical' ? 'marginBottom' : 'marginRight']: `var(--ifc-space-${listSpacing})`
            };

            switch (item.type) {
                case 'text-component':
                    return (
                        <div key={item.id} className="ifc-ds-container__component-item" style={itemStyle}>
                            <TextComponent
                                content={item.value}
                                textType={item.textType || 'body'}
                                weight={item.weight || 'regular'}
                                color={item.color || 'primary'}
                            />
                        </div>
                    );

                case 'link':
                    return (
                        <div key={item.id} className="ifc-ds-container__component-item" style={itemStyle}>
                            <LinkComponent
                                label={item.linkText || 'Link'}
                                url={item.url || '#'}
                                icon={item.icon}
                                iconPosition={item.iconPosition || 'right'}
                                type="primary"
                                onClick={item.newTab ? () => window.open(item.url, '_blank') : undefined}
                            />
                        </div>
                    );

                case 'html':
                    return (
                        <div 
                            key={item.id} 
                            className="ifc-ds-container__component-item" 
                            style={itemStyle}
                            dangerouslySetInnerHTML={{ __html: item.htmlContent || '' }}
                        />
                    );

                case 'text':
                default:
                    return (
                        <div key={item.id} className="ifc-ds-container__list-item" style={itemStyle}>
                            <TextComponent
                                content={item.label}
                                textType="detail"
                                weight="semibold"
                                color="neutral"
                                className="ifc-ds-container__list-label"
                            />
                            <TextComponent
                                content={item.value}
                                textType="body"
                                weight="regular"
                                color="primary"
                                className="ifc-ds-container__list-value"
                            />
                        </div>
                    );
            }
        };

        const blockProps = useBlockProps({
            className: classes,
            style: containerStyle
        });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Espaçamento', 'ifc-design-system')}>
                        <BoxControl
                            label={__('Padding Interno', 'ifc-design-system')}
                            values={paddingValue}
                            onChange={handlePaddingChange}
                            units={[]}
                            allowReset={true}
                        />
                        
                        <BoxControl
                            label={__('Margem Externa', 'ifc-design-system')}
                            values={marginValue}
                            onChange={handleMarginChange}
                            units={[]}
                            allowReset={true}
                        />
                    </PanelBody>

                    <PanelBody title={__('Aparência', 'ifc-design-system')} initialOpen={false}>
                        <SelectControl
                            label={__('Cor de Fundo', 'ifc-design-system')}
                            value={backgroundColor}
                            options={colorOptions}
                            onChange={(value) => setAttributes({ backgroundColor: value })}
                        />
                        
                        <SelectControl
                            label={__('Espessura da Borda', 'ifc-design-system')}
                            value={borderWidth}
                            options={borderWidthOptions}
                            onChange={(value) => setAttributes({ borderWidth: value })}
                        />
                        
                        {borderWidth !== '0' && (
                            <SelectControl
                                label={__('Cor da Borda', 'ifc-design-system')}
                                value={borderColor}
                                options={colorOptions}
                                onChange={(value) => setAttributes({ borderColor: value })}
                            />
                        )}
                        
                        <ToggleControl
                            label={__('Aplicar Sombra', 'ifc-design-system')}
                            checked={shadowEnabled}
                            onChange={(value) => setAttributes({ shadowEnabled: value })}
                        />
                    </PanelBody>

                    <PanelBody title={__('Modo Lista', 'ifc-design-system')} initialOpen={false}>
                        <ToggleControl
                            label={__('Ativar Modo Lista', 'ifc-design-system')}
                            checked={listMode}
                            onChange={(value) => setAttributes({ listMode: value })}
                            help={__('Quando ativado, o container exibirá uma lista de itens ao invés do conteúdo livre.', 'ifc-design-system')}
                        />

                        {listMode && (
                            <>
                                <SelectControl
                                    label={__('Direção da Lista', 'ifc-design-system')}
                                    value={listDirection}
                                    options={listDirectionOptions}
                                    onChange={(value) => setAttributes({ listDirection: value })}
                                />

                                <SelectControl
                                    label={__('Alinhamento', 'ifc-design-system')}
                                    value={listAlignment}
                                    options={listAlignmentOptions}
                                    onChange={(value) => setAttributes({ listAlignment: value })}
                                />

                                <SelectControl
                                    label={__('Espaçamento entre Itens', 'ifc-design-system')}
                                    value={listSpacing}
                                    options={spacingOptions}
                                    onChange={(value) => setAttributes({ listSpacing: value })}
                                />

                                <div style={{ marginTop: '16px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                                        <Button isSecondary onClick={() => addListItem('text')}>
                                            {__('+ Texto', 'ifc-design-system')}
                                        </Button>
                                        <Button isSecondary onClick={() => addListItem('text-component')}>
                                            {__('+ Componente', 'ifc-design-system')}
                                        </Button>
                                        <Button isSecondary onClick={() => addListItem('link')}>
                                            {__('+ Link', 'ifc-design-system')}
                                        </Button>
                                        <Button isSecondary onClick={() => addListItem('html')}>
                                            {__('+ HTML', 'ifc-design-system')}
                                        </Button>
                                    </div>
                                    <Button isPrimary onClick={addDefaultItems} style={{ width: '100%', marginBottom: '16px' }}>
                                        {__('Exemplo Curso Completo', 'ifc-design-system')}
                                    </Button>

                                    {listItems.map((item, index) => (
                                        <div key={item.id} style={{ 
                                            marginBottom: '12px', 
                                            padding: '12px', 
                                            border: '1px solid #ddd', 
                                            borderRadius: '4px',
                                            backgroundColor: '#f9f9f9'
                                        }}>
                                            <SelectControl
                                                label={__('Tipo de Componente', 'ifc-design-system')}
                                                value={item.type || 'text'}
                                                options={componentTypeOptions}
                                                onChange={(value) => updateListItem(item.id, 'type', value)}
                                                style={{ marginBottom: '8px' }}
                                            />

                                            {(item.type === 'text' || !item.type) && (
                                                <>
                                                    <InputControl
                                                        label={__('Label', 'ifc-design-system')}
                                                        value={item.label || ''}
                                                        onChange={(value) => updateListItem(item.id, 'label', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                    <InputControl
                                                        label={__('Valor', 'ifc-design-system')}
                                                        value={item.value || ''}
                                                        onChange={(value) => updateListItem(item.id, 'value', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                </>
                                            )}

                                            {item.type === 'text-component' && (
                                                <>
                                                    <InputControl
                                                        label={__('Conteúdo', 'ifc-design-system')}
                                                        value={item.value || ''}
                                                        onChange={(value) => updateListItem(item.id, 'value', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                    <SelectControl
                                                        label={__('Tipo de Texto', 'ifc-design-system')}
                                                        value={item.textType || 'body'}
                                                        options={textTypeOptions}
                                                        onChange={(value) => updateListItem(item.id, 'textType', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                    <SelectControl
                                                        label={__('Peso da Fonte', 'ifc-design-system')}
                                                        value={item.weight || 'regular'}
                                                        options={weightOptions}
                                                        onChange={(value) => updateListItem(item.id, 'weight', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                    <SelectControl
                                                        label={__('Cor', 'ifc-design-system')}
                                                        value={item.color || 'primary'}
                                                        options={colorOptions}
                                                        onChange={(value) => updateListItem(item.id, 'color', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                </>
                                            )}

                                            {item.type === 'link' && (
                                                <>
                                                    <InputControl
                                                        label={__('Texto do Link', 'ifc-design-system')}
                                                        value={item.linkText || ''}
                                                        onChange={(value) => updateListItem(item.id, 'linkText', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                    <InputControl
                                                        label={__('URL', 'ifc-design-system')}
                                                        value={item.url || ''}
                                                        onChange={(value) => updateListItem(item.id, 'url', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                    <SelectControl
                                                        label={__('Ícone', 'ifc-design-system')}
                                                        value={item.icon || ''}
                                                        options={[
                                                            { label: __('Sem ícone', 'ifc-design-system'), value: '' },
                                                            { label: __('Seta →', 'ifc-design-system'), value: 'arrow-right-alt2' },
                                                            { label: __('Link Externo ↗', 'ifc-design-system'), value: 'external' },
                                                            { label: __('Download ⬇', 'ifc-design-system'), value: 'download' },
                                                            { label: __('Email ✉', 'ifc-design-system'), value: 'email' },
                                                            { label: __('Telefone ☎', 'ifc-design-system'), value: 'phone' },
                                                            { label: __('Casa ⌂', 'ifc-design-system'), value: 'admin-home' },
                                                            { label: __('Informações ⓘ', 'ifc-design-system'), value: 'info' },
                                                            { label: __('Localização ⚲', 'ifc-design-system'), value: 'location' }
                                                        ]}
                                                        onChange={(value) => updateListItem(item.id, 'icon', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                    <SelectControl
                                                        label={__('Posição do Ícone', 'ifc-design-system')}
                                                        value={item.iconPosition || 'right'}
                                                        options={[
                                                            { label: __('Esquerda', 'ifc-design-system'), value: 'left' },
                                                            { label: __('Direita', 'ifc-design-system'), value: 'right' }
                                                        ]}
                                                        onChange={(value) => updateListItem(item.id, 'iconPosition', value)}
                                                        style={{ marginBottom: '8px' }}
                                                    />
                                                    <ToggleControl
                                                        label={__('Abrir em nova aba', 'ifc-design-system')}
                                                        checked={item.newTab || false}
                                                        onChange={(value) => updateListItem(item.id, 'newTab', value)}
                                                    />
                                                </>
                                            )}

                                            {item.type === 'html' && (
                                                <textarea
                                                    placeholder={__('Digite o código HTML...', 'ifc-design-system')}
                                                    value={item.htmlContent || ''}
                                                    onChange={(e) => updateListItem(item.id, 'htmlContent', e.target.value)}
                                                    style={{ 
                                                        width: '100%', 
                                                        height: '80px', 
                                                        marginBottom: '8px',
                                                        fontFamily: 'monospace'
                                                    }}
                                                />
                                            )}

                                            <Button 
                                                isDestructive
                                                isSmall
                                                onClick={() => removeListItem(item.id)}
                                            >
                                                {__('Remover', 'ifc-design-system')}
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </PanelBody>
                </InspectorControls>

                <div {...blockProps}>
                    {listMode ? (
                        <div className={`ifc-ds-container__list ifc-ds-container__list--${listDirection}`}>
                            {listItems.length > 0 ? listItems.map(renderComponent) : (
                                <TextComponent
                                    content={__('Nenhum item adicionado. Use o painel lateral para adicionar itens.', 'ifc-design-system')}
                                    textType="body"
                                    weight="regular"
                                    color="neutral"
                                    className="ifc-ds-container__list-empty"
                                />
                            )}
                        </div>
                    ) : (
                        <InnerBlocks 
                            template={[
                                ['core/paragraph', { 
                                    placeholder: __('Adicione conteúdo ao container...', 'ifc-design-system') 
                                }]
                            ]}
                            templateLock={false}
                        />
                    )}
                </div>
            </>
        );
    }
});