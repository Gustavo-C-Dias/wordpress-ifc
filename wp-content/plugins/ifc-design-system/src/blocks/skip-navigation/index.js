import { 
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    __experimentalInputControl as InputControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { SkipNavigationComponent } from './component';

import './style.scss';

registerBlockType('ifc-ds/skip-navigation', {
    edit: ({ attributes, setAttributes }) => {
        const { links } = attributes;
        
        // Função para atualizar link
        const updateLink = (linkId, field, value) => {
            setAttributes({
                links: links.map(link => 
                    link.id === linkId 
                        ? { ...link, [field]: value }
                        : link
                )
            });
        };

        return (
            <>
                <InspectorControls>
                    <PanelBody title={'Configurar Links'} initialOpen={true}>
                        {links.map((link) => (
                            <div key={link.id} style={{ marginBottom: '16px', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}>
                                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                                    {'Link'} {link.id}
                                </h4>
                                
                                <TextControl
                                    label={'Texto do Link'}
                                    value={link.label}
                                    onChange={(value) => updateLink(link.id, 'label', value)}
                                    style={{ marginBottom: '8px' }}
                                />
                                
                                <InputControl
                                    label={'Seletor de Destino'}
                                    value={link.target}
                                    onChange={(value) => updateLink(link.id, 'target', value)}
                                    placeholder="#main"
                                    help={'ID ou seletor CSS do elemento de destino (ex: #main, nav, footer)'}
                                    style={{ marginBottom: '8px' }}
                                />
                                
                                <TextControl
                                    label={'Descrição (aria-label)'}
                                    value={link.description}
                                    onChange={(value) => updateLink(link.id, 'description', value)}
                                    help={'Descrição para leitores de tela'}
                                />
                            </div>
                        ))}
                    </PanelBody>
                </InspectorControls>

                <div {...useBlockProps()}>
                    <SkipNavigationComponent 
                        links={links}
                        onClick={(e) => e.preventDefault()}
                    />
                </div>
            </>
        );
    }
});