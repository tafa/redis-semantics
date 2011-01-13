(function() {
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports = {
    sunion: function(keys) {
      var k, union, v_enc, _i, _len, _ref, _results;
      union = {};
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        k = keys[_i];
        _ref = this.loadSet(this.items[k]).items;
        for (v_enc in _ref) {
          if (!__hasProp.call(_ref, v_enc)) continue;
          union[v_enc] = true;
        }
      }
      _results = [];
      for (v_enc in union) {
        if (!__hasProp.call(union, v_enc)) continue;
        _results.push(this.decodeKey(v_enc));
      }
      return _results;
    },
    tests: {
      eg: "sadd k, v:      1\nsadd k, v2:     1\nsadd k2, v2:    1\nsunion [k, k2]: [v, v2] or [v2, v]"
    }
  };
}).call(this);
