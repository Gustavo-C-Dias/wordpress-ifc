/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/divider/component.js":
/*!*****************************************!*\
  !*** ./src/blocks/divider/component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DividerComponent: () => (/* binding */ DividerComponent),
/* harmony export */   DividerPresets: () => (/* binding */ DividerPresets),
/* harmony export */   HorizontalDivider: () => (/* binding */ HorizontalDivider),
/* harmony export */   VerticalDivider: () => (/* binding */ VerticalDivider),
/* harmony export */   dividerColorOptions: () => (/* binding */ dividerColorOptions),
/* harmony export */   dividerOrientationOptions: () => (/* binding */ dividerOrientationOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
// Componente Divider reutilizável para uso em outros blocos


/**
 * Renderiza um componente Divider reutilizável
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.orientation - Orientação: 'horizontal' ou 'vertical'
 * @param {string} props.color - Cor: 'gray', 'black' ou 'white'
 * @param {string} props.thickness - Espessura da linha (1-5)
 * @param {string} props.length - Comprimento em porcentagem (10-100)
 * @param {number} props.customHeight - Altura customizada para divisores verticais
 * @param {boolean} props.isEditor - Se está sendo usado no editor
 * @param {string} props.className - Classes CSS adicionais
 * @param {Object} props.style - Estilos inline adicionais
 * @returns {JSX.Element} Elemento JSX do divisor
 */
const DividerComponent = ({
  orientation = 'horizontal',
  color = 'gray',
  thickness = '1',
  length = '100',
  customHeight = 40,
  isEditor = false,
  className = '',
  style = {},
  ...props
}) => {
  // Gerar classes CSS
  const dividerClasses = ['ifc-ds-divider', `ifc-ds-divider--${orientation}`, `ifc-ds-divider--${color}`, `ifc-ds-divider--thickness-${thickness}`, isEditor ? 'ifc-ds-divider--editor' : '', className].filter(Boolean).join(' ');

  // Estilos dinâmicos baseados nos atributos
  const dividerStyle = {
    ...style
  };
  if (orientation === 'horizontal') {
    dividerStyle.width = `${length}%`;
    dividerStyle.height = `${thickness}px`;
  } else {
    dividerStyle.width = `${thickness}px`;
    dividerStyle.height = `${customHeight}px`;
  }

  // Adicionar indicador visual no editor
  const editorIndicator = isEditor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
    className: 'ifc-ds-divider__editor-label'
  }, `Divider - ${orientation === 'horizontal' ? 'Horizontal' : 'Vertical'} - ${color}`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    className: dividerClasses,
    style: dividerStyle,
    'aria-hidden': 'true',
    role: 'separator',
    ...props
  }, [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    key: 'line',
    className: 'ifc-ds-divider__line'
  }), editorIndicator]);
};

/**
 * Função auxiliar para criar um divisor horizontal simples
 */
const HorizontalDivider = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DividerComponent, {
    orientation: 'horizontal',
    ...props
  });
};

/**
 * Função auxiliar para criar um divisor vertical simples
 */
const VerticalDivider = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DividerComponent, {
    orientation: 'vertical',
    ...props
  });
};

/**
 * Presets de divisores comuns
 */
const DividerPresets = {
  // Divisores horizontais
  horizontalGray: {
    orientation: 'horizontal',
    color: 'gray',
    thickness: '1'
  },
  horizontalBlack: {
    orientation: 'horizontal',
    color: 'black',
    thickness: '1'
  },
  horizontalWhite: {
    orientation: 'horizontal',
    color: 'white',
    thickness: '1'
  },
  // Divisores verticais
  verticalGray: {
    orientation: 'vertical',
    color: 'gray',
    thickness: '1',
    customHeight: 40
  },
  verticalBlack: {
    orientation: 'vertical',
    color: 'black',
    thickness: '1',
    customHeight: 40
  },
  verticalWhite: {
    orientation: 'vertical',
    color: 'white',
    thickness: '1',
    customHeight: 40
  },
  // Divisores espessos
  thickHorizontal: {
    orientation: 'horizontal',
    color: 'gray',
    thickness: '3'
  },
  thickVertical: {
    orientation: 'vertical',
    color: 'gray',
    thickness: '3',
    customHeight: 60
  }
};

/**
 * Opções de cor para uso em outros componentes
 */
const dividerColorOptions = [{
  label: 'Cinza',
  value: 'gray'
}, {
  label: 'Preto',
  value: 'black'
}, {
  label: 'Branco',
  value: 'white'
}];

/**
 * Opções de orientação para uso em outros componentes
 */
const dividerOrientationOptions = [{
  label: 'Horizontal',
  value: 'horizontal'
}, {
  label: 'Vertical',
  value: 'vertical'
}];

/***/ }),

/***/ "./src/blocks/divider/index.js":
/*!*************************************!*\
  !*** ./src/blocks/divider/index.js ***!
  \*************************************/
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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./src/blocks/divider/component.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/divider/style.scss");








// Opções de orientação
const orientationOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal', 'ifc-design-system'),
  value: 'horizontal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical', 'ifc-design-system'),
  value: 'vertical'
}];

// Opções de cor usando tokens do WordPress
const colorOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cinza', 'ifc-design-system'),
  value: 'gray'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preto', 'ifc-design-system'),
  value: 'black'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Branco', 'ifc-design-system'),
  value: 'white'
}];

// Opções de espessura
const thicknessOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1px', 'ifc-design-system'),
  value: '1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2px', 'ifc-design-system'),
  value: '2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3px', 'ifc-design-system'),
  value: '3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4px', 'ifc-design-system'),
  value: '4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5px', 'ifc-design-system'),
  value: '5'
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('ifc-ds/divider', {
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      orientation,
      color,
      thickness,
      length,
      customHeight
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Configurações do Divider', 'ifc-design-system')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Orientação', 'ifc-design-system'),
      value: orientation,
      options: orientationOptions,
      onChange: value => setAttributes({
        orientation: value
      }),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Escolha se o divisor será horizontal ou vertical', 'ifc-design-system')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cor', 'ifc-design-system'),
      value: color,
      options: colorOptions,
      onChange: value => setAttributes({
        color: value
      }),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cor do divisor baseada nos tokens de design', 'ifc-design-system')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Espessura', 'ifc-design-system'),
      value: thickness,
      options: thicknessOptions,
      onChange: value => setAttributes({
        thickness: value
      }),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Espessura da linha do divisor', 'ifc-design-system')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Comprimento (%)', 'ifc-design-system'),
      value: parseInt(length),
      onChange: value => setAttributes({
        length: value.toString()
      }),
      min: 10,
      max: 100,
      step: 5,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Comprimento do divisor em relação ao container', 'ifc-design-system')
    }), orientation === 'vertical' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Altura (px)', 'ifc-design-system'),
      value: customHeight,
      onChange: value => setAttributes({
        customHeight: value
      }),
      min: 20,
      max: 200,
      step: 5,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Altura do divisor vertical em pixels', 'ifc-design-system')
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component__WEBPACK_IMPORTED_MODULE_5__.DividerComponent, {
      orientation: orientation,
      color: color,
      thickness: thickness,
      length: length,
      customHeight: customHeight,
      isEditor: true
    })));
  }
});

/***/ }),

/***/ "./src/blocks/divider/style.scss":
/*!***************************************!*\
  !*** ./src/blocks/divider/style.scss ***!
  \***************************************/
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
/******/ 			"blocks/divider/index": 0,
/******/ 			"blocks/divider/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/divider/style-index"], () => (__webpack_require__("./src/blocks/divider/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map