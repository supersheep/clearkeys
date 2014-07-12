'use strict';

var clearkeys = require('../index');
var assert = require('assert');

describe("description", function(){
  it("should remove keys specified", function(){
    var origin = {
      "a": 1,
      "b": [],
      "c": [],
      "d": {}
    };
    origin.c.push({"b":origin,"d":2});
    origin.c.push({"b":origin,"d":3});
    origin.d.b = origin;
    origin.d.e = 4;
    var obj = clearkeys(origin, ["a","b"]);
    assert.deepEqual(obj,{"c":[{"d":2},{"d":3}],"d":{"e":4}})
  });
});