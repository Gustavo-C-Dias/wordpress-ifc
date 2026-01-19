/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/layout-container/component.js":
/*!**************************************************!*\
  !*** ./src/blocks/layout-container/component.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GOVBR_BREAKPOINTS: () => (/* binding */ GOVBR_BREAKPOINTS),
/* harmony export */   GOVBR_GRID_CONFIGS: () => (/* binding */ GOVBR_GRID_CONFIGS),
/* harmony export */   GRID_CLASSES: () => (/* binding */ GRID_CLASSES),
/* harmony export */   GridItemComponent: () => (/* binding */ GridItemComponent),
/* harmony export */   LayoutContainerComponent: () => (/* binding */ LayoutContainerComponent),
/* harmony export */   useGridContext: () => (/* binding */ useGridContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Layout Container Component - Reutilizável
 * Implementa o sistema de grid do Design System do Governo Federal
 */
const LayoutContainerComponent = ({
  children,
  containerType = 'fluid',
  allowBleed = false,
  maxColumns = 12,
  verticalSpacing = 'medium',
  horizontalAlignment = 'center',
  customMaxWidth = '',
  className = '',
  ...props
}) => {
  // Constrói as classes CSS
  const classes = ['ifc-ds-layout-container', `ifc-ds-layout-container--${containerType}`, `ifc-ds-layout-container--spacing-${verticalSpacing}`, `ifc-ds-layout-container--align-${horizontalAlignment}`, `ifc-ds-layout-container--columns-${maxColumns}`, allowBleed ? 'ifc-ds-layout-container--bleed' : '', className].filter(Boolean).join(' ');

  // Estilos inline para largura personalizada
  const inlineStyles = containerType === 'fixed' && customMaxWidth ? {
    maxWidth: customMaxWidth
  } : {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    style: inlineStyles,
    "data-columns": maxColumns,
    "data-container-type": containerType,
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifc-ds-layout-container__content"
  }, children));
};

/**
 * Grid Item Component - Para elementos filhos
 */
const GridItemComponent = ({
  children,
  colSpan = 1,
  colStart = null,
  className = '',
  bleed = null,
  ...props
}) => {
  const classes = [colSpan ? `col-span-${colSpan}` : '', colStart ? `col-start-${colStart}` : '', bleed ? `ifc-ds-bleed-${bleed}` : '', className].filter(Boolean).join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    ...props
  }, children);
};

/**
 * Hooks para contexto do grid
 */
const useGridContext = () => {
  // Retorna informações do grid atual (para componentes filhos)
  const getGridInfo = () => {
    const container = document.querySelector('.ifc-ds-layout-container');
    if (!container) return null;
    return {
      columns: parseInt(container.dataset.columns) || 12,
      containerType: container.dataset.containerType || 'fluid'
      // Adiciona mais informações conforme necessário
    };
  };
  return {
    getGridInfo
  };
};

/**
 * Utilitários CSS classes baseadas no Gov.br
 */
const GRID_CLASSES = {
  // Spans de coluna
  COL_SPAN: {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
    FULL: 'col-span-full'
  },
  // Sangrias (Bleed)
  BLEED: {
    FULL: 'ifc-ds-bleed-full',
    LEFT: 'ifc-ds-bleed-left',
    RIGHT: 'ifc-ds-bleed-right'
  },
  // Tipos de container
  CONTAINER: {
    FLUID: 'ifc-ds-layout-container--fluid',
    FIXED: 'ifc-ds-layout-container--fixed'
  },
  // Espaçamentos
  SPACING: {
    NONE: 'ifc-ds-layout-container--spacing-none',
    SMALL: 'ifc-ds-layout-container--spacing-small',
    MEDIUM: 'ifc-ds-layout-container--spacing-medium',
    LARGE: 'ifc-ds-layout-container--spacing-large',
    EXTRA_LARGE: 'ifc-ds-layout-container--spacing-extra-large'
  },
  // Alinhamentos
  ALIGN: {
    LEFT: 'ifc-ds-layout-container--align-left',
    CENTER: 'ifc-ds-layout-container--align-center',
    RIGHT: 'ifc-ds-layout-container--align-right'
  }
};

/**
 * Breakpoints do Design System Gov.br
 */
const GOVBR_BREAKPOINTS = {
  MOBILE_PORTRAIT: 0,
  MOBILE_LANDSCAPE: 576,
  TABLET_LANDSCAPE: 992,
  DESKTOP: 1280,
  TV: 1600
};

/**
 * Configurações de grid por breakpoint
 */
