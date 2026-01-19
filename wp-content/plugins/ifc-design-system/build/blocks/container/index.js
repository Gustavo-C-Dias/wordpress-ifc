/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/container/index.js":
/*!***************************************!*\
  !*** ./src/blocks/container/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text/component */ "./src/blocks/text/component.js");
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link/component */ "./src/blocks/link/component.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/container/style.scss");









// Opções de espaçamento baseadas nos tokens do WordPress
const spacingOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Nenhum (0)', 'ifc-design-system'),
  value: '0'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('XXS (4px)', 'ifc-design-system'),
  value: '10'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('XS (8px)', 'ifc-design-system'),
  value: '20'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('SM (12px)', 'ifc-design-system'),
  value: '30'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('MD (16px)', 'ifc-design-system'),
  value: '40'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('LG (20px)', 'ifc-design-system'),
  value: '50'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('XL (24px)', 'ifc-design-system'),
  value: '60'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('XXL (32px)', 'ifc-design-system'),
  value: '70'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3XL (40px)', 'ifc-design-system'),
  value: '80'
}];

// Opções de cores para borda e fundo
const colorOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Branco', 'ifc-design-system'),
  value: 'white'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Neutro 100', 'ifc-design-system'),
  value: 'neutral-100'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Neutro 200', 'ifc-design-system'),
  value: 'neutral-200'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Neutro 300', 'ifc-design-system'),
  value: 'neutral-300'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Neutro 400', 'ifc-design-system'),
  value: 'neutral-400'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'ifc-design-system'),
  value: 'primary'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary', 'ifc-design-system'),
  value: 'secondary'
}];
const borderWidthOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Nenhuma', 'ifc-design-system'),
  value: '0'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fina (1px)', 'ifc-design-system'),
  value: '1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Média (2px)', 'ifc-design-system'),
  value: '2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grossa (3px)', 'ifc-design-system'),
  value: '3'
}];

// Opções de direção da lista
const listDirectionOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical', 'ifc-design-system'),
  value: 'vertical'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal', 'ifc-design-system'),
  value: 'horizontal'
}];

// Opções de alinhamento da lista
const listAlignmentOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Esquerda', 'ifc-design-system'),
  value: 'left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Centro', 'ifc-design-system'),
  value: 'center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Direita', 'ifc-design-system'),
  value: 'right'
}];

// Opções de tipos de componentes
const componentTypeOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Texto Simples', 'ifc-design-system'),
  value: 'text'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Componente de Texto', 'ifc-design-system'),
  value: 'text-component'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'ifc-design-system'),
  value: 'link'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('HTML Personalizado', 'ifc-design-system'),
  value: 'html'
}];

