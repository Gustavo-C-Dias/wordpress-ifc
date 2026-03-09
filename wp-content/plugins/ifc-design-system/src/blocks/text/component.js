import { buildTextClasses, getHtmlTagForTextType } from '../../shared/class-builder';

export const TextComponent = ({ 
    content, 
    textType = 'body', 
    weight = 'regular', 
    color = 'primary', 
    alignment = 'left',
    className = '',
    ...props 
}) => {
    if (!content) {
        return null;
    }

    const classes = buildTextClasses(textType, weight, color, alignment, className);
    const Tag = getHtmlTagForTextType(textType);

    return (
        <Tag className={classes} {...props}>
            {content}
        </Tag>
    );
};