
# TODO: proper writeup

## Command Implementation

* this: a MockServer
* k, v, n, items
* return types:
    * int
    * Buffer
    * list of Buffers
    * "+..."
    * "-..."

## Command Tests

* A test: "...coffee... : ...coffee..."-list
* k, v, kn, vn
    * bufgen("k2") -> byte + ALL_BYTES + testInvocationToken + "kv" + byte
    * test with each (initial byte, final byte) pair
* OK, ERROR
* non-string
    * will run the test once for each non-string type
        * e.g. once with <code>LPUSH</code>, once with <code>SADD</code>, ...



### Example


#### Source
<pre>
  set k, v:  OK
  set k, v2: OK
  get k:     v2
</pre>

#### Generated JSON
<pre>
[
    ["set", ["bufgen('k')", "bufgen('v')"]], "status('OK')"]
    ["set", ["bufgen('k')", "bufgen('v2')"]], "status('OK')"],
    ["get", ["bufgen('k')"]], "bufgen('v2')"]
]
</pre>

#### Generated CoffeeScript
<pre>
((t, c, bufgen) ->
  c.set bufgen('k'), bufgen('v2'), (err, reply) ->
    t.deepEqual reply, status('OK')
    c.set ... ->
      ...
      c.get ... ->
        t.deepEqual reply, bufgen('v2')
        t.finish()
)
</pre>