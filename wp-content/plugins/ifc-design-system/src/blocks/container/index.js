import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { 
    PanelBody, 
    SelectControl, 
    ToggleControl,
    __experimentalBoxControl as BoxControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

// Importa opções centralizadas
import { 
    spacingOptions, 
    colorOptions, 
    borderWidthOptions
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
            backgroundColor
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

        // Classes CSS
        const classes = [
            'ifc-ds-container',
            `ifc-ds-container--border-${borderColor}`,
            `ifc-ds-container--bg-${backgroundColor}`,
            shadowEnabled ? 'ifc-ds-container--shadow' : '',
            borderWidth === '0' ? 'ifc-ds-container--no-border' : `ifc-ds-container--border-${borderWidth}`
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

                </InspectorControls>

                <div {...blockProps}>
                    <InnerBlocks 
                        template={[
                            ['core/paragraph', { 
                                placeholder: __('Adicione conteúdo ao container...', 'ifc-design-system') 
                            }]
                        ]}
                        templateLock={false}
                    />
                </div>
            </>
        );
    },
    save: () => {
        return <InnerBlocks.Content />;
    }
});