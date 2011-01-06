(function() {
  var redis_semantics;
  redis_semantics = require('./../redis-semantics');
  module.exports = {
    client_basic: function(t) {
      var c;
      c = redis_semantics.createClient();
      return c.incrby('foo', 99, function(e, r) {
        t.equal(r, 99);
        return c.decrby('foo', 1, function(e, r) {
          t.equal(r, 98);
          return t.finish();
        });
      });
    },
    client_append_get_set: function(t) {
      var c, k;
      c = redis_semantics.createClient();
      k = 'foo';
      return c.set(k, 'bar', function(e, r) {
        return c.get(k, function(e, r) {
          t.deepEqual(r, new Buffer('bar'));
          return c.append(k, '!!!', function(e, r) {
            t.equal(r, 6);
            return c.get(k, function(e, r) {
              t.deepEqual(r, new Buffer('bar!!!'));
              return t.finish();
            });
          });
        });
      });
    }
  };
}).call(this);
