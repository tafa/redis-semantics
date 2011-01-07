module.exports =
  
  lset: (k, index, v) ->
    arr = @assertList @items[k]
    i = @adjustIndex index
    if not (0 <= i < arr.length)
      throw new Error "Out of bounds"
    else
      arr[i] = v
      '+OK'
  
  tests:
    examples: """
      rpush k, v:      1
      rpush k, v2:     2
      rpush k, v3:     3
      lset k, 0, v4:   OK
      lset k, -2, v5:  OK
      lrange k, 0, -1: [v4, v5, v3]
    """
    out_of_range_pos: """
      rpush k, v:       1
      lset k, 9001, v2: ERROR
    """
    out_of_range_neg: """
      rpush k, v:        1
      lset k, -9001, v2: ERROR
    """
    dne: """
      lset k, 0, v2: ERROR
    """
    wrong_type: """
      non-list k:    OK
      lset k, 0, v2: ERROR
    """
