(function() {
  module.exports = {
    set: function(k, v) {
      this.items[k] = v;
      return '+OK';
    },
    tests: {
      eg: "set k, v:  OK\nset k, v2: OK\nget k:     v2",
      wrong_type: "non-string k: OK\nset k, v:     OK\nget k:        v"
    }
  };
}).call(this);
