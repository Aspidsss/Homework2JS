function printNumberInterval(x,y) {
    let current = x
    const intervalId = setInterval(function() {
        console.log(current)
        if (current === y) {
            clearInterval(intervalId)
        }
        current++
    }, 1000)
}
printNumberInterval(1,5)