'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        cucumberjs: {
            src: 'features',
            options: {
                format: 'pretty',
                steps: 'steps'
            }
        }
    });

    grunt.loadNpmTasks('grunt-cucumber');
    grunt.registerTask('tests', ['cucumberjs']);
}
