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

/***/ "./src/blocks/header/index.js":
/*!************************************!*\
  !*** ./src/blocks/header/index.js ***!
  \************************************/
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
/* harmony import */ var _skip_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skip-navigation/component */ "./src/blocks/skip-navigation/component.js");
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logo/component */ "./src/blocks/logo/component.js");
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link/component */ "./src/blocks/link/component.js");
/* harmony import */ var _divider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../divider/component */ "./src/blocks/divider/component.js");
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../text/component */ "./src/blocks/text/component.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/header/style.scss");











(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('ifc-ds/header', {
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      logoOrientation,
      logoVariant,
      accessibilityLinks,
      navigationLinks,
      socialMedia
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Configurações do Header', 'ifc-design-system')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Orientação do Logo', 'ifc-design-system'),
      value: logoOrientation,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal', 'ifc-design-system'),
        value: 'horizontal'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical', 'ifc-design-system'),
        value: 'vertical'
      }],
      onChange: value => setAttributes({
        logoOrientation: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Variante do Logo', 'ifc-design-system'),
      value: logoVariant,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padrão', 'ifc-design-system'),
        value: 'default'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Branco', 'ifc-design-system'),
        value: 'white'
      }],
      onChange: value => setAttributes({
        logoVariant: value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
        className: 'ifc-ds-header'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__top-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__accessibility"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_skip_navigation_component__WEBPACK_IMPORTED_MODULE_5__.SkipNavigationComponent, {
      onClick: e => e.preventDefault()
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__accessibility-links"
    }, accessibilityLinks.map((link, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_component__WEBPACK_IMPORTED_MODULE_7__.LinkComponent, {
      key: index,
      url: link.url,
      label: link.label,
      target: "_self",
      size: "small",
      weight: "regular"
    }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__main-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__brand"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_logo_component__WEBPACK_IMPORTED_MODULE_6__.LogoComponent, {
      orientation: logoOrientation,
      variant: logoVariant,
      className: "ifc-ds-header__logo"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__actions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__search"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "search",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Buscar...', 'ifc-design-system'),
      className: "ifc-ds-header__search-input"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__social"
    }, socialMedia.map((social, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_component__WEBPACK_IMPORTED_MODULE_7__.LinkComponent, {
      key: index,
      url: social.url,
      label: social.platform,
      target: "_blank",
      icon: social.platform,
      iconOnly: true,
      size: "medium"
    }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ifc-ds-header__navigation"
    }, navigationLinks.map((link, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "ifc-ds-header__nav-item"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_component__WEBPACK_IMPORTED_MODULE_7__.LinkComponent, {
      url: link.url,
      label: link.label,
      target: "_self",
      size: "medium",
      weight: "medium"
    }), index < navigationLinks.length - 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_divider_component__WEBPACK_IMPORTED_MODULE_8__.DividerComponent, {
      orientation: "vertical",
      color: "gray"
    }))))));
  }
});

/***/ }),

/***/ "./src/blocks/header/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/header/style.scss ***!
  \**************************************/
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

/***/ "./src/blocks/skip-navigation/component.js":
/*!*************************************************!*\
  !*** ./src/blocks/skip-navigation/component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkipNavigationComponent: () => (/* binding */ SkipNavigationComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/component */ "./src/blocks/link/component.js");



const SkipNavigationComponent = ({
  links = [{
    id: 1,
    label: 'Ir para o conteúdo',
    target: '#main',
    description: 'Pula para o conteúdo principal da página'
  }, {
    id: 2,
    label: 'Ir para o menu',
    target: 'nav',
    description: 'Pula para a navegação principal'
  }, {
    id: 3,
    label: 'Ir para o rodapé',
    target: 'footer',
    description: 'Pula para o rodapé da página'
  }],
  className = '',
  onClick = null
}) => {
  const renderSkipLink = link => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_component__WEBPACK_IMPORTED_MODULE_2__.LinkComponent, {
      key: link.id,
      label: link.label,
      url: `#${link.target}`,
      type: "white",
      size: "medium",
      className: "ifc-ds-skip-navigation__link",
      onClick: onClick || (e => e.preventDefault())
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ifc-ds-skip-navigation ${className}`.trim()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifc-ds-skip-navigation__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifc-ds-skip-navigation__links"
  }, links.map(renderSkipLink))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipNavigationComponent);

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
/******/ 			"blocks/header/index": 0,
/******/ 			"blocks/header/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/header/style-index"], () => (__webpack_require__("./src/blocks/header/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map