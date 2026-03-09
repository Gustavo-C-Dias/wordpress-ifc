import { createElement } from '@wordpress/element';
import { TextComponent } from '../text/component';
import { buildLinkClasses, getLinkIconSize } from '../../shared/class-builder';

export const LinkComponent = ({
    label,
    url = '#',
    icon,
    iconPosition = 'left',
    type = 'neutral',
    size = 'medium',
    weight,
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
        paddingTop: `var(--ifc-spacing-${(padding?.top || '0').replace('spacing-', '')})`,
        paddingRight: `var(--ifc-spacing-${(padding?.right || '0').replace('spacing-', '')})`,
        paddingBottom: `var(--ifc-spacing-${(padding?.bottom || '0').replace('spacing-', '')})`,
        paddingLeft: `var(--ifc-spacing-${(padding?.left || '0').replace('spacing-', '')})`
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
        }, createElement('span', { 
            className: `dashicons dashicons-${icon}`, 
            style: iconStyle 
        }));
    };

    const linkContent = [
        iconPosition === 'left' && renderIcon(),
        children || createElement(TextComponent, { 
            content: label,
            textType: size === 'small' || size === 'detail' ? 'detail' : 'body',
            weight: weight || (size === 'detail' ? 'regular' : 'semibold'),
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
