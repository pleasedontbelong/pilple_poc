'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    bump: {
      options: {
        push: false
      }
    }
  });
};
