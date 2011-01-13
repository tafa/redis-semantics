(function() {
  module.exports = {
    hget: function(k, field) {
      var v;
      v = this.loadHash(this.items[k]).items[this.encodeKey(field)];
      if (v) {
        return v;
      } else {
        return null;
      }
    },
    tests: {
      examples: "hset k, k2, v: 1\nhget k, k2:    v\nhget k, k3:    null"
    }
  };
}).call(this);
