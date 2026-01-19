/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/blocks/link/index.js":
/*!**********************************!*\
  !*** ./src/blocks/link/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./src/blocks/link/component.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/link/style.scss");









// Componente para seleção visual de ícones
const IconSelector = ({
  selectedIcon,
  onIconSelect
}) => {
  const [selectedCategory, setSelectedCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('all');
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('');

  // Filtrar ícones por categoria e termo de busca
  const filteredIcons = _component__WEBPACK_IMPORTED_MODULE_4__.iconLibrary.filter(icon => {
    const matchesCategory = selectedCategory === 'all' || icon.category === selectedCategory;
    const matchesSearch = !searchTerm || icon.name.toLowerCase().includes(searchTerm.toLowerCase()) || icon.value.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-selector"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-selector__controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Buscar Ícone', 'ifc-design-system'),
    value: searchTerm,
    onChange: setSearchTerm,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Digite para buscar...', 'ifc-design-system')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Categoria', 'ifc-design-system'),
    value: selectedCategory,
    options: _component__WEBPACK_IMPORTED_MODULE_4__.iconCategories,
    onChange: setSelectedCategory
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-selector__grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `icon-selector__icon ${!selectedIcon ? 'is-selected' : ''}`,
    onClick: () => onIconSelect(''),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Sem ícone', 'ifc-design-system')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon-selector__no-icon"
  }, "\u2715")), filteredIcons.map(icon => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: icon.value,
    className: `icon-selector__icon ${selectedIcon === icon.value ? 'is-selected' : ''}`,
    onClick: () => onIconSelect(icon.value),
    title: icon.name
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `dashicons dashicons-${icon.value}`
  })))), selectedIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-selector__preview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Selecionado:', 'ifc-design-system'), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `dashicons dashicons-${selectedIcon}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, selectedIcon)));
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('ifc-ds/link', {
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      label,
      url,
      icon,
      iconPosition,
      type,
      size,
      padding,
      openInNewTab
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: 'Configurações do Link'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: 'URL',
      value: url,
      onChange: value => setAttributes({
        url: value
      }),
      placeholder: "https://exemplo.com"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: 'Abrir em nova aba',
      checked: openInNewTab,
      onChange: value => setAttributes({
        openInNewTab: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: 'Aparência'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Tipo',
      value: type,
      options: [{
        label: 'Neutro',
        value: 'neutral'
      }, {
        label: 'Primário',
        value: 'primary'
      }, {
        label: 'Branco',
        value: 'white'
      }],
      onChange: value => setAttributes({
        type: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Tamanho',
      value: size,
      options: [{
        label: 'Pequeno',
        value: 'small'
      }, {
        label: 'Médio',
        value: 'medium'
      }, {
        label: 'Grande',
        value: 'large'
      }],
      onChange: value => setAttributes({
        size: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: 'Ícone',
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconSelector, {
      selectedIcon: icon,
      onIconSelect: iconValue => setAttributes({
        icon: iconValue
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Posição do Ícone',
      value: iconPosition,
      options: [{
        label: 'Esquerda',
        value: 'left'
      }, {
        label: 'Direita',
        value: 'right'
      }],
      onChange: value => setAttributes({
        iconPosition: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalInputControl, {
      label: 'Ícone Personalizado',
      value: icon && !_component__WEBPACK_IMPORTED_MODULE_4__.iconLibrary.find(i => i.value === icon) ? icon : '',
      onChange: value => setAttributes({
        icon: value
      }),
      placeholder: "dashicons-custom ou URL da imagem",
      help: 'Digite o nome de um dashicon personalizado ou URL de uma imagem'
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: 'Espaçamento'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Padding Superior',
      value: padding?.top || '0',
      onChange: value => setAttributes({
        padding: {
          ...padding,
          top: value
        }
      }),
      options: _component__WEBPACK_IMPORTED_MODULE_4__.spacingOptions
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Padding Direito',
      value: padding?.right || '0',
      onChange: value => setAttributes({
        padding: {
          ...padding,
          right: value
        }
      }),
      options: _component__WEBPACK_IMPORTED_MODULE_4__.spacingOptions
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Padding Inferior',
      value: padding?.bottom || '0',
      onChange: value => setAttributes({
        padding: {
          ...padding,
          bottom: value
        }
      }),
      options: _component__WEBPACK_IMPORTED_MODULE_4__.spacingOptions
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Padding Esquerdo',
      value: padding?.left || '0',
      onChange: value => setAttributes({
        padding: {
          ...padding,
          left: value
        }
      }),
      options: _component__WEBPACK_IMPORTED_MODULE_4__.spacingOptions
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component__WEBPACK_IMPORTED_MODULE_4__.LinkComponent, {
      label: label,
      url: url,
      icon: icon,
      iconPosition: iconPosition,
      type: type,
      size: size,
      padding: padding,
      onClick: e => e.preventDefault()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "span",
      className: "ifc-ds-link__label",
      value: label,
      onChange: value => setAttributes({
        label: value
      }),
      allowedFormats: []
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/link/style.scss":
/*!************************************!*\
  !*** ./src/blocks/link/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			"blocks/link/index": 0,
/******/ 			"blocks/link/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/link/style-index"], () => (__webpack_require__("./src/blocks/link/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map