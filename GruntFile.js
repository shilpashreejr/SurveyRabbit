module.exports = function (grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'dest/js/surveyRabbit.min.js': ['src/js/surveyRabbitView.js', 'src/js/surveyRabbitController.js', 'src/js/surveyRabbitModel.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};