// Opções para o componente de texto
const textTypeOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Título', 'ifc-design-system'),
  value: 'title'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtítulo', 'ifc-design-system'),
  value: 'subtitle'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Corpo', 'ifc-design-system'),
  value: 'body'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Detalhe', 'ifc-design-system'),
  value: 'detail'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Legenda', 'ifc-design-system'),
  value: 'caption'
}];
const weightOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Regular', 'ifc-design-system'),
  value: 'regular'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Semibold', 'ifc-design-system'),
  value: 'semibold'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bold', 'ifc-design-system'),
  value: 'bold'
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('ifc-ds/container', {
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      padding,
      margin,
      borderWidth,
      borderColor,
      shadowEnabled,
      backgroundColor,
      listMode,
      listDirection,
      listItems,
      listSpacing,
      listAlignment
    } = attributes;

    // Converter valores de spacing para BoxControl
    const paddingValue = {
      top: padding?.top || '30',
      right: padding?.right || '30',
      bottom: padding?.bottom || '30',
      left: padding?.left || '30'
    };
    const marginValue = {
      top: margin?.top || '0',
      right: margin?.right || '0',
      bottom: margin?.bottom || '20',
      left: margin?.left || '0'
    };

    // Função para converter valores de BoxControl
    const handlePaddingChange = newPadding => {
      setAttributes({
        padding: {
          top: newPadding?.top || '0',
          right: newPadding?.right || '0',
          bottom: newPadding?.bottom || '0',
          left: newPadding?.left || '0'
        }
      });
    };
    const handleMarginChange = newMargin => {
      setAttributes({
        margin: {
          top: newMargin?.top || '0',
          right: newMargin?.right || '0',
          bottom: newMargin?.bottom || '0',
          left: newMargin?.left || '0'
        }
      });
    };

    // Funções para gerenciar itens da lista
    const addListItem = (type = 'text') => {
      const newItem = {
        id: Math.max(...listItems.map(item => item.id || 0), 0) + 1,
        type: type,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Novo item', 'ifc-design-system'),
        value: type === 'link' ? 'https://exemplo.com' : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Valor do item', 'ifc-design-system'),
        url: type === 'link' ? 'https://exemplo.com' : undefined,
        linkText: type === 'link' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link de exemplo', 'ifc-design-system') : undefined,
        icon: type === 'link' ? 'arrow-right-alt2' : undefined,
        iconPosition: type === 'link' ? 'right' : undefined,
        textType: type === 'text-component' ? 'body' : undefined,
        weight: type === 'text-component' ? 'regular' : undefined,
        color: type === 'text-component' ? 'primary' : undefined
      };
      setAttributes({
        listItems: [...listItems, newItem]
      });
    };
    const updateListItem = (itemId, field, value) => {
      setAttributes({
        listItems: listItems.map(item => {
          if (item.id === itemId) {
            const updatedItem = {
              ...item,
              [field]: value
            };

            // Se mudou o tipo, resetar campos específicos
            if (field === 'type') {
              switch (value) {
                case 'link':
                  updatedItem.url = updatedItem.url || 'https://exemplo.com';
                  updatedItem.linkText = updatedItem.linkText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link de exemplo', 'ifc-design-system');
                  updatedItem.icon = updatedItem.icon || 'arrow-right-alt2';
                  updatedItem.iconPosition = updatedItem.iconPosition || 'right';
                  break;
                case 'text-component':
                  updatedItem.textType = updatedItem.textType || 'body';
                  updatedItem.weight = updatedItem.weight || 'regular';
                  updatedItem.color = updatedItem.color || 'primary';
                  break;
                case 'html':
                  updatedItem.htmlContent = updatedItem.htmlContent || '<p>Conteúdo HTML</p>';
                  break;
              }
            }
            return updatedItem;
          }
          return item;
        })
      });
    };
    const removeListItem = itemId => {
      setAttributes({
        listItems: listItems.filter(item => item.id !== itemId)
      });
    };
    const addDefaultItems = () => {
      const defaultItems = [{
        id: 1,
        type: 'text-component',
        value: 'Informações do Curso',
        textType: 'subtitle',
        weight: 'semibold',
        color: 'primary'
      }, {
        id: 2,
        type: 'text',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Duração', 'ifc-design-system'),
        value: '8 semestres'
      }, {
        id: 3,
        type: 'text',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modalidade', 'ifc-design-system'),
        value: 'Presencial'
      }, {
        id: 4,
        type: 'text',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Carga horária', 'ifc-design-system'),
        value: '2000 horas'
      }, {
        id: 5,
        type: 'text',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Período', 'ifc-design-system'),
        value: 'Matutino'
      }, {
        id: 6,
        type: 'text',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Conceito', 'ifc-design-system'),
        value: '4'
      }, {
        id: 7,
        type: 'link',
        linkText: 'Mais informações sobre o curso',
        url: 'https://ifc.edu.br',
        icon: 'external',
        iconPosition: 'right',
        newTab: true
      }];
      setAttributes({
        listItems: defaultItems
      });
    };

    // Classes CSS
    const classes = ['ifc-ds-container', `ifc-ds-container--border-${borderColor}`, `ifc-ds-container--bg-${backgroundColor}`, shadowEnabled ? 'ifc-ds-container--shadow' : '', borderWidth === '0' ? 'ifc-ds-container--no-border' : `ifc-ds-container--border-${borderWidth}`, listMode ? 'ifc-ds-container--list-mode' : '', listMode ? `ifc-ds-container--list-${listDirection}` : '', listMode ? `ifc-ds-container--align-${listAlignment}` : ''].filter(Boolean).join(' ');

    // Estilos inline para o editor
    const containerStyle = {
      paddingTop: `var(--wp--preset--spacing--${padding?.top || '30'})`,
      paddingRight: `var(--wp--preset--spacing--${padding?.right || '30'})`,
      paddingBottom: `var(--wp--preset--spacing--${padding?.bottom || '30'})`,
      paddingLeft: `var(--wp--preset--spacing--${padding?.left || '30'})`,
      marginTop: `var(--wp--preset--spacing--${margin?.top || '0'})`,
      marginRight: `var(--wp--preset--spacing--${margin?.right || '0'})`,
      marginBottom: `var(--wp--preset--spacing--${margin?.bottom || '20'})`,
      marginLeft: `var(--wp--preset--spacing--${margin?.left || '0'})`
    };

    // Função para renderizar diferentes tipos de componentes
    const renderComponent = item => {
      const itemStyle = {
        [listDirection === 'vertical' ? 'marginBottom' : 'marginRight']: `var(--wp--preset--spacing--${listSpacing})`
      };
      switch (item.type) {
        case 'text-component':
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            key: item.id,
            className: "ifc-ds-container__component-item",
            style: itemStyle
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_component__WEBPACK_IMPORTED_MODULE_5__.TextComponent, {
            content: item.value,
            textType: item.textType || 'body',
            weight: item.weight || 'regular',
            color: item.color || 'primary'
          }));
        case 'link':
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            key: item.id,
            className: "ifc-ds-container__component-item",
            style: itemStyle
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_component__WEBPACK_IMPORTED_MODULE_6__.LinkComponent, {
            label: item.linkText || 'Link',
            url: item.url || '#',
            icon: item.icon,
            iconPosition: item.iconPosition || 'right',
            type: "primary",
            onClick: item.newTab ? () => window.open(item.url, '_blank') : undefined
          }));
        case 'html':
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            key: item.id,
            className: "ifc-ds-container__component-item",
            style: itemStyle,
            dangerouslySetInnerHTML: {
              __html: item.htmlContent || ''
            }
          });
        case 'text':
        default:
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            key: item.id,
            className: "ifc-ds-container__list-item",
            style: itemStyle
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_component__WEBPACK_IMPORTED_MODULE_5__.TextComponent, {
            content: item.label,
            textType: "detail",
            weight: "semibold",
            color: "neutral",
            className: "ifc-ds-container__list-label"
          }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_component__WEBPACK_IMPORTED_MODULE_5__.TextComponent, {
            content: item.value,
            textType: "body",
            weight: "regular",
            color: "primary",
            className: "ifc-ds-container__list-value"
          }));
      }
    };
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: classes,
      style: containerStyle
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Espaçamento', 'ifc-design-system')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Interno', 'ifc-design-system'),
      values: paddingValue,
      onChange: handlePaddingChange,
      units: [],
      allowReset: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margem Externa', 'ifc-design-system'),
      values: marginValue,
      onChange: handleMarginChange,
      units: [],
      allowReset: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Aparência', 'ifc-design-system'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cor de Fundo', 'ifc-design-system'),
      value: backgroundColor,
      options: colorOptions,
      onChange: value => setAttributes({
        backgroundColor: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Espessura da Borda', 'ifc-design-system'),
      value: borderWidth,
      options: borderWidthOptions,
      onChange: value => setAttributes({
        borderWidth: value
      })
    }), borderWidth !== '0' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cor da Borda', 'ifc-design-system'),
      value: borderColor,
      options: colorOptions,
      onChange: value => setAttributes({
        borderColor: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Aplicar Sombra', 'ifc-design-system'),
      checked: shadowEnabled,
      onChange: value => setAttributes({
        shadowEnabled: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modo Lista', 'ifc-design-system'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ativar Modo Lista', 'ifc-design-system'),
      checked: listMode,
      onChange: value => setAttributes({
        listMode: value
      }),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quando ativado, o container exibirá uma lista de itens ao invés do conteúdo livre.', 'ifc-design-system')
    }), listMode && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Direção da Lista', 'ifc-design-system'),
      value: listDirection,
      options: listDirectionOptions,
      onChange: value => setAttributes({
        listDirection: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alinhamento', 'ifc-design-system'),
      value: listAlignment,
      options: listAlignmentOptions,
      onChange: value => setAttributes({
        listAlignment: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Espaçamento entre Itens', 'ifc-design-system'),
      value: listSpacing,
      options: spacingOptions,
      onChange: value => setAttributes({
        listSpacing: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: '16px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
        marginBottom: '16px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isSecondary: true,
      onClick: () => addListItem('text')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('+ Texto', 'ifc-design-system')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isSecondary: true,
      onClick: () => addListItem('text-component')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('+ Componente', 'ifc-design-system')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isSecondary: true,
      onClick: () => addListItem('link')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('+ Link', 'ifc-design-system')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isSecondary: true,
      onClick: () => addListItem('html')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('+ HTML', 'ifc-design-system'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isPrimary: true,
      onClick: addDefaultItems,
      style: {
        width: '100%',
        marginBottom: '16px'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exemplo Curso Completo', 'ifc-design-system')), listItems.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item.id,
      style: {
        marginBottom: '12px',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tipo de Componente', 'ifc-design-system'),
      value: item.type || 'text',
      options: componentTypeOptions,
      onChange: value => updateListItem(item.id, 'type', value),
      style: {
        marginBottom: '8px'
      }
    }), (item.type === 'text' || !item.type) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Label', 'ifc-design-system'),
      value: item.label || '',
      onChange: value => updateListItem(item.id, 'label', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Valor', 'ifc-design-system'),
      value: item.value || '',
      onChange: value => updateListItem(item.id, 'value', value),
      style: {
        marginBottom: '8px'
      }
    })), item.type === 'text-component' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Conteúdo', 'ifc-design-system'),
      value: item.value || '',
      onChange: value => updateListItem(item.id, 'value', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tipo de Texto', 'ifc-design-system'),
      value: item.textType || 'body',
      options: textTypeOptions,
      onChange: value => updateListItem(item.id, 'textType', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Peso da Fonte', 'ifc-design-system'),
      value: item.weight || 'regular',
      options: weightOptions,
      onChange: value => updateListItem(item.id, 'weight', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cor', 'ifc-design-system'),
      value: item.color || 'primary',
      options: colorOptions,
      onChange: value => updateListItem(item.id, 'color', value),
      style: {
        marginBottom: '8px'
      }
    })), item.type === 'link' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Texto do Link', 'ifc-design-system'),
      value: item.linkText || '',
      onChange: value => updateListItem(item.id, 'linkText', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('URL', 'ifc-design-system'),
      value: item.url || '',
      onChange: value => updateListItem(item.id, 'url', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ícone', 'ifc-design-system'),
      value: item.icon || '',
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sem ícone', 'ifc-design-system'),
        value: ''
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seta →', 'ifc-design-system'),
        value: 'arrow-right-alt2'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link Externo ↗', 'ifc-design-system'),
        value: 'external'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Download ⬇', 'ifc-design-system'),
        value: 'download'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email ✉', 'ifc-design-system'),
        value: 'email'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Telefone ☎', 'ifc-design-system'),
        value: 'phone'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Casa ⌂', 'ifc-design-system'),
        value: 'admin-home'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Informações ⓘ', 'ifc-design-system'),
        value: 'info'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Localização ⚲', 'ifc-design-system'),
        value: 'location'
      }],
      onChange: value => updateListItem(item.id, 'icon', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Posição do Ícone', 'ifc-design-system'),
      value: item.iconPosition || 'right',
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Esquerda', 'ifc-design-system'),
        value: 'left'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Direita', 'ifc-design-system'),
        value: 'right'
      }],
      onChange: value => updateListItem(item.id, 'iconPosition', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Abrir em nova aba', 'ifc-design-system'),
      checked: item.newTab || false,
      onChange: value => updateListItem(item.id, 'newTab', value)
    })), item.type === 'html' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Digite o código HTML...', 'ifc-design-system'),
      value: item.htmlContent || '',
      onChange: e => updateListItem(item.id, 'htmlContent', e.target.value),
      style: {
        width: '100%',
        height: '80px',
        marginBottom: '8px',
        fontFamily: 'monospace'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isDestructive: true,
      isSmall: true,
      onClick: () => removeListItem(item.id)
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remover', 'ifc-design-system')))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, listMode ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `ifc-ds-container__list ifc-ds-container__list--${listDirection}`
    }, listItems.length > 0 ? listItems.map(renderComponent) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_component__WEBPACK_IMPORTED_MODULE_5__.TextComponent, {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Nenhum item adicionado. Use o painel lateral para adicionar itens.', 'ifc-design-system'),
      textType: "body",
      weight: "regular",
      color: "neutral",
      className: "ifc-ds-container__list-empty"
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: [['core/paragraph', {
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adicione conteúdo ao container...', 'ifc-design-system')
      }]],
      templateLock: false
    })));
  }
});

