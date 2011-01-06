module.exports =
  
  decr: (k) ->
    @incrby k, -1
  
  tests:
    eg: """
      decr k: -1
      decr k: -2
    """
    setget: """
      set k, "10": OK
      decr k:      9
      get k:       "9"
    """
    bad_string: """
      set k, "foo": OK
      decr k:       -1
    """
    non_string: """
      non-string k: OK
      decr k:       -1
    """
