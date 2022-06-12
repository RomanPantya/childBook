function myPop(arr) {
    const a = arr[arr.length - 1];

    if (arr.length !== 0) {
        arr.length--;
        return a;

    } else {
        return undefined;
    }
};
