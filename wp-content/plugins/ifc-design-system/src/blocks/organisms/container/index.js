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

        const paddingValue = {
            top: padding?.top || '3',
            right: padding?.right || '3',
            bottom: padding?.bottom || '3',
            left: padding?.left || '3'
        };

        const marginValue = {
            top: margin?.top || '0',
            right: margin?.right || '0',
            bottom: margin?.bottom || '2',
            left: margin?.left || '0'
        };

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

        const containerStyle = {
            paddingTop: `var(--ifc-spacing-${padding?.top || '3'})`,
            paddingRight: `var(--ifc-spacing-${padding?.right || '3'})`,
            paddingBottom: `var(--ifc-spacing-${padding?.bottom || '3'})`,
            paddingLeft: `var(--ifc-spacing-${padding?.left || '3'})`,
            marginTop: `var(--ifc-spacing-${margin?.top || '0'})`,
            marginRight: `var(--ifc-spacing-${margin?.right || '0'})`,
            marginBottom: `var(--ifc-spacing-${margin?.bottom || '2'})`,
            marginLeft: `var(--ifc-spacing-${margin?.left || '0'})`,
        };

        const blockProps = useBlockProps({
            className: 'ifc-ds-container',
            style: containerStyle
        });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={'Espaçamento'}>
                        <BoxControl
                            label={'Padding Interno'}
                            values={paddingValue}
                            onChange={handlePaddingChange}
                            units={[]}
                            allowReset={true}
                        />
                        
                        <BoxControl
                            label={'Margem Externa'}
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
                                placeholder: 'Adicione conteúdo ao container...'
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