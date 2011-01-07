module.exports =
  
  sdiffstore: (k_dest, keys) ->
    
    if @exists k_dest
      delete @items[k_dest]
    
    diff_arr = @sdiff keys
    for v in diff_arr
      @sadd k_dest, v
    
    diff_arr.length
  
  tests:
    basic: """
      sadd k, v:              1
      sadd k, v2:             1
      sadd k, v3:             1
      
      sadd k2, v3:            1
      sadd k2, v4:            1
      sadd k2, v5:            1
      
      sdiffstore k3, [k, k2]: 2
      lrange k3, 0, -1:       [v, v2]
    """
    wrong_type_dest: """
      non-set k3:             OK
      
      sadd k, v:              1
      sadd k, v2:             1
      sadd k, v3:             1
      
      sadd k2, v3:            1
      sadd k2, v4:            1
      sadd k2, v5:            1
      
      sdiffstore k3, [k, k2]: 2
      lrange k3, 0, -1:       [v, v2]
    """
