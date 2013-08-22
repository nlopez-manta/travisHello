var add = require('./sample.js').add;

describe("Sample", function() {
    it("runs", function() {
      var x = add(2, 2);
      expect(x).toBe(4);
    });
});
