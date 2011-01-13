module.exports =
  
  hincrby: (k, field, n) ->
    if @hget(k, field) != null
      n = @intFromBuffer(@hget k, field) + n
    @hset k, field, @bufferFromInt(n)
    n
  
  tests:
    examples: """
      hset k, k2, "5": 1
      hincrby k, k2, 1: 6
      hincrby k, k2, -1: 5
      hincrby k, k2, -10: -5
    """
    #TODO dne, wrong_type, field_wrong_type
