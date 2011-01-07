(function() {
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports = {
    sdiff: function(keys) {
      var diff, k, v_enc, _i, _len, _ref, _ref2, _ref3, _results;
      diff = {};
      _ref = this.loadSet(keys[0]).items;
      for (v_enc in _ref) {
        if (!__hasProp.call(_ref, v_enc)) continue;
        diff[v_enc] = true;
      }
      _ref2 = keys.slice(1);
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        k = _ref2[_i];
        _ref3 = this.loadSet(k).items;
        for (v_enc in _ref3) {
          if (!__hasProp.call(_ref3, v_enc)) continue;
          if (diff[v_enc] != null) {
            delete diff[v_enc];
          }
        }
      }
      _results = [];
      for (v_enc in diff) {
        if (!__hasProp.call(diff, v_enc)) continue;
        _results.push(this.decodeKey(v_enc));
      }
      return _results;
    },
    tests: {
      example_two: "sadd k, v:     1\nsadd k, v2:    1\nsadd k, v3:    1\n\nsadd k2, v3:   1\nsadd k2, v4:   1\nsadd k2, v5:   1\n\nsdiff [k, k2]: [v, v2]",
      example_three: "sadd k, v:         1\nsadd k, v2:        1\nsadd k, v3:        1\nsadd k, v4:        1\n\nsadd k2, v3:       1\n\nsadd k3, v:        1\nsadd k3, v3:       1\nsadd k3, v5:       1\n\nsdiff [k, k2, k3]: [v2, v4] or [v4, v2]",
      one: "sadd k, v:  1\nsadd k, v2: 1\nsdiff [k]:  []",
      wrong_type_1: "non-set k:     OK\n\nsadd k2, v3:   1\nsadd k2, v4:   1\nsadd k2, v5:   1\n\nsdiff [k, k2]: ERROR",
      wrong_type_2: "sadd k, v:     1\nsadd k, v2:    1\nsadd k, v3:    1\n\nnon-set k2:    OK\nsdiff [k, k2]: ERROR",
      dne_1: "sadd k2, v:    1\nsdiff [k, k2]: [v]",
      dne_2: "sadd k, v:     1\nsdiff [k, k2]: []"
    }
  };
}).call(this);
