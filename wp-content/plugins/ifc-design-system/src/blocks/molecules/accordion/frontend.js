/**
 * IFC Design System — Accordion (frontend).
 *
 * Acessibilidade:
 *  - Padrão WAI-ARIA "Accordion" — `aria-expanded` no botão e atributo
 *    `hidden` no painel para que leitores de tela e o keyboard nav
 *    pulem corretamente o conteúdo fechado.
 *  - Suporte completo a teclado: Enter, Space e seta para baixo
 *    movem o foco entre cabeçalhos (eMAG 2.1 / WCAG 2.1.1).
 *  - Não fixamos o foco — o usuário pode tabular livremente
 *    (eMAG 2.1, evitando "trap").
 */
(function () {
    'use strict';

    /**
     * Alterna o estado do accordion.
     * @param {HTMLElement} accordion
     */
    function toggleAccordion(accordion) {
        var toggle = accordion.querySelector('.ifc-ds-accordion__toggle');
        var content = accordion.querySelector('.ifc-ds-accordion__content');

        if (!toggle || !content) {
            return;
        }

        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        var nextOpen = !isOpen;

        toggle.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
        toggle.classList.toggle('is-open', nextOpen);
        content.classList.toggle('is-open', nextOpen);

        if (nextOpen) {
            content.removeAttribute('hidden');
        } else {
            content.setAttribute('hidden', '');
        }
    }

    /**
     * Move o foco para o próximo / anterior cabeçalho de accordion na página.
     * @param {HTMLElement} currentToggle
     * @param {number} direction +1 ou -1
     */
    function focusSibling(currentToggle, direction) {
        var toggles = Array.prototype.slice.call(
            document.querySelectorAll('.ifc-ds-accordion__toggle')
        );
        var index = toggles.indexOf(currentToggle);

        if (index === -1) {
            return;
        }

        var next = index + direction;
        if (next < 0) {
            next = toggles.length - 1;
        } else if (next >= toggles.length) {
            next = 0;
        }

        toggles[next].focus();
    }

    /**
     * Inicializa um accordion individual.
     * @param {HTMLElement} accordion
     */
    function initAccordion(accordion) {
        if (accordion.dataset.initialized === 'true') {
            return;
        }
        accordion.dataset.initialized = 'true';

        var toggle = accordion.querySelector('.ifc-ds-accordion__toggle');
        var content = accordion.querySelector('.ifc-ds-accordion__content');

        if (!toggle || !content) {
            return;
        }

        // Sincroniza o atributo `hidden` com o estado inicial.
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        if (!isOpen) {
            content.setAttribute('hidden', '');
        } else {
            content.removeAttribute('hidden');
        }

        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            toggleAccordion(accordion);
        });

        toggle.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    toggleAccordion(accordion);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    focusSibling(toggle, 1);
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    focusSibling(toggle, -1);
                    break;
                case 'Home':
                    event.preventDefault();
                    var allToggles = document.querySelectorAll('.ifc-ds-accordion__toggle');
                    if (allToggles.length) {
                        allToggles[0].focus();
                    }
                    break;
                case 'End':
                    event.preventDefault();
                    var allTogglesEnd = document.querySelectorAll('.ifc-ds-accordion__toggle');
                    if (allTogglesEnd.length) {
                        allTogglesEnd[allTogglesEnd.length - 1].focus();
                    }
                    break;
            }
        });
    }

    function initAll() {
        document.querySelectorAll('.ifc-ds-accordion').forEach(initAccordion);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    // Suporte a conteúdo carregado dinamicamente (ex.: AJAX).
    if (typeof MutationObserver !== 'undefined') {
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeType !== 1) {
                        return;
                    }
                    if (node.classList && node.classList.contains('ifc-ds-accordion')) {
                        initAccordion(node);
                    }
                    if (typeof node.querySelectorAll === 'function') {
                        node.querySelectorAll('.ifc-ds-accordion').forEach(initAccordion);
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
})();
