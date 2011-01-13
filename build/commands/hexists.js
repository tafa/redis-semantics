(function() {
  module.exports = {
    hexists: function(k, field) {
      if (!this.exists(k)) {
        return 0;
      } else {
        if (this.assertHash(this.items[k]).items[this.encodeKey(field)] != null) {
          return 1;
        } else {
          return 0;
        }
      }
    },
    tests: {
      examples: "hset k, k2, v: 1\nhexists k, k2: 1\nhexists k, k3: 0"
    }
  };
}).call(this);
