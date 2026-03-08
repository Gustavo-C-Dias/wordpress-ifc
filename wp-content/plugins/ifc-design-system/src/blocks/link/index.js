import { 
    useBlockProps,
    InspectorControls,
    RichText
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { LinkComponent } from './component';
import { 
    detailedSpacingOptions as spacingOptions,
    linkTypeOptions,
    linkSizeOptions,
    weightOptions,
    iconPositionOptions
} from '../../shared/options';

import './style.scss';

registerBlockType('ifc-ds/link', {
    edit: ({ attributes, setAttributes }) => {
        const {
            label,
            url,
            icon,
            iconPosition,
            type,
            size,
            weight,
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

                        <SelectControl
                            label={'Peso da Fonte'}
                            value={weight || ''}
                            options={[{ label: 'Padrão', value: '' }, ...weightOptions]}
                            onChange={(value) => setAttributes({ weight: value || undefined })}
                        />
                    </PanelBody>

                    <PanelBody title={'Ícone'} initialOpen={false}>
                        <TextControl
                            label={'Dashicon'}
                            value={icon || ''}
                            onChange={(value) => setAttributes({ icon: value })}
                            placeholder="admin-home"
                            help={'Use o slug do Dashicon (ex: admin-home, arrow-right-alt2).'}
                        />

                        {icon && (
                            <div className="icon-selector__preview">
                                <span className={`dashicons dashicons-${icon}`} />
                                <code>{icon}</code>
                            </div>
                        )}

                        <SelectControl
                            label={'Posição do Ícone'}
                            value={iconPosition}
                            options={iconPositionOptions}
                            onChange={(value) => setAttributes({ iconPosition: value })}
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
                        weight={weight}
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