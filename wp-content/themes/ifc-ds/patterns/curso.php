<?php
/**
 * Title: Página de Curso IFC
 * Slug: ifc-ds/template-curso
 * Categories: ifc-ds
 * Keywords: curso, template, ifc, educação
 * Description: Template completo para páginas de curso com header, sidebar, conteúdo e footer.
 * Block Types: core/post-content
 *
 * Acessibilidade aplicada (eMAG 3.1 / WCAG 2.0):
 *  - O conteúdo principal não duplica `id="main"` — esse ID já vive no
 *    `<main>` do template. A sidebar do curso é um `<aside>` com
 *    `aria-label`, identificando-se claramente como conteúdo
 *    complementar (eMAG 1.8).
 *  - O título "Nome do Curso" usa `<h2>` (subtitle). O `<h1>` da
 *    página é fornecido pelo `wp:post-title` em `single.html` /
 *    pelo título manual em outros templates, evitando duplicação
 *    (eMAG 1.3).
 *  - As "informações do curso" (Duração, Modalidade, etc.) viram uma
 *    description list (`<dl>/<dt>/<dd>`) — a marcação correta para
 *    pares chave/valor (eMAG 1.2).
 *  - A imagem do curso recebe `alt` descritivo padrão; autores devem
 *    sobrescrever ao reutilizar.
 *  - Cada seção é um `<section aria-labelledby>` com cabeçalho
 *    associado (eMAG 1.8).
 *
 * Esse arquivo é descoberto automaticamente pelo WordPress (>= 6.0)
 * a partir do diretório `patterns/` do tema.
 */

