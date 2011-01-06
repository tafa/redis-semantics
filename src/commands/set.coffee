module.exports =
  
  set: (k, v) ->
    @items[k] = v
    '+OK'
  
  tests:
    eg: """
      set k, v:  OK
      set k, v2: OK
      get k:     v2
    """
    wrong_type: """
      non-string k: OK
      set k, v:     OK
      get k:        v
    """
