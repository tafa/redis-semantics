module.exports =
  
  rpush: (k, v) ->
    arr = if not @exists k
      []
    else
      @assertList @items[k]
    arr.push v
    @items[k] = arr
    arr.length
  
  tests:
    examples: """
      rpush k, v: 1
      rpush k, v2: 2
      lrange k, 0, -1: [v, v2]
    """
    dne: """
      rpush k, v: 1
    """
    wrong_type: """
      non-list k: OK
      rpush k, v: ERROR
    """
