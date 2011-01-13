(function() {
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports = {
    sinter: function(keys) {
      var count, items, k, result, v_enc, _i, _len, _ref, _ref2, _ref3;
      items = {};
      _ref = this.loadSet(keys[0]).items;
      for (v_enc in _ref) {
        if (!__hasProp.call(_ref, v_enc)) continue;
        items[v_enc] = 1;
      }
      _ref2 = keys.slice(1);
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        k = _ref2[_i];
        _ref3 = this.loadSet().items;
        for (v_enc in _ref3) {
          if (!__hasProp.call(_ref3, v_enc)) continue;
          if (items[v_enc] != null) {
            items[v_enc] += 1;
          }
        }
      }
      result = [];
      for (v_enc in items) {
        if (!__hasProp.call(items, v_enc)) continue;
        count = items[v_enc];
        if (count === keys.length) {
          result.push(this.decodeKey(v_enc));
        }
      }
      return result;
    },
    tests: {
      example_two: "sadd k, v:    1\nsadd k, v2:   2\nsadd k, v3:   3\n\nsadd k2, v3:  1\nsadd k2, v4:  2\nsadd k2, v5:  3\n\nsinter [k, k2]: [v3]",
      example_three: "sadd k, v:    1\nsadd k, v2:   2\nsadd k, v3:   3\nsadd k, v4:   4\n\nsadd k2, v3:  1\n\nsadd k3, v1:  1\nsadd k3, v3:  2\nsadd k3, v5:  3\n\nsinter k, k2, k3: [v3]"
    }
  };
}).call(this);
