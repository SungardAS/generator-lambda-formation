'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

var checkFiles = function () {
  it('creates files', function () {
    assert.file([
      'lib/resources/test/index.js',
      'lib/resources/test/create.js',
      'lib/resources/test/update.js',
      'lib/resources/test/delete.js'
    ]);
  });
};

describe('generator-lambda-formation:resource', function () {
  describe('with prompt', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/resource'))
        .withPrompts({resourceName: 'test'})
        .on('end', done);
    });
    checkFiles();
  });

  describe('with argument', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/resource'))
        .withArguments('test')
        .on('end', done);
    });

    checkFiles();
  });
});
