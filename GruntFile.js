const sass = require('node-sass');

module.exports = function(grunt) {

	grunt.initConfig({
			sass: {
				options: {
					implementation: sass,
					sourceMap: false
				},
				dist: {
					files: {
						'dist/css/example.css': 'src/scss/example.scss'
					}
				}
			},
			postcss: {
				options: {
					map: false, // inline sourcemaps
			
					processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
					require('cssnano')() // minify the result
					]
				},
				dist: {
					files: {
						'dist/css/example.min.css': 'dist/css/example.css'
					}
				}
			},
			clean: {
				dist: ['dist/**/*.css'] // Clean all css
			}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('default', ['clean', 'sass', 'postcss']);

};
