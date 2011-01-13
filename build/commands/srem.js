(function() {
  module.exports = {
    srem: function(k, v) {
      if (this.exists(k)) {
        this.assertSet(k);
      }
      if (this.sismember(k, v)) {
        delete this.items[k].items[this.encodeKey(v)];
        return 1;
      } else {
        return 0;
      }
    },
    tests: {
      examples: "sadd k, v1: 1\nsadd k, v2: 1\nsadd k, v3: 1\nsrem k, v1: 1\nsrem k, v4: 0\nsmembers k: [v2, v3] or [v3, v2]"
    }
  };
}).call(this);
