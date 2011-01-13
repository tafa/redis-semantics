(function() {
  module.exports = {
    sinterstore: function(k_dest, keys) {
      var inter, v, _i, _len;
      if (this.exists(k_dest)) {
        delete this.items[k_dest];
      }
      inter = this.sinter(keys);
      for (_i = 0, _len = inter.length; _i < _len; _i++) {
        v = inter[_i];
        this.sadd(k_dest, v);
      }
      return inter.length;
    },
    tests: {
      example_two: "sadd k, v:               1\nsadd k, v2:              2\nsadd k, v3:              3\n\nsadd k2, v3:             1\nsadd k2, v4:             2\nsadd k2, v5:             3\n\nsinterstore k3, [k, k2]: 1\ngetrange k3, 0, -1:      [v3]",
      wrong_type_dest: "non-set k3:              OK\n\nsadd k, v:               1\nsadd k, v2:              2\nsadd k, v3:              3\n\nsadd k2, v3:             1\nsadd k2, v4:             2\nsadd k2, v5:             3\n\nsinterstore k3, [k, k2]: 1\ngetrange k3, 0, -1:      [v3]"
    }
  };
}).call(this);
