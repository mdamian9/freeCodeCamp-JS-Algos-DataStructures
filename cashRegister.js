checkCashRegister = (price, cash, cid) => {
    let cidSum = 0;
    let changeObj = {};
    cid.forEach((arr) => {
        cidSum += arr[1];
    });
    cidSum = parseFloat(cidSum.toFixed(2));
    const change = cash - price;
    if (cidSum < change) {
        changeObj.id = "INSUFFICIENT_FUNDS";
        changeObj.change = [];
    } else if (cidSum === change) {
        changeObj.id = "CLOSED";
        changeObj.change = [];
    } else {
        changeObj.id = "OPEN";
        changeObj.change = [];
    };
    console.log(changeObj);
    return changeObj;
};

checkCashRegister(19.5, 20,
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
