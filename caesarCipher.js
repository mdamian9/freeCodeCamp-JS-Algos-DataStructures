rot13 = (str) => { // LBH QVQ VG!

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let decoded = "";

    for (let i = 0; i < str.length; i++) {
        if (!str[i].match(/[a-z]/i)) {
            decoded += str[i];
        } else {
            if (str[i] !== " ") {
                if (letters.indexOf(str[i]) >= 13) {
                    decoded += letters[letters.indexOf(str[i]) - 13];
                } else {
                    decoded += letters[letters.indexOf(str[i]) + 13];
                };
            } else {
                decoded += " ";
            };
        };
    };
    return decoded;
};

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
