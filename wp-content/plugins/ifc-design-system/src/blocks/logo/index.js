import { __ } from '@wordpress/i18n';
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

        const logoUrl = getLogoUrl(orientation, variant);

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Configurações do Logo', 'ifc-design-system')}>
                        <SelectControl
                            label={__('Orientação', 'ifc-design-system')}
                            value={orientation}
                            options={orientationOptions}
                            onChange={handleOrientationChange}
                            help={__('Escolha entre logo horizontal ou vertical', 'ifc-design-system')}
                        />

                        <SelectControl
                            label={__('Variante', 'ifc-design-system')}
                            value={variant}
                            options={variantOptions}
                            onChange={(value) => setAttributes({ variant: value })}
                            help={__('Escolha a versão de cor do logo', 'ifc-design-system')}
                        />

                        <div className="logo-preview" style={{ 
                            margin: '16px 0', 
                            padding: '16px', 
                            border: '1px solid #ddd', 
                            borderRadius: '4px',
                            backgroundColor: variant === 'white' ? '#333' : '#fff'
                        }}>
                            <p><strong>{__('Preview:', 'ifc-design-system')}</strong></p>
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

                    <PanelBody title={__('Dimensões', 'ifc-design-system')} initialOpen={false}>
                        <RangeControl
                            label={__('Largura (px)', 'ifc-design-system')}
                            value={width}
                            onChange={(value) => setAttributes({ width: value })}
                            min={50}
                            max={orientation === 'horizontal' ? 400 : 200}
                            step={10}
                        />

                        <RangeControl
                            label={__('Altura (px)', 'ifc-design-system')}
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
                            {__('Restaurar dimensões padrão', 'ifc-design-system')}
                        </Button>
                    </PanelBody>

                    <PanelBody title={__('Link e Acessibilidade', 'ifc-design-system')} initialOpen={false}>
                        <TextControl
                            label={__('URL do Link', 'ifc-design-system')}
                            value={linkUrl}
                            onChange={(value) => setAttributes({ linkUrl: value })}
                            placeholder="https://ifc.edu.br"
                            help={__('URL para onde o logo deve redirecionar quando clicado', 'ifc-design-system')}
                        />

                        {linkUrl && (
                            <SelectControl
                                label={__('Abrir link', 'ifc-design-system')}
                                value={linkTarget}
                                options={linkTargetOptions}
                                onChange={(value) => setAttributes({ linkTarget: value })}
                            />
                        )}

                        <TextControl
                            label={__('Texto Alternativo', 'ifc-design-system')}
                            value={altText}
                            onChange={(value) => setAttributes({ altText: value })}
                            help={__('Descrição da imagem para acessibilidade', 'ifc-design-system')}
                        />
                    </PanelBody>
                </InspectorControls>

                <div {...useBlockProps()}>
                    <LogoComponent
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