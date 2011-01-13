(function() {
  var redis_semantics;
  redis_semantics = require('./../redis-semantics');
  module.exports = {
    mget: function(t) {
      var c;
      c = redis_semantics.createClient();
      return c.set('k1', 'v1', function(e, r) {
        return c.set('k2', 'v2', function(e, r) {
          return c.mget(['k1', 'k2'], function(e, r) {
            t.deepEqual(r, [new Buffer('v1'), new Buffer('v2')]);
            return t.finish();
          });
        });
      });
    },
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
