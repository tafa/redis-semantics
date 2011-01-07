(function() {
  module.exports = {
    sadd: function(k, v) {
      var set;
      set = !this.exists(k) ? {
        type: 'set',
        items: {},
        cardinality: 0
      } : this.assertSet(this.items[k]);
      if (set.items[this.encodeKey(v)]) {
        return 0;
      } else {
        set.items[this.encodeKey(v)] = 1;
        set.cardinality += 1;
        return 1;
      }
    },
    tests: {
      eg: "sadd k, v:  1\nsadd k, v2: 1\nsadd k, v2: 0\nsrem k, v:  1\nsmembers k: [v2]",
      wrong_type: "non-set k: OK\nsadd k, v: ERROR"
    }
  };
}).call(this);
