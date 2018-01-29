<?php

require_once('../../../wp-blog-header.php');

// wordpress loop from WP_Query
// [{"id":48,"title":"Helgelandskysten","longitude":"12.63376","latitude":"66.02219"},{"id":46,"title":"Tysfjord","longitude":"16.50279","latitude":"68.03515"},{"id":44,"title":"Sledehunds-ekspedisjon","longitude":"7.53744","latitude":"60.08929"},{"id":43,"title":"Amundsens sydpolferd","longitude":"11.38411","latitude":"62.57481"},{"id":39,"title":"Vikingtokt","longitude":"6.96781","latitude":"60.96335"},{"id":6,"title":"Tungtvann- sabotasjen","longitude":"8.49139","latitude":"59.87111"}];


$args = array(
    'numberposts' => -1,
    'post_type' => 'data'
);

$posts = get_posts($args);

foreach($posts as $post){
    $post->longitude = get_field("longitude");
    $post->latitude = get_field("latitude");
    $post->email_address = get_field("email_address");
    $post->tel_no = get_field("tel_no");

    $remove = array('post_author', 'post_date_gmt', 'post_status', 'post_date', 'post_excerpt', 'comment_status', 'ping_status', 'post_password', 'to_ping', 'pinged', 'post_modified', 'post_modified_gmt', 'post_content_filtered', 'post_parent', 'guid', 'menu_order', 'post_type', 'post_mime_type', 'comment_count', 'filter');
    foreach($remove as $item) {
        unset($post->$item);
    }
}

// Create JSON
$json = json_encode($posts);

// Set JSON header
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

// Output
echo $json;
