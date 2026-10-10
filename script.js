let num = 266219;
console.log('*******')
const result = String(num).split('').reduce((a, b) => a * b);
console.log(result);
console.log('*******')
let pow = result ** 3;
console.log(pow);
console.log('*******')
console.log(String(pow).substring(0, 2))
console.log('*******')