var handler = require('lambda-formation').resource.update;
var util = require('lambda-formation').util;

/*
  Here is a skelton of what the update function might look like.
  Change to fit your needs.
*/
var update = function (err, event, context) {
  if (err) {
    return util.done(err);
  }

  /*
    Here is where UPDATE code should be placed.

    Always call util.done when finished to end the lambda
    execution.

    util.done(err,event,context, data, physicalResourceId)
  */

  util.done('UPDATE NOT IMPLEMENTED', event, context, {}, 'ID');
};

/* Do not change this function */
module.exports.handler = function (event, context) {
  handler.apply(this, [event, context, update]);
};

