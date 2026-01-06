<?php
/**
 * Template Name: Diagnóstico IFC DS
 * 
 * Coloque este arquivo na pasta do tema para acessar via URL direta
 */

// Carregar WordPress
require_once('../../../wp-load.php');

?>
<!DOCTYPE html>
<html>
<head>
    <title>Diagnóstico IFC Design System</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1, h2, h3 { color: #007cba; }
        .success { color: #46b450; }
        .error { color: #dc3232; }
        .test-box { background: #f9f9f9; padding: 15px; border: 1px solid #ddd; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>🔧 Diagnóstico IFC Design System</h1>
    
    <h2>1. Status WordPress</h2>
    <ul>
        <li><strong>WordPress carregado:</strong> <span class="<?php echo defined('ABSPATH') ? 'success' : 'error'; ?>"><?php echo defined('ABSPATH') ? '✅ Sim' : '❌ Não'; ?></span></li>
        <li><strong>Plugin path definido:</strong> <span class="<?php echo defined('IFC_DS_PLUGIN_PATH') ? 'success' : 'error'; ?>"><?php echo defined('IFC_DS_PLUGIN_PATH') ? '✅ Sim' : '❌ Não'; ?></span></li>
        <li><strong>WordPress version:</strong> <?php echo get_bloginfo('version'); ?></li>
    </ul>

    <h2>2. Status das Funções Auxiliares</h2>
    <?php
    $functions = [
        'ifc_ds_render_link',
        'ifc_ds_render_link_icon', 
        'ifc_ds_render_accordion_item',
        'ifc_ds_render_header_skip_link',
        'ifc_ds_render_breadcrumb_link',
        'ifc_ds_render_skip_navigation_link'
    ];
    ?>
    <ul>
    <?php foreach ($functions as $function): ?>
        <?php $exists = function_exists($function); ?>
        <li><strong><?php echo $function; ?>:</strong> <span class="<?php echo $exists ? 'success' : 'error'; ?>"><?php echo $exists ? '✅ Existe' : '❌ Não existe'; ?></span></li>
    <?php endforeach; ?>
    </ul>

    <h2>3. Blocos Registrados</h2>
    <?php if (function_exists('get_dynamic_block_names')): ?>
        <?php 
        $blocks = get_dynamic_block_names();
        $ifc_blocks = array_filter($blocks, function($block) {
            return strpos($block, 'ifc-ds/') === 0;
        });
        ?>
        <?php if (!empty($ifc_blocks)): ?>
            <ul>
            <?php foreach ($ifc_blocks as $block): ?>
                <li class="success">✅ <?php echo $block; ?></li>
            <?php endforeach; ?>
            </ul>
        <?php else: ?>
            <p class="error">❌ Nenhum bloco IFC-DS registrado</p>
        <?php endif; ?>
    <?php else: ?>
        <p class="error">❌ Função get_dynamic_block_names não existe</p>
    <?php endif; ?>

    <h2>4. Teste da Função ifc_ds_render_link</h2>
    <?php if (function_exists('ifc_ds_render_link')): ?>
        <div class="test-box">
            <h3>Resultado do Teste:</h3>
            <?php
            try {
                $test_link = ifc_ds_render_link([
                    'label' => 'Link de Teste',
                    'url' => '#test',
                    'type' => 'primary', 
                    'size' => 'medium'
                ]);
                echo $test_link;
                echo '<p class="success">✅ Função executou com sucesso!</p>';
            } catch (Exception $e) {
                echo '<p class="error">❌ Erro: ' . $e->getMessage() . '</p>';
            }
            ?>
        </div>
    <?php else: ?>
        <p class="error">❌ Função ifc_ds_render_link não encontrada</p>
    <?php endif; ?>

    <h2>5. Teste de Block Render Simples</h2>
    <div class="test-box">
        <h3>Simulação Header Block:</h3>
        <?php
        // Simular attributes do bloco
        $attributes = [
            'title' => 'Teste de Header',
            'subtitle' => 'Subtítulo de teste'
        ];
        ?>
        <div style="background: #f0f8ff; padding: 15px; border: 2px solid #007cba;">
            <h1 style="color: #007cba; margin: 0;"><?php echo esc_html($attributes['title']); ?></h1>
            <p style="margin: 5px 0 0 0;"><?php echo esc_html($attributes['subtitle']); ?></p>
            <small>🔧 Este é um teste direto de renderização PHP</small>
        </div>
    </div>

    <h2>6. Informações do Sistema</h2>
    <ul>
        <li><strong>PHP Version:</strong> <?php echo PHP_VERSION; ?></li>
        <li><strong>WordPress Theme:</strong> <?php echo wp_get_theme()->get('Name'); ?></li>
        <li><strong>Active Plugins:</strong> <?php echo count(get_option('active_plugins')); ?></li>
    </ul>

    <h2>7. Teste de CSS</h2>
    <div class="test-box">
        <p>Se você pode ver este box com borda e fundo cinza, o CSS está funcionando.</p>
        <div style="background: red; color: white; padding: 10px;">
            Se este texto está com fundo vermelho, o CSS inline funciona.
        </div>
    </div>

</body>
</html>