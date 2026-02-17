#!/usr/bin/env node
/**
 * IFC Design System - Gerador de Opções
 * 
 * Este script lê o theme.json do tema e gera automaticamente
 * o arquivo options.js com as opções para SelectControl.
 * 
 * Uso: npm run generate:options
 */

const fs = require('fs');
const path = require('path');

// Caminhos dos arquivos
const THEME_JSON_PATH = path.resolve(__dirname, '../../../themes/ifc-ds/theme.json');
const OPTIONS_OUTPUT_PATH = path.resolve(__dirname, '../src/shared/options.generated.js');

/**
 * Lê e parseia o theme.json
 */
function readThemeJson() {
    try {
        const content = fs.readFileSync(THEME_JSON_PATH, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.error('Erro ao ler theme.json:', error.message);
        process.exit(1);
    }
}

/**
 * Gera opções de espaçamento a partir do theme.json
 */
function generateSpacingOptions(spacingSizes) {
    if (!spacingSizes) return [];
    
    return spacingSizes.map(item => ({
        label: item.name,
        value: item.slug
    }));
}

/**
 * Gera opções de cores a partir do theme.json
 */
function generateColorOptions(palette) {
    if (!palette) return [];
    
    return palette.map(item => ({
        label: item.name,
        value: item.slug
    }));
}

/**
 * Gera opções de tamanhos de fonte a partir do theme.json
 */
function generateFontSizeOptions(fontSizes) {
    if (!fontSizes) return [];
    
    return fontSizes.map(item => ({
        label: `${item.name} (${item.size})`,
        value: item.slug
    }));
}

/**
 * Gera opções de famílias de fonte a partir do theme.json
 */
function generateFontFamilyOptions(fontFamilies) {
    if (!fontFamilies) return [];
    
    return fontFamilies.map(item => ({
        label: item.name,
        value: item.slug
    }));
}

/**
 * Gera opções de sombras a partir do theme.json
 */
function generateShadowOptions(shadows) {
    if (!shadows) return [];
    
    return shadows.map(item => ({
        label: item.name,
        value: item.slug
    }));
}

/**
 * Formata array de opções para código JS
 */
function formatOptionsArray(options, indent = '    ') {
    if (!options.length) return '[]';
    
    const items = options.map(opt => 
        `${indent}{ label: __('${opt.label}', 'ifc-design-system'), value: '${opt.value}' }`
    );
    
    return `[\n${items.join(',\n')}\n]`;
}

/**
 * Gera o conteúdo do arquivo options.js
 */
function generateOptionsFile(themeJson) {
    const settings = themeJson.settings || {};
    
    // Extrair dados do theme.json
    const spacingSizes = settings.spacing?.spacingSizes || [];
    const colorPalette = settings.color?.palette || [];
    const fontSizes = settings.typography?.fontSizes || [];
    const fontFamilies = settings.typography?.fontFamilies || [];
    const shadows = settings.shadow?.presets || [];
    
    // Gerar opções
    const spacingOptions = generateSpacingOptions(spacingSizes);
    const colorOptions = generateColorOptions(colorPalette);
    const fontSizeOptions = generateFontSizeOptions(fontSizes);
    const fontFamilyOptions = generateFontFamilyOptions(fontFamilies);
    const shadowOptions = generateShadowOptions(shadows);
    
    // Filtrar cores por categoria
    const primaryColors = colorPalette.filter(c => c.slug.startsWith('primary-'));
    const secondaryColors = colorPalette.filter(c => c.slug.startsWith('secondary-'));
    const neutralColors = colorPalette.filter(c => c.slug.startsWith('neutral-'));
    
    return `/**
 * IFC Design System - Opções Geradas Automaticamente
 * 
 * ATENÇÃO: Este arquivo é gerado automaticamente pelo script generate-options.js
 * NÃO EDITE MANUALMENTE - suas alterações serão sobrescritas!
 * 
 * Para modificar as opções, edite o theme.json e execute:
 * npm run generate:options
 * 
 * Gerado em: ${new Date().toISOString()}
 */
import { __ } from '@wordpress/i18n';

// ============================================
// OPÇÕES GERADAS DO THEME.JSON
// ============================================

/**
 * Opções de espaçamento (do theme.json spacing.spacingSizes)
 */
export const spacingOptions = ${formatOptionsArray(spacingOptions)};

/**
 * Todas as cores da paleta (do theme.json color.palette)
 */
export const allColorOptions = ${formatOptionsArray(colorOptions)};

/**
 * Cores primárias
 */
export const primaryColorOptions = ${formatOptionsArray(generateColorOptions(primaryColors))};

/**
 * Cores secundárias
 */
export const secondaryColorOptions = ${formatOptionsArray(generateColorOptions(secondaryColors))};

/**
 * Cores neutras
 */
export const neutralColorOptions = ${formatOptionsArray(generateColorOptions(neutralColors))};

/**
 * Tamanhos de fonte (do theme.json typography.fontSizes)
 */
export const fontSizeOptions = ${formatOptionsArray(fontSizeOptions)};

/**
 * Famílias de fonte (do theme.json typography.fontFamilies)
 */
export const fontFamilyOptions = ${formatOptionsArray(fontFamilyOptions)};

/**
 * Sombras (do theme.json shadow.presets)
 */
export const shadowOptions = ${formatOptionsArray(shadowOptions)};
`;
}

/**
 * Função principal
 */
function main() {
    console.log('🎨 IFC Design System - Gerando opções do theme.json...\n');
    
    // Verificar se theme.json existe
    if (!fs.existsSync(THEME_JSON_PATH)) {
        console.error(`❌ Arquivo não encontrado: ${THEME_JSON_PATH}`);
        process.exit(1);
    }
    
    // Ler theme.json
    console.log(`📖 Lendo: ${THEME_JSON_PATH}`);
    const themeJson = readThemeJson();
    
    // Gerar conteúdo
    console.log('⚙️  Gerando opções...');
    const content = generateOptionsFile(themeJson);
    
    // Criar diretório se não existir
    const outputDir = path.dirname(OPTIONS_OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Salvar arquivo
    fs.writeFileSync(OPTIONS_OUTPUT_PATH, content, 'utf-8');
    console.log(`✅ Arquivo gerado: ${OPTIONS_OUTPUT_PATH}`);
    
    // Estatísticas
    const settings = themeJson.settings || {};
    console.log('\n📊 Estatísticas:');
    console.log(`   - Espaçamentos: ${settings.spacing?.spacingSizes?.length || 0}`);
    console.log(`   - Cores: ${settings.color?.palette?.length || 0}`);
    console.log(`   - Tamanhos de fonte: ${settings.typography?.fontSizes?.length || 0}`);
    console.log(`   - Famílias de fonte: ${settings.typography?.fontFamilies?.length || 0}`);
    console.log(`   - Sombras: ${settings.shadow?.presets?.length || 0}`);
    
    console.log('\n✨ Concluído! Lembre-se de importar de options.generated.js');
}

// Executar
main();
