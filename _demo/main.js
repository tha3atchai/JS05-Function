// test push, feedback branch
// test push, feedback branch

function soundOfBird() {
    console.log("เสียงงง นกกรงหัวจุกมันริก");
    console.log("จุก");
    for(let i = 1; i <= 11; i++) {
        console.log("กวิ๊ก");
    };
};

soundOfBird();

function isPrime(n) {
    for(let divider = 2; divider < n; divider++){
        if(n % divider === 0)
        isPrime = false;
        break;
    }
    (isPrime) ? console.log(`${n} isPrime`) : console.log(`${n} is not Prime`);
};

isPrime(11);

