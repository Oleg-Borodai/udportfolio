module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            build: {
                src: ['**', '!build/**', '!node_modules/**',
                    '!Gruntfile.js', '!ngrok', '!package.json',
                    '!README.md', '!TimelineBeforeOptimizations',
                    '!**/*.css', '!**/*.js', '!**/*.html'
                ],
                dest: 'build',
                expand: true
            }
        },
        clean: ['build'],
        htmlmin: {
            html: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['**/*.html', '!node_modules/**', '!build/**'],
                    dest: 'build/'
                }]
            }
        },
        cssmin: {
            css: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['**/*.css', '!node_modules/**', '!build/**'],
                    dest: 'build/'
                }]
            }
        },
        uglify: {
            js: {
                files: [{
                    cwd: '.',
                    src: ['**/*.js', '!node_modules/**', '!build/**',
                          '!Gruntfile.js'],
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
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean', 'copy', 'htmlmin:html', 'cssmin:css', 'uglify:js']);
};
