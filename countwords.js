let str = "Hello world do not make noise"
let words = str.split(' ')
console.log(words.length)

for(let i=0;i<words.length;i++){
    let word = words[i],length=0;
    for(let j=0;j!=word.length;j++){
        length++;
    }
    console.log(word+': '+length);
}
console.log("\n")
console.log("2nd method")
//method 2:
words.forEach((words)=>{
    let s = words.trim()
    if(s.length>0){
        console.log(`${s}:${s.length}`)
    }
})