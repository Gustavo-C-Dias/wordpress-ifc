import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { 
  PanelBody, 
  TextControl, 
  TextareaControl,
  Button,
  IconButton
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { TextComponent } from '../text/component';
import { LinkComponent } from '../link/component';

import './style.scss';

registerBlockType('ifc-ds/footer', {
  edit: ({ attributes, setAttributes }) => {
    const { linkSections, address } = attributes;

    // Função para adicionar uma nova seção
    const addSection = () => {
      const newSections = [
        ...linkSections,
        {
          titleSection: 'Nova Seção',
          links: [
            {
              label: 'Novo Link',
              url: '#'
            }
          ]
        }
      ];
      setAttributes({ linkSections: newSections });
    };

    // Função para remover uma seção
    const removeSection = (sectionIndex) => {
      const newSections = linkSections.filter((_, index) => index !== sectionIndex);
      setAttributes({ linkSections: newSections });
    };

    // Função para atualizar título da seção
    const updateSectionTitle = (sectionIndex, newTitle) => {
      const newSections = [...linkSections];
      newSections[sectionIndex].titleSection = newTitle;
      setAttributes({ linkSections: newSections });
    };

    // Função para adicionar link em uma seção
    const addLink = (sectionIndex) => {
      const newSections = [...linkSections];
      newSections[sectionIndex].links.push({
        label: 'Novo Link',
        url: '#'
      });
      setAttributes({ linkSections: newSections });
    };

    // Função para remover link
    const removeLink = (sectionIndex, linkIndex) => {
      const newSections = [...linkSections];
      newSections[sectionIndex].links = newSections[sectionIndex].links.filter(
        (_, index) => index !== linkIndex
      );
      setAttributes({ linkSections: newSections });
    };

    // Função para atualizar link
    const updateLink = (sectionIndex, linkIndex, field, value) => {
      const newSections = [...linkSections];
      newSections[sectionIndex].links[linkIndex][field] = value;
      setAttributes({ linkSections: newSections });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Configurações do Footer', 'ifc-design-system')}>
            <TextareaControl
              label={__('Endereço', 'ifc-design-system')}
              value={address}
              onChange={(value) => setAttributes({ address: value })}
              help={__('Texto que aparecerá na parte inferior do footer', 'ifc-design-system')}
            />
          </PanelBody>

          {linkSections.map((section, sectionIndex) => (
            <PanelBody
              key={sectionIndex}
              title={`${__('Seção', 'ifc-design-system')} ${sectionIndex + 1}: ${section.titleSection}`}
              initialOpen={false}
            >
              <TextControl
                label={__('Título da Seção', 'ifc-design-system')}
                value={section.titleSection}
                onChange={(value) => updateSectionTitle(sectionIndex, value)}
              />

              <h4>{__('Links', 'ifc-design-system')}</h4>
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
                  <TextControl
                    label={__('Label do Link', 'ifc-design-system')}
                    value={link.label}
                    onChange={(value) => updateLink(sectionIndex, linkIndex, 'label', value)}
                  />
                  <TextControl
                    label={__('URL', 'ifc-design-system')}
                    value={link.url}
                    onChange={(value) => updateLink(sectionIndex, linkIndex, 'url', value)}
                  />
                  <Button
                    isDestructive
                    isSmall
                    onClick={() => removeLink(sectionIndex, linkIndex)}
                  >
                    {__('Remover Link', 'ifc-design-system')}
                  </Button>
                </div>
              ))}

              <Button
                isPrimary
                isSmall
                onClick={() => addLink(sectionIndex)}
                style={{ marginBottom: '10px' }}
              >
                {__('Adicionar Link', 'ifc-design-system')}
              </Button>

              <br />
              
              <Button
                isDestructive
                onClick={() => removeSection(sectionIndex)}
              >
                {__('Remover Seção', 'ifc-design-system')}
              </Button>
            </PanelBody>
          ))}

          <PanelBody title={__('Gerenciar Seções', 'ifc-design-system')}>
            <Button
              isPrimary
              onClick={addSection}
            >
              {__('Adicionar Nova Seção', 'ifc-design-system')}
            </Button>
          </PanelBody>
        </InspectorControls>

        <footer {...useBlockProps({ className: 'ifc-ds-footer' })}>
          <div className="ifc-ds-footer__sections">
            {linkSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="ifc-ds-footer__section">
                <TextComponent
                  content={section.titleSection}
                  textType="subtitle"
                  weight="bold"
                  color="primary"
                  className="ifc-ds-footer__section-title"
                />
                <div className="ifc-ds-footer__links">
                  {section.links.map((link, linkIndex) => (
                    <LinkComponent
                      key={linkIndex}
                      url={link.url}
                      label={link.label}
                      type="neutral"
                      size="medium"
                      className="ifc-ds-footer__link"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="ifc-ds-footer__address">
            <TextComponent
              content={address}
              textType="body"
              weight="regular"
              color="primary"
              className="ifc-ds-footer__address-text"
            />
          </div>
        </footer>
      </>
    );
  },

  save: () => {
    return null; // Renderização dinâmica via PHP
  }
});
