module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            build: {
                src: ['**', '!build/**', '!node_modules/**',
                      '!Gruntfile.js', '!ngrok', '!package.json',
                      '!README.md', '!TimelineBeforeOptimizations',
                      '!**/*.css', '!**/*.js'],
                dest: 'build',
                expand: true
            }
        },
        cssmin: {
            css: {
                files: [{
                    cwd: '.',
                    src: ['**/*.css', '!node_modules/**'],
                    dest:'build/',
                    expand: true
                }]
            }
        },
        uglify: {
            js: {
                files: [{
                    cwd: '.',
                    src: ['**/*.js', '!node_modules/**'],
                    dest: 'build/',
                    expand: true
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['copy', 'cssmin:css', 'uglify:js']);
};
