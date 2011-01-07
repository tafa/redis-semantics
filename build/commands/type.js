(function() {
  module.exports = {
    type: function(k) {
      var v;
      if (!this.exists(k)) {
        return '+none';
      } else {
        v = this.items[k];
        if (v instanceof Buffer) {
          return '+string';
        } else if (v instanceof Array) {
          return '+list';
        } else {
          return '+' + v.type;
        }
      }
    },
    tests: {
      string: "set k, v:    OK\ntype k:      +string",
      list: "lpush k, v: 1\ntype k:     +list",
      set: "sadd k, v:  1\ntype k:     +set",
      zset: "zadd k, 1, v: 1\ntype k:       +zset",
      hash: "hset k, k2, v: 1\ntype k:        +hash"
    }
  };
}).call(this);
