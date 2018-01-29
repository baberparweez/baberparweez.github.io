<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'test');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'X0+Z+%Zi#K@gM9Q@!ky?|T #Dl>M>?eNi^b&?$L(lV8G2T#!UPgKWRG?t!;G3&MI');
define('SECURE_AUTH_KEY',  '*U{(P;<1zD|mhm1_2n1j.]SCs1d =y7 tu,RaO-|#w7^jho{$DCorst@G!-o+v>q');
define('LOGGED_IN_KEY',    '_(e#e(O}&*j@H_JlD[SzP:b:0q}=kOr^u:E(3I,RQ%1]5<8-CC,G#gmBsu(vB>NC');
define('NONCE_KEY',        'gn *S>X6jfb)v{|[kv(]R2/4ymo6 !mK}wc#C?NLwuo7JOgd>QSExRu&{=k%vycE');
define('AUTH_SALT',        'Xl2B8oi?AT9Z*4T7o>![a(yN9kI0J$}c}3>|=eok>KjE3}LN*duaHruLGp{u85:`');
define('SECURE_AUTH_SALT', 'g)9O6xQ%8oxH)JU/Ezg)XxRWM3/a;^gS9^v>ge:!(1(!;]E{`44oeO3z W!v^>+v');
define('LOGGED_IN_SALT',   'Q5-FV=QEWt>GkRFyJ3wZ16&ri#}%<)Da8SZsdl6%5>f;Eh@I#r;owAUTD`V*f<JG');
define('NONCE_SALT',       'p!|}uZ<2kBYLBh&-qlT8U4{KVw$_4W7r*;;Vv Jp]>yG|?5pS$|I:5.=Xl,bMuTm');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
