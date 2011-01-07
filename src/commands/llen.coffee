module.exports =
  
  llen: (k) ->
    if not @exists k
      0
    else
      arr = @assertList @items[k]
      arr.length
  
  tests:
    examples: """
      lpush k, v:  1
      lpush k, v2: 2
      llen k:      2
    """
    dne: """
      llen k: 0
    """
    wrong_type: """
      non-list k: OK
      llen k:     ERROR
    """
