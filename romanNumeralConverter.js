convertToRoman = (num) => {
    var numerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    var convertedNum = '';
    var i;
    for (i in numerals) {
        while (num >= numerals[i]) {
            convertedNum += i;
            num -= numerals[i];
        };
    };
    return convertedNum;
};

console.log(convertToRoman(3));
console.log(convertToRoman(333));
console.log(convertToRoman(36));
