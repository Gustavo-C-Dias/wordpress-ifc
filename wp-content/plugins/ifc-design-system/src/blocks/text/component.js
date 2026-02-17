import React from 'react';
import { buildTextClasses, getHtmlTagForTextType } from '../../shared/class-builder';

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

    // Montar classes CSS usando builder centralizado
    const classes = buildTextClasses(textType, weight, color, alignment, className);

    const Tag = getHtmlTagForTextType(textType);

    return (
        <Tag className={classes} {...props}>
            {content}
        </Tag>
    );
};