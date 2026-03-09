import { createElement } from '@wordpress/element';

const getPluginUrl = () => {
    if (typeof wpAssets !== 'undefined' && wpAssets.pluginUrl) {
        return wpAssets.pluginUrl;
    }
    return '/wp-content/plugins/ifc-design-system';
};

export const getLogoUrl = (campus = 'camboriu', orientation = 'horizontal', variant = 'default') => {
    const pluginUrl = getPluginUrl();
    return `${pluginUrl}/src/blocks/logo/assets/${campus}/${orientation}/${variant}.png`;
};

/**
 * @param {Object} props
 * @param {string} props.orientation
 * @param {string} props.varian
 * @param {number} props.width
 * @param {number} props.height
 * @param {string} props.linkUr
 * @param {string} props.linkTarget
 * @param {string} props.altText
 * @param {boolean} props.isEditor
 * @param {string} props.className
 * @param {Object} props.style
 * @returns {JSX.Element}
 */
export const LogoComponent = ({
    campus = 'camboriu',
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
    const logoClasses = [
        'ifc-ds-logo',
        `ifc-ds-logo--${orientation}`,
        `ifc-ds-logo--${variant}`,
        isEditor ? 'ifc-ds-logo--editor' : '',
        className
    ].filter(Boolean).join(' ');

    const logoUrl = getLogoUrl(campus, orientation, variant);

    const imageStyle = {
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        ...style
    };

    const imageElement = createElement('img', {
        src: logoUrl,
        alt: altText,
        style: imageStyle,
        className: 'ifc-ds-logo__image',
        loading: 'lazy'
    });

    const logoContainer = createElement('div', {
        className: logoClasses,
        ...props
    }, imageElement);

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