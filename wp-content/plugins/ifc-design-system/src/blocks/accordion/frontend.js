/**
 * IFC Design System - Accordion Frontend Script
 * Script para funcionalidade do accordion no frontend
 */

(function() {
    'use strict';

    /**
     * Gerencia os elementos focáveis dentro do accordion
     * @param {HTMLElement} content - Elemento de conteúdo do accordion
     * @param {boolean} isOpen - Estado de abertura
     */
    function manageFocusableElements(content, isOpen) {
        const focusableElements = content.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(function(element) {
            if (isOpen) {
                // Remove tabindex negativo para permitir foco
                if (element.getAttribute('tabindex') === '-1') {
                    element.removeAttribute('tabindex');
                }
            } else {
                // Define tabindex -1 para remover do fluxo de foco
                element.setAttribute('tabindex', '-1');
            }
        });
    }

    /**
     * Alterna o estado do accordion
     * @param {HTMLElement} accordion - Elemento do accordion
     */
    function toggleAccordion(accordion) {
        const toggle = accordion.querySelector('.ifc-ds-accordion__toggle');
        const content = accordion.querySelector('.ifc-ds-accordion__content');
        
        if (!toggle || !content) return;

        const isOpen = content.classList.contains('is-open');
        
        if (isOpen) {
            content.classList.remove('is-open');
            toggle.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            content.setAttribute('aria-hidden', 'true');
            manageFocusableElements(content, false);
        } else {
            content.classList.add('is-open');
            toggle.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            content.setAttribute('aria-hidden', 'false');
            manageFocusableElements(content, true);
        }
    }

    /**
     * Inicializa um accordion
     * @param {HTMLElement} accordion - Elemento do accordion
     */
    function initAccordion(accordion) {
        const toggle = accordion.querySelector('.ifc-ds-accordion__toggle');
        const content = accordion.querySelector('.ifc-ds-accordion__content');
        
        if (!toggle || !content) return;

        // Marca como inicializado para evitar dupla inicialização
        if (accordion.dataset.initialized === 'true') return;
        accordion.dataset.initialized = 'true';

        // Inicializa estado dos elementos focáveis
        const initialState = content.classList.contains('is-open');
        manageFocusableElements(content, initialState);
        
        // Adiciona event listener
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleAccordion(accordion);
        });

        // Suporte a teclado
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion(accordion);
            }
        });
    }

    /**
     * Inicializa todos os accordions na página
     */
    function initAllAccordions() {
        const accordions = document.querySelectorAll('.ifc-ds-accordion');
        accordions.forEach(initAccordion);
    }

    // Inicializa quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllAccordions);
    } else {
        initAllAccordions();
    }

    // Suporte a conteúdo carregado dinamicamente (ex: AJAX)
    // Observa mudanças no DOM para inicializar novos accordions
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) {
                        if (node.classList && node.classList.contains('ifc-ds-accordion')) {
                            initAccordion(node);
                        }
                        // Procura accordions dentro do nó adicionado
                        const nestedAccordions = node.querySelectorAll ? 
                            node.querySelectorAll('.ifc-ds-accordion') : [];
                        nestedAccordions.forEach(initAccordion);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Expõe API pública para uso externo
    window.IFCAccordion = {
        init: initAllAccordions,
        initSingle: initAccordion,
        toggle: toggleAccordion
    };

})();
