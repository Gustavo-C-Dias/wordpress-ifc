# Arquitetura — IFC Design System

Documento de referência arquitetural do projeto. Os diagramas seguem
notação **UML** (Component Diagram, Class Diagram e Package Diagram) e
estão escritos em **Mermaid** para renderização nativa no Cursor, VS Code
e GitHub.

Convenção UML adotada nos diagramas:

- `«component»` — componente implantável (plugin, tema, motor do WP).
- `«package»` — agrupador lógico (camada, tier do Atomic Design).
- `«artifact»` — arquivo físico (`block.json`, `theme.json`, `*.html`).
- `o——` — interface fornecida (lollipop).
- `——(`  — interface requerida (socket).
- `..>` — dependência (`<<use>>`, `<<read>>`, `<<render>>`).
- `-->` — associação direcionada.
- `<|--` — herança / refinamento.

---

## 1. Visão Geral — Integração Plugin × Tema × WordPress

> **UML Component Diagram** em alto nível. Mostra como o **plugin
> `ifc-design-system`** (fornecedor de blocos), o **tema `ifc-ds`**
> (consumidor / camada de apresentação FSE) e o **WordPress Core** se
> integram. Sem detalhes técnicos internos.

```mermaid
flowchart TB
    classDef component fill:#E8F1FF,stroke:#1F3A8A,stroke-width:1.5px,color:#0B1B3B

    subgraph WP["«component» WordPress Core (FSE)"]
        direction TB
        BlockAPI["o── Block API"]
        FSE["o── Site Editor / FSE Engine"]
        Hooks["o── Hooks (actions & filters)"]
    end
    class WP component

    subgraph Plugin["«component» ifc-design-system (Plugin)"]
        direction TB
        PBlocks["Blocos Customizados<br/>(Atoms · Molecules · Organisms)"]
    end
    class Plugin component

    subgraph Theme["«component» ifc-ds (Block Theme)"]
        direction TB
        TTokens["Design Tokens"]
        TTemplates["Templates FSE"]
    end
    class Theme component

    Plugin   ==>|registra blocos via| BlockAPI
    Theme    ==>|consome blocos no| FSE
    Theme    -.->|expõe presets em| BlockAPI
    Plugin   -.->|lê tokens CSS de| TTokens
    Theme    -.->|usa hooks de| Hooks
    Plugin   -.->|usa hooks de| Hooks
```

**Leitura rápida**

- O **plugin** é o único responsável por declarar blocos (independente do
  tema ativo).
- O **tema** fornece os _design tokens_ (cores, tipografia, espaçamento)
  e a hierarquia de templates do FSE.
- A comunicação entre os três sempre passa pelas **APIs públicas do WP**
  (Block API, FSE, hooks) — não há acoplamento direto entre plugin e
  tema.

---

## 2. Estrutura dos Tokens

> **UML Class Diagram**. Modela a cadeia de tradução dos design tokens:
> declaração no `theme.json` → presets do WP → variáveis CSS `--ifc-*` →
> consumo nos blocos.

```mermaid
classDiagram
    direction LR

    class ThemeJson {
        <<artifact>>
    }

    class WpPresets {
        <<«generated» CSS>>
    }

    class IfcTokens {
        <<«CSS Custom Properties»>>
    }

    class ColorTokens
    class TypographyTokens
    class SpacingTokens
    class BorderTokens
    class ShadowTokens
    class MotionTokens
    class BreakpointTokens

    ThemeJson  ..> WpPresets   : «generates»
    WpPresets  ..> IfcTokens   : «aliased by»
    IfcTokens  <|-- ColorTokens
    IfcTokens  <|-- TypographyTokens
    IfcTokens  <|-- SpacingTokens
    IfcTokens  <|-- BorderTokens
    IfcTokens  <|-- ShadowTokens
    IfcTokens  <|-- MotionTokens
    IfcTokens  <|-- BreakpointTokens
```

**Leitura rápida**

- A **fonte da verdade** é o `theme.json` (mantido pelo tema).
- O WP gera automaticamente os presets `--wp--preset--*`.
- Os tokens semânticos `--ifc-*` são um **alias** em cima desses
  presets — é essa a API que os blocos consomem, garantindo
  independência da nomenclatura interna do WP.

---

## 3. Estrutura dos Componentes (Atomic Design)

> **UML Package + Class Diagram**. Cada pacote representa um _tier_ do
> Atomic Design. As setas mostram a relação de composição entre tiers
> (organisms compõem molecules e atoms; molecules compõem atoms).

```mermaid
flowchart TB
    classDef pkg     fill:#F0F7F1,stroke:#237631,stroke-width:1.5px,color:#0C2710
    classDef atom    fill:#FFFFFF,stroke:#4FC562,stroke-width:1px,color:#0C2710
    classDef mol     fill:#FFFFFF,stroke:#2F9E41,stroke-width:1.2px,color:#0C2710
    classDef org     fill:#FFFFFF,stroke:#174F20,stroke-width:1.5px,color:#0C2710
    classDef rootpkg fill:#E9F4EB,stroke:#174F20,stroke-width:2px,color:#0C2710

    subgraph DS["«package» ifc-design-system :: blocks"]
        direction TB

        subgraph Atoms["«package» atoms"]
            text["«block»<br/>ifc-ds/text"]:::atom
            link["«block»<br/>ifc-ds/link"]:::atom
            divider["«block»<br/>ifc-ds/divider"]:::atom
            input["«block»<br/>ifc-ds/input"]:::atom
            logo["«block»<br/>ifc-ds/logo"]:::atom
        end
        class Atoms pkg

        subgraph Molecules["«package» molecules"]
            accordion["«block»<br/>ifc-ds/accordion"]:::mol
            breadcrumb["«block»<br/>ifc-ds/breadcrumb"]:::mol
            skipnav["«block»<br/>ifc-ds/skip-navigation"]:::mol
        end
        class Molecules pkg

        subgraph Organisms["«package» organisms"]
            container["«block»<br/>ifc-ds/container"]:::org
            layout["«block»<br/>ifc-ds/layout-container"]:::org
            header["«block»<br/>ifc-ds/header"]:::org
            footer["«block»<br/>ifc-ds/footer"]:::org
        end
        class Organisms pkg

        Shared["«package» shared"]:::pkg
    end
    class DS rootpkg

    Molecules ==>|«compose»| Atoms
    Organisms ==>|«compose»| Molecules
    Organisms ==>|«compose»| Atoms
    Atoms     -.->|«use»| Shared
    Molecules -.->|«use»| Shared
    Organisms -.->|«use»| Shared
```

