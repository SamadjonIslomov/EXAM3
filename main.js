function toReadable(number) {
    if (number === 0) return "zero";
    const ones = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    if (ones[number]) return ones[number];

    const tens = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (tens[number]) return tens[number];
    const teens = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    if (teens[number]) return teens[number];
    function tensToText(num) {
        let lastNum = "";
        let firstNum = "";
        lastNum = ones[num % 10];
        firstNum = tens[Math.floor(num / 10) * 10];
        return `${firstNum} ${lastNum}`;
    }
    if (number >= 21 && number <= 99) return tensToText(number);
    function hundredsToText(num) {
        let firstNum = Math.floor(num / 100);
        let bareHundred = `${ones[firstNum]} hundred`;
        if (num % 100 === 0) return bareHundred;
        let tensNum = num % 100; 
        let tensText = toReadable(tensNum);
        return `${bareHundred} ${tensText}`;
    }
    if (number >= 100 && number <= 999) return hundredsToText(number);

    function thousandsToText(num) {
        let firstNum = Math.floor(num / 1000);
        let textThousand = toReadable(firstNum);
        let bareThousand = `${textThousand} thousand`;
        if (num % 1000 === 0) return bareThousand;
        let hundreds = num % 1000;
        let hundredsText = toReadable(hundreds);

        return `${bareThousand} ${hundredsText}`;
    }
    if (number >= 1000 && number <= 10 ** 6 - 1) return thousandsToText(number)
    function millionsToText(num) {
        const million = 10 ** 6;
        let firstNum = Math.floor(num / million);
        let firstNumText = toReadable(firstNum);
        let bareMillion = `${firstNumText} million`;
        if (num % million === 0) return bareMillion;
        let hundredsInMillion = num % million;
        let hundredsInMillionText = toReadable(hundredsInMillion);
        return `${bareMillion} ${hundredsInMillionText}`;
    }
    if (number >= 10 ** 6 && number <= 10 ** 9 - 1)
        return millionsToText(number);
    function billionsToText(num) {
        const billion = 10 ** 9;
        let firstNum = Math.floor(num / billion);
        let firstNumText = toReadable(firstNum);
        let bareBillion = `${firstNumText} billion`;
        if (num % billion === 0) return bareBillion;
        let millionsInBillions = num % billion;
        let millionsInBillionsText = toReadable(millionsInBillions);

        return `${bareBillion} ${millionsInBillionsText}`;
    }
    if (number >= 10 ** 9 && number <= 10 ** 12 - 1)
        return billionsToText(number);

    if (number >= 10 ** 12)
        return "I cannot count higher that billions yet, sorry.";
}
let num = prompt("son kiriting")
console.log(toReadable(num))