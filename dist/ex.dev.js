"use strict";

var a = {
  "top": 0,
  "left": 0,
  "width": 10,
  "height": 10
};
var b = {
  "top": 5,
  "left": 5,
  "width": 10,
  "height": 10
};

var doRectanglesOverlap = function doRectanglesOverlap(rect1, rect2) {
  var _ref = [rect1.left, rect1.top, rect1.left + rect1.width, rect1.top + rect1.height],
      left1 = _ref[0],
      top1 = _ref[1],
      right1 = _ref[2],
      bottom1 = _ref[3],
      _ref2 = [rect2.left, rect2.top, rect2.left + rect2.width, rect2.top + rect2.height],
      left2 = _ref2[0],
      top2 = _ref2[1],
      right2 = _ref2[2],
      bottom2 = _ref2[3]; // The first rectangle is under the second or vice versa

  if (top1 < bottom2 || top2 < bottom1) {
    return false;
  } // The first rectangle is to the left of the second or vice versa


  if (right1 < left2 || right2 < left1) {
    return false;
  } // Rectangles overlap


  return true;
};

console.log(areRectanglesOverlap(a, b));
doRectanglesOverlap;