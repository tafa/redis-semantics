module.exports =
  
  hmset: (k, items) ->
    for [field, v] in items
      @hset k, field, v
    '+OK'
  
  tests:
    examples: """
      hmset k, [[k2, v2], [k3, v3]]: OK
      hget k, k2:                    v2
      hget k, k3:                    v3
    """
    #TODO dne, wrong_type
