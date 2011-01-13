module.exports =
  
  sunionstore: (k_dest, keys) ->
    
    if @exists k_dest
      delete @items[k_dest]
    
    arr = @sunion keys
    for v in arr
      @sadd k_dest, v
    
    arr.length
  
  tests:
    examples: """
      sadd k, v:               1
      sadd k, v2:              1
      sadd k2, v2:             1
      sunionstore k3, [k, k2]: 2
      smembers k3:             [v, v2] or [v2, v]
    """
