module.exports =
  
  sinter: (keys) ->
    items = {}
    for own v_enc of @loadSet(keys[0]).items
      items[v_enc] = 1
    for k in keys[1...]
      for own v_enc of @loadSet().items
        if items[v_enc]?
          items[v_enc] += 1
    result = []
    for own v_enc, count of items
      if count == keys.length
        result.push @decodeKey v_enc
    result
  
  tests:
    example_two: """
      sadd k, v:    1
      sadd k, v2:   2
      sadd k, v3:   3
      
      sadd k2, v3:  1
      sadd k2, v4:  2
      sadd k2, v5:  3
      
      sinter [k, k2]: [v3]
    """
    example_three: """
      sadd k, v:    1
      sadd k, v2:   2
      sadd k, v3:   3
      sadd k, v4:   4
      
      sadd k2, v3:  1
      
      sadd k3, v1:  1
      sadd k3, v3:  2
      sadd k3, v5:  3
      
      sinter k, k2, k3: [v3]
    """
    # TODO one
    # TODO dne_{first,nonfirst}
    # TODO wrong_type_{first,nonfirst}
