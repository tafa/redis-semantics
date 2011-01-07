(function() {
  module.exports = {
    lset: function(k, index, v) {
      var arr, i;
      arr = this.assertList(this.items[k]);
      i = this.adjustIndex(index);
      if (!((0 <= i && i < arr.length))) {
        throw new Error("Out of bounds");
      } else {
        arr[i] = v;
        return '+OK';
      }
    },
    tests: {
      examples: "rpush k, v:      1\nrpush k, v2:     2\nrpush k, v3:     3\nlset k, 0, v4:   OK\nlset k, -2, v5:  OK\nlrange k, 0, -1: [v4, v5, v3]",
      out_of_range_pos: "rpush k, v:       1\nlset k, 9001, v2: ERROR",
      out_of_range_neg: "rpush k, v:        1\nlset k, -9001, v2: ERROR",
      dne: "lset k, 0, v2: ERROR",
      wrong_type: "non-list k:    OK\nlset k, 0, v2: ERROR"
    }
  };
}).call(this);
