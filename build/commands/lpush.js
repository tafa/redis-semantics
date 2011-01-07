(function() {
  module.exports = {
    lpush: function(k, v) {
      var arr;
      if (!this.exists(k)) {
        this.items[k] = [v];
        return 1;
      } else {
        arr = this.assertList(this.items[k]);
        arr.push(v);
        return arr.length;
      }
    },
    tests: {
      examples: "lpush k, v:      1\nlpush k, v2:     2\nlrange k, 0, -1: [v, v2]",
      wrong_type: "non-list k: OK\nlpush k, v: ERROR"
    }
  };
}).call(this);
