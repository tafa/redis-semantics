module.exports =
  
  rpop: (k) ->
    if not @exists k
      null
    else
      arr = @assertList @items[k]
      if arr.length == 1
        delete @items[k]
        arr[0]
      else
        @items[k] = arr[1..]
        arr.pop()
  
  tests:
    examples: """
      rpush k, v:      1
      rpush k, v2:     2
      rpush k, v3:     3
      rpop k:          v3
      lrange k, 0, -1: [v, v2]
    """
    dne: """
      rpop k: null
    """
    wrong_type: """
      non-list k: OK
      rpop k:     ERROR
    """
