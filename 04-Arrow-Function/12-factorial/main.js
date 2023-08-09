// ให้เขียนฟังก์ชันคำนวณค่า factorial


const factorial = (number) => number === 0 || number === 1 ? 1 : number * factorial(number - 1);

console.log(factorial(5));