telephoneCheck = (str) => {
    let flag;
    if (str.length >= 10 && str.length <= 16) {
        for (let i = 0; i < str.length; i++) {
            if (!str[i].match(/[0-9]/i)) {
                flag = false;
            } else {
                if (!str[i].match(/[0-9\-\(\)]/i)) {
                    flag = false;
                    break;
                } else {
                    if (str[1] === " ") {
                        if (str[0] !== 1) {
                            flag = false;
                        };
                    } else {
                        flag = true;
                    }
                };
            };
        };
    };
    console.log(flag);
    return flag;
};

telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("(6054756961)");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382");
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");
telephoneCheck("(555-555-5555");