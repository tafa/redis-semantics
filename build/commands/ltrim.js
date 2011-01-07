(function() {
  module.exports = {
    ltrim: function(k, start, stop) {
      var arr, slice_from, slice_through;
      arr = !this.exists(k) ? [] : this.assertList(this.items[k]);
      slice_from = this.adjustIndex(start, arr.length);
      slice_through = this.adjustIndex(stop, arr.length);
      arr = arr.slice(slice_from, (slice_through + 1) || 9e9);
      if (arr.length === 0) {
        this.del([k]);
      } else {
        this.items[k] = arr;
      }
      return '+OK';
    },
    tests: {
      examples: "rpush k, v:      1\nrpush k, v2:     2\nrpush k, v3:     3\nltrim k, 1, -1:  OK\nlrange k, 0, -1: [v2, v3]",
      out_of_bounds_pos: "rpush k, v:       1\nrpush k, v2:      2\nrpush k, v3:      3\nltrim k, 0, 9001: OK\nlrange k, 0, -1:  [v, v2, v3]",
      out_of_bounds_neg: "rpush k, v:        1\nrpush k, v2:       2\nrpush k, v3:       3\nltrim k, -9001, 2: OK\nlrange k, 0, -1:   [v, v2, v3]",
      backward_indices: "rpush k, v:    1\nrpush k, v2:   2\nrpush k, v3:   3\nltrim k, 1, 0: []",
      dne: "ltrim k, 0, 1: []",
      wrong_type: "non-list k:    OK\nltrim k, 0, 0: OK"
    }
  };
}).call(this);
