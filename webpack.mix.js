let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// A mix le pasamos el tipo de archivo y un array con los archivos a 
// compilar en caso que sea mas de uno caso contrario se pasa simplemente el archivo derecho,
// por ultimo el nombre del archivo resultante 

mix.style(['resources/assets/template/css/font-awesome.mi.css',
					 'resources/assets/template/css/simple-line-icons.mi.css',
					 'resources/assets/template/css/style.mi.css'], 
					 'public/css/template.css')
	 .scripts(['resources/assets/template/js/jquery.min.js',
	 					 'resources/assets/template/js/popper.min.js',
	 					 'resources/assets/template/js/bootstrap.min.js',
	 					 'resources/assets/template/js/Chart.min.js',
	 					 'resources/assets/template/js/pace.min.js',
	 					 'resources/assets/template/js/template.js'], 
	 					 'public/js/template.js');
