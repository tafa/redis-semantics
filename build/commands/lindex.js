(function() {
  module.exports = {
    lindex: function(k, index) {
      var i, v;
      if (!this.exists(k)) {
        throw new Error("Not found");
      } else {
        v = this.assertList(this.items[k]);
        i = this.adjustIndex(index, v.length);
        if (!((0 <= i && i < v.length))) {
          return null;
        } else {
          return v[i];
        }
      }
    },
    tests: {
      examples: "lpush k, v: 1\nlpush k, v2: 2\nlindex k, 0: v2\nlindex k, -1: v\nlindex k, 3: null",
      dne: "lindex k, 0: ERROR",
      wrong_type: "non-list k:  OK\nlindex k, 0: ERROR"
    }
  };
}).call(this);
