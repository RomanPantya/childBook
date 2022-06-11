function myPop(arr) {
    const a = arr[arr.length - 1];

    arr.length--;

    return a;
};
const arr = [111];

console.log(myPop(arr));
console.log(arr);
