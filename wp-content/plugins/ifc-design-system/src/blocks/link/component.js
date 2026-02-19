// Componente Link reutilizável para uso em outros blocos
import { createElement } from '@wordpress/element';
import { TextComponent } from '../text/component';
import { buildLinkClasses, getLinkIconSize } from '../../shared/class-builder';
import { iconLibrary, iconCategories, detailedSpacingOptions as spacingOptions } from '../../shared/options';

// Re-exporta opções para uso por outros componentes
export { iconLibrary, iconCategories, spacingOptions };

/**
 * Renderiza um componente Link reutilizável
 */
export const LinkComponent = ({
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
    const linkClasses = buildLinkClasses(type, size, className);
    const textColor = type === 'neutral' ? 'neutral' : 'primary';

    const linkStyle = {
        paddingTop: `var(--ifc-space-${(padding?.top || '0').replace('spacing-', '')})`,
        paddingRight: `var(--ifc-space-${(padding?.right || '0').replace('spacing-', '')})`,
        paddingBottom: `var(--ifc-space-${(padding?.bottom || '0').replace('spacing-', '')})`,
        paddingLeft: `var(--ifc-space-${(padding?.left || '0').replace('spacing-', '')})`
    };

    const iconSize = getLinkIconSize(size);
    const iconStyle = {
        width: iconSize,
        height: iconSize
    };

    const renderIcon = () => {
        if (!icon) return null;
        
        return createElement('span', {
            className: `ifc-ds-link__icon ifc-ds-link__icon--${iconPosition}`,
            style: iconStyle
        }, icon.startsWith('http') ? 
            createElement('img', { src: icon, alt: '', style: iconStyle }) :
            createElement('span', { 
                className: `dashicon dashicons-${icon}`, 
                style: iconStyle 
            })
        );
    };

    const linkContent = [
        iconPosition === 'left' && renderIcon(),
        children || createElement(TextComponent, { 
            content: label,
            textType: size === 'small' || size === 'detail' ? 'detail' : 'body',
            weight: size === 'detail' ? 'regular' : 'semibold',
            color: textColor,
            className: 'ifc-ds-link__label'
        }),
        iconPosition === 'right' && renderIcon()
    ].filter(Boolean);

    return createElement('span', {
        className: linkClasses,
        ...props
    }, createElement('a', {
        href: url,
        className: 'ifc-ds-link__element',
        style: linkStyle,
        onClick: onClick,
        'aria-label': ariaLabel
    }, ...linkContent));
};
