'use strict';
var mkdirp = require('mkdirp');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('projectName', {type: String, required: false});
  },
  prompting: function () {
    var self = this;
    if (!this.projectName) {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: ''
      }).then(function (answers) {
        self.projectName = answers.projectName;
        done();
      });
    }
  },
  writing: function () {
    mkdirp.sync(this.destinationPath(this.projectName, 'dist'));

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(this.projectName, 'package.json'),
      {projectName: this.projectName}
    );

    this.fs.copyTpl(
      this.templatePath('_readme.md'),
      this.destinationPath(this.projectName, 'README.md'),
      {projectName: this.projectName}
    );

    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath(this.projectName, '.gitignore'),
      {projectName: this.projectName}
    );

    this.fs.copyTpl(
      this.templatePath('_LICENSE'),
      this.destinationPath(this.projectName, 'LICENSE')
    );

    this.fs.copyTpl(
      this.templatePath('_index.js'),
      this.destinationPath(this.projectName, 'index.js')
    );

    this.fs.copyTpl(
      this.templatePath('_resources_readme.md'),
      this.destinationPath(this.projectName, 'lib/resources/README.md')
    );
  },

  install: function () {
    var origDir = process.cwd();
    var npmdir = path.join(process.cwd(), this.projectName);
    process.chdir(npmdir);
    this.installDependencies({
      callback: function () {
        process.chdir(origDir);
      }
    });
  }
});
