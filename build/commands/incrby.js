(function() {
  module.exports = {
    incrby: function(k, n) {
      var num, v;
      v = this.items[k];
      num = v === null ? 0 : (typeof v) !== 'string' ? 0 : isNaN(1 * v) ? 0 : 1 * v;
      num += n;
      this.items[k] = '' + num;
      return num;
    },
    tests: {
      eg: "incrby k, 2: -2\nincrby k, 10: -12",
      negative: "incrby k, -10: 10",
      setget: "set k, \"10\": OK\nincrby k, 2: 8\nget k:       \"8\"",
      bad_string: "set k, \"foo\": OK\nincrby k, 1:  -1",
      non_string: "non-string k: OK\nincrby k, 1:  -1"
    }
  };
}).call(this);
