import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    Button,
    TextControl,
    __experimentalInputControl as InputControl,
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import { Fragment } from '@wordpress/element';

import './style.scss';

const orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
];

const variantOptions = [
    { label: 'Padrão', value: 'default' },
    { label: 'Branco', value: 'white' },
];

const platformOptions = [
    { label: 'YouTube', value: 'youtube' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Instagram', value: 'instagram' },
    { label: 'Twitter/X', value: 'twitter' },
    { label: 'LinkedIn', value: 'linkedin' },
];

const LinkRepeater = ({ label, items, onChange, fields = ['label', 'url'] }) => {
    const updateItem = (index, field, value) => {
        const next = [...items];
        next[index] = { ...next[index], [field]: value };
        onChange(next);
    };

    const removeItem = (index) => {
        onChange(items.filter((_, i) => i !== index));
    };

    const addItem = () => {
        const blank = fields.reduce((acc, f) => ({ ...acc, [f]: '' }), {});
        onChange([...items, blank]);
    };

    return (
        <Fragment>
            <p style={{ fontWeight: 600, margin: '0 0 8px' }}>{label}</p>
            {items.map((item, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: 12,
                        padding: 8,
                        border: '1px solid #ddd',
                        borderRadius: 4,
                    }}
                >
                    {fields.includes('platform') && (
                        <SelectControl
                            label="Plataforma"
                            value={item.platform || 'youtube'}
                            options={platformOptions}
                            onChange={(value) => updateItem(index, 'platform', value)}
                        />
                    )}
                    {fields.includes('label') && (
                        <InputControl
                            label="Texto"
                            value={item.label || ''}
                            onChange={(value) => updateItem(index, 'label', value)}
                        />
                    )}
                    {fields.includes('url') && (
                        <InputControl
                            label="URL"
                            value={item.url || ''}
                            onChange={(value) => updateItem(index, 'url', value)}
                            placeholder="https://exemplo.com"
                        />
                    )}
                    <Button
                        isDestructive
                        isSmall
                        onClick={() => removeItem(index)}
                        style={{ marginTop: 8 }}
                    >
                        Remover
                    </Button>
                </div>
            ))}
            <Button isPrimary onClick={addItem}>
                Adicionar
            </Button>
        </Fragment>
    );
};

registerBlockType('ifc-ds/header', {
    edit: ({ attributes, setAttributes }) => {
        const {
            logoCampus,
            logoOrientation,
            logoVariant,
            accessibilityLinks,
            navigationLinks,
            socialMedia,
        } = attributes;

        const blockProps = useBlockProps({ className: 'ifc-ds-header__editor-wrapper' });

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title="Logo" initialOpen={true}>
                        <TextControl
                            label="Campus (slug)"
                            value={logoCampus}
                            onChange={(value) => setAttributes({ logoCampus: value })}
                            help="Identificador do campus (ex.: camboriu)."
                        />
                        <SelectControl
                            label="Orientação"
                            value={logoOrientation}
                            options={orientationOptions}
                            onChange={(value) => setAttributes({ logoOrientation: value })}
                        />
                        <SelectControl
                            label="Variante"
                            value={logoVariant}
                            options={variantOptions}
                            onChange={(value) => setAttributes({ logoVariant: value })}
                        />
                    </PanelBody>

                    <PanelBody title="Links de Acessibilidade" initialOpen={false}>
                        <LinkRepeater
                            label="Itens"
                            items={accessibilityLinks || []}
                            onChange={(items) => setAttributes({ accessibilityLinks: items })}
                        />
                    </PanelBody>

                    <PanelBody title="Navegação Superior" initialOpen={false}>
                        <LinkRepeater
                            label="Itens"
                            items={navigationLinks || []}
                            onChange={(items) => setAttributes({ navigationLinks: items })}
                        />
                    </PanelBody>

                    <PanelBody title="Redes Sociais" initialOpen={false}>
                        <LinkRepeater
                            label="Itens"
                            items={socialMedia || []}
                            onChange={(items) => setAttributes({ socialMedia: items })}
                            fields={['platform', 'url']}
                        />
                    </PanelBody>
                </InspectorControls>

                <div {...blockProps}>
                    <ServerSideRender
                        block="ifc-ds/header"
                        attributes={attributes}
                        EmptyResponsePlaceholder={() => (
                            <p>Header IFC — preview indisponível.</p>
                        )}
                    />
                </div>
            </Fragment>
        );
    },
});
