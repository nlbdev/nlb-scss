/*jshint esversion: 6 */

const sass = require('node-sass');

module.exports = function (grunt) {

	grunt.initConfig({
		sass: {
			options: {
				implementation: sass,
				sourceMap: false
			},
			dist: {
				files: {
					'dist/css/ebok.css': 'src/scss/ebok.scss',
					'dist/css/epub.css': 'src/scss/epub.scss',
					'dist/css/html.css': 'src/scss/html.scss',
					'dist/css/ncc.css': 'src/scss/ncc.scss',
					'dist/css/nettleserbok.css': 'src/scss/nettleserbok.scss'
				}
			}
		},
		postcss: { // postcss-scss required
			options: {
				map: false, // inline sourcemaps

				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
					require('cssnano')() // minify the result
				]
			},
			dist: {
				files: {
					'dist/css/ebok.css': 'src/scss/ebok.scss',
					'dist/css/epub.css': 'src/scss/epub.scss',
					'dist/css/html.css': 'src/scss/html.scss',
					'dist/css/ncc.css': 'src/scss/ncc.scss',
					'dist/css/nettleserbok.css': 'src/scss/nettleserbok.scss'
				}
			}
		},
		clean: {
			dist: ['dist/**/*.css'] // Clean all css
		},
		watch: {
			scripts: {
				files: ['src/scss/*.scss'],
				tasks: ['default'],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'sass']);
};