/***/ }),

/***/ "./src/blocks/container/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/container/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/link/component.js":
/*!**************************************!*\
  !*** ./src/blocks/link/component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkComponent: () => (/* binding */ LinkComponent),
/* harmony export */   iconCategories: () => (/* binding */ iconCategories),
/* harmony export */   iconLibrary: () => (/* binding */ iconLibrary),
/* harmony export */   spacingOptions: () => (/* binding */ spacingOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/component */ "./src/blocks/text/component.js");
// Componente Link reutilizável para uso em outros blocos



/**
 * Renderiza um componente Link reutilizável
 */
const LinkComponent = ({
  label,
  url = '#',
  icon,
  iconPosition = 'left',
  type = 'neutral',
  size = 'medium',
  padding = {},
  className = '',
  onClick,
  ariaLabel,
  children,
  ...props
}) => {
  const linkClasses = ['ifc-ds-link', `ifc-ds-link--${type}`, `ifc-ds-link--${size}`, className].filter(Boolean).join(' ');
  const linkStyle = {
    paddingTop: `var(--wp--preset--spacing--${(padding?.top || '0').replace('spacing-', '')})`,
    paddingRight: `var(--wp--preset--spacing--${(padding?.right || '0').replace('spacing-', '')})`,
    paddingBottom: `var(--wp--preset--spacing--${(padding?.bottom || '0').replace('spacing-', '')})`,
    paddingLeft: `var(--wp--preset--spacing--${(padding?.left || '0').replace('spacing-', '')})`
  };
  const iconStyle = {
    width: size === 'small' ? '16px' : size === 'large' ? '24px' : '20px',
    height: size === 'small' ? '16px' : size === 'large' ? '24px' : '20px'
  };
  const renderIcon = () => {
    if (!icon) return null;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
      className: `ifc-ds-link__icon ifc-ds-link__icon--${iconPosition}`,
      style: iconStyle
    }, icon.startsWith('http') ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
      src: icon,
      alt: '',
      style: iconStyle
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
      className: `dashicon dashicons-${icon}`,
      style: iconStyle
    }));
  };
  const linkContent = [iconPosition === 'left' && renderIcon(), children || (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_component__WEBPACK_IMPORTED_MODULE_1__.TextComponent, {
    content: label,
    textType: size === 'small' ? 'detail' : 'body',
    weight: 'semibold',
    color: 'primary',
    className: 'ifc-ds-link__label'
  }), iconPosition === 'right' && renderIcon()].filter(Boolean);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
    className: linkClasses,
    ...props
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: url,
    className: 'ifc-ds-link__element',
    style: linkStyle,
    onClick: onClick,
    'aria-label': ariaLabel
  }, ...linkContent));
};

