module.exports =
  
  hset: (k, field, v) ->
    hash = @loadHash(k)
    hash.items[@encodeKey(field)] = v
    @items[k] = hash
    '+OK'
  
  tests:{}
    #TODO example, dne, wrong_type
