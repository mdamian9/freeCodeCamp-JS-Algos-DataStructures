function palindrome(str) {
    console.log(str);
    var flag = true;
    var lowerCaseStr = str.toLowerCase();
    var cleanStr = "", strTwo = "";
    var letters = /^[0-9a-zA-Z]+$/;
    for (var i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i].match(letters)) {
            cleanStr += lowerCaseStr[i]
        };
    };
    for (var i = lowerCaseStr.length - 1; i >= 0; i--) {
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