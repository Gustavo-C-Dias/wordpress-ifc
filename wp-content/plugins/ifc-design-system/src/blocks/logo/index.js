import { 
    useBlockProps, 
    InspectorControls,
    URLInput,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl,
    TextControl,
    Button,
    __experimentalUnitControl as UnitControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { LogoComponent, getLogoUrl } from './component';

// Importa opções centralizadas
import { 
    orientationOptions, 
    logoVariantOptions as variantOptions, 
    linkTargetOptions 
} from '../../shared/options';

import './style.scss';

registerBlockType('ifc-ds/logo', {
    edit: ({ attributes, setAttributes }) => {
        const { 
            campus,
            orientation, 
            variant, 
            width, 
            height,
            linkUrl,
            linkTarget,
            altText
        } = attributes;

        // Calcular dimensões automáticas baseadas na orientação
        const getDefaultDimensions = (orientation) => {
            if (orientation === 'horizontal') {
                return { width: 200, height: 60 };
            } else {
                return { width: 80, height: 120 };
            }
        };

        // Atualizar dimensões quando orientação mudar
        const handleOrientationChange = (newOrientation) => {
            const defaultDimensions = getDefaultDimensions(newOrientation);
            setAttributes({ 
                orientation: newOrientation,
                width: defaultDimensions.width,
                height: defaultDimensions.height
            });
        };

        const logoUrl = getLogoUrl(campus, orientation, variant);

        return (
            <>
                <InspectorControls>
                    <PanelBody title={'Configurações do Logo'}>
                        <SelectControl
                            label={'Campus'}
                            value={campus}
                            options={[
                                { label: 'Camboriú', value: 'camboriu' }
                            ]}
                            onChange={(value) => setAttributes({ campus: value })}
                            help={'Escolha o campus do logo'}
                        />

                        <SelectControl
                            label={'Orientação'}
                            value={orientation}
                            options={orientationOptions}
                            onChange={handleOrientationChange}
                            help={'Escolha entre logo horizontal ou vertical'}
                        />

                        <SelectControl
                            label={'Variante'}
                            value={variant}
                            options={variantOptions}
                            onChange={(value) => setAttributes({ variant: value })}
                            help={'Escolha a versão de cor do logo'}
                        />

                        <div className="logo-preview" style={{ 
                            margin: '16px 0', 
                            padding: '16px', 
                            border: '1px solid #ddd', 
                            borderRadius: '4px',
                            backgroundColor: variant === 'white' ? '#333' : '#fff'
                        }}>
                            <p><strong>{'Preview:'}</strong></p>
                            <img 
                                src={logoUrl} 
                                alt={altText}
                                style={{ 
                                    maxWidth: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </PanelBody>

                    <PanelBody title={'Dimensões'} initialOpen={false}>
                        <RangeControl
                            label={'Largura (px)'}
                            value={width}
                            onChange={(value) => setAttributes({ width: value })}
                            min={50}
                            max={orientation === 'horizontal' ? 400 : 200}
                            step={10}
                        />

                        <RangeControl
                            label={'Altura (px)'}
                            value={height}
                            onChange={(value) => setAttributes({ height: value })}
                            min={30}
                            max={orientation === 'vertical' ? 300 : 150}
                            step={5}
                        />

                        <Button
                            isSecondary
                            onClick={() => {
                                const defaultDimensions = getDefaultDimensions(orientation);
                                setAttributes({
                                    width: defaultDimensions.width,
                                    height: defaultDimensions.height
                                });
                            }}
                        >
                            {'Restaurar dimensões padrão'}
                        </Button>
                    </PanelBody>

                    <PanelBody title={'Link e Acessibilidade'} initialOpen={false}>
                        <TextControl
                            label={'URL do Link'}
                            value={linkUrl}
                            onChange={(value) => setAttributes({ linkUrl: value })}
                            placeholder="https://ifc.edu.br"
                            help={'URL para onde o logo deve redirecionar quando clicado'}
                        />

                        {linkUrl && (
                            <SelectControl
                                label={'Abrir link'}
                                value={linkTarget}
                                options={linkTargetOptions}
                                onChange={(value) => setAttributes({ linkTarget: value })}
                            />
                        )}

                        <TextControl
                            label={'Texto Alternativo'}
                            value={altText}
                            onChange={(value) => setAttributes({ altText: value })}
                            help={'Descrição da imagem para acessibilidade'}
                        />
                    </PanelBody>
                </InspectorControls>

                <div {...useBlockProps()}>
                    <LogoComponent
                        campus={campus}
                        orientation={orientation}
                        variant={variant}
                        width={width}
                        height={height}
                        linkUrl={linkUrl}
                        linkTarget={linkTarget}
                        altText={altText}
                        isEditor={true}
                    />
                </div>
            </>
        );
    }
});