/**
 * Biblioteca de ícones predefinidos
 */
const iconLibrary = [
// Navegação e Links
{
  name: 'Seta Direita',
  value: 'arrow-right-alt2',
  category: 'navigation'
}, {
  name: 'Seta Esquerda',
  value: 'arrow-left-alt2',
  category: 'navigation'
}, {
  name: 'Link Externo',
  value: 'external',
  category: 'navigation'
}, {
  name: 'Casa',
  value: 'admin-home',
  category: 'navigation'
}, {
  name: 'Menu',
  value: 'menu',
  category: 'navigation'
},
// Comunicação
{
  name: 'Email',
  value: 'email',
  category: 'communication'
}, {
  name: 'Telefone',
  value: 'phone',
  category: 'communication'
}, {
  name: 'Conversa',
  value: 'format-chat',
  category: 'communication'
}, {
  name: 'Comentários',
  value: 'admin-comments',
  category: 'communication'
},
// Documentos e Arquivos
{
  name: 'Documento',
  value: 'media-document',
  category: 'files'
}, {
  name: 'PDF',
  value: 'pdf',
  category: 'files'
}, {
  name: 'Download',
  value: 'download',
  category: 'files'
}, {
  name: 'Upload',
  value: 'upload',
  category: 'files'
}, {
  name: 'Anexo',
  value: 'paperclip',
  category: 'files'
},
// Educação
{
  name: 'Livro',
  value: 'book',
  category: 'education'
}, {
  name: 'Graduação',
  value: 'awards',
  category: 'education'
}, {
  name: 'Estudante',
  value: 'admin-users',
  category: 'education'
}, {
  name: 'Escola',
  value: 'building',
  category: 'education'
},
// Social e Compartilhamento
{
  name: 'Compartilhar',
  value: 'share',
  category: 'social'
}, {
  name: 'Facebook',
  value: 'facebook',
  category: 'social'
}, {
  name: 'Twitter',
  value: 'twitter',
  category: 'social'
}, {
  name: 'LinkedIn',
  value: 'linkedin',
  category: 'social'
}, {
  name: 'Instagram',
  value: 'instagram',
  category: 'social'
}, {
  name: 'YouTube',
  value: 'youtube',
  category: 'social'
},
// Ações
{
  name: 'Pesquisar',
  value: 'search',
  category: 'actions'
}, {
  name: 'Editar',
  value: 'edit',
  category: 'actions'
}, {
  name: 'Visualizar',
  value: 'visibility',
  category: 'actions'
}, {
  name: 'Adicionar',
  value: 'plus',
  category: 'actions'
}, {
  name: 'Remover',
  value: 'minus',
  category: 'actions'
}, {
  name: 'Favorito',
  value: 'star-filled',
  category: 'actions'
}, {
  name: 'Coração',
  value: 'heart',
  category: 'actions'
},
// Status
{
  name: 'Sucesso',
  value: 'yes',
  category: 'status'
}, {
  name: 'Erro',
  value: 'no',
  category: 'status'
}, {
  name: 'Aviso',
  value: 'warning',
  category: 'status'
}, {
  name: 'Informação',
  value: 'info',
  category: 'status'
},
// Localização
{
  name: 'Localização',
  value: 'location',
  category: 'location'
}, {
  name: 'Mapa',
  value: 'admin-site',
  category: 'location'
},
// Tempo
{
  name: 'Calendário',
  value: 'calendar-alt',
  category: 'time'
}, {
  name: 'Relógio',
  value: 'clock',
  category: 'time'
},
// Mídia
{
  name: 'Imagem',
  value: 'format-image',
  category: 'media'
}, {
  name: 'Vídeo',
  value: 'format-video',
  category: 'media'
}, {
  name: 'Áudio',
  value: 'format-audio',
  category: 'media'
}];

