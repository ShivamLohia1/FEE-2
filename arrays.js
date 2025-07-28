let arr3 = [1,2,3,4,5]

a= 0;
arr3.push(a);

for (let i = arr3.length - 1; i > 0; i--) {
    arr3[i] = arr3[i - 1];
}
arr3[0]=a