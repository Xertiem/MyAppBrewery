// 99 bears on the wall using the control statement: While Loop
/* var lyrics = []
var count = 99;  
function beer() {
    while (count > 0) {
        if (count > 1) {
            lyrics.push(count + " bottles of beer on the wall, " + count + " bottles of beer.");  
            count--;
            lyrics.push("Take one down and pass it around, " + count  + " bottles of beer on the wall.");
        } 
        else if (count === 1) {
            lyrics.push(count + "bottle of beer on the wall, " + count + "bottle of beer."); 
            count--;
            lyrics.push("Take one down and pass it around, no more bottles of beer on the wall.");

        }
        
        else  {
            lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
            lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        count --;
    }
    console.log(lyrics);
}*/

var lyrics = [];
var count = 99;
function beer() {
  while (count > 0) {
    if (count > 1) {
      var bottle = "bottles";
    } else if (count === 1) {
      var bottle = "no more bottles";
    }
    lyrics.push(
      count +
        " " +
        bottle +
        " of beer on the wall, " +
        count +
        " " +
        bottle +
        " of beer."
    );
    count--;
    lyrics.push(
      "Take one down and pass it around, " +
        count +
        " " +
        bottle +
        " of beer on the wall."
    );
  }
  console.log(lyrics);
}
