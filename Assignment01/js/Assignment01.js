
// loop from num 1 to 300 
for (var i = 1; i <= 300; i++) {
    
    // check if num divisible by both 3 and 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
        // output FizzFuzz  to console
        console.log("FizzFuzz");
    }
    // check if num divisible by 5
    // this would take care of num being divible only by 5
    else if (i % 5 === 0) {
        // output Fizz to console
        console.log("Fizz");
    }
    // check if num divisible by 7
    // this would take care of num being divisible by 7 (and not 5)
    else if (i % 7 === 0) {
        // output Fuzz to console
        console.log("Fuzz");
    }
    // handles all other cases
    else {
        // output num to console
        console.log(i);
    }
}

// display the inverted right anble triangle using char #
// set variable max to 7
var max = 7;

// set outer loop  (one iteration for each line)
for (var i = 0; i < max; i++) {
    
    // initialze to an empty string at start of each line
    let str = "";
    
    // inner loop, formats a string for each line
    for(var j = i; j < max; j++) {
        str += "#";
    }
    
    // output the string to display a line in console
    console.log(str);
}