module.exports =
  
  mget: (keys) ->
    for k in keys
      @get k
  
  tests:
    examples: """
      set k, v: OK
      set k2, v2: OK
      mget [k, k2, k3]: [v, v2, null]
    """
