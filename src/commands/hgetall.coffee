module.exports =
  
  hgetall: (key) ->
    arr = []
    for own field_enc, v of @loadHash(@items[key]).items
      arr.push @decodeKey field_enc
      arr.push v
    arr
  
  tests:
    examples: """
      hset k, k2, v2: 1
      hset k, k3, v3: 1
      hgetall k: [k2, v2, k3, v3] or [k3, v3, k2, v2]
    """
    #TODO dne, wrong_type
