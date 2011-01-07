module.exports =
  
  exists: (k) ->
    if @items[k]?
      1
    else
      0
  
  tests:
    examples: """
      set k, v:  OK
      exists k:  1
      exists k2: 0
    """
