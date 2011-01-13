module.exports =
  
  hmget: (k, fields) ->
    for field in fields
      @hget k, field
  
  tests:
    examples: """
      hset k, k2, v2:    1
      hset k, k3, v3:    1
      hmget k, [k2, k3]: [v2, v3]
    """
    #TODO dne, wrong_type
