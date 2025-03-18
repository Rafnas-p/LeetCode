var transformArray = function(nums) {
    let arr = [];

    for (let num of nums) {
        if (num % 2 === 0) { 
            arr.push(0);
        } else {
            arr.push(1);
        }
    }

    return arr.sort();
};

const nums = [3, 4, 2, 1];
const r = transformArray(nums);
console.log(r);
