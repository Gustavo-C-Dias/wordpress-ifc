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
                    placeholder: 'Adicione qualquer conteúdo dentro do container de layout...'
                }]
            ],
            templateLock: false
        });

        return (
            <>
                <InspectorControls>
                    <PanelBody title={'Configurações do Container'}>
                        <SelectControl
                            label={'Tipo de Container'}
                            value={containerType}
                            options={[
                                { label: 'Fluído (100% da largura)', value: 'fluid' },
                                { label: 'Fixo (largura máxima definida)', value: 'fixed' }
                            ]}
                            onChange={(value) => setAttributes({ containerType: value })}
                            help={containerType === 'fluid' ? 
                                'Container ocupa toda largura disponível' : 
                                'Container tem largura máxima com margens automáticas'
                            }
                        />

                        <RangeControl
                            label={'Colunas Máximas'}
                            value={maxColumns}
                            onChange={(value) => setAttributes({ maxColumns: value })}
                            min={1}
                            max={12}
                            step={1}
                            help={'Define o sistema de grid (4, 8 ou 12 colunas são recomendados)'}
                        />

                        {containerType === 'fixed' && (
                            <TextControl
                                label={'Largura Máxima Personalizada'}
                                value={customMaxWidth}
                                onChange={(value) => setAttributes({ customMaxWidth: value })}
                                placeholder="1200px"
                                help={'Deixe vazio para usar os breakpoints padrão do Gov.br'}
                            />
                        )}
                    </PanelBody>

                    <PanelBody title={'Layout e Espaçamento'}>
                        <SelectControl
                            label={'Espaçamento Vertical'}
                            value={verticalSpacing}
                            options={[
                                { label: 'Nenhum', value: 'none' },
                                { label: 'Pequeno', value: 'small' },
                                { label: 'Médio', value: 'medium' },
                                { label: 'Grande', value: 'large' },
                                { label: 'Extra Grande', value: 'extra-large' }
                            ]}
                            onChange={(value) => setAttributes({ verticalSpacing: value })}
                        />

                        <SelectControl
                            label={'Alinhamento Horizontal'}
                            value={horizontalAlignment}
                            options={[
                                { label: 'Esquerda', value: 'left' },
                                { label: 'Centro', value: 'center' },
                                { label: 'Direita', value: 'right' }
                            ]}
                            onChange={(value) => setAttributes({ horizontalAlignment: value })}
                        />

                        <ToggleControl
                            label={'Permitir Sangria (Bleed)'}
                            checked={allowBleed}
                            onChange={(value) => setAttributes({ allowBleed: value })}
                            help={'Permite que elementos filhos quebrem as margens da grid'}
                        />
                    </PanelBody>

                    <PanelBody title={'Informações do Grid Gov.br'} initialOpen={false}>
                        <div className="ifc-ds-grid-info">
                            <Heading level={4}>{'Breakpoints Oficiais:'}</Heading>
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