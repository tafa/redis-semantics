(function() {
  module.exports = {
    rpush: function(k, v) {
      var arr;
      arr = !this.exists(k) ? [] : this.assertList(this.items[k]);
      arr.push(v);
      this.items[k] = arr;
      return arr.length;
    },
    tests: {
      examples: "rpush k, v: 1\nrpush k, v2: 2\nlrange k, 0, -1: [v, v2]",
      dne: "rpush k, v: 1",
      wrong_type: "non-list k: OK\nrpush k, v: ERROR"
    }
  };
}).call(this);
