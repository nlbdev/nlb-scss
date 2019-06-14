/*jshint esversion: 6 */
const sass = require('node-sass');

module.exports = function (grunt) {

	grunt.initConfig({
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
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
				use: [
					require('precss')(),
				],
				map: false, // inline sourcemaps

				processors: [
  					require('postcss-import')(),
					require('autoprefixer')(),
					require('css-mqpacker')(),
					require('cssnano')()
				]
			},
			dist: {
				files: {
					'dist/css/ebok.min.css': 'dist/css/ebok.css',
					'dist/css/epub.min.css': 'dist/css/epub.css',
					'dist/css/html.min.css': 'dist/css/html.css',
					'dist/css/ncc.min.css': 'dist/css/ncc.css',
					'dist/css/nettleserbok.min.css': 'dist/css/nettleserbok.css'
				}
			}
		},
		clean: {
			dist: ['dist/css/*',] // Clean all css
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
	
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'sass', 'postcss']);
};
