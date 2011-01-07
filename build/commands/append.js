(function() {
  module.exports = {
    append: function(k, v) {
      var newbuf, old;
      old = !(this.items[k] != null) ? new Buffer(0) : this.assertString(this.items[k]);
      newbuf = new Buffer(old.length + v.length);
      old.copy(newbuf);
      v.copy(newbuf, old.length);
      this.items[k] = newbuf;
      return newbuf.length;
    },
    tests: {
      eg: "append k, v:  v.length\nget k:        v\nappend k, v2: v.length + v2.length\nget k:        v + v2",
      empty: "append k, \"\": 0\nget k:        0",
      wrong_type: "non-string k: OK\nappend k, v2: ERROR"
    }
  };
}).call(this);
