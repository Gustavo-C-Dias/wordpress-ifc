/**
 * IFC Design System - Opções Compartilhadas
 * Centraliza todas as opções de SelectControl usadas nos blocos
 * 
 * TOKENS são importados de options.generated.js (gerado do theme.json)
 * Este arquivo contém apenas opções de UI específicas dos componentes
 */
import { __ } from '@wordpress/i18n';

// ============================================
// RE-EXPORTA TOKENS DO THEME.JSON
// ============================================
export {
    spacingOptions,
    allColorOptions,
    primaryColorOptions,
    secondaryColorOptions,
    neutralColorOptions,
    fontSizeOptions,
    fontFamilyOptions,
    shadowOptions
} from './options.generated.js';

// Aliases de conveniência para uso nos blocos
export { spacingOptions as detailedSpacingOptions } from './options.generated.js';
export { allColorOptions as colorOptions } from './options.generated.js';

// ============================================
// OPÇÕES DE UI (específicas dos componentes)
// ============================================

/**
 * Opções de cores semânticas para texto
 */
export const textColorOptions = [
    { label: __('Primária', 'ifc-design-system'), value: 'primary' },
    { label: __('Secundária', 'ifc-design-system'), value: 'secondary' },
    { label: __('Neutra', 'ifc-design-system'), value: 'neutral' },
    { label: __('Sucesso', 'ifc-design-system'), value: 'success' },
    { label: __('Aviso', 'ifc-design-system'), value: 'warning' },
    { label: __('Erro', 'ifc-design-system'), value: 'error' }
];

/**
 * Opções de tipos de texto
 */
export const textTypeOptions = [
    { label: __('Title (32px)', 'ifc-design-system'), value: 'title' },
    { label: __('Subtitle (24px)', 'ifc-design-system'), value: 'subtitle' },
    { label: __('Body (16px)', 'ifc-design-system'), value: 'body' },
    { label: __('Detail (14px)', 'ifc-design-system'), value: 'detail' },
    { label: __('Caption (12px)', 'ifc-design-system'), value: 'caption' }
];

/**
 * Opções de peso de fonte
 */
export const weightOptions = [
    { label: __('Regular', 'ifc-design-system'), value: 'regular' },
    { label: __('Semibold', 'ifc-design-system'), value: 'semibold' },
    { label: __('Bold', 'ifc-design-system'), value: 'bold' }
];

/**
 * Retorna opções de peso baseadas no tipo de texto
 */
export const getWeightOptionsByType = (type) => {
    switch (type) {
        case 'title':
        case 'subtitle':
            return [{ label: __('Semibold', 'ifc-design-system'), value: 'semibold' }];
        case 'body':
            return [
                { label: __('Regular', 'ifc-design-system'), value: 'regular' },
                { label: __('Semibold', 'ifc-design-system'), value: 'semibold' },
                { label: __('Bold', 'ifc-design-system'), value: 'bold' }
            ];
        case 'detail':
            return [
                { label: __('Regular', 'ifc-design-system'), value: 'regular' },
                { label: __('Semibold', 'ifc-design-system'), value: 'semibold' }
            ];
        case 'caption':
            return [{ label: __('Regular', 'ifc-design-system'), value: 'regular' }];
        default:
            return [{ label: __('Regular', 'ifc-design-system'), value: 'regular' }];
    }
};

/**
 * Opções de alinhamento
 */
export const alignmentOptions = [
    { label: __('Esquerda', 'ifc-design-system'), value: 'left' },
    { label: __('Centro', 'ifc-design-system'), value: 'center' },
    { label: __('Direita', 'ifc-design-system'), value: 'right' }
];

/**
 * Opções de direção
 */
export const directionOptions = [
    { label: __('Vertical', 'ifc-design-system'), value: 'vertical' },
    { label: __('Horizontal', 'ifc-design-system'), value: 'horizontal' }
];

/**
 * Opções de orientação
 */
export const orientationOptions = [
    { label: __('Horizontal', 'ifc-design-system'), value: 'horizontal' },
    { label: __('Vertical', 'ifc-design-system'), value: 'vertical' }
];

/**
 * Opções de largura de borda
 */
export const borderWidthOptions = [
    { label: __('Nenhuma', 'ifc-design-system'), value: '0' },
    { label: __('Fina', 'ifc-design-system'), value: '1' },
    { label: __('Média', 'ifc-design-system'), value: '2' },
    { label: __('Grossa', 'ifc-design-system'), value: '3' },
];

/**
 * Opções de espessura (para dividers)
 */
