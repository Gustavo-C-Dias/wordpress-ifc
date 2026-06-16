/**
 * IFC Design System — Entry-point JS do plugin.
 *
 * Os blocos seguem a taxonomia Atomic Design:
 *
 *   atoms       primitivos sem dependência de outros blocos
 *   molecules   composições simples que combinam atoms
 *   organisms   composições complexas / blocos de layout
 *
 * Cada bloco tem o mesmo contrato (block.json + index.js + render.php +
 * style.scss). Ver docs/diagramas-pacotes.md §2.1.
 */

// Atoms
import './blocks/atoms/text';
import './blocks/atoms/link';
import './blocks/atoms/divider';
import './blocks/atoms/input';
import './blocks/atoms/logo';

// Molecules
import './blocks/molecules/accordion';
import './blocks/molecules/breadcrumb';
import './blocks/molecules/skip-navigation';

// Organisms
import './blocks/organisms/container';
import './blocks/organisms/layout-container';
import './blocks/organisms/header';
import './blocks/organisms/footer';
