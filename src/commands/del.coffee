module.exports =
  
  del: (keys) ->
    count = 0
    for k in keys
      if @exists k
        delete @items[k]
        count += 1
    count
  
  tests:
    examples: """
      set k, v:        OK
      set k2, v2:      OK
      del [k, k2, k3]: 2
    """
