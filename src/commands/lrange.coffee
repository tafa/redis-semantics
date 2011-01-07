module.exports =
  
  lrange: (k, start, stop) ->
    if not @exists k
      []
    else
      arr = @assertList @items[k]
      slice_from = @adjustIndex(start, arr.length)
      slice_to = @adjustIndex(start, arr.length) + 1
      if slice_from >= slice_to
        []
      else
        arr[slice_from...slice_to]
  
  tests:
    examples: """
      rpush k, v:          1
      rpush k, v2:         2
      rpush k, v3:         3
      lrange k, 0, 0:      [v]
      lrange k, -3, 2:     [v, v2, v3]
      lrange k, -100, 100: [v, v2, v3]
      lrange k, 5, 10:     []
    """
    backward_indices: """
      rpush k, v:     1
      rpush k, v2:    2
      rpush k, v3:    3
      lrange k, 1, 0: []
    """
    dne: """
      lrange k, 0, 1: []
    """
    wrong_type: """
      non-list k:     OK
      lrange k, 0, 1: ERROR
    """
