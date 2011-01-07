(function() {
  module.exports = {
    lrange: function(k, start, stop) {
      var arr, slice_from, slice_to;
      if (!this.exists(k)) {
        return [];
      } else {
        arr = this.assertList(this.items[k]);
        slice_from = this.adjustIndex(start, arr.length);
        slice_to = this.adjustIndex(start, arr.length) + 1;
        if (slice_from >= slice_to) {
          return [];
        } else {
          return arr.slice(slice_from, slice_to);
        }
      }
    },
    tests: {
      examples: "rpush k, v:          1\nrpush k, v2:         2\nrpush k, v3:         3\nlrange k, 0, 0:      [v]\nlrange k, -3, 2:     [v, v2, v3]\nlrange k, -100, 100: [v, v2, v3]\nlrange k, 5, 10:     []",
      backward_indices: "rpush k, v:     1\nrpush k, v2:    2\nrpush k, v3:    3\nlrange k, 1, 0: []",
      dne: "lrange k, 0, 1: []",
      wrong_type: "non-list k:     OK\nlrange k, 0, 1: ERROR"
    }
  };
}).call(this);
