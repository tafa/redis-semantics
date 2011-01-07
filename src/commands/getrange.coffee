module.exports =
  
  getrange: (k, start, end) ->
    v = @get k
    if v == null
      v
    else
      @assertString v
      slice_from = @adjustIndex(end, v.length)
      slice_to = @adjustIndex(end, v.length) + 1
      if slice_from >= slice_to
        new Buffer 0
      else
        slice = v.slice slice_from slice_to
        newbuf = new Buffer 
        slice.copy newbuf
        newbuf
  
  tests:
    examples: """
      set k, "This is a string": OK
      getrange k, 0, 3:          "This"
      getrange k, -3, -1:        "ing"
      getrange k, 0, -1:         "This is a string"
      getrange k, 10, 100:       "string"
    """
    dne: """
      getrange k: null
    """
    backward_indices: """
      set k, "qwertyuiop": OK
      getrange k, 4, 2:    ""
      getrange k, -2, -4:  ""
    """
    wrong_type: """
      non-string k:     OK
      getrange k, 0, 3: ERROR
    """
