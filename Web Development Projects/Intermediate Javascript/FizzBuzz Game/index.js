// My take on it where it asks the user for a number.

/*var yourNumber = prompt("Type a number? ");

if (yourNumber % 3 === 0) {
  if (yourNumber % 5 === 0) {
    alert("FizzBuzz");
  } else {
    alert("Fizz");
  }
} else if (yourNumber % 5 === 0) {
  alert("Buzz");
} else {
  alert("Keep counting");
}*/

//Another version of it where it counts for itself. Runs by calling fizzBuzz() in the console.

var output = [];

function fizzBuzz() {
  for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0) {
      if (count % 5 === 0) {
        output.push("FizzBuzz");
      } else {
        output.push("Fizz");
      }
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}
