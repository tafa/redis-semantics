module.exports =
  
  hget: (k, field) ->
    v = @loadHash(@items[k]).items[@encodeKey field]
    if v
      v
    else
      null
  
  tests:
    examples: """
      hset k, k2, v: 1
      hget k, k2:    v
      hget k, k3:    null
    """
    # TODO dne, wrong_type
