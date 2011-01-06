
commands = require './commands'


createClient = () ->
  {MockClient} = require './mock-client-server'
  new MockClient


exports.createClient = createClient
exports.commandNames = commands.names
