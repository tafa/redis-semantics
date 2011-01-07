module.exports =
  
  randomkey: () ->
    
    # <code>[0, 1)</code>,
    # just in case Math.random is <code>[0, 1]</code>
    random_0_to_1 = () ->
      x = Math.random()
      if x == 1 then 0 else x
    
    # <code>[a, b] \cap \mathbb{Z}</code>
    random_int = (a, b) ->
      Math.floor(random_0_to_1() * (b - a + 1)) + a
    
    keys64 = for own k of @items
      k
    
    if keys64.length == 0
      null
    else
      i = random_int(0, keys64.length - 1)
      @decodeKey keys64[i]
  
  tests:
    misc: """
      flushdb:   OK
      randomkey: null
      set k, v:  OK
      randomkey: k
    """
