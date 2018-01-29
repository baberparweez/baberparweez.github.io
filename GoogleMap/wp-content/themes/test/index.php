<?php

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

	    <div id="map"></div>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php
	$url = get_stylesheet_directory_uri().'/json-posts.php';
	//  Initiate curl
	$ch = curl_init();
	// Disable SSL verification
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	// Will return the response, if false it print the response
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// Set the url
	curl_setopt($ch, CURLOPT_URL,$url);
	// Execute
	$result=curl_exec($ch);
	// Closing
	curl_close($ch);

	$json = json_decode($result);
	$json = json_encode($json);

	echo '<script>var map_json = '.$json.';</script>';
?>

<?php get_footer(); ?>
