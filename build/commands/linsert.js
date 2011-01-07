(function() {
  module.exports = {
    linsert: function(k, BEFORE_or_AFTER, pivot, v) {
      var arr, arr2, breakpoint, i, pivot_index, _ref, _ref2;
      if (!this.exists(k)) {
        return -1;
      } else {
        arr = this.assertList(this.items[k]);
        pivot_index = null;
        for (i = 0, _ref = arr.length; (0 <= _ref ? i < _ref : i > _ref); (0 <= _ref ? i += 1 : i -= 1)) {
          if (this.deepEqual(arr[i], pivot)) {
            pivot_index = i;
            break;
          }
        }
        if (pivot_index === null) {
          return -1;
        }
        arr2 = [];
        breakpoint = pivot_index + (BEFORE_or_AFTER === 'BEFORE' ? 0 : 1);
        for (i = 0; (0 <= breakpoint ? i < breakpoint : i > breakpoint); (0 <= breakpoint ? i += 1 : i -= 1)) {
          arr2.push(arr[i]);
        }
        arr2.push(v);
        for (i = breakpoint, _ref2 = arr.length; (breakpoint <= _ref2 ? i < _ref2 : i > _ref2); (breakpoint <= _ref2 ? i += 1 : i -= 1)) {
          arr2.push(arr[i]);
        }
        this.items[k] = arr2;
        return arr2.length;
      }
    },
    tests: {
      examples: "rpush k, v:                  1\nrpush k, v2:                 2\nlinsert k, \"BEFORE\", v2, v3: 3\nlrange k, 0, -1:             [v, v3, v2]",
      pivot_not_found: "rpush k, v:                    1\nrpush k, v2:                   2\nlinsert k, \"BEFORE\", v404, v3: -1",
      dne: "linsert k, \"BEFORE\", v, v2: -1",
      wrong_type: "non-list k:                 OK\nlinsert k, \"BEFORE\", v, v2: ERROR"
    }
  };
}).call(this);
