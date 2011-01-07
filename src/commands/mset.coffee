module.exports =
  
  mset: (items) ->
    for [k, v] in items
      @set k, v
    '+OK'
  
  tests:
    examples: """
      mset [[k, v], [k2, v2]]: OK
      get k:                   v
      get k2:                  v2
    """
