(function() {
  module.exports = {
    smove: function(k, k_dest, v) {
      var removed;
      if (this.exists(k)) {
        this.assertSet(k);
      }
      if (this.exists(k_dest)) {
        this.assertSet(k_dest);
      }
      removed = this.srem(k, v);
      if (removed) {
        this.sadd(k_dest, v);
        return 1;
      } else {
        return 0;
      }
    },
    tests: {
      examples: "sadd k, v:       1\nsadd k, v2:      1\nsadd k2, v3:     1\nsmove k, k2, v2: 1\nsmembers k:      [v]\nsmembers k2:     [v2, v3] or [v3, v2]"
    }
  };
}).call(this);
