var outputBox = document.getElementById("output-box")
var output = "";

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        output += "Fizzbuzz\n";
    } else if (i % 3 == 0) {
        output += "Fizz\n";
    } else if (i % 5 == 0) {
        output += "Buzz\n";
    } else {
        output += i + "\n";
    }
}

outputBox.innerHTML = output;