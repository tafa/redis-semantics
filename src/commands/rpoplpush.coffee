module.exports =
  
  rpoplpush: (k_src, k_dest) ->
    if not @exists k_src
      null
    else
      @assertList @items[k_src]
      @assertList @items[k_dest] if @exists k_dest
      v = @rpop k_src
      @lpush k_dest, v
      v
  
  tests:
    examples: """
      rpush k, v:       1
      rpush k, v2:      2
      rpush k, v3:      3
      rpoplpush:        k, k2: v3
      lrange k, 0, -1:  [v, v2]
      lrange k2, 0, -1: [v3]
    """
    same_key: """
      rpush k, v:      1
      rpush k, v2:     2
      rpush k, v3:     3
      rpoplpush:       k, k: v3
      lrange k, 0, -1: [v3, v, v2]
    """
    dne_k: """
      rpoplpush k, k2: null
    """
    wrong_type_k: """
      non-list k:      OK
      rpoplpush k, k2: ERROR
    """
    wrong_type_k2: """
      non-list k2:     OK
      rpush k, v:      1
      rpush k, v2:     2
      rpoplpush k, k2: ERROR
    """
