// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    const filterd = []
    for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
        filterd.push(numbers[i])
    }
        
    }
    
    return filterd.reduce((a,b)=> (a+b))/filterd.length
}
console.log(average([4, "-", 8, 11, "hello", "57", 0, 2]));
module.exports = average;

/*
 numbers.filter((element) => {
      filterd.push(typeof element === "number");
     });
    console.log(filterd)
*/