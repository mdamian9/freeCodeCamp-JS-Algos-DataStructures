convertToRoman = (num) => {

    const numArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const romanNumArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

    const numStr = String(num);
    const numDigits = numStr.length, largestPlace = numStr.length;
    console.log(numDigits);
    let numBreakDown = [];
    for (let i = 0; i < numStr.length; i++) {
        let convertedNumAtI;
        switch (numStr.length) {
            case 1:
                convertedNumAtI = parseFloat(numStr[i]);
                numBreakDown.push(convertedNumAtI);
                break;
            case 2:
                if (i === 0) {
                    convertedNumAtI = parseFloat(numStr[i] * 10);
                    numBreakDown.push(convertedNumAtI);
                } else {
                    convertedNumAtI = parseFloat(numStr[i]);
                    numBreakDown.push(convertedNumAtI);
                };
                break;
            case 3:
                switch (i) {
                    case 0:
                        convertedNumAtI = parseFloat(numStr[i] * 100);
                        numBreakDown.push(convertedNumAtI);
                        break;
                    case 1:
                        convertedNumAtI = parseFloat(numStr[i] * 10);
                        numBreakDown.push(convertedNumAtI);
                        break;
                    case 2:
                        convertedNumAtI = parseFloat(numStr[i]);
                        numBreakDown.push(convertedNumAtI);
                        break;
                };
                break;
            case 4:
            console.log(num);
                switch (i) {
                    case 0:
                    console.log(i);
                        convertedNumAtI = parseFloat(numStr[i] * 1000);
                        numBreakDown.push(convertedNumAtI);
                        break;
                    case 1:
                    console.log(i);
                        convertedNumAtI = parseFloat(numStr[i] * 100);
                        numBreakDown.push(convertedNumAtI);
                        break;
                    case 2:
                    console.log(i);
                        convertedNumAtI = parseFloat(numStr[i] * 10);
                        numBreakDown.push(convertedNumAtI);
                        break;
                    case 4:
                    console.log(i);
                        convertedNumAtI = parseFloat(numStr[i]);
                        numBreakDown.push(convertedNumAtI);
                        break;
                };
                break;
        };
        // numBreakDown.push(parseInt(numStr[i]));
    };
    console.log(numBreakDown);

    return num;
};

convertToRoman(3254);