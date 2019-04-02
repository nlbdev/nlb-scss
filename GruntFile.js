const sass = require('node-sass');

module.exports = function(grunt) {

  grunt.initConfig({
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {
					'css/example.css': 'scss/example.scss'
				}
			}
		}
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);

};
