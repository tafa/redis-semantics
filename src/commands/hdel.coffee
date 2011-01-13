module.exports =
  
  hdel: (k, field) ->
    if not @exists k
      0
    else
      items = @assertHash(@items[k]).items
      if items[@encodeKey field]?
        delete items[@encodeKey field]
        1
      else
        0
  
  tests:
    examples: """
      hset k, k2, v: 1
      hdel k, k2:    1
      hdel k, k3:    0
    """
    eg: """
      hset k, k2, v: 1
      hegt k, k2:    v
      hdel k, k2:    1
      hget k, k2:    null
    """
    #TODO dne, wrong_type, ...
