package com.shapes;

import java.lang.Math;

//  Your implementation goes here.
class Square {
  
  // The prefixed s is a naming convention indicating "static."
  private static final int sides = 4;

  // The prefixed m is a naming convention, indicating "member."
  private final int sideLength;

  Square (int sideLength) {
    this.sideLength = sideLength;
  }
  
  double area () {
    return Math.pow(this.sideLength, 2);
  }

  int perimeter () {
    return this.sideLength * Square.sides;
  }

  int getSides () {
    return Square.sides;
  }

}