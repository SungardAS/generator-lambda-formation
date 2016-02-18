var handler = require('lambda-formation').resource.delete;
var util = require('lambda-formation').util;

/*
  Here is a skelton of what the delete function might look like.
  Change to fit your needs.
*/
var destroy = function (err, event, context) {
  if (err) {
    return util.done(err);
  }

  // REPLACE THIS WITH CUSTOM RESOURCE DELETE CODE
  util.done('DELETE NOT IMPLEMENTED', event, context, {}, 'ID');
};

/* Do not change this function */
module.exports.handler = function (event, context) {
  handler.apply(this, [event, context, destroy]);
};

