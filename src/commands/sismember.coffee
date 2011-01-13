module.exports =
  
  sismember: (k, v) ->
    if not @exists k
      0
    else
      if @assertSet(@items[k]).items[k]?
        1
      else
        0
  
  tests:
    examples: """
      sadd k, v:       1
      sismember k, v:  1
      sismember k, v2: 0
    """
    dne: """
      sismember k, v: 0
    """
    wrong_type: """
      non-set k:      OK
      sismember k, v: ERROR
    """
