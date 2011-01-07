(function() {
  module.exports = {
    renamenx: function(k, k2) {
      this.assertNotDeepEqual(k, k2);
      this.assert(this.exists(k));
      if (this.exists(k2)) {
        return 0;
      } else {
        this.rename(k, k2);
        return 1;
      }
    },
    tests: {
      examples: "set k, v:       OK\nset k2, v2:     OK\nrenamenx k, k2: 0\nget k2",
      more: "set k, v:       OK\nrenamenx k, k2: 1\nget k2:         v",
      same_keys: "set k, v:    OK\nrenamenx k, k: ERROR",
      dne: "renamenx k, k2: ERROR"
    }
  };
}).call(this);
