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
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

define('IFC_DS_VERSION', '1.0.0');
define('IFC_DS_PLUGIN_FILE', __FILE__);
define('IFC_DS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('IFC_DS_PLUGIN_PATH', plugin_dir_path(__FILE__));

require_once IFC_DS_PLUGIN_PATH . 'src/shared/utils.php';
require_once IFC_DS_PLUGIN_PATH . 'src/blocks/atoms/link/functions.php';
require_once IFC_DS_PLUGIN_PATH . 'src/blocks/atoms/input/functions.php';

class IFC_Design_System {

    /**
     * Registry canônico dos blocos do DS organizado por tier do Atomic Design.
     *
     *   atoms       primitivos sem dependência de outros blocos
     *   molecules   composições simples que combinam atoms
     *   organisms   composições complexas / blocos de layout
     *
     * Esse é o único ponto de manutenção quando blocos forem adicionados ou
     * removidos. O caminho físico segue `build/blocks/<tier>/<block>` e é
     * resolvido dinamicamente em register_blocks().
     */
    const BLOCK_REGISTRY = [
        'atoms' => [
            'text',
            'link',
            'divider',
            'input',
            'logo',
        ],
        'molecules' => [
            'accordion',
            'breadcrumb',
            'skip-navigation',
        ],
        'organisms' => [
            'container',
            'layout-container',
            'header',
            'footer',
        ],
    ];

    public function __construct() {
        add_action('init', [$this, 'init']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_assets']);

        /*
         * Habilita o lazy-load nativo de CSS por bloco. Com essa flag o
         * WordPress só enfileira o style declarado no block.json quando
         * o bloco efetivamente aparece na página renderizada — eliminando
         * o overhead de 12 <link> em toda página.
         */
        add_filter('should_load_separate_core_block_assets', '__return_true');
    }

    public function init() {
        $this->register_block_category();
        $this->register_blocks();

        load_plugin_textdomain(
            'ifc-design-system',
            false,
            dirname(plugin_basename(__FILE__)) . '/languages'
        );
    }

    private function register_block_category() {
        add_filter('block_categories_all', function ($categories) {
            array_unshift($categories, [
                'slug'  => 'ifc-design-system',
                'title' => __('IFC Design System', 'ifc-design-system'),
                'icon'  => 'admin-site-alt3',
            ]);
            return $categories;
        });
    }

    private function register_blocks() {
        foreach (self::BLOCK_REGISTRY as $tier => $blocks) {
            foreach ($blocks as $block) {
                $block_path = IFC_DS_PLUGIN_PATH . "build/blocks/{$tier}/{$block}";
                $block_json = $block_path . '/block.json';

                if (!file_exists($block_json)) {
                    if (defined('WP_DEBUG') && WP_DEBUG) {
                        error_log("IFC DS: block.json não encontrado em {$block_json}");
                    }
                    continue;
                }

                $result = register_block_type($block_path);

                if (defined('WP_DEBUG') && WP_DEBUG && !$result) {
                    error_log("IFC DS: falha ao registrar bloco ifc-ds/{$block} (tier {$tier})");
                }
            }
        }
    }

    public function enqueue_editor_assets() {
        // Expõe a URL do plugin para componentes JS (ex.: logo/component.js).
        wp_localize_script('wp-blocks', 'wpAssets', [
            'pluginUrl' => IFC_DS_PLUGIN_URL,
        ]);
    }

    public function enqueue_frontend_assets() {
        // Expõe a URL do plugin para qualquer JS do frontend que precise dela.
        wp_localize_script('wp-dom-ready', 'wpAssets', [
            'pluginUrl' => IFC_DS_PLUGIN_URL,
        ]);

        /*
         * O CSS de cada bloco é enfileirado automaticamente pelo
         * register_block_type() lendo o campo "style" do block.json.
         * Combinado com should_load_separate_core_block_assets=true,
         * o asset só é carregado quando o bloco aparece na página.
         *
         * Por isso o loop manual de wp_enqueue_style() foi removido.
         */
    }
}

new IFC_Design_System();
