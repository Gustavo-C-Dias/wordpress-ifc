/**
 * IFC Design System - Class Builder
 * Utilitários para construção de classes CSS
 */

/**
 * @param {string} textType
 * @param {string} weight
 * @param {string} color
 * @param {string} alignment
 * @param {string} additionalClass
 * @returns {string}
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
 * @param {string} type
 * @param {string} size
 * @param {string} additionalClass
 * @returns {string}
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
 * @param {string} size
 * @returns {string}
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
 * @param {string} textType
 * @returns {string}
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
