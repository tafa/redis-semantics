(function() {
  module.exports = {
    smembers: function(key) {
      return this.sinter([key]);
    },
    tests: {
      examples: "sadd k, v: 1\nsadd k, v2: 1\nsmembers k: [v, v2] or [v2, v]"
    }
  };
}).call(this);
