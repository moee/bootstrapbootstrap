module.exports = function(grunt) {
    grunt.initConfig({
      uglify: {
        build: {
          files: {
            'public/js/min.js':
                [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/angular/angular.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js'
                ]
          }
        }
      },
      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'public/css/min.css':
            [
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'bower_components/bootstrap/dist/css/bootstrap-theme.css',
            ]
          }
        }
      },
        copy: {
          main: {
            files: [
              {
                expand: true,
                flatten: true,
                src: ['bower_components/bootstrap/dist/fonts/*'],
                dest: 'public/fonts',
                filter: 'isFile'
               },
            ],
          },
        },
    connect: {
        server: {
            options: {
                keepalive: true,
                livereload: true,
                port: 8000,
                base: 'public/', 
            }
        }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        files: ['**/*.css'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ["uglify", "cssmin", "copy"]);
    grunt.registerTask('default', ["build", "connect", "watch"]);
}
