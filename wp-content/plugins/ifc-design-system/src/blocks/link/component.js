// Componente Link reutilizável para uso em outros blocos
import { createElement } from '@wordpress/element';
import { TextComponent } from '../text/component';

/**
 * Renderiza um componente Link reutilizável
 */
export const LinkComponent = ({
    label,
    url = '#',
    icon,
    iconPosition = 'left',
    type = 'neutral',
    size = 'medium',
    padding = {},
    className = '',
    onClick,
    ariaLabel,
    children,
    ...props
}) => {
    const linkClasses = [
        'ifc-ds-link',
        `ifc-ds-link--${type}`,
        `ifc-ds-link--${size}`,
        className
    ].filter(Boolean).join(' ');

    const linkStyle = {
        paddingTop: `var(--wp--preset--spacing--${(padding?.top || '0').replace('spacing-', '')})`,
        paddingRight: `var(--wp--preset--spacing--${(padding?.right || '0').replace('spacing-', '')})`,
        paddingBottom: `var(--wp--preset--spacing--${(padding?.bottom || '0').replace('spacing-', '')})`,
        paddingLeft: `var(--wp--preset--spacing--${(padding?.left || '0').replace('spacing-', '')})`
    };

    const iconStyle = {
        width: size === 'small' || size === 'detail' ? '16px' : size === 'large' ? '24px' : '20px',
        height: size === 'small' || size === 'detail' ? '16px' : size === 'large' ? '24px' : '20px'
    };

    const renderIcon = () => {
        if (!icon) return null;
        
        return createElement('span', {
            className: `ifc-ds-link__icon ifc-ds-link__icon--${iconPosition}`,
            style: iconStyle
        }, icon.startsWith('http') ? 
            createElement('img', { src: icon, alt: '', style: iconStyle }) :
            createElement('span', { 
                className: `dashicon dashicons-${icon}`, 
                style: iconStyle 
            })
        );
    };

    const linkContent = [
        iconPosition === 'left' && renderIcon(),
        children || createElement(TextComponent, { 
            content: label,
            textType: size === 'small' || size === 'detail' ? 'detail' : 'body',
            weight: size === 'detail' ? 'regular' : 'semibold',
            color: 'primary',
            className: 'ifc-ds-link__label'
        }),
        iconPosition === 'right' && renderIcon()
    ].filter(Boolean);

    return createElement('span', {
        className: linkClasses,
        ...props
    }, createElement('a', {
        href: url,
        className: 'ifc-ds-link__element',
        style: linkStyle,
        onClick: onClick,
        'aria-label': ariaLabel
    }, ...linkContent));
};

/**
 * Biblioteca de ícones predefinidos
 */
export const iconLibrary = [
    // Navegação e Links
    { name: 'Seta Direita', value: 'arrow-right-alt2', category: 'navigation' },
    { name: 'Seta Esquerda', value: 'arrow-left-alt2', category: 'navigation' },
    { name: 'Link Externo', value: 'external', category: 'navigation' },
    { name: 'Casa', value: 'admin-home', category: 'navigation' },
    { name: 'Menu', value: 'menu', category: 'navigation' },
    
    // Comunicação
    { name: 'Email', value: 'email', category: 'communication' },
    { name: 'Telefone', value: 'phone', category: 'communication' },
    { name: 'Conversa', value: 'format-chat', category: 'communication' },
    { name: 'Comentários', value: 'admin-comments', category: 'communication' },
    
    // Documentos e Arquivos
    { name: 'Documento', value: 'media-document', category: 'files' },
    { name: 'PDF', value: 'pdf', category: 'files' },
    { name: 'Download', value: 'download', category: 'files' },
    { name: 'Upload', value: 'upload', category: 'files' },
    { name: 'Anexo', value: 'paperclip', category: 'files' },
    
    // Educação
    { name: 'Livro', value: 'book', category: 'education' },
    { name: 'Graduação', value: 'awards', category: 'education' },
    { name: 'Estudante', value: 'admin-users', category: 'education' },
    { name: 'Escola', value: 'building', category: 'education' },
    
    // Social e Compartilhamento
    { name: 'Compartilhar', value: 'share', category: 'social' },
    { name: 'Facebook', value: 'facebook', category: 'social' },
    { name: 'Twitter', value: 'twitter', category: 'social' },
    { name: 'LinkedIn', value: 'linkedin', category: 'social' },
    { name: 'Instagram', value: 'instagram', category: 'social' },
    { name: 'YouTube', value: 'youtube', category: 'social' },
    
    // Ações
    { name: 'Pesquisar', value: 'search', category: 'actions' },
    { name: 'Editar', value: 'edit', category: 'actions' },
    { name: 'Visualizar', value: 'visibility', category: 'actions' },
    { name: 'Adicionar', value: 'plus', category: 'actions' },
    { name: 'Remover', value: 'minus', category: 'actions' },
    { name: 'Favorito', value: 'star-filled', category: 'actions' },
    { name: 'Coração', value: 'heart', category: 'actions' },
    
    // Status
    { name: 'Sucesso', value: 'yes', category: 'status' },
    { name: 'Erro', value: 'no', category: 'status' },
    { name: 'Aviso', value: 'warning', category: 'status' },
    { name: 'Informação', value: 'info', category: 'status' },
    
    // Localização
    { name: 'Localização', value: 'location', category: 'location' },
    { name: 'Mapa', value: 'admin-site', category: 'location' },
    
    // Tempo
    { name: 'Calendário', value: 'calendar-alt', category: 'time' },
    { name: 'Relógio', value: 'clock', category: 'time' },
    
    // Mídia
    { name: 'Imagem', value: 'format-image', category: 'media' },
    { name: 'Vídeo', value: 'format-video', category: 'media' },
    { name: 'Áudio', value: 'format-audio', category: 'media' }
];

/**
 * Categorias de ícones para organização
 */
export const iconCategories = [
    { label: 'Todos', value: 'all' },
    { label: 'Navegação', value: 'navigation' },
    { label: 'Comunicação', value: 'communication' },
    { label: 'Arquivos', value: 'files' },
    { label: 'Educação', value: 'education' },
    { label: 'Social', value: 'social' },
    { label: 'Ações', value: 'actions' },
    { label: 'Status', value: 'status' },
    { label: 'Localização', value: 'location' },
    { label: 'Tempo', value: 'time' },
    { label: 'Mídia', value: 'media' }
];

/**
 * Opções de espaçamento reutilizáveis
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