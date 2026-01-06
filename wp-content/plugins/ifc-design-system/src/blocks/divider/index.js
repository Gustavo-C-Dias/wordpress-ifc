import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    InspectorControls 
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    RangeControl,
    __experimentalUnitControl as UnitControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { DividerComponent } from './component';

import './style.scss';

// Opções de orientação
const orientationOptions = [
    { label: __('Horizontal', 'ifc-design-system'), value: 'horizontal' },
    { label: __('Vertical', 'ifc-design-system'), value: 'vertical' }
];

// Opções de cor usando tokens do WordPress
const colorOptions = [
    { label: __('Cinza', 'ifc-design-system'), value: 'gray' },
    { label: __('Preto', 'ifc-design-system'), value: 'black' },
    { label: __('Branco', 'ifc-design-system'), value: 'white' }
];

// Opções de espessura
const thicknessOptions = [
    { label: __('1px', 'ifc-design-system'), value: '1' },
    { label: __('2px', 'ifc-design-system'), value: '2' },
    { label: __('3px', 'ifc-design-system'), value: '3' },
    { label: __('4px', 'ifc-design-system'), value: '4' },
    { label: __('5px', 'ifc-design-system'), value: '5' }
];

registerBlockType('ifc-ds/divider', {
    edit: ({ attributes, setAttributes }) => {
        const { 
            orientation, 
            color, 
            thickness, 
            length, 
            customHeight 
        } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Configurações do Divider', 'ifc-design-system')}>
                        <SelectControl
                            label={__('Orientação', 'ifc-design-system')}
                            value={orientation}
                            options={orientationOptions}
                            onChange={(value) => setAttributes({ orientation: value })}
                            help={__('Escolha se o divisor será horizontal ou vertical', 'ifc-design-system')}
                        />

                        <SelectControl
                            label={__('Cor', 'ifc-design-system')}
                            value={color}
                            options={colorOptions}
                            onChange={(value) => setAttributes({ color: value })}
                            help={__('Cor do divisor baseada nos tokens de design', 'ifc-design-system')}
                        />

                        <SelectControl
                            label={__('Espessura', 'ifc-design-system')}
                            value={thickness}
                            options={thicknessOptions}
                            onChange={(value) => setAttributes({ thickness: value })}
                            help={__('Espessura da linha do divisor', 'ifc-design-system')}
                        />

                        <RangeControl
                            label={__('Comprimento (%)', 'ifc-design-system')}
                            value={parseInt(length)}
                            onChange={(value) => setAttributes({ length: value.toString() })}
                            min={10}
                            max={100}
                            step={5}
                            help={__('Comprimento do divisor em relação ao container', 'ifc-design-system')}
                        />

                        {orientation === 'vertical' && (
                            <RangeControl
                                label={__('Altura (px)', 'ifc-design-system')}
                                value={customHeight}
                                onChange={(value) => setAttributes({ customHeight: value })}
                                min={20}
                                max={200}
                                step={5}
                                help={__('Altura do divisor vertical em pixels', 'ifc-design-system')}
                            />
                        )}
                    </PanelBody>
                </InspectorControls>

                <div {...useBlockProps()}>
                    <DividerComponent
                        orientation={orientation}
                        color={color}
                        thickness={thickness}
                        length={length}
                        customHeight={customHeight}
                        isEditor={true}
                    />
                </div>
            </>
        );
    }
});