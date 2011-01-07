module.exports =
  
  lpop: (k) ->
    if not @exists k
      null
    else
      arr = @assertList @items[k]
      if arr.length == 1
        delete @items[k]
        arr[0]
      else
        @items[k] = arr[1..]
        arr[0]
  
  tests:
    examples: """
      rpush k, v:      1
      rpush k, v2:     2
      rpush k, v:      3
      lpop k:          v
      lrange k, 0, -1: [v2, v3]
    """
    empty_lists_dne: """
      lpush k, v: 1
      lpop k:     v
      exists k:   0
    """
