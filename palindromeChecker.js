palindrome = (str) => {
    console.log(str);
    let flag = true;
    const lowerCaseStr = str.toLowerCase();
    let cleanStr = "", strTwo = "";
    const letters = /^[0-9a-zA-Z]+$/;
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i].match(letters)) {
            cleanStr += lowerCaseStr[i]
        };
    };
    for (let i = lowerCaseStr.length - 1; i >= 0; i--) {
        if (lowerCaseStr[i].match(letters)) {
            strTwo += lowerCaseStr[i];
        };
    };
    if (cleanStr !== strTwo) {
        flag = false;
    };
    console.log(`${cleanStr}\n${strTwo}\n${flag}`);
    return flag;
};

palindrome("eye");