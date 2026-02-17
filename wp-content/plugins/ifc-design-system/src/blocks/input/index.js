import { 
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    __experimentalSpacer as Spacer
} from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

// Importa opções centralizadas
import { 
    sizeOptions, 
    inputVariantOptions as variantOptions, 
    detailedSpacingOptions as spacingOptions,
    inputTypeOptions
} from '../../shared/options';

import './style.scss';

/**
 * Componente Input para renderização no editor
 */
const InputComponent = ({
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
    ...props
}) => {
    const wrapperClasses = [
        'ifc-ds-input-wrapper',
        `ifc-ds-input-wrapper--${size}`,
        `ifc-ds-input-wrapper--${variant}`,
        icon ? 'ifc-ds-input-wrapper--with-icon' : '',
        disabled ? 'ifc-ds-input-wrapper--disabled' : '',
        className
    ].filter(Boolean).join(' ');

    const inputClasses = [
        'ifc-ds-input',
        `ifc-ds-input--${size}`,
        `ifc-ds-input--${variant}`,
        icon ? 'ifc-ds-input--with-icon' : ''
    ].filter(Boolean).join(' ');

    const wrapperStyle = {
        paddingTop: `var(--ifc-space-${(padding?.top || '0').replace('spacing-', '')})`,
        paddingRight: `var(--ifc-space-${(padding?.right || '0').replace('spacing-', '')})`,
        paddingBottom: `var(--ifc-space-${(padding?.bottom || '0').replace('spacing-', '')})`,
        paddingLeft: `var(--ifc-space-${(padding?.left || '0').replace('spacing-', '')})`
    };

    const uniqueId = inputId || `ifc-input-${Math.random().toString(36).substr(2, 9)}`;
    const captionId = caption ? `${uniqueId}-caption` : undefined;

    return (
        <div className={wrapperClasses} style={wrapperStyle} {...props}>
            {label && (
                <label htmlFor={uniqueId} className="ifc-ds-input__label">
                    {label}
                    {required && <span className="ifc-ds-input__required" aria-label="Campo obrigatório">*</span>}
                </label>
            )}
            
            <div className="ifc-ds-input__field-wrapper">
                {icon && (
                    <span className="ifc-ds-input__icon" aria-hidden="true">
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
                    aria-describedby={captionId}
                />
            </div>
            
            {caption && (
                <div id={captionId} className="ifc-ds-input__caption">
                    {caption}
                </div>
            )}
        </div>
    );
};

registerBlockType('ifc-ds/input', {
    edit: ({ attributes, setAttributes }) => {
        const {
            label,
            placeholder,
            caption,
            icon,
            inputType,
            inputName,
            inputId,
            required,
            disabled,
            size,
            variant,
            padding
        } = attributes;

        const blockProps = useBlockProps();

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Configurações do Input" initialOpen={true}>
                        <TextControl
                            label="Label (opcional)"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            help="Texto que aparece acima do campo"
                        />
                        
                        <TextControl
                            label="Placeholder (opcional)"
                            value={placeholder}
                            onChange={(value) => setAttributes({ placeholder: value })}
                            help="Texto de exemplo dentro do campo"
                        />
                        
                        <TextControl
                            label="Caption (opcional)"
                            value={caption}
                            onChange={(value) => setAttributes({ caption: value })}
                            help="Texto explicativo abaixo do campo"
                        />
                        
                        <Spacer marginY={3} />
                        
                        <SelectControl
                            label="Tipo do Input"
                            value={inputType}
                            options={inputTypeOptions}
                            onChange={(value) => setAttributes({ inputType: value })}
                        />
                        
                        <TextControl
                            label="Nome do Campo"
                            value={inputName}
                            onChange={(value) => setAttributes({ inputName: value })}
                            help="Nome usado no formulário (name attribute)"
                        />
                        
                        <TextControl
                            label="ID do Campo"
                            value={inputId}
                            onChange={(value) => setAttributes({ inputId: value })}
                            help="ID único do elemento (opcional)"
                        />
                        
                        <Spacer marginY={3} />
                        
                        <ToggleControl
                            label="Campo obrigatório"
                            checked={required}
                            onChange={(value) => setAttributes({ required: value })}
                        />
                        
                        <ToggleControl
                            label="Campo desabilitado"
                            checked={disabled}
                            onChange={(value) => setAttributes({ disabled: value })}
                        />
                    </PanelBody>

                    <PanelBody title="Aparência" initialOpen={false}>
                        <SelectControl
                            label="Tamanho"
                            value={size}
                            options={sizeOptions}
                            onChange={(value) => setAttributes({ size: value })}
                        />
                        
                        <SelectControl
                            label="Variante"
                            value={variant}
                            options={variantOptions}
                            onChange={(value) => setAttributes({ variant: value })}
                        />
                        
                        <TextControl
                            label="Ícone (opcional)"
                            value={icon}
                            onChange={(value) => setAttributes({ icon: value })}
                            help="Classe do ícone (ex: fas fa-user, dashicons-admin-users)"
                        />
                    </PanelBody>

                    <PanelBody title="Espaçamento" initialOpen={false}>
                        <SelectControl
                            label="Padding Superior"
                            value={padding?.top || '0'}
                            options={spacingOptions}
                            onChange={(value) => setAttributes({ 
                                padding: { ...padding, top: value }
                            })}
                        />
                        
                        <SelectControl
                            label="Padding Direito"
                            value={padding?.right || '0'}
                            options={spacingOptions}
                            onChange={(value) => setAttributes({ 
                                padding: { ...padding, right: value }
                            })}
                        />
                        
                        <SelectControl
                            label="Padding Inferior"
                            value={padding?.bottom || '0'}
                            options={spacingOptions}
                            onChange={(value) => setAttributes({ 
                                padding: { ...padding, bottom: value }
                            })}
                        />
                        
                        <SelectControl
                            label="Padding Esquerdo"
                            value={padding?.left || '0'}
                            options={spacingOptions}
                            onChange={(value) => setAttributes({ 
                                padding: { ...padding, left: value }
                            })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div {...blockProps}>
                    <InputComponent
                        label={label}
                        placeholder={placeholder}
                        caption={caption}
                        icon={icon}
                        inputType={inputType}
                        inputName={inputName}
                        inputId={inputId}
                        required={required}
                        disabled={disabled}
                        size={size}
                        variant={variant}
                        padding={padding}
                        // Para visualização no editor
                        value=""
                        onChange={() => {}} // No editor, não precisamos de funcionalidade real
                    />
                </div>
            </>
        );
    }
});