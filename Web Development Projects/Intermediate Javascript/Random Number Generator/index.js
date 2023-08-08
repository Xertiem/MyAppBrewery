var yourName = prompt("What is your name? ");
var theirName = prompt("What is your crush's name? ");

var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;

if (n > 70) {
  alert(
    "Your lovescore is " + n + "%. You love eachother like Kanye loves Kanye."
  );
} else {
  alert("Your lovescore is " + n + "%.");
}
