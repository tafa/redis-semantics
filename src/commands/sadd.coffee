module.exports =
  
  sadd: (k, v) ->
    set = if not @exists k
      {type: 'set', items: {}, cardinality: 0}
    else
      @assertSet @items[k]
    if set.items[@encodeKey v]
      0
    else
      set.items[@encodeKey v] = 1
      set.cardinality += 1
      1
  
  tests:
    eg: """
      sadd k, v:  1
      sadd k, v2: 1
      sadd k, v2: 0
      srem k, v:  1
      smembers k: [v2]
    """
    wrong_type: """
      non-set k: OK
      sadd k, v: ERROR
    """
