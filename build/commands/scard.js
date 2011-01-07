(function() {
  module.exports = {
    scard: function(k) {
      if (!this.exists(k)) {
        return 0;
      } else {
        return this.assertSet(this.items[k]).cardinality;
      }
    },
    tests: {
      examples: "sadd k, v: 1\nsadd k, v: 1\nscard k:   2",
      dne: "scard k: 0",
      wrong_type: "non-set k: OK\nscard k:   ERROR"
    }
  };
}).call(this);
