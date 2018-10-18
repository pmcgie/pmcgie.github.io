package com.exceptions;

class Test {

  public static void main (String args[]) {

    System.out.println("Testing your class..");

    // Your code here.
    try {
      Polygon triangle = new Polygon(3, 20);
    } catch (Polygon.InvalidSideLengthException | Polygon.InsufficientVerticesException e) {
      e.printStackTrace();
    }
  }

}