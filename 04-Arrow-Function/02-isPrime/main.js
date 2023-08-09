// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function

const checkPrime = n => {
    let prime = true
    for(let divider = 2; divider < n; divider++){
        if(n % divider === 0) {
            prime = false;
            break;
        };
    }
    prime ? console.log(`${n} is prime number`) : console.log(`${n} is not prime number`);
};

checkPrime(5);
checkPrime(3);
checkPrime(4);
checkPrime(21);
checkPrime(17);