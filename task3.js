function createAdder(x) {
    return function(y) {
      return x + y;
    }
  }
let add = createAdder(5)
console.log(add(10))