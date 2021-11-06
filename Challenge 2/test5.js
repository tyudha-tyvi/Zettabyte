// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  let count = 0
  const binary = num.toString(2)

  for (i of binary) {
    if(i === '1') {
      count++
    }
  }

  return count
}

console.log(result(number));