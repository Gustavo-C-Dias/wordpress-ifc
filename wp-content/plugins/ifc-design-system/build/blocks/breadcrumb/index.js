/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/breadcrumb/index.js":
/*!****************************************!*\
  !*** ./src/blocks/breadcrumb/index.js ***!
  \****************************************/
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
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link/component */ "./src/blocks/link/component.js");
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text/component */ "./src/blocks/text/component.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/breadcrumb/style.scss");







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('ifc-ds/breadcrumb', {
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      items,
      currentPageTitle,
      separator,
      linkType,
      linkSize
    } = attributes;
    const renderBreadcrumbLink = (item, isLast = false) => {
      if (isLast) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_component__WEBPACK_IMPORTED_MODULE_5__.TextComponent, {
          key: "current",
          content: currentPageTitle,
          textType: linkSize === 'small' ? 'detail' : 'body',
          weight: "semibold",
          color: "neutral",
          className: "ifc-ds-breadcrumb__current",
          "aria-current": "page"
        });
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_component__WEBPACK_IMPORTED_MODULE_4__.LinkComponent, {
        key: item.id,
        label: item.label,
        url: item.url,
        icon: item.icon || null,
        iconPosition: "left",
        type: linkType,
        size: linkSize,
        padding: {
          top: '1',
          right: '2',
          bottom: '1',
          left: '2'
        },
        className: "ifc-ds-breadcrumb__link",
        onClick: e => e.preventDefault()
      });
    };

    // Função para adicionar novo item
    const addItem = () => {
      const newItem = {
        id: Math.max(...items.map(item => item.id), 0) + 1,
        label: 'Novo Link',
        url: '',
        icon: ''
      };
      setAttributes({
        items: [...items, newItem]
      });
    };

    // Função para remover item
    const removeItem = itemId => {
      setAttributes({
        items: items.filter(item => item.id !== itemId)
      });
    };

    // Função para atualizar item
    const updateItem = (itemId, field, value) => {
      setAttributes({
        items: items.map(item => item.id === itemId ? {
          ...item,
          [field]: value
        } : item)
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: 'Configurações do Breadcrumb'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: 'Título da Página Atual',
      value: currentPageTitle,
      onChange: value => setAttributes({
        currentPageTitle: value
      }),
      placeholder: "Ex: Curso de Inform\xE1tica"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: 'Separador',
      value: separator,
      onChange: value => setAttributes({
        separator: value
      }),
      placeholder: "/",
      help: 'Caractere usado para separar os itens'
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: 'Aparência dos Links'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Tipo dos Links',
      value: linkType,
      options: [{
        label: 'Neutro',
        value: 'neutral'
      }, {
        label: 'Primário',
        value: 'primary'
      }],
      onChange: value => setAttributes({
        linkType: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: 'Tamanho dos Links',
      value: linkSize,
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
        linkSize: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: 'Gerenciar Links',
      initialOpen: false
    }, items.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item.id,
      style: {
        marginBottom: '16px',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '4px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalInputControl, {
      label: 'Texto do Link',
      value: item.label,
      onChange: value => updateItem(item.id, 'label', value),
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalInputControl, {
      label: 'URL',
      value: item.url,
      onChange: value => updateItem(item.id, 'url', value),
      placeholder: "https://exemplo.com",
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalInputControl, {
      label: 'Ícone (opcional)',
      value: item.icon || '',
      onChange: value => updateItem(item.id, 'icon', value),
      placeholder: "admin-home",
      help: "Use um nome de \xEDcone do Dashicons ou URL de uma imagem. Deixe em branco para n\xE3o exibir \xEDcone.",
      style: {
        marginBottom: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isDestructive: true,
      isSmall: true,
      onClick: () => removeItem(item.id),
      disabled: items.length <= 1
    }, 'Remover'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isPrimary: true,
      onClick: addItem,
      style: {
        marginTop: '12px'
      }
    }, 'Adicionar Link'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
        className: 'ifc-ds-breadcrumb'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
      className: "ifc-ds-breadcrumb__list"
    }, items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: item.id,
      className: "ifc-ds-breadcrumb__item"
    }, renderBreadcrumbLink(item), index < items.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ifc-ds-breadcrumb__separator",
      "aria-hidden": "true"
    }, separator))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ifc-ds-breadcrumb__item ifc-ds-breadcrumb__item--current"
    }, renderBreadcrumbLink(null, true)))));
  }
});

/***/ }),

/***/ "./src/blocks/breadcrumb/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/breadcrumb/style.scss ***!
  \******************************************/
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
/******/ 			"blocks/breadcrumb/index": 0,
/******/ 			"blocks/breadcrumb/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/breadcrumb/style-index"], () => (__webpack_require__("./src/blocks/breadcrumb/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map