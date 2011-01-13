module.exports =
  
  hlen: (k) ->
    @loadHash(k).items.length
  
  tests:
    examples: """
      hset k, k2, v2: 1
      hset k, k3, v3: 1
      hlen k: 2
    """
    # TODO dne, wrong_type
