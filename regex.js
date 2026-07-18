


const button=document.getElementById('button');
button.addEventListener('click',()=>{
    alert('Button was clicked');

let name=document.getElementById('name').value;
let password=document.getElementById('password').value;
let age=document.getElementById('age').value;
let email=document.getElementById('email').value;
let deaptment=document.getElementById('department').value;

//reges
let nameregex=/^[a-z A-Z ]{3,}$/
let passwordregex=/^[a-z A-Z 0-9]+@/g
let ageregex=/^[20-60]/g
let emailregex=/^[a-z A-Z 0-9]+@[a-z]+\.[a-z]/g
let departmentregex=/^[a-z A-Z]/g

if (!nameregex.test(name)){
alert('Name formatt invalid');
return;
}
if (!passwordregex.test(password)){
alert('Password format invalid');
return;
}
if (!ageregex.test(age)){
alert('Age format invalid');
return;
}
if (!emailregex.test(email)){
alert('Email format invalid');
return;
}
if (!departmentregex.test(department)){
alert('Department format invalid');
return;
}
});