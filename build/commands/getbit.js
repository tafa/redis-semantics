(function() {
  module.exports = {
    getbit: function(k, offset) {
      var masked, v;
      v = this.get(k);
      if (v === null) {
        return 0;
      } else {
        masked = v[offset >> 3] & (1 << (offset % 8));
        if (masked) {
          return 1;
        } else {
          return 0;
        }
      }
    },
    tests: {
      examples: "setbit k, 7, 1: 0\ngetbit k, 0:    0\ngetbit k, 7:    1\ngetbit k, 100:  0",
      set: "set k, \"5\"\ngetbit k, 0: 1\ngetbit k, 1: 0\ngetbit k, 2: 1",
      wrong_type: "non-string k: OK\ngetbit k, 5:  ERROR"
    }
  };
}).call(this);
