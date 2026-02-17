import { 
    useBlockProps,
    InspectorControls,
    RichText
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    Button,
    ButtonGroup,
    __experimentalInputControl as InputControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { LinkComponent } from './component';
import { 
    iconLibrary, 
    iconCategories, 
    detailedSpacingOptions as spacingOptions,
    linkTypeOptions,
    linkSizeOptions,
    iconPositionOptions
} from '../../shared/options';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import './style.scss';

// Componente para seleção visual de ícones
const IconSelector = ({ selectedIcon, onIconSelect }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar ícones por categoria e termo de busca
    const filteredIcons = iconLibrary.filter(icon => {
        const matchesCategory = selectedCategory === 'all' || icon.category === selectedCategory;
        const matchesSearch = !searchTerm || 
            icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            icon.value.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="icon-selector">
            <div className="icon-selector__controls">
                <TextControl
                    label={__('Buscar Ícone', 'ifc-design-system')}
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder={__('Digite para buscar...', 'ifc-design-system')}
                />
                
                <SelectControl
                    label={__('Categoria', 'ifc-design-system')}
                    value={selectedCategory}
                    options={iconCategories}
                    onChange={setSelectedCategory}
                />
            </div>

            <div className="icon-selector__grid">
                {/* Opção para remover ícone */}
                <Button
                    className={`icon-selector__icon ${!selectedIcon ? 'is-selected' : ''}`}
                    onClick={() => onIconSelect('')}
                    title={__('Sem ícone', 'ifc-design-system')}
                >
                    <span className="icon-selector__no-icon">✕</span>
                </Button>

                {filteredIcons.map((icon) => (
                    <Button
                        key={icon.value}
                        className={`icon-selector__icon ${selectedIcon === icon.value ? 'is-selected' : ''}`}
                        onClick={() => onIconSelect(icon.value)}
                        title={icon.name}
                    >
                        <span className={`dashicons dashicons-${icon.value}`} />
                    </Button>
                ))}
            </div>

            {selectedIcon && (
                <div className="icon-selector__preview">
                    <strong>{__('Selecionado:', 'ifc-design-system')} </strong>
                    <span className={`dashicons dashicons-${selectedIcon}`} />
                    <code>{selectedIcon}</code>
                </div>
            )}
        </div>
    );
};

registerBlockType('ifc-ds/link', {
    edit: ({ attributes, setAttributes }) => {
        const {
            label,
            url,
            icon,
            iconPosition,
            type,
            size,
            padding,
            openInNewTab
        } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelBody title={'Configurações do Link'}>
                        <TextControl
                            label={'URL'}
                            value={url}
                            onChange={(value) => setAttributes({ url: value })}
                            placeholder="https://exemplo.com"
                        />
                        
                        <ToggleControl
                            label={'Abrir em nova aba'}
                            checked={openInNewTab}
                            onChange={(value) => setAttributes({ openInNewTab: value })}
                        />
                    </PanelBody>

                    <PanelBody title={'Aparência'}>
                        <SelectControl
                            label={'Tipo'}
                            value={type}
                            options={linkTypeOptions}
                            onChange={(value) => setAttributes({ type: value })}
                        />

                        <SelectControl
                            label={'Tamanho'}
                            value={size}
                            options={linkSizeOptions}
                            onChange={(value) => setAttributes({ size: value })}
                        />
                    </PanelBody>

                    <PanelBody title={'Ícone'} initialOpen={false}>
                        <IconSelector
                            selectedIcon={icon}
                            onIconSelect={(iconValue) => setAttributes({ icon: iconValue })}
                        />

                        <SelectControl
                            label={'Posição do Ícone'}
                            value={iconPosition}
                            options={iconPositionOptions}
                            onChange={(value) => setAttributes({ iconPosition: value })}
                        />

                        <InputControl
                            label={'Ícone Personalizado'}
                            value={icon && !iconLibrary.find(i => i.value === icon) ? icon : ''}
                            onChange={(value) => setAttributes({ icon: value })}
                            placeholder="dashicons-custom ou URL da imagem"
                            help={'Digite o nome de um dashicon personalizado ou URL de uma imagem'}
                        />
                    </PanelBody>

                    <PanelBody title={'Espaçamento'}>
                        <SelectControl
                            label={'Padding Superior'}
                            value={padding?.top || '0'}
                            onChange={(value) => setAttributes({ 
                                padding: { ...padding, top: value } 
                            })}
                            options={spacingOptions}
                        />
                        
                        <SelectControl
                            label={'Padding Direito'}
                            value={padding?.right || '0'}
                            onChange={(value) => setAttributes({ 
                                padding: { ...padding, right: value } 
                            })}
                            options={spacingOptions}
                        />
                        
                        <SelectControl
                            label={'Padding Inferior'}
                            value={padding?.bottom || '0'}
                            onChange={(value) => setAttributes({ 
                                padding: { ...padding, bottom: value } 
                            })}
                            options={spacingOptions}
                        />
                        
                        <SelectControl
                            label={'Padding Esquerdo'}
                            value={padding?.left || '0'}
                            onChange={(value) => setAttributes({ 
                                padding: { ...padding, left: value } 
                            })}
                            options={spacingOptions}
                        />
                    </PanelBody>
                </InspectorControls>

                <div {...useBlockProps()}>
                    <LinkComponent
                        label={label}
                        url={url}
                        icon={icon}
                        iconPosition={iconPosition}
                        type={type}
                        size={size}
                        padding={padding}
                        onClick={(e) => e.preventDefault()}
                    >
                        <RichText
                            tagName="span"
                            className="ifc-ds-link__label"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            allowedFormats={[]}
                        />
                    </LinkComponent>
                </div>
            </>
        );
    }
});