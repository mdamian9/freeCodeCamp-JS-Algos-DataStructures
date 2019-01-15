checkCashRegister = (price, cash, cid) => {
    let cidSum = 0;
    let changeArr = [];
    let changeObj = {};
    let finalChangeObjSum = 0;
    cid.forEach((arr) => {
        cidSum += arr[1];
    });
    cidSum = parseFloat(cidSum.toFixed(2));
    let ogChange = cash - price, change = cash - price;
    if (cidSum < change) {
        changeObj.status = "INSUFFICIENT_FUNDS";
        changeObj.change = [];
    } else if (cidSum === change) {
        changeObj.status = "CLOSED";
        changeObj.change = cid.filter((item) => {
            return item;
        });
    } else {
        changeObj.status = "OPEN";
        let numUnits = 0;
        let numInReg = 0;
        if (change > 100) {
            numUnits = (change / 100) - (change / 100) % 1;
            const hundreds = (cid.filter((item) => {
                return item[0] === "ONE HUNDRED"
            }));
            numInReg = hundreds[0][1] / 100;
            if (numInReg >= numUnits) {
                changeArr.push(["ONE HUNDRED", (100 * numUnits)]);
                change -= (100 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["ONE HUNDRED", (100 * numInReg)]);
                change -= (100 * numInReg);
                change = change.toFixed(2);     
            };
        }
        if (change > 20) {
            numUnits = (change / 20) - (change / 20) % 1;
            const twenties = (cid.filter((item) => {
                return item[0] === "TWENTY"
            }));
            numInReg = twenties[0][1] / 20;
            if (numInReg >= numUnits) {
                changeArr.push(["TWENTY", (20 * numUnits)]);
                change -= (20 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["TWENTY", (20 * numInReg)]);
                change -= (20 * numInReg);
                change = change.toFixed(2);     
            };
        }
        if (change > 10) {
            numUnits = (change / 10) - (change / 10) % 1;
            const tens = (cid.filter((item) => {
                return item[0] === "TEN"
            }));
            numInReg = tens[0][1] / 10;
            if (numInReg >= numUnits) {
                changeArr.push(["TEN", (10 * numUnits)]);
                change -= (10 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["TEN", (10 * numInReg)]);
                change -= (10 * numInReg);
                change = change.toFixed(2);     
            };
        };
        if (change > 5) {
            numUnits = (change / 5) - (change / 5) % 1;
            const fives = (cid.filter((item) => {
                return item[0] === "FIVE"
            }));
            numInReg = fives[0][1] / 5;
            if (numInReg >= numUnits) {
                changeArr.push(["FIVE", (5 * numUnits)]);
                change -= (5 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["FIVE", (5 * numInReg)]);
                change -= (5 * numInReg);
                change = change.toFixed(2);     
            };
        };
        if (change > 1) {
            numUnits = (change / 1) - (change / 1) % 1;
            const ones = (cid.filter((item) => {
                return item[0] === "ONE"
            }));
            numInReg = ones[0][1] / 10;
            if (numInReg >= numUnits) {
                changeArr.push(["ONE", (1 * numUnits)]);
                change -= (1 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["ONE", (1 * numInReg)]);
                change -= (1 * numInReg);
                change = change.toFixed(2);     
            };
        };
        if (change > .25) {
            numUnits = (change / .25) - (change / .25) % 1;
            const quarters = (cid.filter((item) => {
                return item[0] === "QUARTER"
            }));
            numInReg = quarters[0][1] / .25;
            if (numInReg >= numUnits) {
                changeArr.push(["QUARTER", (.25 * numUnits)]);
                change -= (.25 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["QUARTER", (.25 * numInReg)]);
                change -= (.25 * numInReg);
                change = change.toFixed(2);     
            };
        };
        if (change > .10) {
            numUnits = (change / .10) - (change / .10) % 1;
            const dimes = (cid.filter((item) => {
                return item[0] === "DIME"
            }));
            numInReg = dimes[0][1] / .10;
            if (numInReg >= numUnits) {
                changeArr.push(["DIME", (.10 * numUnits)]);
                change -= (.10 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["DIME", (.10 * numInReg)]);
                change -= (.10 * numInReg);
                change = change.toFixed(2);     
            };
        };
        if (change > .05) {
            numUnits = (change / .05) - (change / .05) % 1;
            const nickels = (cid.filter((item) => {
                return item[0] === "NICKEL"
            }));
            numInReg = nickels[0][1] / .05;
            if (numInReg >= numUnits) {
                changeArr.push(["NICKEL", (.05 * numUnits)]);
                change -= (.05 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["NICKEL", (.05 * numInReg)]);
                change -= (.05 * numInReg);
                change = change.toFixed(2);     
            };
        };
        if (change > .01) {
            numUnits = (change / .01) - (change / .01) % 1;
            const pennies = (cid.filter((item) => {
                return item[0] === "PENNY"
            }));
            numInReg = pennies[0][1] / .01;
            if (numInReg >= numUnits) {
                changeArr.push(["PENNY", (.01 * numUnits)]);
                change -= (.01 * numUnits);
                change = change.toFixed(2);    
            } else {
                changeArr.push(["PENNY", (.01 * numInReg)]);
                change -= (.01 * numInReg);
                change = change.toFixed(2);     
            };
        };
        changeObj.change = changeArr;
    };
    changeObj.change.forEach((item) => {
        finalChangeObjSum += item[1];
    });
    finalChangeObjSum = finalChangeObjSum.toFixed(2);
    if(finalChangeObjSum != ogChange) {
        changeObj = {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    };
    return changeObj;
};

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))