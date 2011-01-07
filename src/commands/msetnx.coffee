module.exports =
  
  msetnx: (items) ->
    any_exists = 0
    for [k, v] in items
      any_exists |= @exists k
    if any_exists
      0
    else
      for [k, v] in items
        @set k, v
      1
  
  tests:
    examples: """
      msetnx [[k, v], [k2, v2]]:   1
      msetnx [[k2, v2], [k3, v3]]: 0
      mget [k, k2, k3]:            [v, v2, null]
    """
