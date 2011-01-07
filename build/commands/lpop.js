(function() {
  module.exports = {
    lpop: function(k) {
      var arr;
      if (!this.exists(k)) {
        return null;
      } else {
        arr = this.assertList(this.items[k]);
        if (arr.length === 1) {
          delete this.items[k];
          return arr[0];
        } else {
          this.items[k] = arr.slice(1);
          return arr[0];
        }
      }
    },
    tests: {
      examples: "rpush k, v:      1\nrpush k, v2:     2\nrpush k, v:      3\nlpop k:          v\nlrange k, 0, -1: [v2, v3]",
      empty_lists_dne: "lpush k, v: 1\nlpop k:     v\nexists k:   0"
    }
  };
}).call(this);