export const thicknessOptions = [
    { label: __('1px', 'ifc-design-system'), value: '1' },
    { label: __('2px', 'ifc-design-system'), value: '2' },
    { label: __('3px', 'ifc-design-system'), value: '3' },
    { label: __('4px', 'ifc-design-system'), value: '4' },
    { label: __('5px', 'ifc-design-system'), value: '5' }
];

/**
 * Opções de cor para divider
 */
export const dividerColorOptions = [
    { label: __('Cinza', 'ifc-design-system'), value: 'gray' },
    { label: __('Preto', 'ifc-design-system'), value: 'black' },
    { label: __('Branco', 'ifc-design-system'), value: 'white' }
];

/**
 * Opções de tamanho
 */
export const sizeOptions = [
    { label: __('Pequeno', 'ifc-design-system'), value: 'small' },
    { label: __('Médio', 'ifc-design-system'), value: 'medium' },
    { label: __('Grande', 'ifc-design-system'), value: 'large' }
];

/**
 * Opções de variante de input
 */
export const inputVariantOptions = [
    { label: __('Padrão', 'ifc-design-system'), value: 'default' },
    { label: __('Contornado', 'ifc-design-system'), value: 'outlined' },
    { label: __('Preenchido', 'ifc-design-system'), value: 'filled' }
];

/**
 * Opções de tipo de input
 */
export const inputTypeOptions = [
    { label: __('Texto', 'ifc-design-system'), value: 'text' },
    { label: __('Email', 'ifc-design-system'), value: 'email' },
    { label: __('Senha', 'ifc-design-system'), value: 'password' },
    { label: __('Telefone', 'ifc-design-system'), value: 'tel' },
    { label: __('URL', 'ifc-design-system'), value: 'url' },
    { label: __('Busca', 'ifc-design-system'), value: 'search' }
];

/**
 * Opções de variante de logo
 */
export const logoVariantOptions = [
    { label: __('Padrão', 'ifc-design-system'), value: 'default' },
    { label: __('Branco', 'ifc-design-system'), value: 'white' }
];

/**
 * Opções de target de link
 */
export const linkTargetOptions = [
    { label: __('Mesma janela', 'ifc-design-system'), value: '_self' },
    { label: __('Nova janela', 'ifc-design-system'), value: '_blank' }
];

/**
 * Opções de tipo de link
 */
export const linkTypeOptions = [
    { label: __('Neutro', 'ifc-design-system'), value: 'neutral' },
    { label: __('Primário', 'ifc-design-system'), value: 'primary' },
    { label: __('Branco', 'ifc-design-system'), value: 'white' }
];

/**
 * Opções de tamanho de link
 */
export const linkSizeOptions = [
    { label: __('Pequeno', 'ifc-design-system'), value: 'small' },
    { label: __('Médio', 'ifc-design-system'), value: 'medium' },
    { label: __('Grande', 'ifc-design-system'), value: 'large' },
    { label: __('Detalhe', 'ifc-design-system'), value: 'detail' }
];

/**
 * Opções de tipos de componentes para containers
 */
export const componentTypeOptions = [
    { label: __('Texto Simples', 'ifc-design-system'), value: 'text' },
    { label: __('Componente de Texto', 'ifc-design-system'), value: 'text-component' },
    { label: __('Link', 'ifc-design-system'), value: 'link' },
    { label: __('HTML Personalizado', 'ifc-design-system'), value: 'html' }
];

/**
 * Biblioteca de ícones predefinidos (Dashicons do WordPress)
 */
