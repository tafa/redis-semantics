(function() {
  module.exports = {
    decrby: function(k, n) {
      return this.incrby(k, -n);
    },
    tests: {
      eg: "decrby k, 2: -2\ndecrby k, 10: -12",
      negative: "decrby k, -10: 10",
      setget: "set k, \"10\": OK\ndecrby k, 2: 8\nget k:       \"8\"",
      bad_string: "set k, \"foo\": OK\ndecrby k, 1:  -1",
      non_string: "non-string k: OK\ndecrby k, 1:  -1"
    }
  };
}).call(this);
