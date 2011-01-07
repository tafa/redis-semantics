(function() {
  module.exports = {
    rename: function(k, k2) {
      this.assertNotDeepEqual(k, k2);
      this.assert(this.exists(k));
      this.items[k] = this.items[k];
      delete this.items[k];
      return '+OK';
    },
    tests: {
      examples: "set k, v:     OK\nrename k, k2: OK\nget k2:       v",
      more: "set k, v:     OK\nrename k, k2: OK\nget k2:       v\nexists k:     0",
      same_keys: "set k, v:    OK\nrename k, k: ERROR",
      dne: "rename k, k2: ERROR"
    }
  };
}).call(this);