/**
 * Categorias de ícones para organização
 */
const iconCategories = [{
  label: 'Todos',
  value: 'all'
}, {
  label: 'Navegação',
  value: 'navigation'
}, {
  label: 'Comunicação',
  value: 'communication'
}, {
  label: 'Arquivos',
  value: 'files'
}, {
  label: 'Educação',
  value: 'education'
}, {
  label: 'Social',
  value: 'social'
}, {
  label: 'Ações',
  value: 'actions'
}, {
  label: 'Status',
  value: 'status'
}, {
  label: 'Localização',
  value: 'location'
}, {
  label: 'Tempo',
  value: 'time'
}, {
  label: 'Mídia',
  value: 'media'
}];

/**
 * Opções de espaçamento reutilizáveis
 */
const spacingOptions = [{
  label: 'Nenhum',
  value: '0'
}, {
  label: 'Space 0.5 (2px)',
  value: 'space-0-5'
}, {
  label: 'Space 1 (4px)',
  value: 'space-1'
}, {
  label: 'Space 2 (8px)',
  value: 'space-2'
}, {
  label: 'Space 3 (12px)',
  value: 'space-3'
}, {
  label: 'Space 4 (16px)',
  value: 'space-4'
}, {
  label: 'Space 5 (20px)',
  value: 'space-5'
}, {
  label: 'Space 6 (24px)',
  value: 'space-6'
}, {
  label: 'Space 8 (32px)',
  value: 'space-8'
}, {
  label: 'Space 10 (40px)',
  value: 'space-10'
}, {
  label: 'Space 12 (48px)',
  value: 'space-12'
}, {
  label: 'Space 16 (64px)',
  value: 'space-16'
}, {
  label: 'Space 20 (80px)',
  value: 'space-20'
}, {
  label: 'Space 24 (96px)',
  value: 'space-24'
}];

