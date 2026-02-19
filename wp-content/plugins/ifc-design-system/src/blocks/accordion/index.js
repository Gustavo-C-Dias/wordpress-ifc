import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { 
    PanelBody, 
    TextControl, 
  ToggleControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { TextComponent } from '../text/component';

import './style.scss';

registerBlockType('ifc-ds/accordion', {
  edit: ({ attributes, setAttributes }) => {
    const { title, isOpen } = attributes;
    
    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Configurações Gerais', 'ifc-design-system')}>
            <TextControl
              label={__('Título', 'ifc-design-system')}
              value={title}
              onChange={(value) => setAttributes({ title: value })}
            />
            <ToggleControl
              label={__('Aberto por padrão', 'ifc-design-system')}
              checked={isOpen}
              onChange={(value) => setAttributes({ isOpen: value })}
            />
          </PanelBody>

        </InspectorControls>

        <div {...useBlockProps({ className: 'ifc-ds-accordion' })}>
          <button 
            className={`ifc-ds-accordion__toggle ${isOpen ? 'is-open' : ''}`}
            onClick={() => setAttributes({ isOpen: !isOpen })}
          >
            <TextComponent
              content={title}
              textType="body"
              weight="bold"
              color="primary"
              className="ifc-ds-accordion__title-text"
            />
            <span className="ifc-ds-accordion__icon">▼</span>
          </button>
          
          <div className={`ifc-ds-accordion__content ${isOpen ? 'is-open' : ''}`}>
            <div className="ifc-ds-accordion__items">
              <InnerBlocks />
            </div>
          </div>
        </div>
      </>
    );
  },

  save: () => <InnerBlocks.Content />
});