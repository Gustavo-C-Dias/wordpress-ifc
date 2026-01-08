import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { SkipNavigationComponent } from '../skip-navigation/component';
import { LogoComponent } from '../logo/component';
import { LinkComponent } from '../link/component';
import { DividerComponent } from '../divider/component';
import { TextComponent } from '../text/component';

import './style.scss';

registerBlockType('ifc-ds/header', {
  edit: ({ attributes, setAttributes }) => {
    const { 
      logoOrientation, 
      logoVariant,
      accessibilityLinks,
      navigationLinks,
      socialMedia
    } = attributes;
    
    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Configurações do Header', 'ifc-design-system')}>
            <SelectControl
              label={__('Orientação do Logo', 'ifc-design-system')}
              value={logoOrientation}
              options={[
                { label: __('Horizontal', 'ifc-design-system'), value: 'horizontal' },
                { label: __('Vertical', 'ifc-design-system'), value: 'vertical' }
              ]}
              onChange={(value) => setAttributes({ logoOrientation: value })}
            />
            <SelectControl
              label={__('Variante do Logo', 'ifc-design-system')}
              value={logoVariant}
              options={[
                { label: __('Padrão', 'ifc-design-system'), value: 'default' },
                { label: __('Branco', 'ifc-design-system'), value: 'white' }
              ]}
              onChange={(value) => setAttributes({ logoVariant: value })}
            />
          </PanelBody>
        </InspectorControls>
        
        <header {...useBlockProps({ className: 'ifc-ds-header' })}>
          {/* Primeira seção: Skip Navigation + Links de Acessibilidade */}
          <div className="ifc-ds-header__top-section">
            <div className="ifc-ds-header__accessibility">
              <SkipNavigationComponent 
                onClick={(e) => e.preventDefault()}
              />
              <div className="ifc-ds-header__accessibility-links">
                {accessibilityLinks.map((link, index) => (
                  <LinkComponent
                    key={index}
                    url={link.url}
                    label={link.label}
                    target="_self"
                    size="small"
                    weight="regular"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Segunda seção: Logo + Busca + Redes Sociais */}
          <div className="ifc-ds-header__main-section">
            <div className="ifc-ds-header__brand">
              <LogoComponent 
                orientation={logoOrientation}
                variant={logoVariant}
                className="ifc-ds-header__logo"
              />
            </div>
            
            <div className="ifc-ds-header__actions">
              <div className="ifc-ds-header__search">
                <input 
                  type="search" 
                  placeholder={__('Buscar...', 'ifc-design-system')}
                  className="ifc-ds-header__search-input"
                />
              </div>
              <div className="ifc-ds-header__social">
                {socialMedia.map((social, index) => (
                  <LinkComponent
                    key={index}
                    url={social.url}
                    label={social.platform}
                    target="_blank"
                    icon={social.platform}
                    iconOnly={true}
                    size="medium"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Terceira seção: Links de Navegação com Dividers */}
          <div className="ifc-ds-header__navigation">
            {navigationLinks.map((link, index) => (
              <div key={index} className="ifc-ds-header__nav-item">
                <LinkComponent
                  url={link.url}
                  label={link.label}
                  target="_self"
                  size="medium"
                  weight="medium"
                />
                {index < navigationLinks.length - 1 && (
                  <DividerComponent 
                    orientation="vertical"
                    color="gray"
                  />
                )}
              </div>
            ))}
          </div>
        </header>
      </>
    );
  }
});