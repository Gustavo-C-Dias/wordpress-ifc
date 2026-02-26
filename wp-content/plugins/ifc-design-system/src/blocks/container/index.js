import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { 
    PanelBody, 
    __experimentalBoxControl as BoxControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

registerBlockType('ifc-ds/container', {
    edit: ({ attributes, setAttributes }) => {
        const { 
            padding, 
            margin
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
        const classes = 'ifc-ds-container';

        // Estilos inline para o editor
        const containerStyle = {
            paddingTop: `var(--ifc-spacing-${padding?.top || '30'})`,
            paddingRight: `var(--ifc-spacing-${padding?.right || '30'})`,
            paddingBottom: `var(--ifc-spacing-${padding?.bottom || '30'})`,
            paddingLeft: `var(--ifc-spacing-${padding?.left || '30'})`,
            marginTop: `var(--ifc-spacing-${margin?.top || '0'})`,
            marginRight: `var(--ifc-spacing-${margin?.right || '0'})`,
            marginBottom: `var(--ifc-spacing-${margin?.bottom || '20'})`,
            marginLeft: `var(--ifc-spacing-${margin?.left || '0'})`,
        };

        const blockProps = useBlockProps({
            className: 'ifc-ds-container',
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