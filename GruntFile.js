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
					'dist/css/nettleserbok.css': 'src/scss/nettleserbok.scss',
					'docs/assets/css/styles.css': 'src/scss/docs.scss'
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
					'dist/css/nettleserbok.min.css': 'dist/css/nettleserbok.css',
				}
			}
		},
		copy: {
			main: {
			  files: [
				{src: ['src/js/rb_smil_emulator.js'], dest: 'dist/js/rb_smil_emulator.js'},
				// {src: ['src/js/rb_smil_emulator.js'], dest: 'dist/tests/Nettleserbok/628810/rb_smil_emulator.js'},
				// {src: ['src/js/rb_smil_emulator.js'], dest: 'dist/tests/Nettleserbok/852345/rb_smil_emulator.js'},
			  ],
			},
		},
		clean: {
			dist: ['dist/css/*','dist/js/*'] // Clean all
		},
		watch: {
			scripts: {
				files: ['src/scss/*.scss','src/js/*.js'],
				tasks: ['default'],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'sass', 'postcss', 'copy']);
};
