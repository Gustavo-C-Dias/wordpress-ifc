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

    const removeSection = (sectionIndex) => {
      const newSections = linkSections.filter((_, index) => index !== sectionIndex);
      setAttributes({ linkSections: newSections });
    };

    const updateSectionTitle = (sectionIndex, newTitle) => {
      const newSections = [...linkSections];
      newSections[sectionIndex].titleSection = newTitle;
      setAttributes({ linkSections: newSections });
    };

    const addLink = (sectionIndex) => {
      const newSections = [...linkSections];
      newSections[sectionIndex].links.push({
        label: 'Novo Link',
        url: '#'
      });
      setAttributes({ linkSections: newSections });
    };

    const removeLink = (sectionIndex, linkIndex) => {
      const newSections = [...linkSections];
      newSections[sectionIndex].links = newSections[sectionIndex].links.filter(
        (_, index) => index !== linkIndex
      );
      setAttributes({ linkSections: newSections });
    };

    const updateLink = (sectionIndex, linkIndex, field, value) => {
      const newSections = [...linkSections];
      newSections[sectionIndex].links[linkIndex][field] = value;
      setAttributes({ linkSections: newSections });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title={'Configurações do Footer'}>
            <TextareaControl
              label={'Endereço'}
              value={address}
              onChange={(value) => setAttributes({ address: value })}
              help={'Texto que aparecerá na parte inferior do footer'}
            />
          </PanelBody>

          {linkSections.map((section, sectionIndex) => (
            <PanelBody
              key={sectionIndex}
              title={`Seção ${sectionIndex + 1}: ${section.titleSection}`}
              initialOpen={false}
            >
              <TextControl
                label={'Título da Seção'}
                value={section.titleSection}
                onChange={(value) => updateSectionTitle(sectionIndex, value)}
              />

              <h4>{'Links'}</h4>
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
                  <TextControl
                    label={'Label do Link'}
                    value={link.label}
                    onChange={(value) => updateLink(sectionIndex, linkIndex, 'label', value)}
                  />
                  <TextControl
                    label={'URL'}
                    value={link.url}
                    onChange={(value) => updateLink(sectionIndex, linkIndex, 'url', value)}
                  />
                  <Button
                    isDestructive
                    isSmall
                    onClick={() => removeLink(sectionIndex, linkIndex)}
                  >
                    {'Remover Link'}
                  </Button>
                </div>
              ))}

              <Button
                isPrimary
                isSmall
                onClick={() => addLink(sectionIndex)}
                style={{ marginBottom: '10px' }}
              >
                {'Adicionar Link'}
              </Button>

              <br />
              
              <Button
                isDestructive
                onClick={() => removeSection(sectionIndex)}
              >
                {'Remover Seção'}
              </Button>
            </PanelBody>
          ))}

          <PanelBody title={'Gerenciar Seções'}>
            <Button
              isPrimary
              onClick={addSection}
            >
              {'Adicionar Nova Seção'}
            </Button>
          </PanelBody>
        </InspectorControls>

        <footer {...useBlockProps({ className: 'ifc-ds-footer' })}>
          <div className="ifc-ds-layout-container ifc-ds-layout-container--fixed">
            <div className="ifc-ds-layout-container__content">
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
            </div>
          </div>
        </footer>
      </>
    );
  },

  save: () => {
    return null;
  }
});
