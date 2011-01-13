module.exports =
  
  spop: (k) ->
    v = @srandmember k
    if v
      @srem k, v
    v
  
  tests:
    eg: """
      sadd k, v: 1
      sadd k, v2: 1
      spop k: v or v2
    """
    # TODO dne, wrong_type, ...
