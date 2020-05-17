var temp = prompt("how's weather? ( enter degree ) ")

if (temp > 80) {
    console.log("it's very hot")
} else if (temp >= 50 && temp <= 80) {
    console.log("it's hot")
} else if (temp >= 20 && temp <= 50) {
    console.log("it's not hot")
} else {
    console.log("it's cold")
}