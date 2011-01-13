module.exports =
  
  randomkey: () ->
    
    keys64 = for own k of @items
      k
    
    if keys64.length == 0
      null
    else
      i = @randomInt(0, keys64.length - 1)
      @decodeKey keys64[i]
  
  tests:
    misc: """
      flushdb:   OK
      randomkey: null
      set k, v:  OK
      randomkey: k
    """
