(function() {
  module.exports = {
    rpoplpush: function(k_src, k_dest) {
      var v;
      if (!this.exists(k_src)) {
        return null;
      } else {
        this.assertList(this.items[k_src]);
        if (this.exists(k_dest)) {
          this.assertList(this.items[k_dest]);
        }
        v = this.rpop(k_src);
        this.lpush(k_dest, v);
        return v;
      }
    },
    tests: {
      examples: "rpush k, v:       1\nrpush k, v2:      2\nrpush k, v3:      3\nrpoplpush:        k, k2: v3\nlrange k, 0, -1:  [v, v2]\nlrange k2, 0, -1: [v3]",
      same_key: "rpush k, v:      1\nrpush k, v2:     2\nrpush k, v3:     3\nrpoplpush:       k, k: v3\nlrange k, 0, -1: [v3, v, v2]",
      dne_k: "rpoplpush k, k2: null",
      wrong_type_k: "non-list k:      OK\nrpoplpush k, k2: ERROR",
      wrong_type_k2: "non-list k2:     OK\nrpush k, v:      1\nrpush k, v2:     2\nrpoplpush k, k2: ERROR"
    }
  };
}).call(this);
