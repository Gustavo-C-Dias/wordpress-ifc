<?php
get_header();
?>

<main id="main" class="site-main">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post();
            if (is_singular()) :
                the_content();
            else :
                ?>
                <article <?php post_class(); ?>>
                    <?php the_title('<h2><a href="' . esc_url(get_permalink()) . '">', '</a></h2>'); ?>
                    <?php the_excerpt(); ?>
                </article>
                <?php
            endif;
        endwhile;

        the_posts_navigation();
    else :
        ?>
        <div class="no-results">
            <h1><?php _e('Nada encontrado', 'ifc-ds'); ?></h1>
            <p><?php _e('Parece que nada foi encontrado neste local.', 'ifc-ds'); ?></p>
        </div>
        <?php
    endif;
    ?>
</main>

<?php
get_footer();
