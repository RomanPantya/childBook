function myShift(arr) {
    const a = arr[0];

    if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length--;

        return a;
    } else {
        return undefined;
    }
};
