function myJoin(arr, separator = ',') {
let wert = "";
for (let i = 0; i < arr.length; i++) {

    wert += arr[i] + separator;
}
return wert;
};
