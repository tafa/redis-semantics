(function() {
  module.exports = {
    hdel: function(k, field) {
      var items;
      if (!this.exists(k)) {
        return 0;
      } else {
        items = this.assertHash(this.items[k]).items;
        if (items[this.encodeKey(field)] != null) {
          delete items[this.encodeKey(field)];
          return 1;
        } else {
          return 0;
        }
      }
    },
    tests: {
      examples: "hset k, k2, v: 1\nhdel k, k2:    1\nhdel k, k3:    0",
      eg: "hset k, k2, v: 1\nhegt k, k2:    v\nhdel k, k2:    1\nhget k, k2:    null"
    }
  };
}).call(this);
