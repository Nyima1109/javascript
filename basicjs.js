// to find out variable type.
console.log("hello world");
let var1;
var1="Norway"
console.log(typeof(var1));

//to find odd and even number
let a=7;
if(a%2===0){
    console.log("Even");
}
else{
    console.log("odd");
}

//to find the greatest among three numbers
let d=0, b=6, c=1;
if(d>b){
    console.log("d is the greatest")
}
else if(b>c){
console.log("b is greatest number")
}
else{
    console.log("c is the greatest")
}

//to find the multiplication of 5
let n=5;
for(i=1;i<=10;i++){
    n=n*i;
console.log("5 * %d = %d\n", i, 5 * i);
    }

    //to find the sum of array elements
let num=[1,2,3,4,5,6,7];
let total=0;
for(num=0;num<7;num++){
    total+= num;
    console.log("sum of array=%d",total);
}

//to find the greatest element a]of an array
const arr=[2,45,3,3,6,7,6];
largest=Math.max(...arr);
console.log(largest);

//to write name age faculty and semester of the student by make student object
student={
    name:"Nyima",
    age:20,
    faculty:"IT",
    semester:"4th"
}
console.log(student);

//to find factorial of givern number using recursive function
let s=9;
console.log(getfactorial(s));
function getfactorial(n){
    if(n<1){
        return 1;
    }
    else{
        return n*getfactorial(n-1);
    }
}

//to count even number of elements in array
let p=[1,2,3,4,5];
let evenCount=0;
for(let i=0;i<p.length;i++){
    if(p[i]%2==0){
        evenCount++;
    }
}
console.log("The nnumber of even number in the array is: "+evenCount);