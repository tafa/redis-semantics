
assert = require 'assert'
commands = require './commands'
command_arguments = require './command-arguments'


_buf = (x) ->
  if x instanceof Buffer then x else new Buffer x


class MockClient
  
  constructor: () ->
    @server = new MockServer


class MockServer
  
  constructor: () ->
    @items = {}
  
  #### Misc
  
  assert: (x, msg) ->
    if not x
      throw new Error (mgs or "An assertion failed")
  
  assertNotDeepEqual: (x, y) ->
    assert.notDeepEqual x, y
  
  deepEqual: (x, y) ->
    throw new Error "TODO"
  
  encodeKey: (k) ->
    _buf(k).toString 'base64'
  
  decodeKey: (k_64) ->
    new Buffer k_64, 'base64'
  
  #### String methods
  
  assertString: (x, msg) ->
    if x not instanceof Buffer
      throw new Error (msg or "Expected a string")
    else
      x
  
  #### List methods
  
  adjustIndex = (i, len) ->
    if i < 0
      len - i
    else
      if i >= len
        len - 1
      else
        i
  
  assertList: (x) ->
    if x not instanceof Array
      throw new Error "Expected an list"
    if x.length == 0
      throw new Error "Stored lists must be non-empty"
    x
  
  #### Set methods
  
  loadSet: (k) ->
    if not @exists @items[keys[0]]
      {type: 'set', items: {}, cardinality: 0}
    else
      @assertSet @items[keys[0]]
  
  assertSet: (x) ->
    if x.type != 'set'
      throw new Error "Expected a set"
    keyFound = false
    for own k of x.items
      keyFound = true
      break
    if not keyFound
      throw new Error "Stored sets must be non-empty"
    x


preprocess_cmd_impl_args = (argNames, arguments) ->
  
  args = for i in [0...arguments.length]
    x = arguments[i]
    name = argNames[i]
    
    if name == 'k'
      _buf(x).toString 'base64'
    
    else if name == 'v'
      _buf(x)
    
    else if name == 'n'
      n = 1 * x
      assert.equal (typeof n), 'number'
      assert.ok not isNaN(n)
      assert.equal n % 1, 0
      n
    
    else if name == 'items'
      for [k, v] in x
        [_buf(k), _buf(v)]
  
  args


# MockServer commands
for name in commands.names
  ((name) ->
    
    f = commands[name][name]
    argNames = command_arguments[name]
    
    MockServer.prototype[name] = (args...) ->
      f_args = args
      result = f.apply(this, f_args)
      result
    
  )(name)


# MockClient commands
for name in commands.names
  ((name) ->
    
    argNames = command_arguments[name]
    arity = argNames.length
    
    MockClient.prototype[name] = (args...) ->
      
      # Run the command
      f_args = args[0...arity]
      f_args = preprocess_cmd_impl_args(argNames, f_args)
      result = this.server[name].apply(this.server, f_args)
      
      # Call the callback
      if args.length >= arity + 1
        callback = args[arity]
        if callback
          process.nextTick () ->
            callback(null, result)
  )(name)


exports.MockClient = MockClient
