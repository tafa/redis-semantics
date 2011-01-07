module.exports =
  
  renamenx: (k, k2) ->
    @assertNotDeepEqual k, k2
    @assert @exists k
    if @exists k2
      0
    else
      @rename k, k2
      1
  
  tests:
    examples: """
      set k, v:       OK
      set k2, v2:     OK
      renamenx k, k2: 0
      get k2
    """
    more: """
      set k, v:       OK
      renamenx k, k2: 1
      get k2:         v
    """
    same_keys: """
      set k, v:    OK
      renamenx k, k: ERROR
    """
    dne: """
      renamenx k, k2: ERROR
    """