export const iconLibrary = [
    // Navegação e Links
    { name: __('Seta Direita', 'ifc-design-system'), value: 'arrow-right-alt2', category: 'navigation' },
    { name: __('Seta Esquerda', 'ifc-design-system'), value: 'arrow-left-alt2', category: 'navigation' },
    { name: __('Link Externo', 'ifc-design-system'), value: 'external', category: 'navigation' },
    { name: __('Casa', 'ifc-design-system'), value: 'admin-home', category: 'navigation' },
    { name: __('Menu', 'ifc-design-system'), value: 'menu', category: 'navigation' },
    
    // Comunicação
    { name: __('Email', 'ifc-design-system'), value: 'email', category: 'communication' },
    { name: __('Telefone', 'ifc-design-system'), value: 'phone', category: 'communication' },
    { name: __('Conversa', 'ifc-design-system'), value: 'format-chat', category: 'communication' },
    { name: __('Comentários', 'ifc-design-system'), value: 'admin-comments', category: 'communication' },
    
    // Documentos e Arquivos
    { name: __('Documento', 'ifc-design-system'), value: 'media-document', category: 'files' },
    { name: __('PDF', 'ifc-design-system'), value: 'pdf', category: 'files' },
    { name: __('Download', 'ifc-design-system'), value: 'download', category: 'files' },
    { name: __('Upload', 'ifc-design-system'), value: 'upload', category: 'files' },
    { name: __('Anexo', 'ifc-design-system'), value: 'paperclip', category: 'files' },
    
    // Educação
    { name: __('Livro', 'ifc-design-system'), value: 'book', category: 'education' },
    { name: __('Graduação', 'ifc-design-system'), value: 'awards', category: 'education' },
    { name: __('Estudante', 'ifc-design-system'), value: 'admin-users', category: 'education' },
    { name: __('Escola', 'ifc-design-system'), value: 'building', category: 'education' },
    
    // Social e Compartilhamento
    { name: __('Compartilhar', 'ifc-design-system'), value: 'share', category: 'social' },
    { name: __('Facebook', 'ifc-design-system'), value: 'facebook', category: 'social' },
    { name: __('Twitter', 'ifc-design-system'), value: 'twitter', category: 'social' },
    { name: __('LinkedIn', 'ifc-design-system'), value: 'linkedin', category: 'social' },
    { name: __('Instagram', 'ifc-design-system'), value: 'instagram', category: 'social' },
    { name: __('YouTube', 'ifc-design-system'), value: 'youtube', category: 'social' },
    
    // Ações
    { name: __('Pesquisar', 'ifc-design-system'), value: 'search', category: 'actions' },
    { name: __('Editar', 'ifc-design-system'), value: 'edit', category: 'actions' },
    { name: __('Visualizar', 'ifc-design-system'), value: 'visibility', category: 'actions' },
    { name: __('Adicionar', 'ifc-design-system'), value: 'plus', category: 'actions' },
    { name: __('Remover', 'ifc-design-system'), value: 'minus', category: 'actions' },
    { name: __('Favorito', 'ifc-design-system'), value: 'star-filled', category: 'actions' },
    { name: __('Coração', 'ifc-design-system'), value: 'heart', category: 'actions' },
    
    // Status
    { name: __('Sucesso', 'ifc-design-system'), value: 'yes', category: 'status' },
    { name: __('Erro', 'ifc-design-system'), value: 'no', category: 'status' },
    { name: __('Aviso', 'ifc-design-system'), value: 'warning', category: 'status' },
    { name: __('Informação', 'ifc-design-system'), value: 'info', category: 'status' },
    
    // Localização
    { name: __('Localização', 'ifc-design-system'), value: 'location', category: 'location' },
    { name: __('Mapa', 'ifc-design-system'), value: 'admin-site', category: 'location' },
    
    // Tempo
    { name: __('Calendário', 'ifc-design-system'), value: 'calendar-alt', category: 'time' },
    { name: __('Relógio', 'ifc-design-system'), value: 'clock', category: 'time' },
    
    // Mídia
    { name: __('Imagem', 'ifc-design-system'), value: 'format-image', category: 'media' },
    { name: __('Vídeo', 'ifc-design-system'), value: 'format-video', category: 'media' },
    { name: __('Áudio', 'ifc-design-system'), value: 'format-audio', category: 'media' }
];

/**
 * Categorias de ícones para organização
 */
export const iconCategories = [
    { label: __('Todos', 'ifc-design-system'), value: 'all' },
    { label: __('Navegação', 'ifc-design-system'), value: 'navigation' },
    { label: __('Comunicação', 'ifc-design-system'), value: 'communication' },
    { label: __('Arquivos', 'ifc-design-system'), value: 'files' },
    { label: __('Educação', 'ifc-design-system'), value: 'education' },
    { label: __('Social', 'ifc-design-system'), value: 'social' },
    { label: __('Ações', 'ifc-design-system'), value: 'actions' },
    { label: __('Status', 'ifc-design-system'), value: 'status' },
    { label: __('Localização', 'ifc-design-system'), value: 'location' },
    { label: __('Tempo', 'ifc-design-system'), value: 'time' },
    { label: __('Mídia', 'ifc-design-system'), value: 'media' }
];

/**
 * Opções de posição de ícone
 */
export const iconPositionOptions = [
    { label: __('Esquerda', 'ifc-design-system'), value: 'left' },
    { label: __('Direita', 'ifc-design-system'), value: 'right' }
];
