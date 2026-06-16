/**
 * IFC Design System — API pública de componentes React.
 *
 * Esse barrel reexporta os componentes JSX usados internamente pelos blocos
 * Gutenberg, permitindo que outros plugins, temas ou aplicações React
 * reaproveitem os átomos do DS sem importar caminhos profundos como
 * `ifc-design-system/src/blocks/atoms/text/component`.
 *
 * Uso:
 *   import { Text, Link, Logo, Divider, SkipNavigation } from 'ifc-design-system/src/components';
 *
 * As classes utilitárias (buildTextClasses, buildLinkClasses, getHtmlTagForTextType)
 * e enums (textTypeOptions, weightOptions, etc.) também são reexportados para
 * permitir composição customizada sem duplicar a fonte de verdade.
 *
 * A taxonomia Atomic Design é refletida na origem do reexport: atoms vivem em
 * `src/blocks/atoms/*` e molecules em `src/blocks/molecules/*`.
 */

// Atoms
export { TextComponent as Text } from '../blocks/atoms/text/component';
export { LinkComponent as Link } from '../blocks/atoms/link/component';
export { DividerComponent as Divider } from '../blocks/atoms/divider/component';
export { LogoComponent as Logo, getLogoUrl } from '../blocks/atoms/logo/component';

// Molecules
export { SkipNavigationComponent as SkipNavigation } from '../blocks/molecules/skip-navigation/component';

export {
    buildTextClasses,
    buildLinkClasses,
    getHtmlTagForTextType,
    getLinkIconSize,
} from '../shared/class-builder';

export * as options from '../shared/options';
