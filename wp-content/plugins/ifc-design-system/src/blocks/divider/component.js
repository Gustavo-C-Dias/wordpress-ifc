import { createElement } from '@wordpress/element';

/**
 * @param {Object} props
 * @param {string} props.orientation
 * @param {string} props.color
 * @param {string} props.thickness
 * @param {string} props.length
 * @param {number} props.customHeight
 * @param {boolean} props.isEditor
 * @param {string} props.className
 * @param {Object} props.style
 * @returns {JSX.Element}
 */
export const DividerComponent = ({
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
    const dividerClasses = [
        'ifc-ds-divider',
        `ifc-ds-divider--${orientation}`,
        `ifc-ds-divider--${color}`,
        `ifc-ds-divider--thickness-${thickness}`,
        isEditor ? 'ifc-ds-divider--editor' : '',
        className
    ].filter(Boolean).join(' ');

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
    return createElement('div', {
        className: dividerClasses,
        style: dividerStyle,
        'aria-hidden': 'true',
        role: 'separator',
        ...props
    }, [
        createElement('div', {
            key: 'line',
            className: 'ifc-ds-divider__line'
        }),
    ]);
};