'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    browserify: {
      options: {
        transform: ['babelify'],
        watch: true,
        browserifyOptions: {
          debug: true,
        }
      },
      main: {
        src: 'src/main/index.js',
        dest: 'public/js/main.js'
      }
    },
    watch: {}
  });

  grunt.registerTask('dev', ['browserify', 'watch']);
  grunt.registerTask('default', ['browserify']);

};
