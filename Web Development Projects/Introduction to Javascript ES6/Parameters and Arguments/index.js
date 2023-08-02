function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("How much does a bottle of milk cost?");
  console.log("It costs $1.5");
  const bottles = Math.floor(money / 1.5);
  console.log("buy " + bottles + " bottles of milk.");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5;
}

var change = getMilk(5);

// Another function for the exercise.

function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.

  const days = 90 * 365 - age * 365;
  const weeks = 90 * 52 - age * 52;
  const months = 90 * 12 - age * 12;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );

  /*************Don't change the code below**********/
}

lifeInWeeks(56);
