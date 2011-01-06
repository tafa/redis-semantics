(function() {
  var commands, createClient;
  commands = require('./commands');
  createClient = function() {
    var MockClient;
    MockClient = require('./mock-client-server').MockClient;
    return new MockClient;
  };
  exports.createClient = createClient;
  exports.commandNames = commands.names;
}).call(this);
