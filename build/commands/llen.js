(function() {
  module.exports = {
    llen: function(k) {
      var arr;
      if (!this.exists(k)) {
        return 0;
      } else {
        arr = this.assertList(this.items[k]);
        return arr.length;
      }
    },
    tests: {
      examples: "lpush k, v:  1\nlpush k, v2: 2\nllen k:      2",
      dne: "llen k: 0",
      wrong_type: "non-list k: OK\nllen k:     ERROR"
    }
  };
}).call(this);
