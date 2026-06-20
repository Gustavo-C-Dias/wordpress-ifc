---
title: Diagramas de Arquitetura — IFC Design System
description: Visão geral do plugin `ifc-design-system` e do tema FSE `ifc-ds`.
---

# Diagramas de Arquitetura

Este documento apresenta uma visão **macro** da arquitetura do projeto. Para
manter a leitura limpa, foram desconsiderados de propósito:

- Pipeline de build (`@wordpress/scripts`, `node_modules`, `package.json`).
- Scripts utilitários (`scripts/` do plugin).
- Estilos compartilhados de baixo nível (`mixins`, `class-builder`, `style.scss`).
- Tabelas de tokens / paletas individuais — referenciamos apenas o
  arquivo `theme.json` e o `design-tokens.css` como blocos opacos.

O foco é mostrar **quem depende de quem** e **como o conteúdo é produzido no
WordPress** (registro de blocos, hierarquia FSE e composição dos blocos).

---

## 1. Plugin `ifc-design-system`

O plugin é a única fonte de **blocos Gutenberg** do projeto. Sua arquitetura
interna segue o **Atomic Design** (atoms → molecules → organisms) e o
registro acontece de forma declarativa via `BLOCK_REGISTRY`.

### 1.1. Bootstrap e registro

```mermaid
flowchart LR
    WP[("WordPress Core")] -->|carrega| Plugin["ifc-design-system.php<br/><i>classe IFC_Design_System</i>"]

    Plugin -->|require_once| Utils["src/shared/utils.php<br/><i>helpers ifc_ds_render_*</i>"]
    Plugin -->|require_once| LinkFns["blocks/atoms/link/functions.php"]
    Plugin -->|require_once| InputFns["blocks/atoms/input/functions.php"]

    Plugin -->|add_action init| Init["init()"]
    Init -->|register_block_category| Cat["categoria<br/>'IFC Design System'"]
    Init -->|loop BLOCK_REGISTRY| Reg["register_block_type()<br/>build/blocks/&lt;tier&gt;/&lt;block&gt;"]

    Plugin -.->|filter| Lazy["should_load_separate_<br/>core_block_assets = true<br/><i>CSS lazy por bloco</i>"]

    classDef wp fill:#21759b,color:#fff,stroke:#0d3a4d
    classDef php fill:#777bb3,color:#fff,stroke:#3d3f6e
    classDef helper fill:#f5f5f5,color:#333,stroke:#999,stroke-dasharray:4 2
    class WP wp
    class Plugin,Init,Reg,Cat php
    class Utils,LinkFns,InputFns,Lazy helper
```

### 1.2. Hierarquia de blocos (Atomic Design)

Mostra apenas as **dependências de composição** declaradas nos `render.php` de
cada bloco. Setas saem do bloco que **consome** para o bloco/helper que é
**consumido**.

```mermaid
flowchart TB
    subgraph Organisms["organisms"]
        direction TB
        header["header"]
        footer["footer"]
        container["container"]
        layoutContainer["layout-container"]
    end

    subgraph Molecules["molecules"]
        direction TB
        accordion["accordion"]
        breadcrumb["breadcrumb"]
        skipNav["skip-navigation"]
    end

    subgraph Atoms["atoms"]
        direction TB
        text["text"]
        link["link"]
        divider["divider"]
        input["input"]
        logo["logo"]
    end

    header --> layoutContainer
    header --> skipNav
    header --> logo
    header --> link
    header --> input
    header --> divider

    footer --> layoutContainer
    footer --> text
    footer --> link

    breadcrumb --> link
    breadcrumb --> text
    accordion --> text
    skipNav --> link

    container -. inner blocks .-> Atoms
    container -. inner blocks .-> Molecules
    layoutContainer -. inner blocks .-> Atoms
    layoutContainer -. inner blocks .-> Molecules
    layoutContainer -. inner blocks .-> Organisms

    classDef atom fill:#e3f2fd,stroke:#1976d2,color:#0d3c61
    classDef molecule fill:#fff3e0,stroke:#f57c00,color:#5d3a00
    classDef organism fill:#e8f5e9,stroke:#388e3c,color:#1b3d1f

    class text,link,divider,input,logo atom
    class accordion,breadcrumb,skipNav molecule
    class header,footer,container,layoutContainer organism
```

**Leitura rápida:**

- **Atoms** não dependem de outros blocos — são primitivos.
- **Molecules** compõem apenas atoms.
- **Organisms** podem compor molecules e atoms; `container` e
  `layout-container` aceitam *inner blocks* arbitrários (composição livre via
  Gutenberg).

---

## 2. Tema `ifc-ds` (FSE / Block Theme)