$bsi_image_url    = esc_url(get_template_directory_uri() . '/assets/img/bsi.png');
$updated_at_label = esc_html(
    'Atualizado em ' . ifc_ds_format_date_pt_br(get_post_modified_time('U'))
);
?>
<!-- wp:ifc-ds/layout-container {"containerType":"fixed","maxColumns":12} -->
<!-- wp:group -->
<div class="wp-block-group ifc-ds-curso-breadcrumb col-span-full">
<!-- wp:ifc-ds/breadcrumb {"items":[{"label":"IFC Camboriú","url":"/"},{"label":"Cursos","url":"/cursos"}],"currentPageTitle":"Nome do Curso"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group {"tagName":"aside","metadata":{"name":"Sidebar do curso"}} -->
<aside class="wp-block-group ifc-ds-curso-sidebar" aria-label="Conteúdo do curso">
<!-- wp:ifc-ds/accordion {"title":"Aluno","isOpen":false,"headingLevel":2} -->
<!-- wp:ifc-ds/link {"label":"Portal do ingresso","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"SIGAA","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Sou IFC","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Horário","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Biblioteca","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Atlética","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"Documentação","isOpen":false,"headingLevel":2} -->
<!-- wp:ifc-ds/link {"label":"Projeto pedagógico","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Matriz curricular","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Núcleo Docente Estruturante (NDE)","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Colegiado","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Corpo docente","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"RACI","isOpen":false,"headingLevel":2} -->
<!-- wp:ifc-ds/link {"label":"Envio de formulários","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Documentos","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"Coordenação","isOpen":false,"headingLevel":2} -->
<!-- wp:ifc-ds/link {"label":"Contato","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- /wp:ifc-ds/accordion -->
</aside>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group ifc-ds-curso-main">
<!-- wp:group -->
<div class="wp-block-group ifc-ds-curso-heading">
<!-- wp:image {"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="<?php echo $bsi_image_url; ?>" alt="Estudantes em laboratório de informática do curso de Sistemas de Informação"/></figure>
<!-- /wp:image -->

<!-- wp:ifc-ds/text {"content":"Nome do Curso","textType":"title","tag":"h2","weight":"semibold","alignment":"center","color":"neutral"} /-->

<!-- wp:ifc-ds/text {"content":"<?php echo $updated_at_label; ?>","textType":"detail","tag":"p","weight":"regular","alignment":"center","color":"neutral","className":"ifc-ds-text--update-date"} /-->
</div>
<!-- /wp:group -->

<!-- wp:ifc-ds/container {"padding":{"top":"2","right":"2","bottom":"2","left":"2"},"margin":{"top":"5","bottom":"5"}} -->
<!-- wp:html -->
<dl class="ifc-ds-info-list" aria-label="Informações principais do curso">
	<div class="ifc-ds-info-item">
		<dt class="ifc-ds-text ifc-ds-text--body ifc-ds-text--bold ifc-ds-text--primary ifc-ds-text--align-left">Duração</dt>
		<dd class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--neutral ifc-ds-text--align-left">8 semestres</dd>
	</div>
	<div class="ifc-ds-info-item">
		<dt class="ifc-ds-text ifc-ds-text--body ifc-ds-text--bold ifc-ds-text--primary ifc-ds-text--align-left">Modalidade</dt>
		<dd class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--neutral ifc-ds-text--align-left">Presencial</dd>
	</div>
	<div class="ifc-ds-info-item">
		<dt class="ifc-ds-text ifc-ds-text--body ifc-ds-text--bold ifc-ds-text--primary ifc-ds-text--align-left">Carga Horária</dt>
		<dd class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--neutral ifc-ds-text--align-left">3.000h</dd>
	</div>
	<div class="ifc-ds-info-item">
		<dt class="ifc-ds-text ifc-ds-text--body ifc-ds-text--bold ifc-ds-text--primary ifc-ds-text--align-left">Período</dt>
		<dd class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--neutral ifc-ds-text--align-left">Matutino</dd>
	</div>
	<div class="ifc-ds-info-item">
		<dt class="ifc-ds-text ifc-ds-text--body ifc-ds-text--bold ifc-ds-text--primary ifc-ds-text--align-left">Vagas anuais</dt>
		<dd class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--neutral ifc-ds-text--align-left">40 vagas</dd>
	</div>
	<div class="ifc-ds-info-item">
		<dt class="ifc-ds-text ifc-ds-text--body ifc-ds-text--bold ifc-ds-text--primary ifc-ds-text--align-left">Conceito MEC</dt>
		<dd class="ifc-ds-text ifc-ds-text--body ifc-ds-text--regular ifc-ds-text--neutral ifc-ds-text--align-left">4</dd>
	</div>
</dl>
<!-- /wp:html -->
<!-- /wp:ifc-ds/container -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group" aria-labelledby="curso-sobre">
<!-- wp:ifc-ds/text {"content":"Sobre o curso","textType":"subtitle","tag":"h2","weight":"semibold","color":"neutral","className":"ifc-ds-section-title","anchor":"curso-sobre"} /-->
<!-- wp:ifc-ds/text {"content":"O Curso de Sistemas de Informação tem seu foco voltado para a formação do profissional que irá desenvolver ou gerenciar sistemas aplicativos. Forma profissionais aptos ao planejamento, aquisição e gerenciamento de serviços e recursos da Tecnologia da Informação e Computação, aplicados ao desenvolvimento e à evolução de sistemas e infraestruturas de automatização dos processos organizacionais.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Entre os objetivos do curso estão preparar profissionais para identificar as necessidades das organizações, criar e gerir soluções tecnológicas, desenvolver sistemas informatizados para organizar os fluxos de informação das empresas. Além disso, colaborar na formação de profissionais éticos, críticos, autônomos aptos a analisar, desenvolver sistemas e propor aperfeiçoamento de sistemas já em funcionamento, gerenciar equipes de desenvolvimento e de produção e colocar em operação planos diretores de automação nos mais variados níveis.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group" aria-labelledby="curso-mercado">
<!-- wp:ifc-ds/text {"content":"Mercado de trabalho e atuação","textType":"subtitle","tag":"h2","weight":"semibold","color":"neutral","className":"ifc-ds-section-title","anchor":"curso-mercado"} /-->
<!-- wp:ifc-ds/text {"content":"O profissional egresso deste curso pode atuar tanto na aquisição, desenvolvimento e gerenciamento de serviços e recursos da tecnologia da informação quanto no desenvolvimento e evolução de sistemas e infraestruturas para o uso em processos organizacionais.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Os egressos são capazes de identificar as necessidades das organizações, criar e gerir soluções tecnológicas, desenvolver sistemas informatizados para organizar os fluxos de informação das empresas. Além disso, deve ser um profissional ético, crítico, autônomo, apto a analisar e propor aperfeiçoamento de sistemas já em funcionamento, gerenciar equipes de desenvolvimento e de produção e colocar em operação planos diretores de automação nos mais variados níveis.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group" aria-labelledby="curso-grades">
<!-- wp:ifc-ds/text {"content":"Grades curriculares","textType":"subtitle","tag":"h2","weight":"semibold","color":"neutral","className":"ifc-ds-section-title","anchor":"curso-grades"} /-->
<!-- wp:ifc-ds/text {"content":"É fundamental que todos os estudantes fiquem atentos ao Projeto Político Pedagógico (PPP) específico do seu período de ingresso, pois ele é o guia oficial para a sua formação. Para os novos alunos (ingressantes a partir de 2023), as diretrizes seguem o PPP mais recente do curso, cujos detalhes e sequenciamento de disciplinas podem ser conferidos diretamente na matriz curricular atualizada.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Já os alunos que ingressaram entre os anos de 2019 e 2022 devem seguir rigorosamente o projeto pedagógico estabelecido para aquele intervalo, consultando sua respectiva matriz para organizar o fluxo de matérias por semestre. Por fim, para aqueles que iniciaram o curso entre 2012 e 2018, vigora um PPP específico para esses anos; caso identifiquem disciplinas que não são mais ofertadas regularmente no sistema, orientamos que procurem a Coordenação do Curso para verificar a possibilidade de solicitar uma turma especial ou alinhar as devidas equivalências acadêmicas.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:group -->
<div class="wp-block-group ifc-ds-ppp-links" role="list" aria-label="Projetos Político-Pedagógicos disponíveis">
<!-- wp:ifc-ds/link {"label":"Plano Político Pedagógico — atual (PDF)","url":"#","type":"neutral","size":"small","weight":"regular"} /-->
<!-- wp:ifc-ds/link {"label":"Plano Político Pedagógico — 2019 a 2022 (PDF)","url":"#","type":"neutral","size":"small","weight":"regular"} /-->
<!-- wp:ifc-ds/link {"label":"Plano Político Pedagógico — 2012 a 2018 (PDF)","url":"#","type":"neutral","size":"small","weight":"regular"} /-->
</div>
<!-- /wp:group -->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group" aria-labelledby="curso-ingresso">
<!-- wp:ifc-ds/text {"content":"Forma de ingresso","textType":"subtitle","tag":"h2","weight":"semibold","color":"neutral","className":"ifc-ds-section-title","anchor":"curso-ingresso"} /-->
<!-- wp:ifc-ds/text {"content":"O ingresso nos cursos superiores do IFC é realizado 50% pelo ENEM/SISU e 50% por meio do Vestibular Unificado (parceria com a UFSC e IFSC). Acompanhe aqui para saber mais sobre a forma de ingresso. O IFC também possui o edital de Cadastro de Reserva, que consiste em uma lista de classificação, da qual poderão ser convocados(as) candidatos(as) para preenchimento de vagas que surgirem, até um mês após o início das aulas, após esgotadas as chamadas via Sisu e Vestibular.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group" aria-labelledby="curso-legal">
<!-- wp:ifc-ds/text {"content":"Informações legais","textType":"subtitle","tag":"h2","weight":"semibold","color":"neutral","className":"ifc-ds-section-title","anchor":"curso-legal"} /-->
<!-- wp:ifc-ds/text {"content":"Este curso é reconhecido pelo MEC por meio da portaria nº 588, 22 de outubro de 2014. É necessário que os alunos ingressantes no curso tenham o ensino médio completo.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group" aria-labelledby="curso-contato">
<!-- wp:ifc-ds/text {"content":"Contato","textType":"subtitle","tag":"h2","weight":"semibold","color":"neutral","className":"ifc-ds-section-title","anchor":"curso-contato"} /-->
<!-- wp:ifc-ds/text {"content":"E-mail: sistemasdeinformacao.grad.camboriu@ifc.edu.br","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Coordenador: Rafael de Moura Speroni","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->
</div>
<!-- /wp:group -->
<!-- /wp:ifc-ds/layout-container -->
