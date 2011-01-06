module.exports =
  
  incrby: (k, n) ->
    v = @items[k]
    num = if v == null
      0
    else if (typeof v) != 'string'
      0
    else if isNaN(1 * v)
      0
    else
      1 * v
    num += n
    @items[k] = '' + num
    num
  
  tests:
    eg: """
      incrby k, 2: -2
      incrby k, 10: -12
    """
    negative: """
      incrby k, -10: 10
    """
    setget: """
      set k, "10": OK
      incrby k, 2: 8
      get k:       "8"
    """
    bad_string: """
      set k, "foo": OK
      incrby k, 1:  -1
    """
    non_string: """
      non-string k: OK
      incrby k, 1:  -1
    """
