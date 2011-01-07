(function() {
  module.exports = {
    strlen: function(k) {
      var v;
      v = this.get(k);
      if (v === null) {
        return 0;
      } else {
        this.assertString(v);
        return v.length;
      }
    },
    tests: {
      examples: "set k, \"Hello world\"\nstrlen k: 11\nstrlen k2: 0",
      wrong_type: "non-string k: OK\nstrlen k:     ERROR"
    }
  };
}).call(this);
