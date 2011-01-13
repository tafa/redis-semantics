module.exports =
  
  hkeys: (k) ->
    for own field_enc of @loadHash(k).items
      @decodeKey field_enc
  
  tests:
    examples: """
      hset k, k2, v:  1
      hset k, k3, v2: 1
      hkeys k:        [v, v2] or [v2, v]
    """
    # TODO dne, wrong_type
