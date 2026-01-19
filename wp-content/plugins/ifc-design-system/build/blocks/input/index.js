/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/input/component.js":
/*!***************************************!*\
  !*** ./src/blocks/input/component.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputComponent: () => (/* binding */ InputComponent),
/* harmony export */   spacingOptions: () => (/* binding */ spacingOptions),
/* harmony export */   useInputState: () => (/* binding */ useInputState)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
// Componente Input reutilizável para uso em outros blocos


/**
 * Opções de espaçamento disponíveis
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

/**
 * Renderiza um componente Input reutilizável
 */
const InputComponent = ({
  label = '',
  placeholder = '',
  caption = '',
  icon = '',
  inputType = 'text',
  inputName = '',
  inputId = '',
  required = false,
  disabled = false,
  size = 'medium',
  variant = 'default',
  padding = {},
  className = '',
  value = '',
  onChange,
  onFocus,
  onBlur,
  ariaLabel,
  ariaDescribedBy,
  children,
  ...props
}) => {
  // Classes para o wrapper do componente
  const wrapperClasses = ['ifc-ds-input-wrapper', `ifc-ds-input-wrapper--${size}`, `ifc-ds-input-wrapper--${variant}`, icon ? 'ifc-ds-input-wrapper--with-icon' : '', disabled ? 'ifc-ds-input-wrapper--disabled' : '', className].filter(Boolean).join(' ');

  // Classes para o input
  const inputClasses = ['ifc-ds-input', `ifc-ds-input--${size}`, `ifc-ds-input--${variant}`, icon ? 'ifc-ds-input--with-icon' : ''].filter(Boolean).join(' ');

  // Estilo personalizado com padding
  const wrapperStyle = {
    paddingTop: `var(--wp--preset--spacing--${(padding?.top || '0').replace('spacing-', '')})`,
    paddingRight: `var(--wp--preset--spacing--${(padding?.right || '0').replace('spacing-', '')})`,
    paddingBottom: `var(--wp--preset--spacing--${(padding?.bottom || '0').replace('spacing-', '')})`,
    paddingLeft: `var(--wp--preset--spacing--${(padding?.left || '0').replace('spacing-', '')})`
  };

  // ID único para o input (se não fornecido)
  const uniqueId = inputId || `ifc-input-${Math.random().toString(36).substr(2, 9)}`;

  // IDs para acessibilidade
  const captionId = caption ? `${uniqueId}-caption` : undefined;
  const describedBy = ariaDescribedBy || captionId;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: wrapperClasses,
    style: wrapperStyle,
    ...props
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: uniqueId,
    className: "ifc-ds-input__label"
  }, label, required && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ifc-ds-input__required",
    "aria-label": "Campo obrigat\xF3rio"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifc-ds-input__field-wrapper"
  }, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ifc-ds-input__icon",
    "aria-hidden": "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: icon
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: uniqueId,
    name: inputName || uniqueId,
    type: inputType,
    className: inputClasses,
    placeholder: placeholder,
    required: required,
    disabled: disabled,
    value: value,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-label": ariaLabel,
    "aria-describedby": describedBy
  })), caption && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: captionId,
    className: "ifc-ds-input__caption"
  }, caption));
};

/**
 * Hook para gerenciar o estado do input
 */
const useInputState = (initialValue = '') => {
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const [focused, setFocused] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  return {
    value,
    setValue,
    focused,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  };
};

/***/ }),

/***/ "./src/blocks/input/index.js":
/*!***********************************!*\
  !*** ./src/blocks/input/index.js ***!
  \***********************************/
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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./src/blocks/input/component.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/input/style.scss");







