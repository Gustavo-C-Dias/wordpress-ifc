import React from 'react';

/**
 * Componente de Texto IFC Design System
 * Para uso interno nos outros componentes do plugin
 */
export const TextComponent = ({ 
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
    const getHtmlTag = (type) => {
        switch (type) {
            case 'title': return 'h1';
            case 'subtitle': return 'h2';
            case 'caption': return 'small';
            default: return 'p';
        }
    };

    // Montar classes CSS
    const classes = [
        'ifc-ds-text',
        `ifc-ds-text--${textType}`,
        `ifc-ds-text--${weight}`,
        `ifc-ds-text--${color}`,
        `ifc-ds-text--align-${alignment}`,
        className
    ].filter(Boolean).join(' ');

    const Tag = getHtmlTag(textType);

    return (
        <Tag className={classes} {...props}>
            {content}
        </Tag>
    );
};