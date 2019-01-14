telephoneCheck = (str) => {
    let flag, p = 0, d = 0;
    if (str.length > 9 && str.length < 17) {
        for (let i = 0; i < str.length; i++) {
            if (!str[i].match(/[0-9\-\(\)\s]/i)) {
                flag = false;
                break;
            } else {
                if (str[i].match(/[\(\)]/i)) {
                    p++;
                };
                if (str[1] === " ") {
                    if (str[0] === "1") {
                        flag = true;
                    } else {
                        flag = false;
                    };
                } else {
                    if (!str[i].match(/[0-9\-\(]/i)) {
                        flag = false;
                    } else {
                        if (str[i].match(/[\-]/i)) {
                            d++;
                            if (str.length === 13 && d === 0) {
                                flag = false;
                            } else {
                                flag = true;
                            };
                        };
                    };
                };
                if (p > 0 && p != 2) {
                    flag = false;
                }
                if (p == 2 && str[0] != 1 && str[0] !== "(") {
                    flag = false;
                };
                if (str.length === 10 && str.match(/[0-9]/i)) {
                    flag = true;
                };
            };
        };
        if (str.length === 11 && str[0] !== 1) {
            flag = false;
        };
    } else {
        flag = false;
    };
    console.log(flag);
    return flag;
};

telephoneCheck("5555555555");