// Opções locais do componente
const sizeOptions = [{
  label: 'Pequeno',
  value: 'small'
}, {
  label: 'Médio',
  value: 'medium'
}, {
  label: 'Grande',
  value: 'large'
}];
const variantOptions = [{
  label: 'Padrão',
  value: 'default'
}, {
  label: 'Contornado',
  value: 'outlined'
}, {
  label: 'Preenchido',
  value: 'filled'
}];
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
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('ifc-ds/input', {
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      label,
      placeholder,
      caption,
      icon,
      inputType,
      inputName,
      inputId,
      required,
      disabled,
      size,
      variant,
      padding
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();

    // Opções de tipo de input
    const inputTypeOptions = [{
      label: 'Texto',
      value: 'text'
    }, {
      label: 'Email',
      value: 'email'
    }, {
      label: 'Senha',
      value: 'password'
    }, {
      label: 'Telefone',
      value: 'tel'
    }, {
      label: 'URL',
      value: 'url'
    }, {
      label: 'Busca',
      value: 'search'
    }];

    // As opções agora vêm do componente base

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Configura\xE7\xF5es do Input",
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Label (opcional)",
      value: label,
      onChange: value => setAttributes({
        label: value
      }),
      help: "Texto que aparece acima do campo"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Placeholder (opcional)",
      value: placeholder,
      onChange: value => setAttributes({
        placeholder: value
      }),
      help: "Texto de exemplo dentro do campo"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Caption (opcional)",
      value: caption,
      onChange: value => setAttributes({
        caption: value
      }),
      help: "Texto explicativo abaixo do campo"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacer, {
      marginY: 3
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Tipo do Input",
      value: inputType,
      options: inputTypeOptions,
      onChange: value => setAttributes({
        inputType: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Nome do Campo",
      value: inputName,
      onChange: value => setAttributes({
        inputName: value
      }),
      help: "Nome usado no formul\xE1rio (name attribute)"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "ID do Campo",
      value: inputId,
      onChange: value => setAttributes({
        inputId: value
      }),
      help: "ID \xFAnico do elemento (opcional)"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacer, {
      marginY: 3
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: "Campo obrigat\xF3rio",
      checked: required,
      onChange: value => setAttributes({
        required: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: "Campo desabilitado",
      checked: disabled,
      onChange: value => setAttributes({
        disabled: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Apar\xEAncia",
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Tamanho",
      value: size,
      options: sizeOptions,
      onChange: value => setAttributes({
        size: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Variante",
      value: variant,
      options: variantOptions,
      onChange: value => setAttributes({
        variant: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "\xCDcone (opcional)",
      value: icon,
      onChange: value => setAttributes({
        icon: value
      }),
      help: "Classe do \xEDcone (ex: fas fa-user, dashicons-admin-users)"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Espa\xE7amento",
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Padding Superior",
      value: padding?.top || '0',
      options: spacingOptions,
      onChange: value => setAttributes({
        padding: {
          ...padding,
          top: value
        }
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Padding Direito",
      value: padding?.right || '0',
      options: spacingOptions,
      onChange: value => setAttributes({
        padding: {
          ...padding,
          right: value
        }
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Padding Inferior",
      value: padding?.bottom || '0',
      options: spacingOptions,
      onChange: value => setAttributes({
        padding: {
          ...padding,
          bottom: value
        }
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Padding Esquerdo",
      value: padding?.left || '0',
      options: spacingOptions,
      onChange: value => setAttributes({
        padding: {
          ...padding,
          left: value
        }
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, {
      label: label,
      placeholder: placeholder,
      caption: caption,
      icon: icon,
      inputType: inputType,
      inputName: inputName,
      inputId: inputId,
      required: required,
      disabled: disabled,
      size: size,
      variant: variant,
      padding: padding
      // Para visualização no editor
      ,
      value: "",
      onChange: () => {} // No editor, não precisamos de funcionalidade real
    })));
  }
});

/***/ }),

/***/ "./src/blocks/input/style.scss":
/*!*************************************!*\
  !*** ./src/blocks/input/style.scss ***!
  \*************************************/
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
/******/ 			"blocks/input/index": 0,
/******/ 			"blocks/input/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/input/style-index"], () => (__webpack_require__("./src/blocks/input/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map