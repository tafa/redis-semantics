(function() {
  module.exports = {
    sunionstore: function(k_dest, keys) {
      var arr, v, _i, _len;
      if (this.exists(k_dest)) {
        delete this.items[k_dest];
      }
      arr = this.sunion(keys);
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        v = arr[_i];
        this.sadd(k_dest, v);
      }
      return arr.length;
    },
    tests: {
      examples: "sadd k, v:               1\nsadd k, v2:              1\nsadd k2, v2:             1\nsunionstore k3, [k, k2]: 2\nsmembers k3:             [v, v2] or [v2, v]"
    }
  };
}).call(this);
