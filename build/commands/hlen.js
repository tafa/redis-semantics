(function() {
  module.exports = {
    hlen: function(k) {
      return this.loadHash(k).items.length;
    },
    tests: {
      examples: "hset k, k2, v2: 1\nhset k, k3, v3: 1\nhlen k: 2"
    }
  };
}).call(this);
