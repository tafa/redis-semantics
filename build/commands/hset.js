(function() {
  module.exports = {
    hset: function(k, field, v) {
      var hash;
      hash = this.loadHash(k);
      hash.items[this.encodeKey(field)] = v;
      this.items[k] = hash;
      return '+OK';
    },
    tests: {}
  };
}).call(this);
