import React from 'react';

/**
 * Componente Container IFC Design System
 * Para uso interno nos outros componentes do plugin
 */
export const ContainerComponent = ({ 
    children,
    padding = { top: '30', right: '30', bottom: '30', left: '30' },
    margin = { top: '0', right: '0', bottom: '20', left: '0' },
    borderWidth = '1',
    borderColor = 'neutral-300',
    shadowEnabled = true,
    backgroundColor = 'white',
    className = '',
    ...props 
}) => {
    // Montar classes CSS
    const classes = [
        'ifc-ds-container',
        `ifc-ds-container--border-${borderColor}`,
        `ifc-ds-container--bg-${backgroundColor}`,
        shadowEnabled ? 'ifc-ds-container--shadow' : '',
        borderWidth === '0' ? 'ifc-ds-container--no-border' : `ifc-ds-container--border-${borderWidth}`,
        className
    ].filter(Boolean).join(' ');

    // Estilos CSS inline
    const containerStyle = {
        paddingTop: `var(--wp--preset--spacing--${padding?.top || '30'})`,
        paddingRight: `var(--wp--preset--spacing--${padding?.right || '30'})`,
        paddingBottom: `var(--wp--preset--spacing--${padding?.bottom || '30'})`,
        paddingLeft: `var(--wp--preset--spacing--${padding?.left || '30'})`,
        marginTop: `var(--wp--preset--spacing--${margin?.top || '0'})`,
        marginRight: `var(--wp--preset--spacing--${margin?.right || '0'})`,
        marginBottom: `var(--wp--preset--spacing--${margin?.bottom || '20'})`,
        marginLeft: `var(--wp--preset--spacing--${margin?.left || '0'})`,
        ...props.style
    };

    return (
        <div className={classes} style={containerStyle} {...props}>
            {children}
        </div>
    );
};