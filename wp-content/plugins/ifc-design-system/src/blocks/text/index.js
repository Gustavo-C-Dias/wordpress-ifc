import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

// Importa opções e utilitários centralizados
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

        // Atualizar peso quando tipo mudar
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

        // Classes CSS usando builder centralizado
        const classes = buildTextClasses(textType, weight, color, alignment);

        const blockProps = useBlockProps({
            className: classes
        });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Configurações do Texto', 'ifc-design-system')}>
                        <SelectControl
                            label={__('Tipo de Texto', 'ifc-design-system')}
                            value={textType}
                            options={textTypeOptions}
                            onChange={handleTypeChange}
                        />
                        
                        <SelectControl
                            label={__('Peso da Fonte', 'ifc-design-system')}
                            value={weight}
                            options={getWeightOptionsByType(textType)}
                            onChange={(value) => setAttributes({ weight: value })}
                        />
                        
                        <SelectControl
                            label={__('Cor', 'ifc-design-system')}
                            value={color}
                            options={textColorOptions}
                            onChange={(value) => setAttributes({ color: value })}
                        />
                        
                        <SelectControl
                            label={__('Alinhamento', 'ifc-design-system')}
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
                    placeholder={__('Digite seu texto...', 'ifc-design-system')}
                    allowedFormats={[]} // Desabilitar formatação Rich Text para manter consistência
                />
            </>
        );
    }
});