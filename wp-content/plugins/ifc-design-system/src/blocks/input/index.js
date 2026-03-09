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

import { 
    inputVariantOptions as variantOptions, 
    detailedSpacingOptions as spacingOptions,
    inputTypeOptions
} from '../../shared/options';
import { TextComponent } from '../text/component';

import './style.scss';

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
    variant = 'default',
    padding = {},
    className = '',
    value = '',
    onChange = () => {},
    ...props
}) => {
    const baseClasses = {
        wrapper: ['ifc-ds-input-wrapper', `ifc-ds-input-wrapper--${variant}`],
        input: ['ifc-ds-input', `ifc-ds-input--${variant}`]
    };

    if (icon) {
        baseClasses.wrapper.push('ifc-ds-input-wrapper--with-icon');
        baseClasses.input.push('ifc-ds-input--with-icon');
    }

    if (disabled) {
        baseClasses.wrapper.push('ifc-ds-input-wrapper--disabled');
    }

    if (className) {
        baseClasses.wrapper.push(className);
    }

    const buildPaddingStyle = () => {
        if (!padding || Object.keys(padding).length === 0) return {};
        
        const style = {};
        const sides = ['top', 'right', 'bottom', 'left'];
        
        sides.forEach(side => {
            const value = padding[side] || '0';
            if (value !== '0') {
                const spacingValue = value.replace('spacing-', '');
                style[`padding${side.charAt(0).toUpperCase() + side.slice(1)}`] = 
                    `var(--ifc-spacing-${spacingValue})`;
            }
        });
        
        return style;
    };

    const uniqueId = inputId || `ifc-input-${Math.random().toString(36).substr(2, 9)}`;
    const captionId = caption ? `${uniqueId}-caption` : undefined;

    return (
        <div className={baseClasses.wrapper.join(' ')} style={buildPaddingStyle()} {...props}>
            {label && (
                <label htmlFor={uniqueId} className="ifc-ds-input__label">
                    <TextComponent
                        content={label}
                        textType="detail"
                        weight="semibold"
                        color="neutral"
                        className="ifc-ds-input__label-text"
                    />
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
                    className={baseClasses.input.join(' ')}
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
                    <TextComponent
                        content={caption}
                        textType="caption"
                        weight="regular"
                        color="neutral"
                    />
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
                        {['top', 'right', 'bottom', 'left'].map(side => (
                            <SelectControl
                                key={side}
                                label={`Padding ${side.charAt(0).toUpperCase() + side.slice(1)}`}
                                value={padding?.[side] || '0'}
                                options={spacingOptions}
                                onChange={(value) => setAttributes({ 
                                    padding: { ...padding, [side]: value }
                                })}
                            />
                        ))}
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
                        variant={variant}
                        padding={padding}
                    />
                </div>
            </>
        );
    }
});