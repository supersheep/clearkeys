# clearkeys

clear keys for object and its child nodes

## Install

### for node

```bash
$ npm install clearkeys --save
```

### for browser

```bash
$ cortex install clearkeys --save
```

## Usage

```javascript
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
// now obj will be {"c":[{"d":2},{"d":3}],"d":{"e":4}}
```

## Todo

* able to custom filters, for example, to clear keys whose value is a function.