<?php

function theme_enqueue_styles() {
	wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css' );

	wp_enqueue_script('jquery');
	wp_enqueue_script( 'maps', get_template_directory_uri() . '/js/maps-api.js', array(), '1', true );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

// Data
add_action('init', 'create_post_type_data');
 function create_post_type_data() {
    $args = array(
        'labels' => array(
			'name' => __('Map Data', 'post type general name'),
			'singular_name' => __('Data', 'post type singular name'),
			'add_new' => __('Add New Data', 'post type item'),
			'add_new_item' => __('Add New Data'),
			'edit' => __( 'Edit' ),
			'edit_item' => __('Edit Data'),
			'new_item' => __('New Data'),
			'view_item' => __('View Data'),
			'search_items' => __('Search Data'),
			'not_found' =>  __('Nothing found in the Database.'),
			'not_found_in_trash' => __('Nothing found in Trash'),
          'Parent' => 'Data'
        ),
        'menu_icon' => 'dashicons-calendar-alt',
        'description' => __( 'This is the example slide' ),
        'public' => true,
        'publicly_queryable' => true,
        'show_in_nav_menus' => true,
        'show_ui' => true,
        'taxonomies' => array('data_categories'),
        'query_var' => true,
        'has_archive' => true,
        'rewrite' => array("slug" => "data", 'with_front' => false),
        'capability_type' => 'post',
        'hierarchical' => true,
        'supports' => array( 'title', 'editor', 'author', 'excerpt', 'revisions', 'sticky', 'thumbnail', 'comments'),
        'capabilities' => array(
            'publish_posts' => 'publish_posts',
            'edit_posts' => 'publish_posts',
            'edit_others_posts' => 'publish_posts',
            'delete_posts' => 'publish_posts',
            'delete_others_posts' => 'publish_posts',
            'read_private_posts' => 'publish_posts',
            'edit_post' => 'publish_posts',
            'delete_post' => 'publish_posts',
            'read_post' => 'publish_posts',
            'order_post' => 'publish_posts',
        ),

   );

   register_post_type( 'data', $args );

   flush_rewrite_rules();

}
