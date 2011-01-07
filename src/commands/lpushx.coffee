module.exports =
  
  lpushx: (k, v) ->
    try
      @assertList @items[k]
      @lpush k, v
    catch e
      0
  
  tests:
    examples: """
      lpush k, v: 1
      lpushx k, v2: 2
      lpushx k2, v2: 0
      lrange k, 0, -1: [v, v2]
      lrange k2, 0, -1: []
    """
    dne: """
      lpushx k, v: 0
    """
    wrong_type: """
      non-list k:  OK
      lpushx k, v: 0
    """
