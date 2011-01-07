module.exports =
  
  strlen: (k) ->
    v = @get k
    if v == null
      0
    else
      @assertString v
      v.length
  
  tests:
    examples: """
      set k, "Hello world"
      strlen k: 11
      strlen k2: 0
    """
    wrong_type: """
      non-string k: OK
      strlen k:     ERROR
    """
