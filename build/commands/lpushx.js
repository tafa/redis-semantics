(function() {
  module.exports = {
    lpushx: function(k, v) {
      try {
        this.assertList(this.items[k]);
        return this.lpush(k, v);
      } catch (e) {
        return 0;
      }
    },
    tests: {
      examples: "lpush k, v: 1\nlpushx k, v2: 2\nlpushx k2, v2: 0\nlrange k, 0, -1: [v, v2]\nlrange k2, 0, -1: []",
      dne: "lpushx k, v: 0",
      wrong_type: "non-list k:  OK\nlpushx k, v: 0"
    }
  };
}).call(this);
