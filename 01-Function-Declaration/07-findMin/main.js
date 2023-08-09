// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// ```js
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9
// ```

// for(let i = 0;i< args.length;i++)
// {
//     if(args[i] < args[i+1])
//     {
//         max = args[i+1];
//     }
// }


function compareNumbers(a, b) {
    return b - a;
};

function max (...number) {
    number.sort(compareNumbers);
    console.log(number[0]);
};

max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9
