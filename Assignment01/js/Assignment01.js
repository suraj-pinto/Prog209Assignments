
for (var i = 1; i <= 300; i++) {
    
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzFuzz");
    }
    else if (i % 5 === 0) {
        console.log("Fizz");
    }
    else if (i % 7 === 0) {
        console.log("Fuzz");
    }
    else {
        console.log(i);
    }
}