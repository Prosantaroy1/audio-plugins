<?php
/**
 * Plugin Name: Audio Html Player
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}

// Constant
define('AudioPP_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('AudioPP_DIR_URL', plugin_dir_url(__FILE__));
define('AudioPP_DIR_PATH', plugin_dir_path(__FILE__));

if (!class_exists('AudioPPPlugin')) {
	class AudioPPPlugin
	{
		function __construct()
		{
			add_action('init', [$this, 'onInit'], 5);
			add_filter('manage_book_posts_columns', [$this, 'set_custom_edit_book_columns']);
			add_action('manage_book_posts_custom_column', [$this, 'custom_book_column'], 10, 2);
			add_shortcode('highlight', [$this, 'my_highlight_shortcode']);
		}

		function onInit()
		{
			register_block_type(__DIR__ . '/build');

			// 🔹 Register the CPT
			register_post_type('book', [
				'label' => __('books', 'b-blocks'),
				'labels' => [
					'name' => __('Announcements', 'TEXTDOMAINHERE'),
					'singular_name' => __('Announcement', 'TEXTDOMAINHERE'),
					'add_new' => __('Add New', 'TEXTDOMAINHERE'),
					'add_new_item' => __('Add New Announcement', 'TEXTDOMAINHERE'),
					'edit_item' => __('Edit Announcement', 'TEXTDOMAINHERE'),
					'new_item' => __('New Announcement', 'TEXTDOMAINHERE'),
					'view_item' => __('View Announcement', 'TEXTDOMAINHERE'),
					'view_items' => __('View Announcements', 'TEXTDOMAINHERE'),
					'search_items' => __('Search Announcements', 'TEXTDOMAINHERE'),
					'not_found' => __('No Announcements found.', 'TEXTDOMAINHERE'),
					'not_found_in_trash' => __('No Announcements found in Trash.', 'TEXTDOMAINHERE'),
					'parent_item_colon' => __('Parent Announcements:', 'TEXTDOMAINHERE'),
					'all_items' => __('All Announcements', 'TEXTDOMAINHERE'),
					'archives' => __('Announcement Archives', 'TEXTDOMAINHERE'),
					'attributes' => __('Announcement Attributes', 'TEXTDOMAINHERE'),
					'insert_into_item' => __('Insert into Announcement', 'TEXTDOMAINHERE'),
					'uploaded_to_this_item' => __('Uploaded to this Announcement', 'TEXTDOMAINHERE'),
					'featured_image' => __('Featured Image', 'TEXTDOMAINHERE'),
					'set_featured_image' => __('Set featured image', 'TEXTDOMAINHERE'),
					'remove_featured_image' => __('Remove featured image', 'TEXTDOMAINHERE'),
					'use_featured_image' => __('Use as featured image', 'TEXTDOMAINHERE'),
					'menu_name' => __('Announcements', 'TEXTDOMAINHERE'),
					'filter_items_list' => __('Filter Announcement list', 'TEXTDOMAINHERE'),
					'filter_by_date' => __('Filter by date', 'TEXTDOMAINHERE'),
					'items_list_navigation' => __('Announcements list navigation', 'TEXTDOMAINHERE'),
					'items_list' => __('Announcements list', 'TEXTDOMAINHERE'),
					'item_published' => __('Announcement published.', 'TEXTDOMAINHERE'),
					'item_published_privately' => __('Announcement published privately.', 'TEXTDOMAINHERE'),
					'item_reverted_to_draft' => __('Announcement reverted to draft.', 'TEXTDOMAINHERE'),
					'item_scheduled' => __('Announcement scheduled.', 'TEXTDOMAINHERE'),
					'item_updated' => __('Announcement updated.', 'TEXTDOMAINHERE'),
					'item_link' => __('Announcement Link', 'TEXTDOMAINHERE'),
					'item_link_description' => __('A link to an announcement.', 'TEXTDOMAINHERE'),

				],
				'public' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'show_in_rest' => true,
				'menu_position' => 81,
				'menu_icon' => 'dashicons-megaphone',
				'supports' => array('title', 'editor', 'revisions'),
				'template' => [['b-blocks/audio-html-player']],
				'template_lock' => 'all',
				'show_in_nav_menus' => true,
				'show_in_admin_bar' => true,
			]);
			register_taxonomy('book_author', 'book', [
				'label' => __('Book Authors', 'b-blocks'),
				'public' => true,
				'hierarchical' => false,
				'show_admin_column' => false,
				'show_in_rest' => true,
			]);



		}
		function set_custom_edit_book_columns($columns)
		{
			$columns['book_author'] = __('Author', 'b-blocks');
			$columns['publisher'] = __('Publisher', 'b-blocks');
			$columns['view'] = __('View', 'b-blocks');

			return $columns;
		}
		function custom_book_column($column, $post_id)
		{
			switch ($column) {

				case 'book_author':
					$terms = get_the_term_list($post_id, 'book_author', '', ',', '');
					if (is_string($terms))
						echo $terms;
					else
						_e('Unable to get author(s)', 'b-blocks');
					break;

				case 'publisher':
					echo get_post_meta($post_id, 'publisher', true);
					break;
				case 'view':
					echo '<a href="' . get_permalink($post_id) . '" target="_blank">' . __('View', 'b-blocks') . '</a>';
					break;
			}
		}

		// Highlight Shortcode
		function my_highlight_shortcode($atts = [], $content = null)
		{
			$atts = shortcode_atts(
				array(
					'color' => 'red', // ডিফল্টে ফাঁকা
				),
				$atts,
				'highlight'
			);

			// Nested shortcode সাপোর্ট দিবে
			$content = do_shortcode($content);

			// যদি title থাকে তবে attribute বানাবে
			$title_attr = $atts['color'] ? ' color="' . esc_attr($atts['color']) . '"' : 'red';

			// HTML return
			return '<span' . $title_attr . ' style="background:yellow; padding:2px 4px;">' . esc_html($content) . '</span>';
		}




	}
	new AudioPPPlugin();
}