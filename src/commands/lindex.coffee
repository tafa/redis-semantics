module.exports =
  
  lindex: (k, index) ->
    if not @exists k
      throw new Error "Not found"
    else
      v = @assertList @items[k]
      i = @adjustIndex index, v.length
      if not (0 <= i < v.length)
        null
      else
        v[i]
  
  tests:
    examples: """
      lpush k, v: 1
      lpush k, v2: 2
      lindex k, 0: v2
      lindex k, -1: v
      lindex k, 3: null
    """
    dne: """
      lindex k, 0: ERROR
    """
    wrong_type: """
      non-list k:  OK
      lindex k, 0: ERROR
    """
