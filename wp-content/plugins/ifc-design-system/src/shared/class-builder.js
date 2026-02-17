/**
 * IFC Design System - Class Builder
 * Utilitários para construção de classes CSS de forma consistente
 */

/**
 * Constrói classes CSS para o componente Text
 * @param {string} textType - Tipo do texto (title, subtitle, body, detail, caption)
 * @param {string} weight - Peso da fonte (regular, semibold, bold)
 * @param {string} color - Cor (primary, secondary, neutral, etc)
 * @param {string} alignment - Alinhamento (left, center, right)
 * @param {string} additionalClass - Classes adicionais
 * @returns {string} String de classes CSS
 */
export const buildTextClasses = (textType = 'body', weight = 'regular', color = 'primary', alignment = 'left', additionalClass = '') => {
    return [
        'ifc-ds-text',
        `ifc-ds-text--${textType}`,
        `ifc-ds-text--${weight}`,
        `ifc-ds-text--${color}`,
        `ifc-ds-text--align-${alignment}`,
        additionalClass
    ].filter(Boolean).join(' ');
};

/**
 * Constrói classes CSS para o componente Link
 * @param {string} type - Tipo do link (neutral, primary, white)
 * @param {string} size - Tamanho (small, medium, large, detail)
 * @param {string} additionalClass - Classes adicionais
 * @returns {string} String de classes CSS
 */
export const buildLinkClasses = (type = 'neutral', size = 'medium', additionalClass = '') => {
    return [
        'ifc-ds-link',
        `ifc-ds-link--${type}`,
        `ifc-ds-link--${size}`,
        additionalClass
    ].filter(Boolean).join(' ');
};

/**
 * Retorna o tamanho do ícone para links baseado no tamanho do link
 * @param {string} size - Tamanho do link (small, medium, large, detail)
 * @returns {string} Tamanho do ícone em pixels
 */
export const getLinkIconSize = (size) => {
    switch (size) {
        case 'small':
        case 'detail':
            return '16px';
        case 'large':
            return '24px';
        case 'medium':
        default:
            return '20px';
    }
};

/**
 * Constrói classes CSS para o componente Container
 * @param {Object} options - Opções de configuração
 * @returns {string} String de classes CSS
 */
export const buildContainerClasses = ({
    borderColor = 'neutral-300',
    backgroundColor = 'white',
    shadowEnabled = true,
    borderWidth = '1',
    additionalClass = ''
} = {}) => {
    return [
        'ifc-ds-container',
        `ifc-ds-container--border-${borderColor}`,
        `ifc-ds-container--bg-${backgroundColor}`,
        shadowEnabled ? 'ifc-ds-container--shadow' : '',
        borderWidth === '0' ? 'ifc-ds-container--no-border' : `ifc-ds-container--border-${borderWidth}`,
        additionalClass
    ].filter(Boolean).join(' ');
};

/**
 * Constrói classes CSS para o componente Divider
 * @param {string} orientation - Orientação (horizontal, vertical)
 * @param {string} color - Cor (gray, black, white)
 * @param {string} thickness - Espessura (1-5)
 * @param {string} additionalClass - Classes adicionais
 * @returns {string} String de classes CSS
 */
export const buildDividerClasses = (orientation = 'horizontal', color = 'gray', thickness = '1', additionalClass = '') => {
    return [
        'ifc-ds-divider',
        `ifc-ds-divider--${orientation}`,
        `ifc-ds-divider--${color}`,
        `ifc-ds-divider--thickness-${thickness}`,
        additionalClass
    ].filter(Boolean).join(' ');
};

/**
 * Constrói classes CSS para o componente Input
 * @param {Object} options - Opções de configuração
 * @returns {string} String de classes CSS
 */
