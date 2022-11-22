// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
    let iteration = [1,]
    for (let i = 2; i <= int; i++){
        iteration.push(i);
        
    }

    return iteration.reduce((a, b) => {
        return a * b;
    });
}
console.log(factorial(5));



module.exports = factorial;
