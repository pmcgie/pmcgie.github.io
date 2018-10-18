package com.shapes;

import java.lang.Math;

class Triangle extends Shapes {
  
  // The prefixed s is a naming convention indicating "static."
  private static final int sSides = 3;

  // The prefixed m is a naming convention, indicating "member."
  private final int mSideLength;

  Square (int sideLength) {
    super(3,sideLength);
  }

  @Override 
  double area () {
    return Math.pow(this.mSideLength, 2);
  }

}
