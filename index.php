<?php
/*
Plugin Name: Kalispell SVG Map
*/

global $wpdb;

include('shortcode.php');

function svg_scripts() {
/*
	$posts_array['rook'] = get_post( 122 );
	$posts_array['rook']->image = get_the_post_thumbnail_url(122, 'medium');
	$posts_array['knight'] = get_post( 122 );
	$posts_array['knight']->image = get_the_post_thumbnail_url(122, 'medium');
*/
	if(!is_page(2))
		return false;
	
	$posts_array['gnp'] = get_post( 5062 );
	$posts_array['gnp']->image = get_the_post_thumbnail_url(5062, 'medium');
	$posts_array['airport'] = get_post( 5338 );
	$posts_array['airport']->image = get_the_post_thumbnail_url(5338, 'medium');
	$posts_array['bm'] = get_post( 4716 );
	$posts_array['bm']->image = get_the_post_thumbnail_url(4716, 'medium');
	$posts_array['golf'] = get_post( 307 );
	$posts_array['golf']->image = get_the_post_thumbnail_url(307, 'medium');
	$posts_array['btail'] = get_post( 4716 );
	$posts_array['btail']->image = get_the_post_thumbnail_url(4716, 'large');
	$posts_array['cyclist'] = get_post( 255 );
	$posts_array['cyclist']->image = get_the_post_thumbnail_url(255, 'medium');
	$posts_array['fl'] = get_post( 205 );
	$posts_array['fl']->image = get_the_post_thumbnail_url(205, 'medium');
	$posts_array['hiker'] = get_post( 368 );
	$posts_array['hiker']->image = get_the_post_thumbnail_url(368, 'medium');
	$posts_array['car'] = get_post( 244 );
	$posts_array['car']->image = get_the_post_thumbnail_url(244, 'medium');
	$posts_array['indian'] = get_post( 5037 );
	$posts_array['indian']->image = get_the_post_thumbnail_url(5037, 'large');
	$posts_array['downtown1'] = get_post( 5121 );
	$posts_array['downtown1']->image = get_the_post_thumbnail_url(5121, 'medium');
	$posts_array['info'] = get_post( 5587 );
	$posts_array['info']->image = get_the_post_thumbnail_url(5587, 'medium');
	$posts_array['hotel'] = get_post( 5466 );
	$posts_array['hotel']->image = get_the_post_thumbnail_url(5466, 'medium');
	$posts_array['restaurant'] = get_post( 4705 );
	$posts_array['restaurant']->image = get_the_post_thumbnail_url(4705, 'medium');

	
	wp_register_script('tippy', 'https://unpkg.com/tippy.js@3/dist/tippy.all.min.js', array('jquery'), false, true);
	wp_register_script('my_tippy', plugin_dir_url(__FILE__) . 'js/tippy.globals.js', array('tippy', 'jquery'), false, true);
	wp_register_script('snap', plugin_dir_url(__FILE__) . 'js/snap.svg.min.js', array('jquery'), false, true);
	wp_register_script('my_snap', plugin_dir_url(__FILE__) . 'js/main.js', array('jquery', 'snap'), false, true);
	wp_enqueue_script('tippy');
	wp_enqueue_script('my_tippy');
	wp_enqueue_script('snap');
	wp_enqueue_script('my_snap');
	wp_localize_script('my_snap', 'path', array('url' => plugins_url('kalispell-map')));
	
	wp_localize_script('my_snap', 'theLoop', array('post' => $posts_array));
	

	wp_register_style('kalispell_map_styles', plugins_url('styles/styles.css', __FILE__));
	wp_enqueue_style('kalispell_map_styles');
	
}
	add_action( 'wp_enqueue_scripts', 'svg_scripts' );

?>

