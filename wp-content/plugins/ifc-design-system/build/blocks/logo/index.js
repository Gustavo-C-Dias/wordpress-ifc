/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/logo/component.js":
/*!**************************************!*\
  !*** ./src/blocks/logo/component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontalLogo: () => (/* binding */ HorizontalLogo),
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent),
/* harmony export */   LogoPresets: () => (/* binding */ LogoPresets),
/* harmony export */   VerticalLogo: () => (/* binding */ VerticalLogo),
/* harmony export */   getDefaultDimensions: () => (/* binding */ getDefaultDimensions),
/* harmony export */   getLogoUrl: () => (/* binding */ getLogoUrl),
/* harmony export */   logoOrientationOptions: () => (/* binding */ logoOrientationOptions),
/* harmony export */   logoVariantOptions: () => (/* binding */ logoVariantOptions),
/* harmony export */   validateLogoAttributes: () => (/* binding */ validateLogoAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
// Componente Logo reutilizável para uso em outros blocos


// URL base para as imagens (será definida através do WordPress)
const LOGO_BASE_URL = '/wp-content/plugins/ifc-design-system/src/blocks/logo/assets';

/**
 * Gera a URL da imagem do logo baseada na orientação e variante
 * @param {string} orientation - 'horizontal' ou 'vertical'
 * @param {string} variant - 'default' ou 'white'
 * @returns {string} URL da imagem
 */
const getLogoUrl = (orientation = 'horizontal', variant = 'default') => {
  return `${LOGO_BASE_URL}/${orientation}/logo-${variant}.svg`;
};

/**
 * Renderiza um componente Logo reutilizável
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.orientation - Orientação: 'horizontal' ou 'vertical'
 * @param {string} props.variant - Variante de cor: 'default' ou 'white'
 * @param {number} props.width - Largura da imagem
 * @param {number} props.height - Altura da imagem
 * @param {string} props.linkUrl - URL para link do logo
 * @param {string} props.linkTarget - Target do link (_self, _blank)
 * @param {string} props.altText - Texto alternativo para acessibilidade
 * @param {boolean} props.isEditor - Se está sendo usado no editor
 * @param {string} props.className - Classes CSS adicionais
 * @param {Object} props.style - Estilos inline adicionais
 * @returns {JSX.Element} Elemento JSX do logo
 */
const LogoComponent = ({
  orientation = 'horizontal',
  variant = 'default',
  width = 200,
  height = 60,
  linkUrl = '',
  linkTarget = '_self',
  altText = 'Logo IFC',
  isEditor = false,
  className = '',
  style = {},
  ...props
}) => {
  // Gerar classes CSS
  const logoClasses = ['ifc-ds-logo', `ifc-ds-logo--${orientation}`, `ifc-ds-logo--${variant}`, isEditor ? 'ifc-ds-logo--editor' : '', className].filter(Boolean).join(' ');

  // URL da imagem
  const logoUrl = getLogoUrl(orientation, variant);

  // Estilos da imagem
  const imageStyle = {
    width: `${width}px`,
    height: `${height}px`,
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    ...style
  };

  // Criar elemento da imagem
  const imageElement = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: logoUrl,
    alt: altText,
    style: imageStyle,
    className: 'ifc-ds-logo__image',
    loading: 'lazy' // Performance: lazy loading
  });

  // Container do logo
  const logoContainer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    className: logoClasses,
    ...props
  }, imageElement);

  // Se há URL de link, envolver em um link
  if (linkUrl && !isEditor) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
      href: linkUrl,
      target: linkTarget,
      rel: linkTarget === '_blank' ? 'noopener noreferrer' : undefined,
      className: 'ifc-ds-logo__link'
    }, logoContainer);
  }
  return logoContainer;
};

/**
 * Função auxiliar para criar logo horizontal
 */
const HorizontalLogo = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LogoComponent, {
    orientation: 'horizontal',
    ...props
  });
};

/**
 * Função auxiliar para criar logo vertical
 */
const VerticalLogo = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LogoComponent, {
    orientation: 'vertical',
    ...props
  });
};

/**
 * Presets de logos comuns
 */
const LogoPresets = {
  // Logos horizontais
  horizontalDefault: {
    orientation: 'horizontal',
    variant: 'default',
    width: 200,
    height: 60
  },
  horizontalWhite: {
    orientation: 'horizontal',
    variant: 'white',
    width: 200,
    height: 60
  },
  // Logos verticais
  verticalDefault: {
    orientation: 'vertical',
    variant: 'default',
    width: 80,
    height: 120
  },
  verticalWhite: {
    orientation: 'vertical',
    variant: 'white',
    width: 80,
    height: 120
  },
  // Tamanhos específicos
  small: {
    width: 150,
    height: 45
  },
  medium: {
    width: 200,
    height: 60
  },
  large: {
    width: 300,
    height: 90
  },
  // Para header
  headerLogo: {
    orientation: 'horizontal',
    variant: 'default',
    width: 180,
    height: 54,
    linkUrl: '/',
    altText: 'Logo IFC - Página Inicial'
  },
  // Para footer
  footerLogo: {
    orientation: 'horizontal',
    variant: 'white',
    width: 160,
    height: 48,
    linkUrl: '/',
    altText: 'Logo IFC - Página Inicial'
  }
};

/**
 * Opções de orientação para uso em outros componentes
 */
const logoOrientationOptions = [{
  label: 'Horizontal',
  value: 'horizontal'
}, {
  label: 'Vertical',
  value: 'vertical'
}];

