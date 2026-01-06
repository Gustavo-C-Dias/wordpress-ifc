// Componente Input reutilizável para uso em outros blocos
import { createElement, useState } from '@wordpress/element';

/**
 * Opções de espaçamento disponíveis
 */
export const spacingOptions = [
    { label: 'Nenhum', value: '0' },
    { label: 'Space 0.5 (2px)', value: 'space-0-5' },
    { label: 'Space 1 (4px)', value: 'space-1' },
    { label: 'Space 2 (8px)', value: 'space-2' },
    { label: 'Space 3 (12px)', value: 'space-3' },
    { label: 'Space 4 (16px)', value: 'space-4' },
    { label: 'Space 5 (20px)', value: 'space-5' },
    { label: 'Space 6 (24px)', value: 'space-6' },
    { label: 'Space 8 (32px)', value: 'space-8' },
    { label: 'Space 10 (40px)', value: 'space-10' },
    { label: 'Space 12 (48px)', value: 'space-12' },
    { label: 'Space 16 (64px)', value: 'space-16' },
    { label: 'Space 20 (80px)', value: 'space-20' },
    { label: 'Space 24 (96px)', value: 'space-24' }
];

/**
 * Renderiza um componente Input reutilizável
 */
export const InputComponent = ({
    label = '',
    placeholder = '',
    caption = '',
    icon = '',
    inputType = 'text',
    inputName = '',
    inputId = '',
    required = false,
    disabled = false,
    size = 'medium',
    variant = 'default',
    padding = {},
    className = '',
    value = '',
    onChange,
    onFocus,
    onBlur,
    ariaLabel,
    ariaDescribedBy,
    children,
    ...props
}) => {
    // Classes para o wrapper do componente
    const wrapperClasses = [
        'ifc-ds-input-wrapper',
        `ifc-ds-input-wrapper--${size}`,
        `ifc-ds-input-wrapper--${variant}`,
        icon ? 'ifc-ds-input-wrapper--with-icon' : '',
        disabled ? 'ifc-ds-input-wrapper--disabled' : '',
        className
    ].filter(Boolean).join(' ');

    // Classes para o input
    const inputClasses = [
        'ifc-ds-input',
        `ifc-ds-input--${size}`,
        `ifc-ds-input--${variant}`,
        icon ? 'ifc-ds-input--with-icon' : ''
    ].filter(Boolean).join(' ');

    // Estilo personalizado com padding
    const wrapperStyle = {
        paddingTop: `var(--wp--preset--spacing--${(padding?.top || '0').replace('spacing-', '')})`,
        paddingRight: `var(--wp--preset--spacing--${(padding?.right || '0').replace('spacing-', '')})`,
        paddingBottom: `var(--wp--preset--spacing--${(padding?.bottom || '0').replace('spacing-', '')})`,
        paddingLeft: `var(--wp--preset--spacing--${(padding?.left || '0').replace('spacing-', '')})`
    };

    // ID único para o input (se não fornecido)
    const uniqueId = inputId || `ifc-input-${Math.random().toString(36).substr(2, 9)}`;
    
    // IDs para acessibilidade
    const captionId = caption ? `${uniqueId}-caption` : undefined;
    const describedBy = ariaDescribedBy || captionId;

    return (
        <div 
            className={wrapperClasses} 
            style={wrapperStyle}
            {...props}
        >
            {label && (
                <label 
                    htmlFor={uniqueId}
                    className="ifc-ds-input__label"
                >
                    {label}
                    {required && <span className="ifc-ds-input__required" aria-label="Campo obrigatório">*</span>}
                </label>
            )}
            
            <div className="ifc-ds-input__field-wrapper">
                {icon && (
                    <span 
                        className="ifc-ds-input__icon"
                        aria-hidden="true"
                    >
                        <i className={icon}></i>
                    </span>
                )}
                
                <input
                    id={uniqueId}
                    name={inputName || uniqueId}
                    type={inputType}
                    className={inputClasses}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-label={ariaLabel}
                    aria-describedby={describedBy}
                />
            </div>
            
            {caption && (
                <div 
                    id={captionId}
                    className="ifc-ds-input__caption"
                >
                    {caption}
                </div>
            )}
        </div>
    );
};

/**
 * Hook para gerenciar o estado do input
 */
export const useInputState = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const [focused, setFocused] = useState(false);
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    const handleFocus = () => {
        setFocused(true);
    };
    
    const handleBlur = () => {
        setFocused(false);
    };
    
    return {
        value,
        setValue,
        focused,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur
    };
};