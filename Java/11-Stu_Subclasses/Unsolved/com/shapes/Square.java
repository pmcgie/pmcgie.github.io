package com.shapes;

import java.lang.Math;

class Square extends Shapes {

  // The prefixed s is a naming convention indicating "static."
  private static final int sSides = 4;

  // The prefixed m is a naming convention, indicating "member."
  private final int mSideLength;

  Square (int sideLength) {
    super(4,sideLength);
  }

  @Override 
  double area () {
    return Math.pow(this.mSideLength, 2);
  }

}
