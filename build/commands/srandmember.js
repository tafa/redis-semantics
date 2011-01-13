(function() {
  var __hasProp = Object.prototype.hasOwnProperty;
  module.exports = {
    srandmember: function(k) {
      var k_enc, keys_enc;
      if (!this.exists(k)) {
        return null;
      } else {
        keys_enc = function() {
          var _ref, _results;
          _ref = this.assertSet(this.items[k]).items;
          _results = [];
          for (k_enc in _ref) {
            if (!__hasProp.call(_ref, k_enc)) continue;
            _results.push(k_enc);
          }
          return _results;
        }.call(this);
        return this.decodeKey(keys_enc[this.randomInt(0, keys_enc.length - 1)]);
      }
    },
    tests: {
      examples: "sadd k, v: 1\nsadd k, v2: 1\nsrandmember k: v or v2"
    }
  };
}).call(this);
