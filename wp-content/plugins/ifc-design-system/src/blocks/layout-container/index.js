import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    InspectorControls,
    InnerBlocks,
    useInnerBlocksProps
} from '@wordpress/block-editor';
import { 
    PanelBody, 
    SelectControl, 
    ToggleControl,
    RangeControl,
    TextControl,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Componente Layout Container para renderização no editor
 */
const LayoutContainerComponent = ({ 
    children,
    containerType = 'fluid',
    allowBleed = false,
    maxColumns = 12,
    verticalSpacing = 'medium',
    horizontalAlignment = 'center',
    customMaxWidth = '',
    className = '',
    ...props 
}) => {
    const classes = [
        'ifc-ds-layout-container',
        `ifc-ds-layout-container--${containerType}`,
        `ifc-ds-layout-container--spacing-${verticalSpacing}`,
        `ifc-ds-layout-container--align-${horizontalAlignment}`,
        `ifc-ds-layout-container--columns-${maxColumns}`,
        allowBleed ? 'ifc-ds-layout-container--bleed' : '',
        className
    ].filter(Boolean).join(' ');

    const inlineStyles = containerType === 'fixed' && customMaxWidth ? 
        { maxWidth: customMaxWidth } : {};

    return (
        <div 
            className={classes}
            style={inlineStyles}
            data-columns={maxColumns}
            data-container-type={containerType}
            {...props}
        >
            <div className="ifc-ds-layout-container__content">
                {children}
            </div>
        </div>
    );
};

registerBlockType('ifc-ds/layout-container', {
    edit: ({ attributes, setAttributes, clientId }) => {
        const { 
            containerType, 
            allowBleed, 
            maxColumns, 
            verticalSpacing, 
            horizontalAlignment,
            customMaxWidth
        } = attributes;

        const blockProps = useBlockProps();

        const innerBlocksProps = useInnerBlocksProps({
            className: 'ifc-ds-layout-container__content'
        }, {
            allowedBlocks: true,
            template: [
                ['core/paragraph', {
                    placeholder: __('Adicione qualquer conteúdo dentro do container de layout...', 'ifc-design-system')
                }]
            ],
            templateLock: false
        });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Configurações do Container', 'ifc-design-system')}>
                        <SelectControl
                            label={__('Tipo de Container', 'ifc-design-system')}
                            value={containerType}
                            options={[
                                { label: __('Fluído (100% da largura)', 'ifc-design-system'), value: 'fluid' },
                                { label: __('Fixo (largura máxima definida)', 'ifc-design-system'), value: 'fixed' }
                            ]}
                            onChange={(value) => setAttributes({ containerType: value })}
                            help={containerType === 'fluid' ? 
                                __('Container ocupa toda largura disponível', 'ifc-design-system') : 
                                __('Container tem largura máxima com margens automáticas', 'ifc-design-system')
                            }
                        />

                        <RangeControl
                            label={__('Colunas Máximas', 'ifc-design-system')}
                            value={maxColumns}
                            onChange={(value) => setAttributes({ maxColumns: value })}
                            min={1}
                            max={12}
                            step={1}
                            help={__('Define o sistema de grid (4, 8 ou 12 colunas são recomendados)', 'ifc-design-system')}
                        />

                        {containerType === 'fixed' && (
                            <TextControl
                                label={__('Largura Máxima Personalizada', 'ifc-design-system')}
                                value={customMaxWidth}
                                onChange={(value) => setAttributes({ customMaxWidth: value })}
                                placeholder="1200px"
                                help={__('Deixe vazio para usar os breakpoints padrão do Gov.br', 'ifc-design-system')}
                            />
                        )}
                    </PanelBody>

                    <PanelBody title={__('Layout e Espaçamento', 'ifc-design-system')}>
                        <SelectControl
                            label={__('Espaçamento Vertical', 'ifc-design-system')}
                            value={verticalSpacing}
                            options={[
                                { label: __('Nenhum', 'ifc-design-system'), value: 'none' },
                                { label: __('Pequeno', 'ifc-design-system'), value: 'small' },
                                { label: __('Médio', 'ifc-design-system'), value: 'medium' },
                                { label: __('Grande', 'ifc-design-system'), value: 'large' },
                                { label: __('Extra Grande', 'ifc-design-system'), value: 'extra-large' }
                            ]}
                            onChange={(value) => setAttributes({ verticalSpacing: value })}
                        />

                        <SelectControl
                            label={__('Alinhamento Horizontal', 'ifc-design-system')}
                            value={horizontalAlignment}
                            options={[
                                { label: __('Esquerda', 'ifc-design-system'), value: 'left' },
                                { label: __('Centro', 'ifc-design-system'), value: 'center' },
                                { label: __('Direita', 'ifc-design-system'), value: 'right' }
                            ]}
                            onChange={(value) => setAttributes({ horizontalAlignment: value })}
                        />

                        <ToggleControl
                            label={__('Permitir Sangria (Bleed)', 'ifc-design-system')}
                            checked={allowBleed}
                            onChange={(value) => setAttributes({ allowBleed: value })}
                            help={__('Permite que elementos filhos quebrem as margens da grid', 'ifc-design-system')}
                        />
                    </PanelBody>

                    <PanelBody title={__('Informações do Grid Gov.br', 'ifc-design-system')} initialOpen={false}>
                        <div className="ifc-ds-grid-info">
                            <Heading level={4}>{__('Breakpoints Oficiais:', 'ifc-design-system')}</Heading>
                            <ul style={{ fontSize: '12px', color: '#666' }}>
                                <li><strong>Mobile Portrait:</strong> 0-575px (4 colunas, gutter 16px)</li>
                                <li><strong>Mobile Landscape/Tablet:</strong> 576-991px (8 colunas, gutter 24px)</li>
                                <li><strong>Tablet Landscape:</strong> 992-1279px (8 colunas, gutter 24px)</li>
                                <li><strong>Desktop:</strong> 1280-1599px (12 colunas, gutter 24px)</li>
                                <li><strong>TV:</strong> 1600px+ (12 colunas, gutter 40px)</li>
                            </ul>
                        </div>
                    </PanelBody>
                </InspectorControls>

                <div {...blockProps}>
                    <div className="ifc-ds-layout-container__preview-label">
                        {__('Layout Container', 'ifc-design-system')} ({containerType === 'fluid' ? __('Fluído', 'ifc-design-system') : __('Fixo', 'ifc-design-system')}) - {maxColumns} {__('colunas', 'ifc-design-system')}
                    </div>
                    <LayoutContainerComponent
                        containerType={containerType}
                        allowBleed={allowBleed}
                        maxColumns={maxColumns}
                        verticalSpacing={verticalSpacing}
                        horizontalAlignment={horizontalAlignment}
                        customMaxWidth={customMaxWidth}
                    >
                        <div {...innerBlocksProps} />
                    </LayoutContainerComponent>
                </div>
            </>
        );
    },

    save: () => {
        return <InnerBlocks.Content />;
    }
});