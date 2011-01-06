(function() {
  module.exports = {
    get: function(k) {
      if (this.items[k] != null) {
        return this.assertBuffer(this.items[k]);
      } else {
        return null;
      }
    },
    tests: {
      eg: "set k, v: OK\nget k:    v",
      wrong_type: "non-string k: OK\nget k:        ERROR"
    }
  };
}).call(this);
