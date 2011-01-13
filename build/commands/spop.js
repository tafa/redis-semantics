(function() {
  module.exports = {
    spop: function(k) {
      var v;
      v = this.srandmember(k);
      if (v) {
        this.srem(k, v);
      }
      return v;
    },
    tests: {
      eg: "sadd k, v: 1\nsadd k, v2: 1\nspop k: v or v2"
    }
  };
}).call(this);
