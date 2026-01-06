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
import { InputComponent } from './component';

import './style.scss';

// Opções locais do componente
const sizeOptions = [
    { label: 'Pequeno', value: 'small' },
    { label: 'Médio', value: 'medium' },
    { label: 'Grande', value: 'large' }
];

const variantOptions = [
    { label: 'Padrão', value: 'default' },
    { label: 'Contornado', value: 'outlined' },
    { label: 'Preenchido', value: 'filled' }
];

const spacingOptions = [
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

        // Opções de tipo de input
        const inputTypeOptions = [
            { label: 'Texto', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Senha', value: 'password' },
            { label: 'Telefone', value: 'tel' },
            { label: 'URL', value: 'url' },
            { label: 'Busca', value: 'search' }
        ];

        // As opções agora vêm do componente base

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