**Estrutura física de cada bloco** (mostrada como classe UML para
deixar explícita a anatomia comum a todos os tiers):

```mermaid
classDiagram
    direction LR
    class Block {
        <<«WordPress Block»>>
        +block.json : «metadata»
        +index.js : «editor»
        +render.php : «server render»
        +style.scss : «styles»
        +component.js : «editor UI (opcional)»
        +frontend.js : «interatividade (opcional)»
    }

    class Atom
    class Molecule
    class Organism

    Block <|-- Atom      : «is-a»
    Block <|-- Molecule  : «is-a»
    Block <|-- Organism  : «is-a»

    Molecule ..> Atom    : «composes»
    Organism ..> Molecule : «composes»
    Organism ..> Atom    : «composes»
```

**Leitura rápida**

- Atoms são primitivos sem dependência de outros blocos.
- Molecules combinam atoms para formar unidades funcionais simples.
- Organisms montam seções completas de página, podendo compor tanto
  molecules quanto atoms.
- O pacote `shared` concentra utilidades comuns usadas
  transversalmente por todos os tiers.

---

## 4. Implementação dos Templates (FSE)

> **UML Component Diagram**. Modela a hierarquia FSE simplificada do
> tema `ifc-ds`: um único template `index.html` serve de fallback
> universal e consome _template parts_ e blocos do plugin para compor
> a página final entregue ao visitante.

```mermaid
flowchart TB
    classDef tmpl    fill:#FFF8E1,stroke:#A05A00,stroke-width:1.4px,color:#3A2200
    classDef part    fill:#E8F1FF,stroke:#1F3A8A,stroke-width:1.4px,color:#0B1B3B
    classDef block   fill:#F0F7F1,stroke:#237631,stroke-width:1.4px,color:#0C2710
    classDef pattern fill:#FCE4EC,stroke:#A50D10,stroke-width:1.4px,color:#470607
    classDef engine  fill:#F5F5F5,stroke:#595959,stroke-width:1.2px,color:#1F1F1F,stroke-dasharray: 4 3

    WP(["«component»<br/>WordPress FSE Engine"]):::engine

    subgraph Templates["«package» templates/"]
        direction TB
        Index["«artifact»<br/>index.html<br/>(fallback universal)"]:::tmpl
    end

    subgraph Parts["«package» parts/"]
        direction TB
        HeaderPart["«template-part»<br/>header.html"]:::part
        FooterPart["«template-part»<br/>footer.html"]:::part
    end

    subgraph Patterns["«package» patterns/"]
        direction TB
        Curso["«block-pattern»<br/>ifc-ds/template-curso"]:::pattern
    end

    subgraph CoreBlocks["«package» core blocks"]
        direction TB
        Group["core/group (tagName=main)"]:::block
        PostTitle["core/post-title"]:::block
        PostContent["core/post-content"]:::block
    end

    subgraph DSOrganisms["«package» ifc-design-system :: organisms"]
        direction TB
        HeaderBlock["ifc-ds/header"]:::block
        FooterBlock["ifc-ds/footer"]:::block
        LayoutBlock["ifc-ds/layout-container"]:::block
    end

    WP    ==>|resolve hierarquia| Templates

    Index -->|inclui| HeaderPart
    Index -->|inclui| FooterPart
    Index -->|renderiza| Group
    Index -->|renderiza| PostTitle
    Index -->|renderiza| PostContent

    HeaderPart -->|usa| HeaderBlock
    FooterPart -->|usa| FooterBlock

    PostContent -.->|embute| Curso
    Curso       -.->|compõe via| LayoutBlock
```

**Hierarquia de resolução (FSE)**

```mermaid
flowchart LR
    classDef tmpl  fill:#FFF8E1,stroke:#A05A00,color:#3A2200

    Req(["Request"]) --> Decide{Tipo de URL}
    Decide -->|página de curso| Index["index.html"]:::tmpl
    Decide -->|qualquer outra rota| Index

    Index -. único template ativo .-> Index
```

**Leitura rápida**

- O tema mantém **um único template** (`index.html`) — o WP exige esse
  arquivo em todo block theme e o utiliza como fallback para qualquer
  rota (page, single, 404, listagem). Essa decisão reflete o escopo
  atual do projeto: renderizar apenas a página de curso.
- O template é um artefato `.html` puro com _block markup_; nenhuma
  lógica PHP de tema (clássico) é usada.
- O esqueleto é fixo: `header part` → `<main>` (com `wp:group`) →
  `footer part`. Dentro do `<main>`, `wp:post-title` produz o `<h1>` e
  `wp:post-content` injeta o conteúdo editorial.
- O **conteúdo principal** (`post-content`) é o ponto onde o pattern
  `ifc-ds/template-curso` é inserido pelo editor.
