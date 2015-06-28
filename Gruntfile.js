module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            build: {
                src: ['**', '!build/**', '!node_modules/**',
                    '!Gruntfile.js', '!ngrok', '!package.json',
                    '!README.md', '!TimelineBeforeOptimizations',
                    '!**/*.css', '!**/*.js', '!**/*.html',
                    '!views/images/pizzeria.jpg',
                    '!img/profilepic.jpg'
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
                        '!Gruntfile.js'
                    ],
                    dest: 'build/',
                    expand: true
                }]
            }
        },
        responsive_images: {
            pizzeria: {
                options: {
                    engine: 'im',
                    sizes: [{
                        rename: false,
                        width: 100,
                        quality: 90
                    }]
                },
                files: {

                    'build/views/images/pizzeria.jpg': 'views/images/pizzeria.jpg',

                }
            },
            logo: {
                options: {
                    engine: 'im',
                    sizes: [{
                        rename: false,
                        width: 70,
                        quality: 90
                    }]
                },
                files: {

                    'build/img/profilepic.jpg': 'img/profilepic.jpg',

                }
            }
        },
        imagemin: {
            images: {
                options: { // Target options
                    optimizationLevel: 3,
                    progressive: false,
                    interlaced: false
                },
                files: { // Dictionary of files
                    'build/views/images/pizzeria.jpg': 'build/views/images/pizzeria.jpg',
                    'build/img/profilepic.jpg': 'build/img/profilepic.jpg'
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                expand: true,
                cwd: 'build/',
                src: ['**/*',
                ],
                dest: 'build/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.registerTask('default', ['clean',
        'copy',
        'htmlmin:html',
        'cssmin:css',
        'uglify:js',
        'responsive_images',
        'imagemin'//,
        //'compress'
    ]);
};
