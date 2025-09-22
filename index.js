const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter Alien numeral (Ctrl+C to exit):');

// rl.question('Enter Alien numeral: ', (input) => {
rl.on('line', (input) => {

    const alienMap = {
        A: 1,
        B: 5,
        Z: 10,
        L: 50,
        C: 100,
        D: 500,
        R: 1000
    };

    const subtractivePairs = {
        AB: 4,
        AZ: 9,
        ZL: 40,
        ZC: 90,
        CD: 400,
        CR: 900
    };

    let sum = 0;

   let isValid = true;

    for (let i = 0; i < input.length; i++) {
     
        if (alienMap[input[i]] === undefined) {
            console.log("Alien format not valid");
            isValid = false;
            break;
        }


        if (i < input.length - 1) { // ไม่ใช่ตัวสุดท้าย

            if (alienMap[input[i]] < alienMap[input[i + 1]]) { // ค่าอักษรปัจจุบัน < ตัวถัดไป
                let strCombined = input[i] + input[i + 1];

                if (subtractivePairs[strCombined] !== undefined) {
                    sum += subtractivePairs[strCombined];
                    i++; // ข้ามตัวถัดไป
                }

            } else {
                sum += alienMap[input[i]];
            }

        } else {
            sum += alienMap[input[i]];
        }
    }

    if (isValid) {
        console.log('Result:', sum);
    }

    console.log('Enter Alien numeral (Ctrl+C to exit):');
});
