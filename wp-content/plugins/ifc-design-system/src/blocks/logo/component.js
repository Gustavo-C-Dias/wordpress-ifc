// Componente Logo reutilizável para uso em outros blocos
import { createElement } from '@wordpress/element';

// URL base para as imagens (será definida através do WordPress)
const LOGO_BASE_URL = '/wp-content/plugins/ifc-design-system/src/blocks/logo/assets';

/**
 * Gera a URL da imagem do logo baseada na orientação e variante
 * @param {string} orientation - 'horizontal' ou 'vertical'
 * @param {string} variant - 'default' ou 'white'
 * @returns {string} URL da imagem
 */
export const getLogoUrl = (orientation = 'horizontal', variant = 'default') => {
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
export const LogoComponent = ({
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
    const logoClasses = [
        'ifc-ds-logo',
        `ifc-ds-logo--${orientation}`,
        `ifc-ds-logo--${variant}`,
        isEditor ? 'ifc-ds-logo--editor' : '',
        className
    ].filter(Boolean).join(' ');

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
    const imageElement = createElement('img', {
        src: logoUrl,
        alt: altText,
        style: imageStyle,
        className: 'ifc-ds-logo__image',
        loading: 'lazy' // Performance: lazy loading
    });

    // Container do logo
    const logoContainer = createElement('div', {
        className: logoClasses,
        ...props
    }, imageElement);

    // Se há URL de link, envolver em um link
    if (linkUrl && !isEditor) {
        return createElement('a', {
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
export const HorizontalLogo = (props) => {
    return createElement(LogoComponent, {
        orientation: 'horizontal',
        ...props
    });
};

/**
 * Função auxiliar para criar logo vertical
 */
export const VerticalLogo = (props) => {
    return createElement(LogoComponent, {
        orientation: 'vertical',
        ...props
    });
};

/**
 * Presets de logos comuns
 */
export const LogoPresets = {
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
    small: { width: 150, height: 45 },
    medium: { width: 200, height: 60 },
    large: { width: 300, height: 90 },
    
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
export const logoOrientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' }
];

/**
 * Opções de variante para uso em outros componentes
 */
export const logoVariantOptions = [
    { label: 'Padrão', value: 'default' },
    { label: 'Branco', value: 'white' }
];

/**
 * Função utilitária para obter dimensões padrão baseadas na orientação
 */
export const getDefaultDimensions = (orientation) => {
    const presets = {
        horizontal: { width: 200, height: 60 },
        vertical: { width: 80, height: 120 }
    };
    
    return presets[orientation] || presets.horizontal;
};

/**
 * Função utilitária para validar atributos do logo
 */
export const validateLogoAttributes = (attributes) => {
    const { orientation, variant, width, height } = attributes;
    
    return {
        orientation: ['horizontal', 'vertical'].includes(orientation) ? orientation : 'horizontal',
        variant: ['default', 'white'].includes(variant) ? variant : 'default',
        width: Math.max(50, Math.min(400, width || 200)),
        height: Math.max(30, Math.min(300, height || 60))
    };
};