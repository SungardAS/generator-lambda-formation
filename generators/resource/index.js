'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('resourceName', {type: String, required: false});
  },
  prompting: function () {
    var self = this;
    if (!this.resourceName) {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'resourceName',
        message: 'Resource name',
        default: ''
      }).then(function (answers) {
        self.resourceName = answers.resourceName;
        done();
      });
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
