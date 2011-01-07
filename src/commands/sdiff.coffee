module.exports =
  
  sdiff: (keys) ->
    
    diff = {}
    for own v_enc of @loadSet(keys[0]).items
      diff[v_enc] = true
    for k in keys[1...]
      for own v_enc of @loadSet(k).items
        if diff[v_enc]?
          delete diff[v_enc]
    
    for own v_enc of diff
      @decodeKey v_enc
  
  tests:
    example_two: """
      sadd k, v:     1
      sadd k, v2:    1
      sadd k, v3:    1
      
      sadd k2, v3:   1
      sadd k2, v4:   1
      sadd k2, v5:   1
      
      sdiff [k, k2]: [v, v2]
    """
    example_three: """
      sadd k, v:         1
      sadd k, v2:        1
      sadd k, v3:        1
      sadd k, v4:        1
      
      sadd k2, v3:       1
      
      sadd k3, v:        1
      sadd k3, v3:       1
      sadd k3, v5:       1
      
      sdiff [k, k2, k3]: [v2, v4] or [v4, v2]
    """
    one: """
      sadd k, v:  1
      sadd k, v2: 1
      sdiff [k]:  []
    """
    wrong_type_1: """
      non-set k:     OK
      
      sadd k2, v3:   1
      sadd k2, v4:   1
      sadd k2, v5:   1
      
      sdiff [k, k2]: ERROR
    """
    wrong_type_2: """
      sadd k, v:     1
      sadd k, v2:    1
      sadd k, v3:    1
      
      non-set k2:    OK
      sdiff [k, k2]: ERROR
    """
    dne_1: """
      sadd k2, v:    1
      sdiff [k, k2]: [v]
    """
    dne_2: """
      sadd k, v:     1
      sdiff [k, k2]: []
    """
