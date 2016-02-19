var handler = require('lambda-formation').resource.create;
var util = require('lambda-formation').util;

/*
  Here is a skelton of what the create function might look like.
  Change to fit your needs.
*/
var create = function (err, event, context) {
  if (err) {
    return util.done(err);
  }

  /*
    Here is where CREATE code should be placed.

    Always call util.done when finished to end the lambda
    execution.

    util.done(err,event,context, data, physicalResourceId)
  */

  util.done('CREATE NOT IMPLEMENTED', event, context, {}, 'ID');
};

/* Do not change this function */
module.exports.handler = function (event, context) {
  handler.apply(this, [event, context, create]);
};

