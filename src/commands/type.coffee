module.exports =
  
  type: (k) ->
    if not @exists k
      '+none'
    else
      v = @items[k]
      if v instanceof Buffer
        '+string'
      else if v instanceof Array
        '+list'
      else
        '+' + v.type
  
  tests:
    string: """
      set k, v:    OK
      type k:      +string
    """
    list: """
      lpush k, v: 1
      type k:     +list
    """
    set: """
      sadd k, v:  1
      type k:     +set
    """
    zset: """
      zadd k, 1, v: 1
      type k:       +zset
    """
    hash: """
      hset k, k2, v: 1
      type k:        +hash
    """
