module.exports =
  
  get: (k) ->
    if @items[k]?
      @assertString @items[k]
    else
      null
  
  tests:
    eg: """
      set k, v: OK
      get k:    v
    """
    wrong_type: """
      non-string k: OK
      get k:        ERROR
    """
