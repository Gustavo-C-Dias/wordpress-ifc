import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    TextControl,
    TextareaControl,
    __experimentalInputControl as InputControl,
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import { Fragment } from '@wordpress/element';

import './style.scss';

const SectionEditor = ({ section, sectionIndex, onUpdate, onRemove }) => {
    const updateSection = (field, value) => {
        onUpdate(sectionIndex, { ...section, [field]: value });
    };

    const updateLink = (linkIndex, field, value) => {
        const links = [...(section.links || [])];
        links[linkIndex] = { ...links[linkIndex], [field]: value };
        updateSection('links', links);
    };

    const removeLink = (linkIndex) => {
        const links = (section.links || []).filter((_, i) => i !== linkIndex);
        updateSection('links', links);
    };

    const addLink = () => {
        const links = [...(section.links || []), { label: '', url: '' }];
        updateSection('links', links);
    };

    return (
        <div
            style={{
                marginBottom: 16,
                padding: 12,
                border: '1px solid #ccc',
                borderRadius: 4,
            }}
        >
            <TextControl
                label="Título da Seção"
                value={section.titleSection || ''}
                onChange={(value) => updateSection('titleSection', value)}
            />
            <p style={{ fontWeight: 600, margin: '12px 0 8px' }}>Links</p>
            {(section.links || []).map((link, linkIndex) => (
                <div
                    key={linkIndex}
                    style={{
                        marginBottom: 8,
                        padding: 8,
                        background: '#f6f7f7',
                        borderRadius: 4,
                    }}
                >
                    <InputControl
                        label="Texto"
                        value={link.label || ''}
                        onChange={(value) => updateLink(linkIndex, 'label', value)}
                    />
                    <InputControl
                        label="URL"
                        value={link.url || ''}
                        onChange={(value) => updateLink(linkIndex, 'url', value)}
                        placeholder="https://exemplo.com"
                    />
                    <Button
                        isDestructive
                        isSmall
                        onClick={() => removeLink(linkIndex)}
                        style={{ marginTop: 4 }}
                    >
                        Remover link
                    </Button>
                </div>
            ))}
            <Button isSecondary onClick={addLink} style={{ marginRight: 8 }}>
                + Link
            </Button>
            <Button isDestructive onClick={() => onRemove(sectionIndex)}>
                Remover seção
            </Button>
        </div>
    );
};

registerBlockType('ifc-ds/footer', {
    edit: ({ attributes, setAttributes }) => {
        const { linkSections, address, campus } = attributes;

        const blockProps = useBlockProps({ className: 'ifc-ds-footer__editor-wrapper' });

        const updateSection = (index, next) => {
            const sections = [...(linkSections || [])];
            sections[index] = next;
            setAttributes({ linkSections: sections });
        };

        const removeSection = (index) => {
            setAttributes({
                linkSections: (linkSections || []).filter((_, i) => i !== index),
            });
        };

        const addSection = () => {
            setAttributes({
                linkSections: [
                    ...(linkSections || []),
                    { titleSection: 'Nova Seção', links: [] },
                ],
            });
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title="Endereço Institucional" initialOpen={true}>
                        <TextControl
                            label="Nome do Campus"
                            value={campus || ''}
                            onChange={(value) => setAttributes({ campus: value })}
                        />
                        <TextareaControl
                            label="Endereço Completo"
                            value={address || ''}
                            onChange={(value) => setAttributes({ address: value })}
                            help="Linha única exibida ao final do footer."
                        />
                    </PanelBody>

                    <PanelBody title="Seções de Links" initialOpen={false}>
                        {(linkSections || []).map((section, index) => (
                            <SectionEditor
                                key={index}
                                section={section}
                                sectionIndex={index}
                                onUpdate={updateSection}
                                onRemove={removeSection}
                            />
                        ))}
                        <Button isPrimary onClick={addSection}>
                            + Adicionar Seção
                        </Button>
                    </PanelBody>
                </InspectorControls>

                <div {...blockProps}>
                    <ServerSideRender
                        block="ifc-ds/footer"
                        attributes={attributes}
                        EmptyResponsePlaceholder={() => (
                            <p>Footer IFC — preview indisponível.</p>
                        )}
                    />
                </div>
            </Fragment>
        );
    },
});
