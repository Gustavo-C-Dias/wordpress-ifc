<?php
$title = $attributes['title'] ?? 'Título do Accordion';
$items = $attributes['items'] ?? [];
$is_open = $attributes['isOpen'] ?? false;
$unique_id = 'accordion-' . wp_unique_id();

// Função ifc_ds_render_accordion_item está definida em render-functions.php
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'ifc-ds-accordion']); ?>>
    <button 
        class="ifc-ds-accordion__toggle <?php echo $is_open ? 'is-open' : ''; ?>"
        aria-expanded="<?php echo $is_open ? 'true' : 'false'; ?>"
        aria-controls="<?php echo esc_attr($unique_id); ?>"
    >
        <h3 class="ifc-ds-text ifc-ds-text--body ifc-ds-text--bold ifc-ds-text--primary ifc-ds-text--align-left ifc-ds-accordion__title-text"><?php echo esc_html($title); ?></h3>
        <span class="ifc-ds-accordion__icon">▼</span>
    </button>
    
    <div 
        id="<?php echo esc_attr($unique_id); ?>"
        class="ifc-ds-accordion__content <?php echo $is_open ? 'is-open' : ''; ?>"
        aria-hidden="<?php echo $is_open ? 'false' : 'true'; ?>"
    >
        <div class="ifc-ds-accordion__items">
            <?php foreach ($items as $item): ?>
                <?php echo ifc_ds_render_accordion_item($item, $is_open); ?>
            <?php endforeach; ?>
        </div>
    </div>
</div>

<script>
(function() {
    const accordionId = '<?php echo esc_js($unique_id); ?>';
    const content = document.getElementById(accordionId);
    if (content) {
        const accordion = content.closest('.ifc-ds-accordion');
        const toggle = accordion.querySelector('.ifc-ds-accordion__toggle');
        
        // Função para gerenciar elementos focáveis
        function manageFocusableElements(isOpen) {
            const focusableElements = content.querySelectorAll(
                'a, button, input, textarea, select'
            );
            
            focusableElements.forEach(function(element) {
                if (isOpen) {
                    // Remove tabindex negativo para permitir foco
                    if (element.hasAttribute('tabindex') && element.getAttribute('tabindex') === '-1') {
                        element.removeAttribute('tabindex');
                    }
                } else {
                    // Define tabindex -1 para remover do fluxo de foco
                    if (!element.hasAttribute('tabindex') || element.getAttribute('tabindex') !== '-1') {
                        element.setAttribute('tabindex', '-1');
                    }
                }
            });
        }
        
        // Inicializa estado dos elementos focáveis
        const initialState = content.classList.contains('is-open');
        manageFocusableElements(initialState);
        
        toggle.addEventListener('click', function() {
            const isOpen = content.classList.contains('is-open');
            
            if (isOpen) {
                content.classList.remove('is-open');
                toggle.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');
                manageFocusableElements(false);
            } else {
                content.classList.add('is-open');
                toggle.classList.add('is-open');
                toggle.setAttribute('aria-expanded', 'true');
                content.setAttribute('aria-hidden', 'false');
                manageFocusableElements(true);
            }
        });
    }
})();
</script>