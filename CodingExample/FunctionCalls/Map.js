/*
Summary
    The calculateInterest function takes in two parameters: money and index. It multiplies the money parameter by the interest rate at the corresponding index in the interest_rate array, which is provided as the this value when calling the function.
Example Usage
    let result = moneyData.map(calculateInterest, {interest_rate:[1.1, 1.2, 1.3]});
    In this example, the calculateInterest function is used as a callback function for the map method. The moneyData array is mapped to a new array called result, where each element is multiplied by the corresponding interest rate from the interest_rate array.
Code Analysis
    Inputs
        money (number): The amount of money to calculate the interest for.
        index (number): The index of the interest rate in the interest_rate array.

    Flow
        1. The calculateInterest function is called with the money and index parameters.
        2. It multiplies the money parameter by the interest rate at the corresponding index in the interest_rate array.
        3. The result of the multiplication is returned.

    Outputs
        The calculated interest amount.

 */



let moneyData = [10.00, 140.90, 40.50];

function calculateInterest(money, index) {
    return money * this.interest_rate[index];
};

let result = moneyData.map(calculateInterest, {interest_rate:[1.1, 1.2, 1.3]}
);

console.log(moneyData);
console.log(result);





