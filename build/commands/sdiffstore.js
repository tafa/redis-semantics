(function() {
  module.exports = {
    sdiffstore: function(k_dest, keys) {
      var diff_arr, v, _i, _len;
      if (this.exists(k_dest)) {
        delete this.items[k_dest];
      }
      diff_arr = this.sdiff(keys);
      for (_i = 0, _len = diff_arr.length; _i < _len; _i++) {
        v = diff_arr[_i];
        this.sadd(k_dest, v);
      }
      return diff_arr.length;
    },
    tests: {
      basic: "sadd k, v:              1\nsadd k, v2:             1\nsadd k, v3:             1\n\nsadd k2, v3:            1\nsadd k2, v4:            1\nsadd k2, v5:            1\n\nsdiffstore k3, [k, k2]: 2\nlrange k3, 0, -1:       [v, v2]",
      wrong_type_dest: "non-set k3:             OK\n\nsadd k, v:              1\nsadd k, v2:             1\nsadd k, v3:             1\n\nsadd k2, v3:            1\nsadd k2, v4:            1\nsadd k2, v5:            1\n\nsdiffstore k3, [k, k2]: 2\nlrange k3, 0, -1:       [v, v2]"
    }
  };
}).call(this);
