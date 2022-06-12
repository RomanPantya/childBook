function myFill(arr, a, start = 0, end = arr.length) {

    for (let i = start; i < end; i++) {
            arr[i] = a;
        }
    return arr;
};
