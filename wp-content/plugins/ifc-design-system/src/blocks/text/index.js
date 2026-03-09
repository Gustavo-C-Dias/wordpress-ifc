import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

import { 
    textTypeOptions, 
    textColorOptions, 
    alignmentOptions, 
    getWeightOptionsByType 
} from '../../shared/options';
import { buildTextClasses, getHtmlTagForTextType } from '../../shared/class-builder';

import './style.scss';

registerBlockType('ifc-ds/text', {
    edit: ({ attributes, setAttributes }) => {
        const { content, textType, weight, color, alignment } = attributes;

        const handleTypeChange = (newType) => {
            const weightOptions = getWeightOptionsByType(newType);
            const newWeight = weightOptions.find(option => option.value === weight) 
                ? weight 
                : weightOptions[0].value;
            
            setAttributes({ 
                textType: newType,
                weight: newWeight
            });
        };

        const classes = buildTextClasses(textType, weight, color, alignment);

        const blockProps = useBlockProps({
            className: classes
        });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={'Configurações do Texto'}>
                        <SelectControl
                            label={'Tipo de Texto'}
                            value={textType}
                            options={textTypeOptions}
                            onChange={handleTypeChange}
                        />
                        
                        <SelectControl
                            label={'Peso da Fonte'}
                            value={weight}
                            options={getWeightOptionsByType(textType)}
                            onChange={(value) => setAttributes({ weight: value })}
                        />
                        
                        <SelectControl
                            label={'Cor'}
                            value={color}
                            options={textColorOptions}
                            onChange={(value) => setAttributes({ color: value })}
                        />
                        
                        <SelectControl
                            label={'Alinhamento'}
                            value={alignment}
                            options={alignmentOptions}
                            onChange={(value) => setAttributes({ alignment: value })}
                        />
                    </PanelBody>
                </InspectorControls>

                <RichText
                    {...blockProps}
                    tagName={getHtmlTagForTextType(textType)}
                    value={content}
                    onChange={(value) => setAttributes({ content: value })}
                    placeholder={'Digite seu texto...'}
                    allowedFormats={[]}
                />
            </>
        );
    }
});