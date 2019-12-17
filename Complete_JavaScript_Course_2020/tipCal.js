/*
Coding Challenge #3
Tip Calculator (as a function)
1. John & Family went to 3 restuarants
paid $124, $48, and $268
2. 20% tip on bills less than $50, 
15% on bills b/t $50 and $200, and
10% on bills more than $200
2 arrays:
1) Containing all 3 tips (one for each bill)
2) Contrainig all three final paid amounts
(bill + tip).
*/

tipCal = (bill) => {  
    let tipsOnly = [];
    let totalBill = [];
    let percentage;

    for (i in bill) {
        if (bill[i] < 50) {
            percentage = 0.20;
        } else if (bill[i] > 50 && bill[i] < 200) {
            percentage = 0.15;
        } else {
            percentage = 0.10;
        }
        tips = bill[i] * percentage;
        tipsOnly.push(tips);
    
        total = bill[i] + (bill[i] * percentage);
        totalBill.push(total);
    }
    console.log(tipsOnly);
    console.log(totalBill);
};

let bill = [ 124, 48, 268 ];
tipCal(bill);
