(function() {
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports = {
    hgetall: function(key) {
      var arr, field_enc, v, _ref;
      arr = [];
      _ref = this.loadHash(this.items[key]).items;
      for (field_enc in _ref) {
        if (!__hasProp.call(_ref, field_enc)) continue;
        v = _ref[field_enc];
        arr.push(this.decodeKey(field_enc));
        arr.push(v);
      }
      return arr;
    },
    tests: {
      examples: "hset k, k2, v2: 1\nhset k, k3, v3: 1\nhgetall k: [k2, v2, k3, v3] or [k3, v3, k2, v2]"
    }
  };
}).call(this);
