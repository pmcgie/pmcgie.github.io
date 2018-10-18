package com.shapes;

// Abstract allows you build structure without building out all the pieces
abstract class Shapes {

  // not private (bc that only makes it accessible within the class)
  protected final int mSides;

  protected final int mSideLength;

  Shape (int sides, int sideLength) {
    this.mSides = sides;
    this.mSideLength = sideLength;
  }

  abstract double area();

  int perimeter () {
    return this.mSides * this.mSideLength;
  }

  int getSides () {
    return this.mSides;
  }

}