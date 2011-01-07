module.exports =
  
  linsert: (k, BEFORE_or_AFTER, pivot, v) ->
    
    if not @exists k
      return -1
    else
      arr = @assertList @items[k]
      
      # Find pivot_index
      pivot_index = null
      for i in [0...arr.length]
        if @deepEqual arr[i], pivot
          pivot_index = i
          break
      if pivot_index == null
        return -1
      
      # Insert
      arr2 = []
      breakpoint = (
                      pivot_index +
                      if BEFORE_or_AFTER == 'BEFORE' then 0 else 1)
      for i in [0...breakpoint]
        arr2.push arr[i]
      arr2.push v
      for i in [breakpoint...arr.length]
        arr2.push arr[i]
      
      @items[k] = arr2
      arr2.length
  
  tests:
    examples: """
      rpush k, v:                  1
      rpush k, v2:                 2
      linsert k, "BEFORE", v2, v3: 3
      lrange k, 0, -1:             [v, v3, v2]
    """
    pivot_not_found: """
      rpush k, v:                    1
      rpush k, v2:                   2
      linsert k, "BEFORE", v404, v3: -1
    """
    dne: """
      linsert k, "BEFORE", v, v2: -1
    """
    wrong_type: """
      non-list k:                 OK
      linsert k, "BEFORE", v, v2: ERROR
    """
