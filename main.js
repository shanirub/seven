function seven(m) {
    
    var steps = 0

    while (m.toString().length > 2) {
        var quotient = Math.floor(m / 10)
        var remainder = m % 10 

        m = quotient - 2 * remainder
        steps++
    }

    return [m, steps]
}

var number = 477557101
var result = seven(number)
console.log("starting with " + number)
console.log("last number " + result[0])
console.log("steps " + result[1])