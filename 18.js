function myJoin(arr, separator = ',') {
let wert = "";
for (let i = 0; i < arr.length; i++) {

    wert += arr[i] + separator;
}
return wert;

}
console.log(myJoin([7, 'dfg0', 4, 6, 'dfg'], '++++'));
