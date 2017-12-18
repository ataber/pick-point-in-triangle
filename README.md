# pick-point-in-triangle
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Pick a random point in a triangle, derived from [this reference](http://mathworld.wolfram.com/TrianglePointPicking.html).

## Usage

[![NPM](https://nodei.co/npm/pick-point-in-triangle.png)](https://www.npmjs.com/package/pick-point-in-triangle)

```javascript
var bunny   = require('bunny')
var cells   = bunny.cells
var positions = bunny.positions
var triangle = [positions[cells[0][0]], positions[cells[0][1]], positions[cells[0][2]]]
var point = require('pick-point-in-triangle')(triangle);
```

`require("pick-point-in-triangle")(vertices)`
----------------------------------------------------
Uniformly samples within a triangle given an array of 3 vertices.

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## License

MIT. See [LICENSE.md](http://github.com/ataber/pick-point-in-triangle/blob/master/LICENSE.md) for details.
