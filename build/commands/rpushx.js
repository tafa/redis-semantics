(function() {
  module.exports = {
    rpushx: function(k, v) {
      var arr;
      if (!this.exists(k)) {
        return 0;
      } else {
        arr = this.assertList(this.items[k]);
        arr.push(v);
        return arr.length;
      }
    },
    tests: {
      examples: "rpush k, v:       1\nrpushx k, v2:     2\nrpushx k2, v2:    0\nlrange k, 0, -1:  [v, v2]\nlrange k2, 0, -1: []",
      dne: "rpushx k, v: 0",
      wrong_type: "non-list:    k\nrpushx k, v: ERROR"
    }
  };
}).call(this);
