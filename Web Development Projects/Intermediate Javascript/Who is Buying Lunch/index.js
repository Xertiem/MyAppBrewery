function whosPaying(names) {
  const randomPerson = Math.floor(Math.random() * names.length);

  // get random names
  const chosenOne = names[randomPerson];

  return chosenOne + " is going to buy lunch today!";
}

/* 

This function creates a variable called randomPerson that recieves an Array called names, which is the same variable used in the function so it's not delcared as var.
Inside the Array the Math.random is used to multiply the number of  names  and then Math.floor to round this number so there is no decimal.
This returns the randomPerson that is activated when you call the function like:

whosPaying("Leonardo", "Donatello", "Raphael", "Michelangelo", "April", "Splinter");

It will 'randomly' pick one.
*/

/* 

function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople)  //0 - 0.9999\
    var randomPerson = names[randomPersonPosition]
    
    return randomPerson + " is going to buy lunch today!";
}

*/
