module.exports =
  
  incr: (k) ->
    @incrby k, 1
  
  tests:
    eg: """
      incr k: 1
      incr k: 2
    """
    setget: """
      set k, "10": OK
      incr k:      11
      get k:       "11"
    """
    bad_string: """
      set k, "foo": OK
      incr k:       1
    """
    non_string: """
      non-string k: OK
      incr k:       1
    """