const GOVBR_GRID_CONFIGS = {
  MOBILE_PORTRAIT: {
    columns: 4,
    gutter: 16,
    margin: 8
  },
  MOBILE_LANDSCAPE: {
    columns: 8,
    gutter: 24,
    margin: 40
  },
  TABLET_LANDSCAPE: {
    columns: 8,
    gutter: 24,
    margin: 40
  },
  DESKTOP: {
    columns: 12,
    gutter: 24,
    margin: 40
  },
  TV: {
    columns: 12,
    gutter: 40,
    margin: 40
  }
};

/***/ }),

/***/ "./src/blocks/layout-container/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/layout-container/index.js ***!
  \**********************************************/
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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./src/blocks/layout-container/component.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/layout-container/style.scss");







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('ifc-ds/layout-container', {
  edit: ({
    attributes,
    setAttributes,
    clientId
  }) => {
    const {
      containerType,
      allowBleed,
      maxColumns,
      verticalSpacing,
      horizontalAlignment,
      customMaxWidth
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)({
      className: 'ifc-ds-layout-container__content'
    }, {
      allowedBlocks: true,
      template: [['core/paragraph', {
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adicione qualquer conteúdo dentro do container de layout...', 'ifc-design-system')
      }]],
      templateLock: false
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Configurações do Container', 'ifc-design-system')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tipo de Container', 'ifc-design-system'),
      value: containerType,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fluído (100% da largura)', 'ifc-design-system'),
        value: 'fluid'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fixo (largura máxima definida)', 'ifc-design-system'),
        value: 'fixed'
      }],
      onChange: value => setAttributes({
        containerType: value
      }),
      help: containerType === 'fluid' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container ocupa toda largura disponível', 'ifc-design-system') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container tem largura máxima com margens automáticas', 'ifc-design-system')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colunas Máximas', 'ifc-design-system'),
      value: maxColumns,
      onChange: value => setAttributes({
        maxColumns: value
      }),
      min: 1,
      max: 12,
      step: 1,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Define o sistema de grid (4, 8 ou 12 colunas são recomendados)', 'ifc-design-system')
    }), containerType === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Largura Máxima Personalizada', 'ifc-design-system'),
      value: customMaxWidth,
      onChange: value => setAttributes({
        customMaxWidth: value
      }),
      placeholder: "1200px",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Deixe vazio para usar os breakpoints padrão do Gov.br', 'ifc-design-system')
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout e Espaçamento', 'ifc-design-system')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Espaçamento Vertical', 'ifc-design-system'),
      value: verticalSpacing,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Nenhum', 'ifc-design-system'),
        value: 'none'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pequeno', 'ifc-design-system'),
        value: 'small'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Médio', 'ifc-design-system'),
        value: 'medium'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grande', 'ifc-design-system'),
        value: 'large'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Extra Grande', 'ifc-design-system'),
        value: 'extra-large'
      }],
      onChange: value => setAttributes({
        verticalSpacing: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alinhamento Horizontal', 'ifc-design-system'),
      value: horizontalAlignment,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Esquerda', 'ifc-design-system'),
        value: 'left'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Centro', 'ifc-design-system'),
        value: 'center'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Direita', 'ifc-design-system'),
        value: 'right'
      }],
      onChange: value => setAttributes({
        horizontalAlignment: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Permitir Sangria (Bleed)', 'ifc-design-system'),
      checked: allowBleed,
      onChange: value => setAttributes({
        allowBleed: value
      }),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Permite que elementos filhos quebrem as margens da grid', 'ifc-design-system')
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Informações do Grid Gov.br', 'ifc-design-system'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-grid-info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHeading, {
      level: 4
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Breakpoints Oficiais:', 'ifc-design-system')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      style: {
        fontSize: '12px',
        color: '#666'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Mobile Portrait:"), " 0-575px (4 colunas, gutter 16px)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Mobile Landscape/Tablet:"), " 576-991px (8 colunas, gutter 24px)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Tablet Landscape:"), " 992-1279px (8 colunas, gutter 24px)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Desktop:"), " 1280-1599px (12 colunas, gutter 24px)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "TV:"), " 1600px+ (12 colunas, gutter 40px)"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-layout-container__preview-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout Container', 'ifc-design-system'), " (", containerType === 'fluid' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fluído', 'ifc-design-system') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fixo', 'ifc-design-system'), ") - ", maxColumns, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('colunas', 'ifc-design-system')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component__WEBPACK_IMPORTED_MODULE_5__.LayoutContainerComponent, {
      containerType: containerType,
      allowBleed: allowBleed,
      maxColumns: maxColumns,
      verticalSpacing: verticalSpacing,
      horizontalAlignment: horizontalAlignment,
      customMaxWidth: customMaxWidth
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...innerBlocksProps
    }))));
  },
  save: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/blocks/layout-container/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/layout-container/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			"blocks/layout-container/index": 0,
/******/ 			"blocks/layout-container/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/layout-container/style-index"], () => (__webpack_require__("./src/blocks/layout-container/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map