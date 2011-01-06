
fs = require 'fs'

thisFile = require.resolve('./commands')
commandsDir = thisFile.substr(0, thisFile.length - 3)


commandNames = []
for filename in fs.readdirSync(commandsDir)
  m = filename.match /(.+)\.js/
  if m
    commandNames.push m[1]


exports.names = commandNames
exports.dir = commandsDir
for name in commandNames
  exports[name] = require "./commands/#{name}"

