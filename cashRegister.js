checkCashRegister = (price, cash, cid) => {
    let cidSum = 0;
    let changeArr = [];
    let changeObj = {};
    cid.forEach((arr) => {
        cidSum += arr[1];
    });
    cidSum = parseFloat(cidSum.toFixed(2));
    const change = cash - price;
    console.log(change);
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
        if (change % .25 === 0) {
            changeArr.push(["QUARTER", change]);
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

checkCashRegister(19.5, 20,
    [["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0.5],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]]
);
