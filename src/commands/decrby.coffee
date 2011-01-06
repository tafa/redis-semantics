module.exports =
  
  decrby: (k, n) ->
    @incrby(k, -n)
  
  tests:
    eg: """
      decrby k, 2: -2
      decrby k, 10: -12
    """
    negative: """
      decrby k, -10: 10
    """
    setget: """
      set k, "10": OK
      decrby k, 2: 8
      get k:       "8"
    """
    bad_string: """
      set k, "foo": OK
      decrby k, 1:  -1
    """
    non_string: """
      non-string k: OK
      decrby k, 1:  -1
    """
