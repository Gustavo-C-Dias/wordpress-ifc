<?php
/**
 * Plugin Name: IFC Design System
 * Plugin URI: https://ifc.edu.br/
 * Description: Design System do Instituto Federal Catarinense.
 * Author: Gustavo Chimenes Dias
 * Author URI: https://ifc.edu.br/
 * License: GPL v2 or later
 * Text Domain: ifc-design-system
 * Domain Path: /languages
 */

if (!defined('ABSPATH')) {
    exit;
}

define('IFC_DS_VERSION', '1.0.0');
define('IFC_DS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('IFC_DS_PLUGIN_PATH', plugin_dir_path(__FILE__));

// Utilitários compartilhados
require_once IFC_DS_PLUGIN_PATH . 'src/shared/utils.php';

// Funções específicas de componentes
require_once IFC_DS_PLUGIN_PATH . 'src/blocks/link/functions.php';
require_once IFC_DS_PLUGIN_PATH . 'src/blocks/input/functions.php';
require_once IFC_DS_PLUGIN_PATH . 'src/blocks/render-functions.php';

class IFC_Design_System {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_editor_assets'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_assets'));
        add_shortcode('ifc_diagnostic', array($this, 'diagnostic_shortcode'));
    }
    
    public function diagnostic_shortcode() {
        ob_start();
        include IFC_DS_PLUGIN_PATH . 'diagnostic.php';
        include IFC_DS_PLUGIN_PATH . 'diagnostic-layout-container.php';
        return ob_get_clean();
    }
    
    public function init() {
        $this->register_block_category();
        $this->register_blocks();
        $this->register_block_patterns();

        load_plugin_textdomain('ifc-design-system', false, dirname(plugin_basename(__FILE__)) . '/languages');
    }
    
    private function register_block_category() {
        add_filter('block_categories_all', function($categories) {
            array_unshift($categories, array(
                'slug' => 'ifc-design-system',
                'title' => __('IFC Design System', 'ifc-design-system'),
                'icon' => 'admin-site-alt3'
            ));
            return $categories;
        });
    }
    
    private function register_blocks() {
        $blocks = [
            'header',
            'accordion', 
            'breadcrumb',
            'button',
            'container',
            'divider',
            'input',
            'layout-container',
            'link',
            'logo',
            'skip-navigation',
            'text',
            'footer'
        ];
        
        foreach ($blocks as $block) {
            $block_path = IFC_DS_PLUGIN_PATH . 'build/blocks/' . $block;
            $block_json = $block_path . '/block.json';
            
            if (file_exists($block_json)) {
                $result = register_block_type($block_path);
                if (defined('WP_DEBUG') && WP_DEBUG) {
                    error_log("IFC DS: Registering block {$block} - " . ($result ? 'Success' : 'Failed'));
                }
            } else {
                if (defined('WP_DEBUG') && WP_DEBUG) {
                    error_log("IFC DS: Block file not found: {$block_json}");
                }
            }
        }
    }
    
    private function register_block_patterns() {
        register_block_pattern_category('ifc-ds-patterns', array(
            'label' => __('IFC Design System', 'ifc-design-system')
        ));
        
        register_block_pattern('ifc-ds/curso-header', array(
            'title' => __('Cabeçalho de Curso IFC', 'ifc-design-system'),
            'description' => __('Cabeçalho padrão para páginas de curso', 'ifc-design-system'),
            'categories' => array('ifc-ds-patterns'),
            'content' => '<!-- wp:ifc-ds/header {"title":"Nome do Curso"} /-->
                         <!-- wp:ifc-ds/breadcrumb {"items":[{"label":"Início","url":"/"},{"label":"Cursos","url":"/cursos"},{"label":"Nome do Curso","url":"#"}]} /-->'
        ));
        
        register_block_pattern('ifc-ds/navigation-menu', array(
            'title' => __('Menu de Navegação IFC', 'ifc-design-system'),
            'description' => __('Menu acordion padrão para navegação', 'ifc-design-system'),
            'categories' => array('ifc-ds-patterns'),
            'content' => '<!-- wp:ifc-ds/accordion {"title":"Menu do Curso","content":"<ul><li><a href=\"#sobre\">Sobre o Curso</a></li><li><a href=\"#matriz\">Matriz Curricular</a></li><li><a href=\"#contato\">Contato</a></li></ul>"} /-->'
        ));
    }
    
    public function enqueue_editor_assets() {
        // Os assets são carregados individualmente por cada bloco via register_block_type
        // Não precisamos de um arquivo principal index.js
    }
    
    public function enqueue_frontend_assets() {
        // Carregar CSS de cada bloco individualmente no frontend
        $blocks = [
            'header',
            'footer',
            'accordion', 
            'breadcrumb',
            'divider',
            'input',
            'layout-container',
            'container',         
            'link',
            'logo',
            'skip-navigation',
            'text'               
        ];
        
        foreach ($blocks as $block) {
            $css_path = IFC_DS_PLUGIN_PATH . 'build/blocks/' . $block . '/style-index.css';
            $css_url = IFC_DS_PLUGIN_URL . 'build/blocks/' . $block . '/style-index.css';
            
            if (file_exists($css_path)) {
                wp_enqueue_style(
                    'ifc-ds-' . $block . '-frontend',
                    $css_url,
                    array(),
                    IFC_DS_VERSION
                );
            }
        }
    }
}

new IFC_Design_System();