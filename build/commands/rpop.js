(function() {
  module.exports = {
    rpop: function(k) {
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
          return arr.pop();
        }
      }
    },
    tests: {
      examples: "rpush k, v:      1\nrpush k, v2:     2\nrpush k, v3:     3\nrpop k:          v3\nlrange k, 0, -1: [v, v2]",
      dne: "rpop k: null",
      wrong_type: "non-list k: OK\nrpop k:     ERROR"
    }
  };
}).call(this);
