'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-lambda-formation:project', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/resource'))
      .withPrompts({resourceName: 'test'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'lib/resources/test/index.js',
      'lib/resources/test/create.js',
      'lib/resources/test/update.js',
      'lib/resources/test/delete.js'
    ]);
  });
});
