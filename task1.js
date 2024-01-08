function EvenOdd(){
const arr = [1, 2, 3, "four", 5, null, 0, "-", undefined]
const result = arr.reduce(
  (acc, el) => {
    if (typeof el !== "number") {
      return acc
    }
    if (el === 0) {
      acc.zero++
    } else if (el % 2 === 0) {
      acc.even++
    } else {
      acc.odd++
    }
    return acc
  },
  { even: 0, odd: 0, zero: 0 }
)
console.log(result.even)
console.log(result.odd)
console.log(result.zero)
}
EvenOdd()