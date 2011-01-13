module.exports =
  
  smembers: (key) ->
    @sinter [key]
  
  tests:
    examples: """
      sadd k, v: 1
      sadd k, v2: 1
      smembers k: [v, v2] or [v2, v]
    """
    # TODO dne, ...
