function myShift(arr) {
const a = arr[0];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
}
arr.length--;

return a;

}
const arr = [1, 2];
console.log(myShift(arr));
console.log(arr);
