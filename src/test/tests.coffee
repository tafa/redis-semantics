
redis_semantics = require './../redis-semantics'


module.exports =
  
  # LATER client_connect: 
  # LATER client_error: 
  # LATER client_end: 
  # LATER client_idle: 
  # LATER client_drain: 
  
  client_basic: (t) ->
    c = redis_semantics.createClient()
    c.incrby 'foo', 99, (e, r) ->
      t.equal r, 99
      c.decrby 'foo', 1, (e, r) ->
        t.equal r, 98
        t.finish()
  
  client_append_get_set: (t) ->
    c = redis_semantics.createClient()
    k = 'foo'
    c.set k, 'bar', (e, r) ->
      c.get k, (e, r) ->
        t.deepEqual r, new Buffer 'bar'
        c.append k, '!!!', (e, r) ->
          t.equal r, 6
          c.get k, (e, r) ->
            t.deepEqual r, new Buffer 'bar!!!'
            t.finish()

