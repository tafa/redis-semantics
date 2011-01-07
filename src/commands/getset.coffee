module.exports =
  
  getset: (k, v) ->
    old = @get k
    @set k, v
    old
  
  tests:
    examples: """
      set k, v:     OK
      getset k, v2: v
      get k:        v2
    """
    examples_design_pattern: """
      incr k:        1
      getset k, "0": "1"
      get k:         "0"
    """
