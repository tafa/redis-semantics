(function() {
  var MockClient, MockServer, assert, command_arguments, commands, name, preprocess_cmd_impl_args, _buf, _fn, _fn2, _i, _j, _len, _len2, _ref, _ref2;
  var __hasProp = Object.prototype.hasOwnProperty, __slice = Array.prototype.slice;
  assert = require('assert');
  commands = require('./commands');
  command_arguments = require('./command-arguments');
  _buf = function(x) {
    if (x instanceof Buffer) {
      return x;
    } else {
      return new Buffer(x);
    }
  };
  MockClient = (function() {
    function MockClient() {
      this.server = new MockServer;
    }
    return MockClient;
  })();
  MockServer = (function() {
    var adjustIndex;
    function MockServer() {
      this.items = {};
    }
    MockServer.prototype.assert = function(x, msg) {
      if (!x) {
        throw new Error(mgs || "An assertion failed");
      }
    };
    MockServer.prototype.assertNotDeepEqual = function(x, y) {
      return assert.notDeepEqual(x, y);
    };
    MockServer.prototype.deepEqual = function(x, y) {
      throw new Error("TODO");
    };
    MockServer.prototype.encodeKey = function(k) {
      return _buf(k).toString('base64');
    };
    MockServer.prototype.decodeKey = function(k_64) {
      return new Buffer(k_64, 'base64');
    };
    MockServer.prototype.assertString = function(x, msg) {
      if (!(x instanceof Buffer)) {
        throw new Error(msg || "Expected a string");
      } else {
        return x;
      }
    };
    adjustIndex = function(i, len) {
      if (i < 0) {
        return len - i;
      } else {
        if (i >= len) {
          return len - 1;
        } else {
          return i;
        }
      }
    };
    MockServer.prototype.assertList = function(x) {
      if (!(x instanceof Array)) {
        throw new Error("Expected an list");
      }
      if (x.length === 0) {
        throw new Error("Stored lists must be non-empty");
      }
      return x;
    };
    MockServer.prototype.loadSet = function(k) {
      if (!this.exists(this.items[keys[0]])) {
        return {
          type: 'set',
          items: {},
          cardinality: 0
        };
      } else {
        return this.assertSet(this.items[keys[0]]);
      }
    };
    MockServer.prototype.assertSet = function(x) {
      var k, keyFound, _ref;
      if (x.type !== 'set') {
        throw new Error("Expected a set");
      }
      keyFound = false;
      _ref = x.items;
      for (k in _ref) {
        if (!__hasProp.call(_ref, k)) continue;
        keyFound = true;
        break;
      }
      if (!keyFound) {
        throw new Error("Stored sets must be non-empty");
      }
      return x;
    };
    return MockServer;
  })();
  preprocess_cmd_impl_args = function(argNames, arguments) {
    var args, i, k, n, name, v, x;
    args = (function() {
      var _ref, _results;
      _results = [];
      for (i = 0, _ref = arguments.length; (0 <= _ref ? i < _ref : i > _ref); (0 <= _ref ? i += 1 : i -= 1)) {
        x = arguments[i];
        name = argNames[i];
        _results.push((function() {
          var _i, _len, _ref, _results;
          if (name === 'k') {
            return _buf(x).toString('base64');
          } else if (name === 'v') {
            return _buf(x);
          } else if (name === 'n') {
            n = 1 * x;
            assert.equal(typeof n, 'number');
            assert.ok(!isNaN(n));
            assert.equal(n % 1, 0);
            return n;
          } else if (name === 'items') {
            _results = [];
            for (_i = 0, _len = x.length; _i < _len; _i++) {
              _ref = x[_i], k = _ref[0], v = _ref[1];
              _results.push([_buf(k), _buf(v)]);
            }
            return _results;
          }
        })());
      }
      return _results;
    }).apply(this, arguments);
    return args;
  };
  _ref = commands.names;
  _fn = function(name) {
    var argNames, f;
    f = commands[name][name];
    argNames = command_arguments[name];
    return MockServer.prototype[name] = function() {
      var args, f_args, result;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      f_args = args;
      result = f.apply(this, f_args);
      return result;
    };
  };
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    _fn(name);
  }
  _ref2 = commands.names;
  _fn2 = function(name) {
    var argNames, arity;
    argNames = command_arguments[name];
    arity = argNames.length;
    return MockClient.prototype[name] = function() {
      var args, callback, f_args, result;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      f_args = args.slice(0, arity);
      f_args = preprocess_cmd_impl_args(argNames, f_args);
      result = this.server[name].apply(this.server, f_args);
      if (args.length >= arity + 1) {
        callback = args[arity];
        if (callback) {
          return process.nextTick(function() {
            return callback(null, result);
          });
        }
      }
    };
  };
  for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
    name = _ref2[_j];
    _fn2(name);
  }
  exports.MockClient = MockClient;
}).call(this);
