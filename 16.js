function myUnshift(arr, ...params) {
    arr.length += params.length;

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - params.length];
        if (i < params.length) {
            arr[i] = params[i];
        }
    }

    return arr.length;
}
const a = [4, 6, 'dfg'];

console.log(myUnshift(a, 7, "dfg0", 5, "fgd"));

console.log(a);
