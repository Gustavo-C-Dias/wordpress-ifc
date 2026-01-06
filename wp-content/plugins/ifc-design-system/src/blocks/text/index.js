import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

registerBlockType('ifc-ds/text', {
    edit: ({ attributes, setAttributes }) => {
        const { content, textType, weight, color, alignment } = attributes;

        // Opções de tipo de texto
        const textTypeOptions = [
            { label: __('Title (32px)', 'ifc-design-system'), value: 'title' },
            { label: __('Subtitle (24px)', 'ifc-design-system'), value: 'subtitle' },
            { label: __('Body (16px)', 'ifc-design-system'), value: 'body' },
            { label: __('Detail (14px)', 'ifc-design-system'), value: 'detail' },
            { label: __('Caption (12px)', 'ifc-design-system'), value: 'caption' }
        ];

        // Opções de peso baseadas no tipo
        const getWeightOptions = (type) => {
            switch (type) {
                case 'title':
                    return [{ label: __('Semibold', 'ifc-design-system'), value: 'semibold' }];
                case 'subtitle':
                    return [{ label: __('Semibold', 'ifc-design-system'), value: 'semibold' }];
                case 'body':
                    return [
                        { label: __('Regular', 'ifc-design-system'), value: 'regular' },
                        { label: __('Semibold', 'ifc-design-system'), value: 'semibold' },
                        { label: __('Bold', 'ifc-design-system'), value: 'bold' }
                    ];
                case 'detail':
                    return [
                        { label: __('Regular', 'ifc-design-system'), value: 'regular' },
                        { label: __('Semibold', 'ifc-design-system'), value: 'semibold' }
                    ];
                case 'caption':
                    return [{ label: __('Regular', 'ifc-design-system'), value: 'regular' }];
                default:
                    return [{ label: __('Regular', 'ifc-design-system'), value: 'regular' }];
            }
        };

        // Opções de cor
        const colorOptions = [
            { label: __('Primária', 'ifc-design-system'), value: 'primary' },
            { label: __('Secundária', 'ifc-design-system'), value: 'secondary' },
            { label: __('Neutra', 'ifc-design-system'), value: 'neutral' },
            { label: __('Sucesso', 'ifc-design-system'), value: 'success' },
            { label: __('Aviso', 'ifc-design-system'), value: 'warning' },
            { label: __('Erro', 'ifc-design-system'), value: 'error' }
        ];

        // Opções de alinhamento
        const alignmentOptions = [
            { label: __('Esquerda', 'ifc-design-system'), value: 'left' },
            { label: __('Centro', 'ifc-design-system'), value: 'center' },
            { label: __('Direita', 'ifc-design-system'), value: 'right' }
        ];

        // Definir tag HTML baseada no tipo
        const getHtmlTag = (type) => {
            switch (type) {
                case 'title': return 'h1';
                case 'subtitle': return 'h2';
                case 'caption': return 'small';
                default: return 'p';
            }
        };

        // Atualizar peso quando tipo mudar
        const handleTypeChange = (newType) => {
            const weightOptions = getWeightOptions(newType);
            const newWeight = weightOptions.find(option => option.value === weight) 
                ? weight 
                : weightOptions[0].value;
            
            setAttributes({ 
                textType: newType,
                weight: newWeight
            });
        };

        // Classes CSS
        const classes = [
            'ifc-ds-text',
            `ifc-ds-text--${textType}`,
            `ifc-ds-text--${weight}`,
            `ifc-ds-text--${color}`,
            `ifc-ds-text--align-${alignment}`
        ].join(' ');

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
                            options={getWeightOptions(textType)}
                            onChange={(value) => setAttributes({ weight: value })}
                        />
                        
                        <SelectControl
                            label={__('Cor', 'ifc-design-system')}
                            value={color}
                            options={colorOptions}
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
                    tagName={getHtmlTag(textType)}
                    value={content}
                    onChange={(value) => setAttributes({ content: value })}
                    placeholder={__('Digite seu texto...', 'ifc-design-system')}
                    allowedFormats={[]} // Desabilitar formatação Rich Text para manter consistência
                />
            </>
        );
    }
});