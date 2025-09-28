<?php
/**
 * Plugin Name: Audio Html Player
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: audio-html-player
 */

// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}


if (function_exists('ahp_fs')) {
	ahp_fs()->set_basename(true, __FILE__);
} else {
	// Constant
	define('AudioPP_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
	define('AudioPP_DIR_URL', plugin_dir_url(__FILE__));
	define('AudioPP_DIR_PATH', plugin_dir_path(__FILE__));
	define('AudioPP_HAS_PRO', file_exists(dirname(__FILE__) . '/freemius/start.php'));

	if (!function_exists('ahp_fs')) {

		function ahp_fs()
		{
			global $ahp_fs;

			if (!isset($ahp_fs)) {

				if (AudioPP_HAS_PRO) {
					require_once dirname(__FILE__) . '/freemius/start.php';
				} else {
					require_once dirname(__FILE__) . '/freemius-lite/start.php';
				}

				$ahp_Config = array(
					'id' => '20939',
					'slug' => 'audio-html-player',
					'type' => 'plugin',
					'public_key' => 'pk_45f0fe62448c278911db62611f2cb',
					'is_premium' => true,
					'premium_suffix' => 'pro',
					'has_premium_version' => true,
					'has_addons' => false,
					'has_paid_plans' => true,
					'wp_org_gatekeeper' => 'OA7#BoRiBNqdf52FvzEf!!074aRLPs8fspif$7K1#4u4Csys1fQlCecVcUTOs2mcpeVHi#C2j9d09fOTvbC0HloPT7fFee5WdS3G',
					'trial' => array(
						'days' => 3,
						'is_require_payment' => false,
					),
					'menu' => array(
						'slug' => 'edit.php?post_type=book',
						'first-path' => 'edit.php?post_type=book&page=audio_player_Dashboard',
					),
				);

				$ahp_fs = AudioPP_HAS_PRO ? fs_dynamic_init($ahp_Config) : fs_lite_dynamic_init($ahp_Config);
			}

			return $ahp_fs;
		}

		ahp_fs();
		do_action('ahp_fs_loaded');
	}
	function audioIsPremium()
	{
		return AudioPP_HAS_PRO ? ahp_fs()->can_use_premium_code() : false;
	}

	if (!class_exists('AudioPPPlugin')) {
		class AudioPPPlugin
		{
			function __construct()
			{
				add_action('init', [$this, 'onInit'], 5);
				add_shortcode('book', [$this, 'psb_product_spotshortcode']);
				add_filter('manage_book_posts_columns', [$this, 'set_custom_edit_book_columns']);
				add_action('manage_book_posts_custom_column', [$this, 'psb_ManageCustomColumns'], 10, 2);
				add_action('admin_enqueue_scripts', [$this, 'psb_admin_enqueue_script']);
				//Admin
				add_action('admin_menu', [$this, 'add_audio_player_submenu']);
				add_action('admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
				// premiums
				add_action('wp_ajax_rasclPremiumChecker', [$this, 'rasclPremiumChecker']);
				add_action('wp_ajax_nopriv_rasclPremiumChecker', [$this, 'rasclPremiumChecker']);
				add_action('admin_init', [$this, 'registerSettings']);
				add_action('rest_api_init', [$this, 'registerSettings']);


			}

			function rasclPremiumChecker()
			{
				$nonce = sanitize_text_field(wp_unslash($_POST['_wpnonce'] ?? ''));

				if (!wp_verify_nonce($nonce, 'wp_ajax')) {
					wp_send_json_error('Invalid Request');
				}

				wp_send_json_success([
					'isPipe' => audioIsPremium()
				]);
			}

			function registerSettings()
			{
				register_setting('rasclUtils', 'rasclUtils', [
					'show_in_rest' => [
						'name' => 'rasclUtils',
						'schema' => ['type' => 'string']
					],
					'type' => 'string',
					'default' => wp_json_encode(['nonce' => wp_create_nonce('wp_ajax')]),
					'sanitize_callback' => 'sanitize_text_field'
				]);
			}


			function onInit()
			{
				register_block_type(__DIR__ . '/build');

				// 🔹 Register the CPT
				register_post_type('book', [
					'label' => __('book', 'audio-html-player'),
					'labels' => [
						'name' => __('Announcements', 'audio-html-player'),
						'singular_name' => __('Announcement', 'audio-html-player'),
						'add_new' => __('Add New', 'audio-html-player'),
						'add_new_item' => __('Add New Announcement', 'audio-html-player'),
						'edit_item' => __('Edit Announcement', 'audio-html-player'),
						'new_item' => __('New Announcement', 'audio-html-player'),
						'view_item' => __('View Announcement', 'audio-html-player'),
						'view_items' => __('View Announcements', 'audio-html-player'),
						'search_items' => __('Search Announcements', 'audio-html-player'),
						'not_found' => __('No Announcements found.', 'audio-html-player'),
						'not_found_in_trash' => __('No Announcements found in Trash.', 'audio-html-player'),
						'parent_item_colon' => __('Parent Announcements:', 'audio-html-player'),
						'all_items' => __('All Announcements', 'audio-html-player'),
						'archives' => __('Announcement Archives', 'audio-html-player'),
						'attributes' => __('Announcement Attributes', 'audio-html-player'),
						'insert_into_item' => __('Insert into Announcement', 'audio-html-player'),
						'uploaded_to_this_item' => __('Uploaded to this Announcement', 'audio-html-player'),
						'featured_image' => __('Featured Image', 'audio-html-player'),
						'set_featured_image' => __('Set featured image', 'audio-html-player'),
						'remove_featured_image' => __('Remove featured image', 'audio-html-player'),
						'use_featured_image' => __('Use as featured image', 'audio-html-player'),
						'menu_name' => __('Announcements', 'audio-html-player'),
						'filter_items_list' => __('Filter Announcement list', 'audio-html-player'),
						'filter_by_date' => __('Filter by date', 'audio-html-player'),
						'items_list_navigation' => __('Announcements list navigation', 'audio-html-player'),
						'items_list' => __('Announcements list', 'audio-html-player'),
						'item_published' => __('Announcement published.', 'audio-html-player'),
						'item_published_privately' => __('Announcement published privately.', 'audio-html-player'),
						'item_reverted_to_draft' => __('Announcement reverted to draft.', 'audio-html-player'),
						'item_scheduled' => __('Announcement scheduled.', 'audio-html-player'),
						'item_updated' => __('Announcement updated.', 'audio-html-player'),
						'item_link' => __('Announcement Link', 'audio-html-player'),
						'item_link_description' => __('A link to an announcement.', 'audio-html-player'),

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


			}


			function set_custom_edit_book_columns($columns)
			{
				unset($columns['date']);
				$columns['shortcode'] = 'ShortCode';
				$columns['date'] = 'Date';
				$columns['publisher'] = __('Publisher', 'b-blocks');

				return $columns;
			}

			function psb_ManageCustomColumns($column_name, $post_id)
			{
				if ($column_name == 'shortcode') {
					echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_id) . '">
						<input value="[book id=' . esc_attr($post_id) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_id) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
					  </div>';
				}
				if ($column_name == 'publisher') {
					echo 'Prosanta Roy';
				}
			}

			function psb_product_spotshortcode($atts)
			{

				$post_id = $atts['id'];
				$post = get_post($post_id);

				if (!$post) {
					return '';
				}

				if (post_password_required($post)) {
					return get_the_password_form($post);
				}

				switch ($post->post_status) {
					case 'publish':
						return $this->displayContent($post);

					case 'private':
						if (current_user_can('read_private_posts')) {
							return $this->displayContent($post);
						}
						return '';

					case 'draft':
					case 'pending':
					case 'future':
						if (current_user_can('edit_post', $post_id)) {
							return $this->displayContent($post);
						}
						return '';

					default:
						return '';
				}
			}

			function displayContent($post)
			{
				$blocks = parse_blocks($post->post_content);
				return render_block($blocks[0]);
			}

			function psb_admin_enqueue_script()
			{
				global $typenow;

				if ('book' === $typenow) {
					wp_enqueue_script('shortcode-js', AudioPP_DIR_URL . './build/shortcode.js', [], AudioPP_VERSION, true);
					wp_enqueue_style('shortcode-css', AudioPP_DIR_URL . './build/shortcode.css', AudioPP_VERSION);

				}
			}

			//admin
			function add_audio_player_submenu()
			{
				add_submenu_page(
					'edit.php?post_type=book',
					'Get Helper',
					'Get Helper',
					'manage_options',
					'audio_player_Dashboard',
					[$this, 'audio_player_Dashboard_page'],
					
				);
			}

			// Dashboard Menu
			function audio_player_Dashboard_page()
			{
				?>
				<div id='AudioDashboard' data-info='<?php echo esc_attr(wp_json_encode([
					'version' => AudioPP_VERSION,
					'isPremium' => audioIsPremium(),
					'hasPro' => AudioPP_HAS_PRO,
				])); ?>'></div>
				<?php
			}
			function adminEnqueueScripts($hook)
			{

				if ('book_page_audio_player_Dashboard' === $hook) {
					wp_enqueue_script('audio-admin-script', AudioPP_DIR_URL . './build/admin-dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n", "lodash"], AudioPP_VERSION, true);
					wp_enqueue_style('audio-admin-style', AudioPP_DIR_URL . './build/admin-dashboard.css', false, AudioPP_VERSION);
					wp_set_script_translations('audio-admin-dashboard', 'audio-html-player', AudioPP_DIR_PATH . 'languages');

				}
			}

		}
		new AudioPPPlugin();
	}
}