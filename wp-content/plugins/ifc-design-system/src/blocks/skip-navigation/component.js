import { __ } from '@wordpress/i18n';
import { LinkComponent } from '../link/component';

export const SkipNavigationComponent = ({ 
    links = [
        {
            id: 1,
            label: 'Ir para o conteúdo',
            target: '#main',
            description: 'Pula para o conteúdo principal da página'
        },
        {
            id: 2,
            label: 'Ir para o menu',
            target: 'nav',
            description: 'Pula para a navegação principal'
        },
        {
            id: 3,
            label: 'Ir para o rodapé',
            target: 'footer',
            description: 'Pula para o rodapé da página'
        }
    ],
    className = '',
    onClick = null
}) => {
    const renderSkipLink = (link) => {
        return (
            <LinkComponent
                key={link.id}
                label={link.label}
                url={`#${link.target}`}
                type="white"
                size="medium"
                className="ifc-ds-skip-navigation__link"
                onClick={onClick || ((e) => e.preventDefault())}
            />
        );
    };

    return (
        <div className={`ifc-ds-skip-navigation ${className}`.trim()}>
            <div className="ifc-ds-skip-navigation__container">
                <div className="ifc-ds-skip-navigation__links">
                    {links.map(renderSkipLink)}
                </div>
            </div>
        </div>
    );
};

export default SkipNavigationComponent;