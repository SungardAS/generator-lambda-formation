'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('projectName', {type: String, required: false});
  },
  prompting: {

    askForProjectName: function () {
      var done = this.async();

      if (this.projectName) {
        return done();
      }

      var prompts = [{
        name: 'projectName',
        message: 'What\'s the name of your project?'
      }];

      this.prompt(prompts, function (props) {
        this.projectName = props.projectName;

        done();
      }.bind(this));
    }
  },
  writing: function () {
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
