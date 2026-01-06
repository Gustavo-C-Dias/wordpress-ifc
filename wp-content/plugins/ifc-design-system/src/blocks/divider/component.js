// Componente Divider reutilizável para uso em outros blocos
import { createElement } from '@wordpress/element';

/**
 * Renderiza um componente Divider reutilizável
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.orientation - Orientação: 'horizontal' ou 'vertical'
 * @param {string} props.color - Cor: 'gray', 'black' ou 'white'
 * @param {string} props.thickness - Espessura da linha (1-5)
 * @param {string} props.length - Comprimento em porcentagem (10-100)
 * @param {number} props.customHeight - Altura customizada para divisores verticais
 * @param {boolean} props.isEditor - Se está sendo usado no editor
 * @param {string} props.className - Classes CSS adicionais
 * @param {Object} props.style - Estilos inline adicionais
 * @returns {JSX.Element} Elemento JSX do divisor
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
    // Gerar classes CSS
    const dividerClasses = [
        'ifc-ds-divider',
        `ifc-ds-divider--${orientation}`,
        `ifc-ds-divider--${color}`,
        `ifc-ds-divider--thickness-${thickness}`,
        isEditor ? 'ifc-ds-divider--editor' : '',
        className
    ].filter(Boolean).join(' ');

    // Estilos dinâmicos baseados nos atributos
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

    // Adicionar indicador visual no editor
    const editorIndicator = isEditor && createElement('span', {
        className: 'ifc-ds-divider__editor-label'
    }, `Divider - ${orientation === 'horizontal' ? 'Horizontal' : 'Vertical'} - ${color}`);

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
        editorIndicator
    ]);
};

/**
 * Função auxiliar para criar um divisor horizontal simples
 */
export const HorizontalDivider = (props) => {
    return createElement(DividerComponent, {
        orientation: 'horizontal',
        ...props
    });
};

/**
 * Função auxiliar para criar um divisor vertical simples
 */
export const VerticalDivider = (props) => {
    return createElement(DividerComponent, {
        orientation: 'vertical',
        ...props
    });
};

/**
 * Presets de divisores comuns
 */
export const DividerPresets = {
    // Divisores horizontais
    horizontalGray: { orientation: 'horizontal', color: 'gray', thickness: '1' },
    horizontalBlack: { orientation: 'horizontal', color: 'black', thickness: '1' },
    horizontalWhite: { orientation: 'horizontal', color: 'white', thickness: '1' },
    
    // Divisores verticais
    verticalGray: { orientation: 'vertical', color: 'gray', thickness: '1', customHeight: 40 },
    verticalBlack: { orientation: 'vertical', color: 'black', thickness: '1', customHeight: 40 },
    verticalWhite: { orientation: 'vertical', color: 'white', thickness: '1', customHeight: 40 },
    
    // Divisores espessos
    thickHorizontal: { orientation: 'horizontal', color: 'gray', thickness: '3' },
    thickVertical: { orientation: 'vertical', color: 'gray', thickness: '3', customHeight: 60 }
};

/**
 * Opções de cor para uso em outros componentes
 */
export const dividerColorOptions = [
    { label: 'Cinza', value: 'gray' },
    { label: 'Preto', value: 'black' },
    { label: 'Branco', value: 'white' }
];

/**
 * Opções de orientação para uso em outros componentes
 */
export const dividerOrientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' }
];