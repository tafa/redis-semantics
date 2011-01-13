(function() {
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports = {
    hkeys: function(k) {
      var field_enc, _ref, _results;
      _ref = this.loadHash(k).items;
      _results = [];
      for (field_enc in _ref) {
        if (!__hasProp.call(_ref, field_enc)) continue;
        _results.push(this.decodeKey(field_enc));
      }
      return _results;
    },
    tests: {
      examples: "hset k, k2, v:  1\nhset k, k3, v2: 1\nhkeys k:        [v, v2] or [v2, v]"
    }
  };
}).call(this);
