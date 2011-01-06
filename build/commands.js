(function() {
  var commandNames, commandsDir, filename, fs, m, name, thisFile, _i, _j, _len, _len2, _ref;
  fs = require('fs');
  thisFile = require.resolve('./commands');
  commandsDir = thisFile.substr(0, thisFile.length - 3);
  commandNames = [];
  _ref = fs.readdirSync(commandsDir);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    filename = _ref[_i];
    m = filename.match(/(.+)\.js/);
    if (m) {
      commandNames.push(m[1]);
    }
  }
  exports.names = commandNames;
  exports.dir = commandsDir;
  for (_j = 0, _len2 = commandNames.length; _j < _len2; _j++) {
    name = commandNames[_j];
    exports[name] = require("./commands/" + name);
  }
}).call(this);
