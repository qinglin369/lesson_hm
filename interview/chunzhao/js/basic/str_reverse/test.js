const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => {
    console.log(accumulator, currentValue,'-------');
    return accumulator + currentValue;
  }
)

console.log(sum);
