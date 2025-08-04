let arr = [1,200,3,4,5,7,19,20,22]
let n = arr.length
let max = -Infinity,max2= -Infinity
for(let i=0;i<arr.length;i++){
    if (arr[i] > max) {
        max2 = max;
        max = arr[i];
    } else if (arr[i] > max2 && arr[i] != max) {
        max2 = arr[i];
    }
}

console.log(max2)