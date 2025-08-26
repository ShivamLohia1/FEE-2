function removeError(){
    const allErr=document.querySelectorAll('.text-danger');
    allErr.forEach((err)=>{
        err.textContent='';
    })
}

function isValidPassword(text){
    //minimum length 8
    //atleast one uppercase
    //at least one lower case
    //atleast one digit
    //at least one special character
    if(text.length < 8)return false;
    let uppercase=0,lowercase=0,digit=0,special=0;
    for(ch of text){
        if(ch>='A' && ch<='Z')uppercase++;
        else if(ch>='a' && ch<='z')lowercase++;
        else if(ch>='0' && ch<='9')digit++;
        else special++;
    }
    if(uppercase==0 || lowercase==0 || digit==0 || special==0)
        return false;
    return true;
}

const form=document.getElementById('myForm');
form.addEventListener('submit',function(e){
    e.preventDefault();
    removeError();
    let isValid=true;
    //name
    const name=document.getElementById('name').value.trim()
    if(name===''){
        document.getElementById('nameError').textContent='Name can not be empty';
        isValid=false;
    }
    //email
    const email=document.getElementById('email').value.trim()
    if(email===''){
        document.getElementById('emailError').textContent='Email can not be empty';
        isValid=false;
    }
    //mobile
    const mobile=document.getElementById('mobile').value.trim()
    const regex=/^[0-9]{10}$/
    if(mobile===''){
        document.getElementById('mobileError').textContent='Mobile can not be empty';
        isValid=false;
    }else if(!regex.test(mobile)){
        document.getElementById('mobileError').textContent='Enter Valid 10 digit Number';
        isValid=false;
    }
    //age
    const age=document.getElementById('age').value.trim()
    if(age===''){
        document.getElementById('ageError').textContent='Age can not be empty';
        isValid=false;
    }else if(age < 18 || age > 150){
       document.getElementById('ageError').textContent='Age is Invalid';
       isValid=false;  
    }

    //gender
    const gender=document.querySelector('input[name="gender"]:checked');
    if(!gender){
       document.getElementById('genderError').textContent='Please Select Gender';
       isValid=false; 
    }

    //country
    const country=document.getElementById('country').value.trim()
    if(country===''){
        document.getElementById('countryError').textContent='Country can not be empty';
        isValid=false;
    }
    //Term and Condition
    const tc=document.getElementById('tc').checked;
    if(!tc){
        document.getElementById('tcError').textContent='Please Select Term &Condition';
        isValid=false;
    }
    //password
    const password=document.getElementById('password').value.trim()
    if(password===''){
        document.getElementById('passwordError').textContent='Password can not be empty';
        isValid=false;
    }else if(!isValidPassword(password)){
        document.getElementById('passwordError').textContent='Password must be strong';
        isValid=false;
    }
    if(isValid){
        alert('form submitted')
        isValid=false
    }
        
})