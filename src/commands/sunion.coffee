module.exports =
  
  sunion: (keys) ->
    union = {}
    for k in keys
      for own v_enc of @loadSet(@items[k]).items
        union[v_enc] = true
    for own v_enc of union
      @decodeKey v_enc
  
  tests:
    eg: """
      sadd k, v:      1
      sadd k, v2:     1
      sadd k2, v2:    1
      sunion [k, k2]: [v, v2] or [v2, v]
    """
    # TODO dne, wrong_type
