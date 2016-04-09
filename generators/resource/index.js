'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('resourceName', {type: String, required: false});
  },
  prompting: {

    askForProjectName: function () {
      var done = this.async();

      if (this.resourceName) {
        return done();
      }

      var prompts = [{
        name: 'resourceName',
        message: 'What\'s the name of your resource?'
      }];

      this.prompt(prompts, function (props) {
        this.resourceName = props.resourceName;

        done();
      }.bind(this));
    }
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('resource', '_index.js'),
      this.destinationPath('lib', 'resources', this.resourceName, 'index.js'),
      {resourceName: this.resourceName}
    );
    this.fs.copyTpl(
      this.templatePath('resource/_create.js'),
      this.destinationPath('lib', 'resources', this.resourceName, 'create.js'),
      {resourceName: this.resourceName}
    );
    this.fs.copyTpl(
      this.templatePath('resource', '_update.js'),
      this.destinationPath('lib', 'resources', this.resourceName, 'update.js'),
      {resourceName: this.resourceName}
    );
    this.fs.copyTpl(
      this.templatePath('resource', '_delete.js'),
      this.destinationPath('lib', 'resources', this.resourceName, 'delete.js'),
      {resourceName: this.resourceName}
    );
  }

});
