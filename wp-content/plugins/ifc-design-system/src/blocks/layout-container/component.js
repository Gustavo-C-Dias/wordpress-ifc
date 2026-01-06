import { __ } from '@wordpress/i18n';

/**
 * Layout Container Component - Reutilizável
 * Implementa o sistema de grid do Design System do Governo Federal
 */
export const LayoutContainerComponent = ({ 
    children,
    containerType = 'fluid',
    allowBleed = false,
    maxColumns = 12,
    verticalSpacing = 'medium',
    horizontalAlignment = 'center',
    customMaxWidth = '',
    className = '',
    ...props 
}) => {
    // Constrói as classes CSS
    const classes = [
        'ifc-ds-layout-container',
        `ifc-ds-layout-container--${containerType}`,
        `ifc-ds-layout-container--spacing-${verticalSpacing}`,
        `ifc-ds-layout-container--align-${horizontalAlignment}`,
        `ifc-ds-layout-container--columns-${maxColumns}`,
        allowBleed ? 'ifc-ds-layout-container--bleed' : '',
        className
    ].filter(Boolean).join(' ');

    // Estilos inline para largura personalizada
    const inlineStyles = containerType === 'fixed' && customMaxWidth ? 
        { maxWidth: customMaxWidth } : {};

    return (
        <div 
            className={classes}
            style={inlineStyles}
            data-columns={maxColumns}
            data-container-type={containerType}
            {...props}
        >
            <div className="ifc-ds-layout-container__content">
                {children}
            </div>
        </div>
    );
};

/**
 * Grid Item Component - Para elementos filhos
 */
export const GridItemComponent = ({ 
    children,
    colSpan = 1,
    colStart = null,
    className = '',
    bleed = null,
    ...props 
}) => {
    const classes = [
        colSpan ? `col-span-${colSpan}` : '',
        colStart ? `col-start-${colStart}` : '',
        bleed ? `ifc-ds-bleed-${bleed}` : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

/**
 * Hooks para contexto do grid
 */
export const useGridContext = () => {
    // Retorna informações do grid atual (para componentes filhos)
    const getGridInfo = () => {
        const container = document.querySelector('.ifc-ds-layout-container');
        if (!container) return null;
        
        return {
            columns: parseInt(container.dataset.columns) || 12,
            containerType: container.dataset.containerType || 'fluid',
            // Adiciona mais informações conforme necessário
        };
    };
    
    return { getGridInfo };
};

/**
 * Utilitários CSS classes baseadas no Gov.br
 */
export const GRID_CLASSES = {
    // Spans de coluna
    COL_SPAN: {
        1: 'col-span-1',
        2: 'col-span-2', 
        3: 'col-span-3',
        4: 'col-span-4',
        5: 'col-span-5',
        6: 'col-span-6',
        7: 'col-span-7',
        8: 'col-span-8',
        9: 'col-span-9',
        10: 'col-span-10',
        11: 'col-span-11',
        12: 'col-span-12',
        FULL: 'col-span-full'
    },
    
    // Sangrias (Bleed)
    BLEED: {
        FULL: 'ifc-ds-bleed-full',
        LEFT: 'ifc-ds-bleed-left',
        RIGHT: 'ifc-ds-bleed-right'
    },
    
    // Tipos de container
    CONTAINER: {
        FLUID: 'ifc-ds-layout-container--fluid',
        FIXED: 'ifc-ds-layout-container--fixed'
    },
    
    // Espaçamentos
    SPACING: {
        NONE: 'ifc-ds-layout-container--spacing-none',
        SMALL: 'ifc-ds-layout-container--spacing-small',
        MEDIUM: 'ifc-ds-layout-container--spacing-medium',
        LARGE: 'ifc-ds-layout-container--spacing-large',
        EXTRA_LARGE: 'ifc-ds-layout-container--spacing-extra-large'
    },
    
    // Alinhamentos
    ALIGN: {
        LEFT: 'ifc-ds-layout-container--align-left',
        CENTER: 'ifc-ds-layout-container--align-center',
        RIGHT: 'ifc-ds-layout-container--align-right'
    }
};

/**
 * Breakpoints do Design System Gov.br
 */
export const GOVBR_BREAKPOINTS = {
    MOBILE_PORTRAIT: 0,
    MOBILE_LANDSCAPE: 576,
    TABLET_LANDSCAPE: 992,
    DESKTOP: 1280,
    TV: 1600
};

/**
 * Configurações de grid por breakpoint
 */
export const GOVBR_GRID_CONFIGS = {
    MOBILE_PORTRAIT: {
        columns: 4,
        gutter: 16,
        margin: 8
    },
    MOBILE_LANDSCAPE: {
        columns: 8,
        gutter: 24,
        margin: 40
    },
    TABLET_LANDSCAPE: {
        columns: 8,
        gutter: 24,
        margin: 40
    },
    DESKTOP: {
        columns: 12,
        gutter: 24,
        margin: 40
    },
    TV: {
        columns: 12,
        gutter: 40,
        margin: 40
    }
};