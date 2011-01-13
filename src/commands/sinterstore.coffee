module.exports =
  
  sinterstore: (k_dest, keys) ->
    
    if @exists k_dest
      delete @items[k_dest]
    
    inter = @sinter keys
    for v in inter
      @sadd k_dest, v
    
    inter.length
  
  tests:
    example_two: """
      sadd k, v:               1
      sadd k, v2:              2
      sadd k, v3:              3
      
      sadd k2, v3:             1
      sadd k2, v4:             2
      sadd k2, v5:             3
      
      sinterstore k3, [k, k2]: 1
      getrange k3, 0, -1:      [v3]
    """
    wrong_type_dest: """
      non-set k3:              OK
      
      sadd k, v:               1
      sadd k, v2:              2
      sadd k, v3:              3
      
      sadd k2, v3:             1
      sadd k2, v4:             2
      sadd k2, v5:             3
      
      sinterstore k3, [k, k2]: 1
      getrange k3, 0, -1:      [v3]
    """

