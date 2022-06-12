function myPush(arr, ...params) {

  for (let i = 0; i < params.length; i++) {
    arr[arr.length] = params[i];
  }
  return arr.length;
};