O tema é uma **camada fina**. Ele não declara blocos — apenas:

1. Declara suportes do WordPress (FSE, title-tag, post-thumbnails…).
2. Enfileira fontes, design tokens e o script da Barra do Governo.
3. Expõe templates HTML (Site Editor) e o pattern *Página de Curso*.

### 2.1. Composição do tema

```mermaid
flowchart TB
    subgraph Theme["tema ifc-ds"]
        direction TB

        Funcs["functions.php<br/><i>setup, enqueues, helpers</i>"]
        ThemeJson["theme.json<br/><i>paletas, tipografia, layout</i>"]
        Tokens["assets/css/design-tokens.css"]
        CursoCss["assets/css/pattern-curso.css"]

        subgraph Templates["templates/"]
            tplIndex["index.html"]
            tplPage["page.html"]
            tplSingle["single.html"]
            tpl404["404.html"]
        end

        subgraph Parts["parts/"]
            partHeader["header.html"]
            partFooter["footer.html"]
        end

        subgraph Patterns["patterns/"]
            patCurso["curso.php<br/><i>Página de Curso</i>"]
        end
    end

    Funcs -->|add_editor_style| Tokens
    Funcs -->|add_editor_style| CursoCss
    Funcs -->|wp_enqueue_style| Tokens
    Funcs -. enqueue condicional<br/>has_block layout-container .-> CursoCss

    tplIndex --> partHeader
    tplPage --> partHeader
    tplSingle --> partHeader
    tpl404 --> partHeader
    tplIndex --> partFooter
    tplPage --> partFooter
    tplSingle --> partFooter
    tpl404 --> partFooter

    classDef php fill:#777bb3,color:#fff,stroke:#3d3f6e
    classDef json fill:#fff8c5,color:#5b4a00,stroke:#bfa700
    classDef css fill:#264de4,color:#fff,stroke:#102a8c
    classDef html fill:#e34c26,color:#fff,stroke:#7a2611
    classDef pattern fill:#f3e5f5,color:#4a148c,stroke:#8e24aa

    class Funcs,patCurso php
    class ThemeJson json
    class Tokens,CursoCss css
    class tplIndex,tplPage,tplSingle,tpl404,partHeader,partFooter html
```

### 2.2. Fluxo de uma requisição (FSE)

Como o WordPress monta uma página combinando *templates → parts → blocos do
plugin*.

```mermaid
flowchart LR
    Req(["Request HTTP<br/>/qualquer-url"]) --> WP[("WordPress")]
    WP -->|resolve template| Tpl["template HTML<br/>(index / page / single / 404)"]

    Tpl -->|template-part| HeaderPart["parts/header.html"]
    Tpl -->|template-part| FooterPart["parts/footer.html"]
    Tpl -->|wp:post-content| Content["conteúdo do post<br/>(pode incluir o pattern Curso)"]

    HeaderPart -->|wp:ifc-ds/header| BlkHeader[["bloco header<br/><i>do plugin</i>"]]
    FooterPart -->|wp:ifc-ds/footer| BlkFooter[["bloco footer<br/><i>do plugin</i>"]]
    Content -. opcional .-> Curso["pattern curso.php<br/><i>layout-container + breadcrumb<br/>+ accordion + text + link</i>"]

    classDef wp fill:#21759b,color:#fff,stroke:#0d3a4d
    classDef tpl fill:#e34c26,color:#fff,stroke:#7a2611
    classDef block fill:#e8f5e9,stroke:#388e3c,color:#1b3d1f
    classDef pattern fill:#f3e5f5,color:#4a148c,stroke:#8e24aa

    class WP wp
    class Tpl,HeaderPart,FooterPart,Content tpl
    class BlkHeader,BlkFooter block
    class Curso pattern
```

---

## 3. Integração tema ↔ plugin

Resumo das responsabilidades. Os dois pacotes são **fracamente acoplados** — o
tema só conhece o plugin pelos *slugs* dos blocos (`ifc-ds/header`,
`ifc-ds/footer`, `ifc-ds/layout-container`, …).

```mermaid
flowchart LR
    subgraph Plugin["Plugin: ifc-design-system"]
        direction TB
        PBlocks["registra blocos<br/>atoms · molecules · organisms"]
        PStyles["CSS por bloco<br/><i>lazy via WP core</i>"]
    end

    subgraph Theme["Tema: ifc-ds"]
        direction TB
        TFSE["templates + parts<br/>(FSE)"]
        TTokens["design-tokens.css<br/>+ theme.json"]
        TPattern["pattern curso.php"]
    end

    TFSE -->|consome blocos<br/>via slug| PBlocks
    TPattern -->|consome blocos<br/>via slug| PBlocks
    PStyles -.->|usa CSS vars de| TTokens

    classDef plugin fill:#e8f5e9,stroke:#388e3c,color:#1b3d1f
    classDef theme fill:#fff3e0,stroke:#f57c00,color:#5d3a00
    class PBlocks,PStyles plugin
    class TFSE,TTokens,TPattern theme
```

