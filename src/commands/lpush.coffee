module.exports =
  
  lpush: (k, v) ->
    if not @exists k
      @items[k] = [v]
      1
    else
      arr = @assertList @items[k]
      arr.push v
      arr.length
  
  tests:
    examples: """
      lpush k, v:      1
      lpush k, v2:     2
      lrange k, 0, -1: [v, v2]
    """
    wrong_type: """
      non-list k: OK
      lpush k, v: ERROR
    """
