let str = "Naman"
let str2 = str.toLowerCase()
let n = str.length
let isPal = true
for(let i = 0;i<Math.floor(n/2);i++){
    if(str2[i]!==str2[n-i-1]){
        isPal=false
        break
    }
}
if(isPal){
    console.log("Pallindrome")
}else{
    console.log("Not pallindrome")
}
