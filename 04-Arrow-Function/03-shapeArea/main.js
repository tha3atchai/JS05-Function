

const square = (n) => {
  n ** 2;
};

console.log(square(7)); // undefined เพราะ ไม่ได้ return ค่า;



const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** 28.27 เพราะไม่ได้ใส่ {} จะทำการ return ค่าเลย;
