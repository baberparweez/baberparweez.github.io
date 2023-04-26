<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<title><?php wp_title(); ?></title>
	<meta http-equiv="cleartype" content="on">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
	<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyDXJ73iRNTW9t8AHilgimcFqRMBncJbLwg"></script>
	<script>var siteUrl = "<?php echo get_stylesheet_directory_uri(); ?>";</script>
</head>

<body <?php body_class(); ?>>
<div class="overflow-hidden">
    <div id="page" class="site">
    	<header id="masthead" class="mobile-transform site-header"></header><!-- .site-header -->
