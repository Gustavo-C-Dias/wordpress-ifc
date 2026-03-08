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

// Importa opções centralizadas
import { 
    orientationOptions, 
    dividerColorOptions as colorOptions, 
    thicknessOptions 
} from '../../shared/options';

import './style.scss';

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
                    <PanelBody title={'Configurações do Divider'}>
                        <SelectControl
                            label={'Orientação'}
                            value={orientation}
                            options={orientationOptions}
                            onChange={(value) => setAttributes({ orientation: value })}
                            help={'Escolha se o divisor será horizontal ou vertical'}
                        />

                        <SelectControl
                            label={'Cor'}
                            value={color}
                            options={colorOptions}
                            onChange={(value) => setAttributes({ color: value })}
                            help={'Cor do divisor baseada nos tokens de design'}
                        />

                        <SelectControl
                            label={'Espessura'}
                            value={thickness}
                            options={thicknessOptions}
                            onChange={(value) => setAttributes({ thickness: value })}
                            help={'Espessura da linha do divisor'}
                        />

                        <RangeControl
                            label={'Comprimento (%)'}
                            value={parseInt(length)}
                            onChange={(value) => setAttributes({ length: value.toString() })}
                            min={10}
                            max={100}
                            step={5}
                            help={'Comprimento do divisor em relação ao container'}
                        />

                        {orientation === 'vertical' && (
                            <RangeControl
                                label={'Altura (px)'}
                                value={customHeight}
                                onChange={(value) => setAttributes({ customHeight: value })}
                                min={20}
                                max={200}
                                step={5}
                                help={'Altura do divisor vertical em pixels'}
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