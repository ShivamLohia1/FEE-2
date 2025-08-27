// operation
// 1.pending state (initial)
// 2.fulfil state (resolve)
// 3.reject (reject)
let age = 16;
async function checkAge() {
    const pr = new Promise((resolve,reject)=>{
        if(age>18)
            resolve("You are eligible for voting");
        else
            resolve("You are not eligible for voting");
    })
    return pr;
}

checkAge().then((resp)=>resp)
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))
    .finally(()=>(console.log('Finally block')))    