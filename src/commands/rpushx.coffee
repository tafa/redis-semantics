module.exports =
  
  rpushx: (k, v) ->
    if not @exists k
      0
    else
      arr = @assertList @items[k]
      arr.push v
      arr.length
  
  tests:
    examples: """
      rpush k, v:       1
      rpushx k, v2:     2
      rpushx k2, v2:    0
      lrange k, 0, -1:  [v, v2]
      lrange k2, 0, -1: []
    """
    dne: """
      rpushx k, v: 0
    """
    wrong_type: """
      non-list:    k
      rpushx k, v: ERROR
    """
