<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="barra-brasil" style="background:#7F7F7F; height: 20px; padding:0 0 0 10px; display:block;">
    <ul id="menu-barra-temp" style="list-style:none; margin:0; padding:0;">
        <li style="display:inline; float:left; padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED;">
            <a href="http://brasil.gov.br" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Portal do Governo Brasileiro</a>
        </li>
        <li>
            <a href="http://epwg.governoeletronico.gov.br/barra/atualize.html" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Atualize sua Barra de Governo</a>
        </li>
    </ul>
</div>

<?php echo do_blocks('<!-- wp:ifc-ds/header /-->'); ?>
