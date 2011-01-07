module.exports =
  
  rename: (k, k2) ->
    @assertNotDeepEqual k, k2
    @assert @exists k
    @items[k] = @items[k]
    delete @items[k]
    '+OK'
  
  tests:
    examples: """
      set k, v:     OK
      rename k, k2: OK
      get k2:       v
    """
    more: """
      set k, v:     OK
      rename k, k2: OK
      get k2:       v
      exists k:     0
    """
    same_keys: """
      set k, v:    OK
      rename k, k: ERROR
    """
    dne: """
      rename k, k2: ERROR
    """
