// time: O(n)
// space: O(1)
var minTimeToVisitAllPoints = function (points) {
  let result = 0;
  let [x1, y1] = points[0];
  const len = points.length;
  for (let i = 1; i < len; i++) {
    let [x2, y2] = points[i];
    result += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    [x1, y1] = [x2, y2];
  }
  return result;
};
