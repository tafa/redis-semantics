module.exports =
  
  srandmember: (k) ->
    if not @exists k
      null
    else
      keys_enc = for own k_enc of @assertSet(@items[k]).items
        k_enc
      @decodeKey keys_enc[@randomInt 0, keys_enc.length - 1]
  
  tests:
    examples: """
      sadd k, v: 1
      sadd k, v2: 1
      srandmember k: v or v2
    """
