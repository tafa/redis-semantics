(function() {
  module.exports = {
    getset: function(k, v) {
      var old;
      old = this.get(k);
      this.set(k, v);
      return old;
    },
    tests: {
      examples: "set k, v:     OK\ngetset k, v2: v\nget k:        v2",
      examples_design_pattern: "incr k:        1\ngetset k, \"0\": \"1\"\nget k:         \"0\""
    }
  };
}).call(this);
