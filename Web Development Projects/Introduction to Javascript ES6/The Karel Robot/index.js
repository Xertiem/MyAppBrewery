function main() {
  //your code here
  moveOdd();
  moveEven();
  moveOdd();
  moveEven();
  moveOdd();
}

function moveOdd() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function moveEven() {
  turnLeft();
  move();
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}
