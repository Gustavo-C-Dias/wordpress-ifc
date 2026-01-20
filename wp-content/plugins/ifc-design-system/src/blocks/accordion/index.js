import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { 
    PanelBody, 
    TextControl, 
    ToggleControl, 
    SelectControl,
    Button,
    __experimentalInputControl as InputControl
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { LinkComponent } from '../link/component';
import { TextComponent } from '../text/component';

import './style.scss';

registerBlockType('ifc-ds/accordion', {
  edit: ({ attributes, setAttributes }) => {
    const { title, items, isOpen } = attributes;
    
    // Função para adicionar novo item
    const addItem = (type = 'text') => {
      const newItem = {
        id: Math.max(...items.map(item => item.id), 0) + 1,
        type: type,
        content: type === 'text' ? 'Novo texto' : '',
        label: type === 'link' ? 'Novo Link' : '',
        url: type === 'link' ? '' : undefined
      };
      setAttributes({ items: [...items, newItem] });
    };

    // Função para remover item
    const removeItem = (itemId) => {
      setAttributes({ 
        items: items.filter(item => item.id !== itemId)
      });
    };

    // Função para atualizar item
    const updateItem = (itemId, field, value) => {
      setAttributes({
        items: items.map(item => 
          item.id === itemId 
            ? { ...item, [field]: value }
            : item
        )
      });
    };

    // Função para renderizar item na área expansível
    const renderItem = (item) => {
      if (item.type === 'link') {
        return (
          <LinkComponent
            key={item.id}
            label={item.label}
            url={item.url || '#'}
            type="primary"
            size="detail"
            onClick={(e) => e.preventDefault()}
            className="ifc-ds-accordion__link"
          />
        );
      } else {
        return (
          <TextComponent
            key={item.id}
            content={item.content}
            textType="body"
            weight="regular"
            color="neutral"
            className="ifc-ds-accordion__text"
          />
        );
      }
    };
    
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

          <PanelBody title={__('Gerenciar Itens', 'ifc-design-system')} initialOpen={false}>
            {items.map((item) => (
              <div key={item.id} style={{ marginBottom: '16px', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <SelectControl
                  label={__('Tipo do Item', 'ifc-design-system')}
                  value={item.type}
                  options={[
                    { label: 'Texto', value: 'text' },
                    { label: 'Link', value: 'link' }
                  ]}
                  onChange={(value) => updateItem(item.id, 'type', value)}
                  style={{ marginBottom: '8px' }}
                />
                
                {item.type === 'text' ? (
                  <InputControl
                    label={__('Conteúdo do Texto', 'ifc-design-system')}
                    value={item.content || ''}
                    onChange={(value) => updateItem(item.id, 'content', value)}
                    style={{ marginBottom: '8px' }}
                  />
                ) : (
                  <>
                    <InputControl
                      label={__('Texto do Link', 'ifc-design-system')}
                      value={item.label || ''}
                      onChange={(value) => updateItem(item.id, 'label', value)}
                      style={{ marginBottom: '8px' }}
                    />
                    <InputControl
                      label={__('URL do Link', 'ifc-design-system')}
                      value={item.url || ''}
                      onChange={(value) => updateItem(item.id, 'url', value)}
                      placeholder="https://exemplo.com"
                      style={{ marginBottom: '8px' }}
                    />
                  </>
                )}
                
                <Button 
                  isDestructive
                  isSmall
                  onClick={() => removeItem(item.id)}
                  disabled={items.length <= 1}
                >
                  {__('Remover', 'ifc-design-system')}
                </Button>
              </div>
            ))}
            
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <Button 
                isPrimary
                onClick={() => addItem('text')}
              >
                {__('Adicionar Texto', 'ifc-design-system')}
              </Button>
              <Button 
                isSecondary
                onClick={() => addItem('link')}
              >
                {__('Adicionar Link', 'ifc-design-system')}
              </Button>
            </div>
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
              {items.map(renderItem)}
            </div>
          </div>
        </div>
      </>
    );
  }
});