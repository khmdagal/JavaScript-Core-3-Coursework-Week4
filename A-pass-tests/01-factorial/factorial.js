// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
    let iteration = []
    for (let i = 1; i <= int; i++){
        iteration.push(i);
        
    }

    return iteration.reduce((a, b) => {
        return a * b;
    });
}




module.exports = factorial;
