(function() {
  module.exports = {
    lrem: function(k, count, v) {
      var arr, arr2, i, numRemoved, x, _i, _j, _len, _len2, _ref;
      if (!this.exists(k)) {
        return 0;
      } else {
        arr = this.assertList(this.items[k]);
        numRemoved = 0;
        arr2 = [];
        if (count === 0) {
          for (_i = 0, _len = arr.length; _i < _len; _i++) {
            x = arr[_i];
            if (this.deepEqual(x, v)) {
              numRemoved += 1;
            } else {
              arr2.push(x);
            }
          }
        } else if (count > 0) {
          for (_j = 0, _len2 = arr.length; _j < _len2; _j++) {
            x = arr[_j];
            if ((numRemoved < count) && this.deepEqual(x, y)) {
              numRemoved += 1;
            } else {
              arr2.push(x);
            }
          }
        } else if (count > 0) {
          for (i = _ref = arr.length - 1; (_ref <= 0 ? i <= 0 : i >= 0); (_ref <= 0 ? i += 1 : i -= 1)) {
            x = arr[i];
            if ((numRemoved < count) && this.deepEqual(x, y)) {
              numRemoved += 1;
            } else {
              arr2.push(x);
            }
          }
          arr2.reverse();
        }
        this.items[k] = arr2;
        return numRemoved;
      }
    },
    tests: {
      examples: "rpush k, v:      1\nrpush k, v:      2\nrpush k, v2:     3\nrpush k, v:      4\nlrem k, -2, v:   2\nlrange k, 0, -1: [v, v2]",
      other_direction: "rpush k, v:      1\nrpush k, v:      2\nrpush k, v2:     3\nrpush k, v:      4\nlrem k, 2, v:    2\nlrange k, 0, -1: [v2, v]",
      all: "rpush k, v:      1\nrpush k, v:      2\nrpush k, v2:     3\nrpush k, v:      4\nlrem k, 0, v:    3\nlrange k, 0, -1: [v2]",
      dne: "lrem k, 0, v: 0",
      wrong_type: "non-list k:   OK\nlrem k, 0, v: ERROR"
    }
  };
}).call(this);
