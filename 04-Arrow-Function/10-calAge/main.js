// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

// const calAge = (year) => {
//     let sum = 0;
//     let leapCount = 0; 
//     let count = 0;
//     let start = 0;
//     for(let i = year; i <= 2020; i++) {
//         count++;
//         if(leapYear(i)) {
//             start = sum;
//             sum+= 366;
//             leapCount++;
//             console.log(`ปีที่${i} ${start} + 366 = ${sum} จบปี${i} อายุ ${count} leap year`);
//         }else {
//             start = sum;
//             sum+= 365;
//             console.log(`ปีที่${i} ${start} + 365 = ${sum} จบปี${i} อายุ ${count}`);
//         }
//     };
//     console.log(sum);
// };

const leapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ;

const calAge = (year) => {
    let sum = 0;
    for(let i = year; i <= 2020; i++)
        leapYear(i) ? sum += 366 : sum += 365;  
    console.log(`เกิดปี ${year} จำนวนวันที่เกิดมาคือ ${sum} วัน`);
};

calAge(1993);
