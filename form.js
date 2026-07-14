const nameInput =document.getElementById('name');
const ageInput= document.getElementById('age');
const emailInput=document.getElementById('email');
const deptInput=document.getElementById('department');

const registerbtn=document.getElementById('registerbtn');
const clearbtn=document.getElementById('clearbtn');

const output=document.getElementById('output');
const heading=document.getElementById('heading');

registerbtn.onclick=function (){
    const name=nameInput.value;
    const age=ageInput.value;
const email=emailInput.value;
const department=deptInput.value;
console.log(name);
if(name=== ''|| age=== ''|| email=== ''||department=== ''){
    alert('please fill all the fields');
    return;
}
output.innerHTML=`
<p class="success">Student registered successfully!</p>
<p><strong>Name:</strong>${name}</p>
<p><strong>Age:</strong>${age}</p>
<p><strong>Email:</strong>${email}</p>
<p><department>Email:</strong>${department}</p>
`
};
//clear button
clearbtn.onclick=function(){
    nameInput.value='';
    ageInput.value='';
    emailInput.value='';
    deptInput.value='';
    output.textContent='No student registered yet.';
};








