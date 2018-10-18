package com.shapes;

import java.lang.Math;

class Triangle {
  // Your implementation goes here.
  private static final int sides = 3;

  private final int sideLength;

  Triangle (int sideLength) {
    this.sideLength = sideLength;
  }

  double area() {
    return 0.5 * this.sideLength * this.getHeight();
  }

  int perimeter () {
    return this.sideLength * Triangle.sides;
  }
  
  int getSides () {
    return Triangle.sides;
  }
  
  private double getHeight () {
    return this.sideLength * Math.sin(Math.toRadians(60));
  }
}
