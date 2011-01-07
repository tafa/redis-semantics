module.exports =
  
  lrem: (k, count, v) ->
    if not @exists k
      0
    else
      arr = @assertList @items[k]
      numRemoved = 0
      arr2 = []
      
      # Case: remove all
      if count == 0
        for x in arr
          if @deepEqual x, v
            numRemoved += 1
          else
            arr2.push x
      
      # Case: remove a limited number, left-to-right 
      else if count > 0
        for x in arr
          if (numRemoved < count) and @deepEqual(x, y)
            numRemoved += 1
          else
            arr2.push x
      
      # Case: remove a limited number, left-to-right 
      else if count > 0
        for i in [(arr.length - 1)..0]
          x = arr[i]
          if (numRemoved < count) and @deepEqual(x, y)
            numRemoved += 1
          else
            arr2.push x
        arr2.reverse()
      
      @items[k] = arr2
      numRemoved
  
  tests:
    examples: """
      rpush k, v:      1
      rpush k, v:      2
      rpush k, v2:     3
      rpush k, v:      4
      lrem k, -2, v:   2
      lrange k, 0, -1: [v, v2]
    """
    other_direction: """
      rpush k, v:      1
      rpush k, v:      2
      rpush k, v2:     3
      rpush k, v:      4
      lrem k, 2, v:    2
      lrange k, 0, -1: [v2, v]
    """
    all: """
      rpush k, v:      1
      rpush k, v:      2
      rpush k, v2:     3
      rpush k, v:      4
      lrem k, 0, v:    3
      lrange k, 0, -1: [v2]
    """
    dne: """
      lrem k, 0, v: 0
    """
    wrong_type: """
      non-list k:   OK
      lrem k, 0, v: ERROR
    """
