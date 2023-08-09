// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

const leapYear = year =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? console.log(`${year} is leap year`)
    : console.log(`${year} is not leap year`);

leapYear(1000);
leapYear(2000);
leapYear(3000);
leapYear(4000);