**Pontos de contato:**

| Quem                | Depende de               | Como                                       |
|---------------------|--------------------------|--------------------------------------------|
| `parts/header.html` | `ifc-ds/header`          | `<!-- wp:ifc-ds/header /-->`               |
| `parts/footer.html` | `ifc-ds/footer`          | `<!-- wp:ifc-ds/footer /-->`               |
| `patterns/curso.php`| `ifc-ds/layout-container`, `breadcrumb`, `accordion`, `link`, `text`, `container` | Markup de bloco serializado |
| CSS dos blocos      | `design-tokens.css`      | Variáveis CSS (`--ifc-spacing-*`, `--ifc-color-*`) |

---

## 4. Acessibilidade — eMAG / WCAG / WAI-ARIA

A camada de acessibilidade é **transversal** ao DS. As decisões abaixo
servem como referência rápida; o relatório completo está em
`docs/acessibilidade-emag.md`.

```mermaid
flowchart TB
    subgraph Body["<body> (FSE)"]
        direction TB
        SkipGlobal["<a class='ifc-ds-skip-link' accesskey='1'><br/>Ir para o conteúdo</a><br/><i>injetado via wp_body_open</i>"]
        BarraBrasil["<nav aria-label='Barra Brasil'>"]
        Header["<header role='banner'><br/>ifc-ds/header"]
        Main["<main id='main' tabindex='-1'>"]
        Footer["<footer role='contentinfo' id='footer'><br/>ifc-ds/footer"]
    end

    subgraph HeaderInner["dentro do bloco header"]
        direction TB
        SkipNav["<nav aria-label='Atalhos de acessibilidade'><br/>accesskey 1·2·3·4"]
        Search["<form role='search'>"]
        SocialNav["<nav aria-label='Redes sociais'><br/>aria-label='X (abre em nova janela)'"]
        InstNav["<nav aria-label='Menu institucional' id='nav'>"]
    end

    SkipGlobal --> Main
    SkipNav -- "#main" --> Main
    SkipNav -- "#nav" --> InstNav
    SkipNav -- "#busca" --> Search
    SkipNav -- "#footer" --> Footer

    Header --> HeaderInner

    classDef ax fill:#fff8c5,color:#5b4a00,stroke:#bfa700
    classDef nav fill:#e3f2fd,color:#0d3c61,stroke:#1976d2
    classDef main fill:#e8f5e9,color:#1b3d1f,stroke:#388e3c

    class SkipGlobal,SkipNav ax
    class BarraBrasil,SocialNav,InstNav,Header,Footer nav
    class Main,Search main
```

| eMAG / WCAG | Onde está implementado | Resumo |
|---|---|---|
| 1.5 / 4.1 (skip-link como 1º foco) | `themes/ifc-ds/functions.php` (`wp_body_open`) | `<a class="ifc-ds-skip-link" accesskey="1">` |
| 4.1 (atalhos 1·2·3·4) | `src/shared/utils.php` + `molecules/skip-navigation` | Conteúdo, Menu, Busca, Rodapé |
| 1.2 / 1.3 (semântica) | `atoms/text` + `molecules/accordion` + `organisms/footer` | `<h2>` por seção; `headingLevel` configurável |
| 1.8 (landmarks) | `organisms/header` (banner) e `footer` (contentinfo) | Templates expõem `<main id="main" tabindex="-1">` |
| 1.9 / 3.2.5 (nova aba) | `atoms/link` + `atoms/logo` | `aria-label` recebe sufixo "(abre em nova janela)" |
| 2.1 (teclado) | `molecules/accordion/frontend.js` | Enter, Space, Setas, Home, End |
| 3.4 (localização) | `molecules/breadcrumb` | `<nav aria-label="Navegação estrutural">` |
| 3.5 (descrição de link) | `atoms/link` (drop `title`) | `aria-label` para ícones; texto descritivo |
| 4.4 (foco visível) | `mixins-essentials.scss` | `@mixin ifc-focus-ring` em todos os interativos |
| 6.2 (label associado) | `atoms/input` | `<label for>` obrigatório ou `aria_label` + `hideLabel` |
| 6.5 / 6.6 (validação) | `atoms/input` | `aria-required`, `aria-invalid`, `role="alert"` |
