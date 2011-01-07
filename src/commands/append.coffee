module.exports =
  
  append: (k, v) ->
    
    old = if not @items[k]?
      new Buffer 0
    else
      @assertString @items[k]
    
    newbuf = new Buffer (old.length + v.length)
    old.copy newbuf
    v.copy newbuf, old.length
    
    @items[k] = newbuf
    newbuf.length
  
  tests:
    eg: """
      append k, v:  v.length
      get k:        v
      append k, v2: v.length + v2.length
      get k:        v + v2
    """
    empty: """
      append k, "": 0
      get k:        0
    """
    wrong_type: """
      non-string k: OK
      append k, v2: ERROR
    """
