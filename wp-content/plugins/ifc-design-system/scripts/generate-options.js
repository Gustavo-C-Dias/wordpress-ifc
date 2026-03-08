#!/usr/bin/env node
/**
 * IFC Design System - Gerador de Opções
 * 
 * Este script lê o theme.json do tema e gera automaticamente
 * o arquivo options.js com as opções para SelectControl.
 */

const fs = require('fs');
const path = require('path');

const THEME_JSON_PATH = path.resolve(__dirname, '../../../themes/ifc-ds/theme.json');
const OPTIONS_OUTPUT_PATH = path.resolve(__dirname, '../src/shared/options.generated.js');

function readThemeJson() {
    try {
        const content = fs.readFileSync(THEME_JSON_PATH, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.error('Erro ao ler theme.json:', error.message);
        process.exit(1);
    }
}

function generateSpacingOptions(spacingSizes) {
    if (!spacingSizes) return [];
    
    return spacingSizes.map(item => ({
        label: item.name,
        value: item.slug
    }));
}

function generateColorOptions(palette) {
    if (!palette) return [];
    
    return palette.map(item => ({
        label: item.name,
        value: item.slug
    }));
}

function generateFontSizeOptions(fontSizes) {
    if (!fontSizes) return [];
    
    return fontSizes.map(item => ({
        label: `${item.name} (${item.size})`,
        value: item.slug
    }));
}

function generateFontFamilyOptions(fontFamilies) {
    if (!fontFamilies) return [];
    
    return fontFamilies.map(item => ({
        label: item.name,
        value: item.slug
    }));
}

function generateShadowOptions(shadows) {
    if (!shadows) return [];
    
    return shadows.map(item => ({
        label: item.name,
        value: item.slug
    }));
}


function formatOptionsArray(options, indent = '    ') {
    if (!options.length) return '[]';
    
    const items = options.map(opt => 
        `${indent}{ label: '${opt.label}', value: '${opt.value}' }`
    );
    
    return `[\n${items.join(',\n')}\n]`;
}


function generateOptionsFile(themeJson) {
    const settings = themeJson.settings || {};
    
    const spacingSizes = settings.spacing?.spacingSizes || [];
    const colorPalette = settings.color?.palette || [];
    const fontSizes = settings.typography?.fontSizes || [];
    const fontFamilies = settings.typography?.fontFamilies || [];
    const shadows = settings.shadow?.presets || [];
    
    const spacingOptions = generateSpacingOptions(spacingSizes);
    const colorOptions = generateColorOptions(colorPalette);
    const fontSizeOptions = generateFontSizeOptions(fontSizes);
    const fontFamilyOptions = generateFontFamilyOptions(fontFamilies);
    const shadowOptions = generateShadowOptions(shadows);
    
    return `/**
 * IFC Design System
 * 
 * ATENÇÃO: Este arquivo é gerado em scripts/generate-options.js
 *          Para modificar, edite o theme.json e execute:
 */

export const spacingOptions = ${formatOptionsArray(spacingOptions)};

export const allColorOptions = ${formatOptionsArray(colorOptions)};

export const fontSizeOptions = ${formatOptionsArray(fontSizeOptions)};

export const fontFamilyOptions = ${formatOptionsArray(fontFamilyOptions)};

export const shadowOptions = ${formatOptionsArray(shadowOptions)};
`;
}

function main() {
    console.log('🎨 IFC Design System - Gerando opções do theme.json...\n');
    
    if (!fs.existsSync(THEME_JSON_PATH)) {
        console.error(`❌ Arquivo não encontrado: ${THEME_JSON_PATH}`);
        process.exit(1);
    }
    
    console.log(`📖 Lendo: ${THEME_JSON_PATH}`);
    const themeJson = readThemeJson();
    
    console.log('⚙️  Gerando opções...');
    const content = generateOptionsFile(themeJson);
    
    const outputDir = path.dirname(OPTIONS_OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(OPTIONS_OUTPUT_PATH, content, 'utf-8');
    console.log(`✅ Arquivo gerado: ${OPTIONS_OUTPUT_PATH}`);
    
    const settings = themeJson.settings || {};
    console.log('\n📊 Estatísticas:');
    console.log(`   - Espaçamentos: ${settings.spacing?.spacingSizes?.length || 0}`);
    console.log(`   - Cores: ${settings.color?.palette?.length || 0}`);
    console.log(`   - Tamanhos de fonte: ${settings.typography?.fontSizes?.length || 0}`);
    console.log(`   - Famílias de fonte: ${settings.typography?.fontFamilies?.length || 0}`);
    console.log(`   - Sombras: ${settings.shadow?.presets?.length || 0}`);
}

main();
