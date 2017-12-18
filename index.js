var vec3 = require('gl-vec3');

module.exports = function(vertices) {
  var a1 = Math.random();
  var a2 = Math.random();
  if (a1 + a2 > 1) {
    a1 = 1 - a1;
    a2 = 1 - a2;
  }

  var v1 = [0, 0, 0];
  var v2 = [0, 0, 0];
  vec3.subtract(v1, vertices[1], vertices[0]);
  vec3.subtract(v2, vertices[2], vertices[0]);

  var outVertex = [0, 0, 0];
  vec3.scaleAndAdd(outVertex, vertices[0], v1, a1);
  vec3.scaleAndAdd(outVertex, outVertex, v2, a2);
  return outVertex;
}
