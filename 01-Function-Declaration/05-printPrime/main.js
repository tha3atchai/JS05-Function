// printPrime
// ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข
// แสดง Prime number ทั้งหมด โดยแสดงตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

// ```js
// printPrime(7); // 2, 3, 5, 7
// printPrime(13); // 2, 3, 5, 7, 11, 13
// printPrime(14); // 2, 3, 5, 7, 11, 13
// ```

//------------ Program V.1 --------------------------
// function isPrime(n) {
//     let prime = true;
//     for(let divider = 2; divider < n; divider++) {
//         if(n % divider === 0){
//             prime = false;
//             break;
//         };
//     };
//     if(prime) console.log(`${n} เป็นจำนวนเฉพาะ`);
// };

// function printPrime(number) {
//     for(let i = 2; i <= number; i++) {
//         isPrime(i)
//     };
// };

// printPrime(7);
// printPrime(13);
// printPrime(14);

//------------ Program V.2 --------------------------
// function printPrime(number) {
//   let str = "";
//   for (let i = 2; i <= number; i++) {
//     let prime = true;
//     for (let divider = 2; divider < i; divider++) {
//       if (i % divider === 0) {
//         prime = false;
//         break;
//       }
//     }
//     prime ? (str = str + i + ", ") : null;
//   }
//   str = str.slice(0, -2);
//   console.log(str);
// }

// printPrime(7);
// printPrime(13);
// printPrime(14);

//------------ Program V.3 --------------------------
function isPrime(n) {
    for(let divider = 2; divider < n; divider++) {
        return !(n % divider === 0);
    };
};

function printPrime(number) {
    let str = "";
    for (let i = 2; i <= number; i++) {
      isPrime(i) ? (str = str + i + ", ") : null;
    }
    str = str.slice(0, -2);
    console.log(str);
  }
  
  printPrime(7);
  printPrime(13);
  printPrime(14);