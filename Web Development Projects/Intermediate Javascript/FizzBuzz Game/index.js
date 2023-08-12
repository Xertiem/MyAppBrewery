// My take on it where it asks the user for a number.

var yourNumber = prompt("Type a number? ");

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
}
