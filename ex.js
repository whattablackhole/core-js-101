let a= {"top":0,"left":0,"width":10,"height":10}
 let b =  {"top":5,"left":5,"width":10,"height":10}

const doRectanglesOverlap = (rect1, rect2) => {
    let [left1, top1, right1, bottom1] = [rect1.left, rect1.top, rect1.left+rect1.width, rect1.top+rect1.height],
        [left2, top2, right2, bottom2] = [rect2.left, rect2.top, rect2.left+rect2.width, rect2.top+rect2.height];
    // The first rectangle is under the second or vice versa
    if (top1 < bottom2 || top2 < bottom1) {
      return false;
    }
    // The first rectangle is to the left of the second or vice versa
    if (right1 < left2 || right2 < left1) {
      return false;
    }
    // Rectangles overlap
    return true;
  }
console.log(areRectanglesOverlap(a,b))
doRectanglesOverlap