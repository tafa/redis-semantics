
## Status: early development

* The <code>.createClient</code> client/server works and can be used to replace (Redis + the node_redis client) in your apps' tests
* Only a few commands so far
* TODO: implement the (client/server-independent test)-runner

## (Implementation) and (client/server-independent tests) for each command

For example, here's [src/commands/get.coffee](https://github.com/andrewschaaf/redis-semantics/blob/master/src/commands/get.coffee)
<pre>
module.exports =
  
  get: (k) ->
    if @items[k]?
      @assertBuffer @items[k]
    else
      null
  
  tests:
    eg: """
      set k, v: OK
      get k:    v
    """
    wrong_type: """
      non-string k: OK
      get k:        ERROR
    """
</pre>

For details, see [src/OVERVIEW.md](https://github.com/andrewschaaf/redis-semantics/blob/master/src/OVERVIEW.md)


## Application: running a mock client/server

This client-with-its-own-server can be useful for development/testing, and will be tested for full equivalence to [mranney's node_redis](https://github.com/mranney/node_redis).

<pre>
var redis = require('redis-semantics');
var client = redis.createClient();
...
client.append(k, v, fuction(err, reply) {
    ...
})
</pre>

## Application: testing your client/server implementations

For example, to test [node_redis](https://github.com/mranney/node_redis) + Redis 2.0:

<pre>
    TODO
</pre>

## Application: generating awesome documentation for each command

<pre>
    TODO
</pre>

## Developing
<pre>
cd redis-semantics; npm link
cake build &amp;&amp; cake test
</pre>