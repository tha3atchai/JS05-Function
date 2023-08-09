// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

const divide = (num) => num % 7 === 0? console.log("หารลงตัว") :  console.log("หารไม่ลงตัว"); 

divide(7);
divide(2);
divide(14);
divide(20);