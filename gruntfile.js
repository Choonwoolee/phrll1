module.exports = function(grunt) {

  grunt.initConfig({
	nggettext_extract: {
    pot: {
      files: {
        'po/template.pot': ['www/*.html']
      }
    }
  },
  nggettext_compile: {
    all: {
      files: {
        'www/js/translations.js': ['po/*.po']
      }
    },
  }

});

	grunt.loadNpmTasks('grunt-angular-gettext');
  grunt.registerTask('default', ['nggettext_extract','nggettext_compile']);
};
