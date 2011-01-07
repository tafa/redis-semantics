module.exports =
  
  getbit: (k, offset) ->
    v = @get k
    if v == null
      0
    else
      masked = (v[offset >> 3]) & (1 << (offset % 8))
      if masked then 1 else 0
  
  tests:
    examples: """
      setbit k, 7, 1: 0
      getbit k, 0:    0
      getbit k, 7:    1
      getbit k, 100:  0
    """
    # '5' -> 0x35 = 0b....0101
    set:"""
      set k, "5"
      getbit k, 0: 1
      getbit k, 1: 0
      getbit k, 2: 1
    """
    wrong_type: """
      non-string k: OK
      getbit k, 5:  ERROR
    """
