module.exports =
  
  srem: (k, v) ->
    @assertSet k if @exists k
    if @sismember k, v
      delete @items[k].items[@encodeKey v]
      1
    else
      0
  
  tests:
    examples: """
      sadd k, v1: 1
      sadd k, v2: 1
      sadd k, v3: 1
      srem k, v1: 1
      srem k, v4: 0
      smembers k: [v2, v3] or [v3, v2]
    """
    # TODO dne, wrong_type
