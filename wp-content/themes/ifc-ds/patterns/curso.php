<?php
/**
 * Title: Página de Curso IFC
 * Slug: ifc-ds/template-curso
 * Categories: ifc-ds
 * Keywords: curso, template, ifc, educação
 * Description: Template completo para páginas de curso com header, sidebar, conteúdo e footer.
 * Block Types: core/post-content
 *
 * Esse arquivo é descoberto automaticamente pelo WordPress (>= 6.0)
 * a partir do diretório `patterns/` do tema. Não é necessário registrar
 * via register_block_pattern().
 */

$bsi_image_url    = esc_url(get_template_directory_uri() . '/assets/img/bsi.png');
$updated_at_label = esc_html(
    'Atualizado em ' . ifc_ds_format_date_pt_br(get_post_modified_time('U'))
);
?>
<!-- wp:ifc-ds/layout-container {"containerType":"fixed","maxColumns":12} -->
<!-- wp:group -->
<div class="wp-block-group ifc-ds-curso-breadcrumb col-span-full">
<!-- wp:ifc-ds/breadcrumb {"items":[{"label":"IFC Camboriú","url":"/"},{"label":"Cursos","url":"/cursos"},{"label":"Nome do Curso","url":""}]} /-->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group ifc-ds-curso-sidebar" id="nav">
<!-- wp:ifc-ds/accordion {"title":"Aluno","isOpen":false} -->
<!-- wp:ifc-ds/link {"label":"Portal do ingresso","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"SIGAA","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Sou IFC","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Horário","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Biblioteca","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Atlética","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"Documentação","isOpen":false} -->
<!-- wp:ifc-ds/link {"label":"Projeto pedagógico","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Matriz curricular","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Nucleo Docente Estruturante (NDE)","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Colegiado","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Corpo docente","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"RACI","isOpen":false} -->
<!-- wp:ifc-ds/link {"label":"Envio formulários","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- wp:ifc-ds/link {"label":"Documentos","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- /wp:ifc-ds/accordion -->

<!-- wp:ifc-ds/accordion {"title":"Coordenação","isOpen":false} -->
<!-- wp:ifc-ds/link {"label":"Contato","url":"#","type":"neutral","size":"small","weight":"regular","padding":{"top":"1","right":"0","bottom":"1","left":"3"}} /-->
<!-- /wp:ifc-ds/accordion -->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group ifc-ds-curso-main" id="main">
<!-- wp:group -->
<div class="wp-block-group ifc-ds-curso-heading">
<!-- wp:image {"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="<?php echo $bsi_image_url; ?>" alt="Imagem do curso"/></figure>
<!-- /wp:image -->

<!-- wp:ifc-ds/text {"content":"Nome do Curso","textType":"title","weight":"semibold","alignment":"center","color":"neutral"} /-->

<!-- wp:ifc-ds/text {"content":"<?php echo $updated_at_label; ?>","textType":"detail","weight":"regular","alignment":"center","color":"neutral","className":"ifc-ds-text--update-date"} /-->
</div>
<!-- /wp:group -->

<!-- wp:ifc-ds/container {"padding":{"top":"2","right":"2","bottom":"2","left":"2"},"margin":{"top":"5","bottom":"5"}} -->
<!-- wp:group -->
<div class="wp-block-group ifc-ds-info-list">
<!-- wp:group -->
<div class="wp-block-group ifc-ds-info-item">
<!-- wp:ifc-ds/text {"content":"Duração","textType":"body","weight":"bold","color":"primary"} /-->
<!-- wp:ifc-ds/text {"content":"8 semestres","textType":"body","weight":"regular","color":"neutral"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group ifc-ds-info-item">
<!-- wp:ifc-ds/text {"content":"Modalidade","textType":"body","weight":"bold","color":"primary"} /-->
<!-- wp:ifc-ds/text {"content":"Presencial","textType":"body","weight":"regular","color":"neutral"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group ifc-ds-info-item">
<!-- wp:ifc-ds/text {"content":"Carga Horária","textType":"body","weight":"bold","color":"primary"} /-->
<!-- wp:ifc-ds/text {"content":"3.000h","textType":"body","weight":"regular","color":"neutral"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group ifc-ds-info-item">
<!-- wp:ifc-ds/text {"content":"Período","textType":"body","weight":"bold","color":"primary"} /-->
<!-- wp:ifc-ds/text {"content":"Matutino","textType":"body","weight":"regular","color":"neutral"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group ifc-ds-info-item">
<!-- wp:ifc-ds/text {"content":"Vagas anuais","textType":"body","weight":"bold","color":"primary"} /-->
<!-- wp:ifc-ds/text {"content":"40 vagas","textType":"body","weight":"regular","color":"neutral"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group ifc-ds-info-item">
<!-- wp:ifc-ds/text {"content":"Conceito MEC","textType":"body","weight":"bold","color":"primary"} /-->
<!-- wp:ifc-ds/text {"content":"4","textType":"body","weight":"regular","color":"neutral"} /-->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->
<!-- /wp:ifc-ds/container -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group">
<!-- wp:ifc-ds/text {"content":"Sobre o curso","textType":"subtitle","weight":"semibold","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"O Curso de Sistemas de Informação tem seu foco voltado para a formação do profissional que irá desenvolver ou gerenciar sistemas aplicativos. Forma profissionais aptos ao planejamento, aquisição e gerenciamento de serviços e recursos da Tecnologia da Informação e Computação, aplicados ao desenvolvimento e à evolução de sistemas e infraestruturas de automatização dos processos organizacionais.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Entre os objetivos do curso estão preparar profissionais para identificar as necessidades das organizações, criar e gerir soluções tecnológicas, desenvolver sistemas informatizados para organizar os fluxos de informação das empresas. Além disso, colaborar na formação de profissionais éticos, críticos, autônomos aptos a analisar, desenvolver sistemas e propor aperfeiçoamento de sistemas já em funcionamento, gerenciar equipes de desenvolvimento e de produção e colocar em operação planos diretores de automação nos mais variados níveis.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group">
<!-- wp:ifc-ds/text {"content":"Mercado de trabalho e atuação","textType":"subtitle","weight":"semibold","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"O profissional egresso deste curso pode atuar tanto na aquisição, desenvolvimento e gerenciamento de serviços e recursos da tecnologia da informação quanto no desenvolvimento e evolução de sistemas e infraestruturas para o uso em processos organizacionais.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Os egressos são capaz de identificar as necessidades das organizações, criar e gerir soluções tecnológicas, desenvolver sistemas informatizados para organizar os fluxos de informação das empresas. Além disso, deve ser um profissional ético, crítico, autônomo, apto a analisar e propor aperfeiçoamento de sistemas já em funcionamento, gerenciar equipes de desenvolvimento e de produção e colocar em operação planos diretores de automação nos mais variados níveis.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group">
<!-- wp:ifc-ds/text {"content":"Grades Curriculares","textType":"subtitle","weight":"semibold","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"É fundamental que todos os estudantes fiquem atentos ao Projeto Político Pedagógico (PPP) específico do seu período de ingresso, pois ele é o guia oficial para a sua formação. Para os novos alunos (ingressantes a partir de 2023), as diretrizes seguem o PPP mais recente do curso, cujos detalhes e sequenciamento de disciplinas podem ser conferidos diretamente na matriz curricular atualizada.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Já os alunos que ingressaram entre os anos de 2019 e 2022 devem seguir rigorosamente o projeto pedagógico estabelecido para aquele intervalo, consultando sua respectiva matriz para organizar o fluxo de matérias por semestre. Por fim, para aqueles que iniciaram o curso entre 2012 e 2018, vigora um PPP específico para esses anos; caso identifiquem disciplinas que não são mais ofertadas regularmente no sistema, orientamos que procurem a Coordenação do Curso para verificar a possibilidade de solicitar uma turma especial ou alinhar as devidas equivalências acadêmicas.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:group -->
<div class="wp-block-group ifc-ds-ppp-links">
<!-- wp:ifc-ds/link {"label":"Plano Político Pedagógico - Atual","url":"#","type":"neutral","size":"small","weight":"regular"} /-->
<!-- wp:ifc-ds/link {"label":"Plano Político Pedagógico - 2019 a 2022","url":"#","type":"neutral","size":"small","weight":"regular"} /-->
<!-- wp:ifc-ds/link {"label":"Plano Político Pedagógico - 2012 a 2018","url":"#","type":"neutral","size":"small","weight":"regular"} /-->
</div>
<!-- /wp:group -->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group">
<!-- wp:ifc-ds/text {"content":"Forma de ingresso","textType":"subtitle","weight":"semibold","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"O ingresso nos cursos superiores do IFC é realizado 50% pelo ENEM/SISU e 50% por meio do Vestibular Unificado (parceria com a UFSC e IFSC). Acompanhe aqui para saber mais sobre a forma de ingresso. O IFC também possui o edital de Cadastro de Reserva, que consiste em uma lista de classificação, da qual poderão ser convocados(as) candidatos(as) para preenchimento de vagas que surgirem, até um mês após o início das aulas, após esgotadas as chamadas via Sisu e Vestibular.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group">
<!-- wp:ifc-ds/text {"content":"Informações legais","textType":"subtitle","weight":"semibold","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Este curso é reconhecido pelo MEC por meio da portaria nº 588, 22 de outubro de 2014. É necessário que os alunos ingressantes no curso tenham o ensino médio completo.","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group">
<!-- wp:ifc-ds/text {"content":"Contato","textType":"subtitle","weight":"semibold","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"E-mail: sistemasdeinformacao.grad.camboriu@ifc.edu.br","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
<!-- wp:ifc-ds/text {"content":"Coordenador: Rafael de Moura Speroni","textType":"body","weight":"regular","alignment":"justify","color":"neutral"} /-->
</section>
<!-- /wp:group -->
</div>
<!-- /wp:group -->
<!-- /wp:ifc-ds/layout-container -->
