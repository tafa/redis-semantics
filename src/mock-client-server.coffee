
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
  
  bufferFromInt: (n) ->
    new Buffer('' + n)
  
  intFromBuffer: (buf) ->
    n = 1 * buf.toString('utf-8')
    @assert (not isNaN n) and ((n % 1) == 0)
    n
  
  # <code>[0, 1)</code>,
  # just in case Math.random is <code>[0, 1]</code>
  random_0_to_1: () ->
    x = Math.random()
    if x == 1 then 0 else x
  
  # <code>[a, b] \cap \mathbb{Z}</code>
  randomInt: (a, b) ->
    Math.floor(@random_0_to_1() * (b - a + 1)) + a
  
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
    if not @exists @items[k]
      {type: 'set', items: {}, cardinality: 0}
    else
      @assertSet @items[k]
  
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
  
  #### Hash methods
  
  loadHash: (k) ->
    if not @exists @items[k]
      {type: 'hash', items: {}, length: 0}
    else
      @assertHash @items[k]
  
  assertHash: (x) ->
    if x.type != 'hash'
      throw new Error "Expected a hash"
    keyFound = false
    for own k of x.items
      keyFound = true
      break
    if not keyFound
      throw new Error "Stored hashes must be non-empty"
    x
  


preprocess_cmd_impl_args = (argNames, arguments) ->
  
  args = for i in [0...arguments.length]
    x = arguments[i]
    name = argNames[i]
    
    if name == 'k' or name == 'field'
      _buf(x).toString 'base64'
    
    else if name == 'keys'
      (_buf(k).toString('base64') for k in x)
    
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
        [_buf(k).toString('base64'), _buf(v)]
    
    else
      throw new Error "Unsupported arg name: #{name}"
  
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
