function myPush(arr, ...params) {
  arr.length += params.length;

  for (let i = 0; i < params.length; i++) {
    arr[i + arr.length - params.length] = params[i];
  }
  return arr.length;
};
const a = [5, 8, "wert"];
console.log(myPush(a, 3, 8, "rew"));

console.log(a);
