module.exports =
  
  ltrim: (k, start, stop) ->
    arr = if not @exists k
      []
    else
      @assertList @items[k]
    slice_from = @adjustIndex(start, arr.length)
    slice_through = @adjustIndex(stop, arr.length)
    arr = arr[slice_from..slice_through]
    if arr.length == 0
      @del [k]
    else
      @items[k] = arr
    '+OK'
  
  tests:
    examples: """
      rpush k, v:      1
      rpush k, v2:     2
      rpush k, v3:     3
      ltrim k, 1, -1:  OK
      lrange k, 0, -1: [v2, v3]
    """
    out_of_bounds_pos: """
      rpush k, v:       1
      rpush k, v2:      2
      rpush k, v3:      3
      ltrim k, 0, 9001: OK
      lrange k, 0, -1:  [v, v2, v3]
    """
    out_of_bounds_neg: """
      rpush k, v:        1
      rpush k, v2:       2
      rpush k, v3:       3
      ltrim k, -9001, 2: OK
      lrange k, 0, -1:   [v, v2, v3]
    """
    backward_indices: """
      rpush k, v:    1
      rpush k, v2:   2
      rpush k, v3:   3
      ltrim k, 1, 0: []
    """
    dne: """
      ltrim k, 0, 1: []
    """
    wrong_type: """
      non-list k:    OK
      ltrim k, 0, 0: OK
    """
