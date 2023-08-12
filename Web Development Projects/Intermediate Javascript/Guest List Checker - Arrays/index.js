var guestlist = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var yourName = prompt(
  "Let me check your invitation for you. What is your name? "
);

if (guestlist.includes(yourName)) {
  alert("Welcome to the party " + yourName);
} else {
  alert("You shall not pass " + yourName);
}
