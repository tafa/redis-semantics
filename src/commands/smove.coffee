module.exports =
  
  smove: (k, k_dest, v) ->
    @assertSet k      if @exists k
    @assertSet k_dest if @exists k_dest
    removed = @srem k, v
    if removed
      @sadd k_dest, v
      1
    else
      0
  
  tests:
    examples: """
      sadd k, v:       1
      sadd k, v2:      1
      sadd k2, v3:     1
      smove k, k2, v2: 1
      smembers k:      [v]
      smembers k2:     [v2, v3] or [v3, v2]
    """
    #TODO not_found, dne, wrong_type...