export const buildInputClasses = ({
    size = 'medium',
    variant = 'default',
    hasIcon = false,
    disabled = false,
    additionalClass = ''
} = {}) => {
    return [
        'ifc-ds-input-wrapper',
        `ifc-ds-input-wrapper--${size}`,
        `ifc-ds-input-wrapper--${variant}`,
        hasIcon ? 'ifc-ds-input-wrapper--with-icon' : '',
        disabled ? 'ifc-ds-input-wrapper--disabled' : '',
        additionalClass
    ].filter(Boolean).join(' ');
};

/**
 * Constrói classes CSS para o componente Logo
 * @param {string} orientation - Orientação (horizontal, vertical)
 * @param {string} variant - Variante (default, white)
 * @param {string} additionalClass - Classes adicionais
 * @returns {string} String de classes CSS
 */
export const buildLogoClasses = (orientation = 'horizontal', variant = 'default', additionalClass = '') => {
    return [
        'ifc-ds-logo',
        `ifc-ds-logo--${orientation}`,
        `ifc-ds-logo--${variant}`,
        additionalClass
    ].filter(Boolean).join(' ');
};

/**
 * Constrói classes CSS para o componente Layout Container
 * @param {Object} options - Opções de configuração
 * @returns {string} String de classes CSS
 */
export const buildLayoutContainerClasses = ({
    containerType = 'fluid',
    verticalSpacing = 'medium',
    horizontalAlignment = 'center',
    maxColumns = 12,
    allowBleed = false,
    additionalClass = ''
} = {}) => {
    return [
        'ifc-ds-layout-container',
        `ifc-ds-layout-container--${containerType}`,
        `ifc-ds-layout-container--spacing-${verticalSpacing}`,
        `ifc-ds-layout-container--align-${horizontalAlignment}`,
        `ifc-ds-layout-container--columns-${maxColumns}`,
        allowBleed ? 'ifc-ds-layout-container--bleed' : '',
        additionalClass
    ].filter(Boolean).join(' ');
};

/**
 * Retorna a tag HTML apropriada para um tipo de texto
 * @param {string} textType - Tipo de texto
 * @returns {string} Tag HTML
 */
export const getHtmlTagForTextType = (textType) => {
    const tagMap = {
        title: 'h1',
        subtitle: 'h2',
        body: 'p',
        detail: 'p',
        caption: 'small'
    };
    return tagMap[textType] || 'p';
};

/**
 * Constrói estilos inline para padding
 * @param {Object} padding - Objeto com top, right, bottom, left
 * @returns {Object} Objeto de estilos
 */
export const buildPaddingStyle = (padding = {}) => {
    const getValue = (val) => `var(--ifc-space-${(val || '0').replace('spacing-', '').replace('space-', '')})`;
    
    return {
        paddingTop: getValue(padding?.top),
        paddingRight: getValue(padding?.right),
        paddingBottom: getValue(padding?.bottom),
        paddingLeft: getValue(padding?.left)
    };
};

/**
 * Constrói estilos inline para margin
 * @param {Object} margin - Objeto com top, right, bottom, left
 * @returns {Object} Objeto de estilos
 */
export const buildMarginStyle = (margin = {}) => {
    const getValue = (val) => `var(--ifc-space-${(val || '0').replace('spacing-', '').replace('space-', '')})`;
    
    return {
        marginTop: getValue(margin?.top),
        marginRight: getValue(margin?.right),
        marginBottom: getValue(margin?.bottom),
        marginLeft: getValue(margin?.left)
    };
};

/**
 * Combina múltiplos objetos de estilo
 * @param  {...Object} styles - Objetos de estilo para combinar
 * @returns {Object} Objeto de estilos combinados
 */
export const combineStyles = (...styles) => {
    return Object.assign({}, ...styles.filter(Boolean));
};

/**
 * Retorna o tamanho de ícone baseado no size do componente
 * @param {string} size - Tamanho do componente
 * @returns {string} Tamanho do ícone em pixels
 */
export const getIconSize = (size) => {
    const sizeMap = {
        small: '16',
        detail: '16',
        medium: '20',
        large: '24'
    };
    return sizeMap[size] || '20';
};
