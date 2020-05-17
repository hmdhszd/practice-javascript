var x = prompt("enter a number : ")

while (x > 0) {
    console.log(x + " is bigger than 0")
    x -= 1
    if (x == 1) {
        console.log("it's ONE")
        break;
    }
}