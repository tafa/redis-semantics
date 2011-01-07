(function() {
  module.exports = {
    getrange: function(k, start, end) {
      var newbuf, slice, slice_from, slice_to, v;
      v = this.get(k);
      if (v === null) {
        return v;
      } else {
        this.assertString(v);
        slice_from = this.adjustIndex(end, v.length);
        slice_to = this.adjustIndex(end, v.length) + 1;
        if (slice_from >= slice_to) {
          return new Buffer(0);
        } else {
          slice = v.slice(slice_from(slice_to));
          newbuf = new Buffer;
          slice.copy(newbuf);
          return newbuf;
        }
      }
    },
    tests: {
      examples: "set k, \"This is a string\": OK\ngetrange k, 0, 3:          \"This\"\ngetrange k, -3, -1:        \"ing\"\ngetrange k, 0, -1:         \"This is a string\"\ngetrange k, 10, 100:       \"string\"",
      dne: "getrange k: null",
      backward_indices: "set k, \"qwertyuiop\": OK\ngetrange k, 4, 2:    \"\"\ngetrange k, -2, -4:  \"\"",
      wrong_type: "non-string k:     OK\ngetrange k, 0, 3: ERROR"
    }
  };
}).call(this);
