function myFill(arr, a, start = 0, end = arr.length) {

    for (let i = start; i < end; i++) {
            arr[i] = a;
        }
    return arr;
};
console.log(myFill([7, 'dfg0', 4, 6, 'dfg'], "Hi", 2));
