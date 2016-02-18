'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-lambda-formation:project', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/project'))
      .withPrompts({projectName: 'test'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'test/.gitignore',
      'test/index.js',
      'test/LICENSE',
      'test/package.json',
      'test/README.md',
      'test/lib/resources/README.md'
    ]);
  });
});