/***/ }),

/***/ "./src/blocks/text/component.js":
/*!**************************************!*\
  !*** ./src/blocks/text/component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextComponent: () => (/* binding */ TextComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Componente de Texto IFC Design System
 * Para uso interno nos outros componentes do plugin
 */
const TextComponent = ({
  content,
  textType = 'body',
  weight = 'regular',
  color = 'primary',
  alignment = 'left',
  className = '',
  ...props
}) => {
  // Se não há conteúdo, não renderiza
  if (!content) {
    return null;
  }

  // Definir tag HTML baseada no tipo
  const getHtmlTag = type => {
    switch (type) {
      case 'title':
        return 'h1';
      case 'subtitle':
        return 'h2';
      case 'caption':
        return 'small';
      default:
        return 'p';
    }
  };

  // Montar classes CSS
  const classes = ['ifc-ds-text', `ifc-ds-text--${textType}`, `ifc-ds-text--${weight}`, `ifc-ds-text--${color}`, `ifc-ds-text--align-${alignment}`, className].filter(Boolean).join(' ');
  const Tag = getHtmlTag(textType);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    className: classes,
    ...props
  }, content);
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/container/index": 0,
/******/ 			"blocks/container/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkifc_design_system"] = globalThis["webpackChunkifc_design_system"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/container/style-index"], () => (__webpack_require__("./src/blocks/container/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map