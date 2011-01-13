module.exports =
  
  hexists: (k, field) ->
    if not @exists k
      0
    else
      if @assertHash(@items[k]).items[@encodeKey field]?
        1
      else
        0
  
  tests:
    examples: """
      hset k, k2, v: 1
      hexists k, k2: 1
      hexists k, k3: 0
    """
    # TODO dne, wrong_type
