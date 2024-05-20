

const submitFunction = ()=>{
const input = document.querySelectorAll(".inputBox");
console.log(input);
const btn = document.getElementsByClassName("submitBtn");
console.log(btn);
const errorDiv = document.getElementsByClassName("errordiv");
console.log(errorDiv);
const getInput = input.value;
console.log(getInput)
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(emailPattern.test(getInput)){
    console.log("pass");
}
else{
    console.log("fail");
}

};
submitFunction();
