checkCashRegister = (price, cash, cid) => {
    let cidSum = 0;
    let changeArr = [];
    let changeObj = {};
    cid.forEach((arr) => {
        cidSum += arr[1];
    });
    cidSum = parseFloat(cidSum.toFixed(2));
    let change = cash - price;
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
        if (change > 100) {
            numUnits = (change / 100) - (change / 100) % 1;
            changeArr.push(["ONE HUNDRED", (100 * numUnits)]);
            change -= (100 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["ONE HUNDRED", 0]);
        };
        if (change > 20) {
            numUnits = (change / 20) - (change / 20) % 1;
            changeArr.push(["TWENTY", (20 * numUnits)]);
            change -= (20 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["TWENTY", 0]);
        };
        if (change > 10) {
            numUnits = (change / 10) - (change / 10) % 1;
            changeArr.push(["TEN", (10 * numUnits)]);
            change -= (10 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["TEN", 0]);
        };
        if (change > 5) {
            numUnits = (change / 5) - (change / 5) % 1;
            changeArr.push(["FIVE", (5 * numUnits)]);
            change -= (5 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["FIVE", 0]);
        };
        if (change > 1) {
            numUnits = (change / 1) - (change / 1) % 1;
            changeArr.push(["ONE", (1 * numUnits)]);
            change -= (1 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["ONE", 0]);
        };
        if (change > .25) {
            numUnits = (change / .25) - (change / .25) % 1;
            changeArr.push(["QUARTER", (.25 * numUnits)]);
            change -= (.25 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["QUARTER", 0]);
        };
        if (change > .10) {
            numUnits = (change / .10) - (change / .10) % 1;
            changeArr.push(["DIME", (.10 * numUnits)]);
            change -= (.10 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["DIME", 0]);
        };
        if (change > .05) {
            numUnits = (change / .05) - (change / .05) % 1;
            changeArr.push(["NICKEL", (.05 * numUnits)]);
            change -= (.05 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["NICKEL", 0]);
        };
        if (change > .01) {
            numUnits = (change / .01) - (change / .01) % 1;
            changeArr.push(["PENNY", (.01 * numUnits)]);
            change -= (.01 * numUnits);
            change = change.toFixed(2);
        } else {
            changeArr.push(["PENNY", 0]);
        };
        changeObj.change = changeArr;
    };
    console.log(changeObj);
    return changeObj;
};

// checkCashRegister(19.5, 20,
//     [["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]]
// );

// checkCashRegister(19.5, 20,
//     [["PENNY", 0],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0.5],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]]
// );

checkCashRegister(3.26, 100,
    [["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]]
);

 // if (change % .25 === 0) {
        //     changeArr.push(["QUARTER", change]);
        // };