/**
 * Opções de variante para uso em outros componentes
 */
const logoVariantOptions = [{
  label: 'Padrão',
  value: 'default'
}, {
  label: 'Branco',
  value: 'white'
}];

/**
 * Função utilitária para obter dimensões padrão baseadas na orientação
 */
const getDefaultDimensions = orientation => {
  const presets = {
    horizontal: {
      width: 200,
      height: 60
    },
    vertical: {
      width: 80,
      height: 120
    }
  };
  return presets[orientation] || presets.horizontal;
};

/**
 * Função utilitária para validar atributos do logo
 */
const validateLogoAttributes = attributes => {
  const {
    orientation,
    variant,
    width,
    height
  } = attributes;
  return {
    orientation: ['horizontal', 'vertical'].includes(orientation) ? orientation : 'horizontal',
    variant: ['default', 'white'].includes(variant) ? variant : 'default',
    width: Math.max(50, Math.min(400, width || 200)),
    height: Math.max(30, Math.min(300, height || 60))
  };
};

/***/ }),

/***/ "./src/blocks/logo/index.js":
/*!**********************************!*\
  !*** ./src/blocks/logo/index.js ***!
  \**********************************/
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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./src/blocks/logo/component.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/logo/style.scss");








// Opções de orientação
const orientationOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal', 'ifc-design-system'),
  value: 'horizontal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical', 'ifc-design-system'),
  value: 'vertical'
}];

// Opções de variante de cor
const variantOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padrão', 'ifc-design-system'),
  value: 'default'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Branco', 'ifc-design-system'),
  value: 'white'
}];

// Opções de target do link
const linkTargetOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mesma janela', 'ifc-design-system'),
  value: '_self'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Nova janela', 'ifc-design-system'),
  value: '_blank'
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('ifc-ds/logo', {
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      orientation,
      variant,
      width,
      height,
      linkUrl,
      linkTarget,
      altText
    } = attributes;

    // Calcular dimensões automáticas baseadas na orientação
    const getDefaultDimensions = orientation => {
      if (orientation === 'horizontal') {
        return {
          width: 200,
          height: 60
        };
      } else {
        return {
          width: 80,
          height: 120
        };
      }
    };

    // Atualizar dimensões quando orientação mudar
    const handleOrientationChange = newOrientation => {
      const defaultDimensions = getDefaultDimensions(newOrientation);
      setAttributes({
        orientation: newOrientation,
        width: defaultDimensions.width,
        height: defaultDimensions.height
      });
    };
    const logoUrl = (0,_component__WEBPACK_IMPORTED_MODULE_5__.getLogoUrl)(orientation, variant);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Configurações do Logo', 'ifc-design-system')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Orientação', 'ifc-design-system'),
      value: orientation,
      options: orientationOptions,
      onChange: handleOrientationChange,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Escolha entre logo horizontal ou vertical', 'ifc-design-system')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Variante', 'ifc-design-system'),
      value: variant,
      options: variantOptions,
      onChange: value => setAttributes({
        variant: value
      }),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Escolha a versão de cor do logo', 'ifc-design-system')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "logo-preview",
      style: {
        margin: '16px 0',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: variant === 'white' ? '#333' : '#fff'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview:', 'ifc-design-system'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: logoUrl,
      alt: altText,
      style: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block'
      }
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dimensões', 'ifc-design-system'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Largura (px)', 'ifc-design-system'),
      value: width,
      onChange: value => setAttributes({
        width: value
      }),
      min: 50,
      max: orientation === 'horizontal' ? 400 : 200,
      step: 10
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Altura (px)', 'ifc-design-system'),
      value: height,
      onChange: value => setAttributes({
        height: value
      }),
      min: 30,
      max: orientation === 'vertical' ? 300 : 150,
      step: 5
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isSecondary: true,
      onClick: () => {
        const defaultDimensions = getDefaultDimensions(orientation);
        setAttributes({
          width: defaultDimensions.width,
          height: defaultDimensions.height
        });
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Restaurar dimensões padrão', 'ifc-design-system'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link e Acessibilidade', 'ifc-design-system'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('URL do Link', 'ifc-design-system'),
      value: linkUrl,
      onChange: value => setAttributes({
        linkUrl: value
      }),
      placeholder: "https://ifc.edu.br",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('URL para onde o logo deve redirecionar quando clicado', 'ifc-design-system')
    }), linkUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Abrir link', 'ifc-design-system'),
      value: linkTarget,
      options: linkTargetOptions,
      onChange: value => setAttributes({
        linkTarget: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Texto Alternativo', 'ifc-design-system'),
      value: altText,
      onChange: value => setAttributes({
        altText: value
      }),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Descrição da imagem para acessibilidade', 'ifc-design-system')
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component__WEBPACK_IMPORTED_MODULE_5__.LogoComponent, {
      orientation: orientation,
      variant: variant,
      width: width,
      height: height,
      linkUrl: linkUrl,
      linkTarget: linkTarget,
      altText: altText,
      isEditor: true
    })));
  }
});

/***/ }),

/***/ "./src/blocks/logo/style.scss":
/*!************************************!*\
  !*** ./src/blocks/logo/style.scss ***!
  \************************************/
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
/******/ 			"blocks/logo/index": 0,
/******/ 			"blocks/logo/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/logo/style-index"], () => (__webpack_require__("./src/blocks/logo/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map