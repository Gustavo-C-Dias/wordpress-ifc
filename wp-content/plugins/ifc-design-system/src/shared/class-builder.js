/**
 * IFC Design System - Class Builder
 * Utilitários para construção de classes CSS
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
