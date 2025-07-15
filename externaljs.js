function jsAlert(){
    console.log('Button clicked');
    alert('External alert');
    var a = 10; // variable declaration with 'var' can be re-declared and re-intialized.
    let b = 20; // variable declaration with 'let' cannot be re-declared but can be re-initialized.
    const c = 30; // variable declaration with 'const' cannot be re-declared and cannot be re-initialized.
}
console.log("Variable a:"); 

function scopeTest(){
        var x = 10;
        let y = 20;
        const z = 30;
        {
            var x = 449;
            let y = 450;
            const z = 451;
            console.log("Inside block: x =", x, ", y =", y, ", z =", z);
        }
        console.log("Outside block: x =", x, ", y =", y, ", z =", z);
    }

function Hoist(){  //Hoisting:- JavaScript's behavior of moving declarations to the top of their scope before the code is executed.
    console.log(a);  //"undefined" b/c no value of 'a'
    //it is reading it like: 
    // var a;
    // console.log(a);

    var a = 100;  // if 'let a = 100;' then it will show error b/c there is declaration but not initialization
    console.log(a);

    let b;     // this will show "undefined" b/c its value is initialized below
    console.log(b);
    b = 20;
    console.log(b);
}