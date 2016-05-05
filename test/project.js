'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

var checkFiles = function () {
  it('creates files', function () {
    assert.file([
      'test/dist',
      'test/.gitignore',
      'test/index.js',
      'test/LICENSE',
      'test/package.json',
      'test/README.md',
      'test/lib/resources/README.md'
    ]);
  });
};

describe('generator-lambda-formation:project', function () {
  describe('with prompt', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/project'))
        .withPrompts({projectName: 'test'})
        .toPromise();
    });
    checkFiles();
  });

  describe('with argument', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/project'))
        .withArguments('test')
        .toPromise();
    });
    checkFiles();
  });
});
