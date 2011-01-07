module.exports =
  
  scard: (k) ->
    if not @exists k
      0
    else
      @assertSet(@items[k]).cardinality
  
  tests:
    examples: """
      sadd k, v: 1
      sadd k, v: 1
      scard k:   2
    """
    dne: """
      scard k: 0
    """
    wrong_type: """
      non-set k: OK
      scard k:   ERROR
    """
