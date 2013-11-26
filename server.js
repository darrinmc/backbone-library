// Module dependencies
var application_root = __dirname,
    express = require('express'), // web framework
    path = require('path'),
    mongoose = require('mongoose');

var app = express();

app.configure(function() {
  // parses request body and populates request.body
  app.use(express.bodyParser());

  // checks request.body for HTTP method overrides
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, 'site')));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Start server
var port = 4711;
app.listen(port, function() {
  console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

