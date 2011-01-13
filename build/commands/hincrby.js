(function() {
  module.exports = {
    hincrby: function(k, field, n) {
      if (this.hget(k, field) !== null) {
        n = this.intFromBuffer(this.hget(k, field)) + n;
      }
      this.hset(k, field, this.bufferFromInt(n));
      return n;
    },
    tests: {
      examples: "hset k, k2, \"5\": 1\nhincrby k, k2, 1: 6\nhincrby k, k2, -1: 5\nhincrby k, k2, -10: -5"
    }
  };
}).call(this);
