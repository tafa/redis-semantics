module.exports =
  
  setnx: (k, v) ->
    if @exists k
      0
    else
      @set k, v
      1
  
  tests:
    examples: """
      setnx k, v:  1
      setnx k, v2: 0
      get k:       v
    """
