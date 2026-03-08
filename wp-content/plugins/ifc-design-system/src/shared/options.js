/**
 * IFC Design System - Opções Compartilhadas
 * Centraliza todas as opções dos controles do WordPress
 */

export {
    spacingOptions,
    allColorOptions,
    fontSizeOptions,
    fontFamilyOptions,
    shadowOptions
} from './options.generated.js';

export { spacingOptions as detailedSpacingOptions } from './options.generated.js';
export { allColorOptions as colorOptions } from './options.generated.js';

export const textColorOptions = [
    { label: 'Primária', value: 'primary' },
    { label: 'Secundária', value: 'secondary' },
    { label: 'Neutra', value: 'neutral' }
];

export const textTypeOptions = [
    { label: 'Title (32px)', value: 'title' },
    { label: 'Subtitle (24px)', value: 'subtitle' },
    { label: 'Body (16px)', value: 'body' },
    { label: 'Detail (14px)', value: 'detail' },
    { label: 'Caption (12px)', value: 'caption' }
];

export const weightOptions = [
    { label: 'Regular', value: 'regular' },
    { label: 'Semibold', value: 'semibold' },
    { label: 'Bold', value: 'bold' }
];

export const getWeightOptionsByType = (type) => {
    switch (type) {
        case 'title':
        case 'subtitle':
            return [{ label: 'Semibold', value: 'semibold' }];
        case 'body':
            return [
                { label: 'Regular', value: 'regular' },
                { label: 'Semibold', value: 'semibold' },
                { label: 'Bold', value: 'bold' }
            ];
        case 'detail':
            return [
                { label: 'Regular', value: 'regular' },
                { label: 'Semibold', value: 'semibold' }
            ];
        case 'caption':
            return [{ label: 'Regular', value: 'regular' }];
        default:
            return [{ label: 'Regular', value: 'regular' }];
    }
};

export const alignmentOptions = [
    { label: 'Esquerda', value: 'left' },
    { label: 'Centro', value: 'center' },
    { label: 'Direita', value: 'right' }
];

export const orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' }
];

export const thicknessOptions = [
    { label: '1px', value: '1' },
    { label: '2px', value: '2' },
    { label: '3px', value: '3' },
    { label: '4px', value: '4' },
    { label: '5px', value: '5' }
];

export const dividerColorOptions = [
    { label: 'Cinza', value: 'gray' },
    { label: 'Preto', value: 'black' },
    { label: 'Branco', value: 'white' }
];

export const sizeOptions = [
    { label: 'Pequeno', value: 'small' },
    { label: 'Médio', value: 'medium' },
    { label: 'Grande', value: 'large' }
];

export const inputVariantOptions = [
    { label: 'Padrão', value: 'default' },
    { label: 'Contornado', value: 'outlined' },
    { label: 'Preenchido', value: 'filled' }
];

export const inputTypeOptions = [
    { label: 'Texto', value: 'text' },
    { label: 'Email', value: 'email' },
    { label: 'Senha', value: 'password' },
    { label: 'Telefone', value: 'tel' },
    { label: 'URL', value: 'url' },
    { label: 'Busca', value: 'search' }
];

export const logoVariantOptions = [
    { label: 'Padrão', value: 'default' },
    { label: 'Branco', value: 'white' }
];

export const linkTargetOptions = [
    { label: 'Mesma janela', value: '_self' },
    { label: 'Nova janela', value: '_blank' }
];

export const linkTypeOptions = [
    { label: 'Neutro', value: 'neutral' },
    { label: 'Primário', value: 'primary' },
    { label: 'Branco', value: 'white' }
];

export const linkSizeOptions = [
    { label: 'Pequeno', value: 'small' },
    { label: 'Médio', value: 'medium' },
    { label: 'Grande', value: 'large' },
    { label: 'Detalhe', value: 'detail' }
];

export const iconPositionOptions = [
    { label: 'Esquerda', value: 'left' },
    { label: 'Direita', value: 'right' }
];
