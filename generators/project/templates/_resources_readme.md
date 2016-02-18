# Resources

A new directory should be created for each resource.

Each resource directory should contain `indes.js`, `create.js`, `update.js` and `delete.js` modules.

A skeleton can be auto created with Yeoman:

    yo generator lambda-formation:resource

## Structure

  resourceName: myFirstResource

    projectRoot
    |- lib
    |-- resources
    |--- myFirstResource
    |---- index.js
    |---- create.js
    |---- update.js
    |---- delete.js


