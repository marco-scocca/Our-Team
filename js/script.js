let num = [1, 2, 3, 4];
console.log(num);
function changeNum(value) {
    console.log(value);
    value = 7;
    return value;
}

let result = changeNum(num);
console.log(result);
console.log(nums);