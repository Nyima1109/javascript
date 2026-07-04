//Array method 
//1 push=> push into array 
const numlist=[10,20,30];
numlist.push(5,15,25);
console.log(numlist);

//2 pop=> pop from the end of the array
const nlist=[10,20,30];
console.log(nlist);
nlist.pop();
console.log(nlist);

//shift=> to remove first element from array
let studentlist=['Ram','shyam','hari'];
studentlist.shift();
console.log(studentlist);

//unshift=> add elements in the begining
let stdlist=['Ram','shyam','hari'];
stdlist.unshift('Bina','Mina');
console.log(stdlist);

//reverse=> reverse the order of item in array
const pricelist=[12,13,14];
pricelist.reverse();
console.log(pricelist);

//includes=> check whether array contain specific value 
//result in boolean 
const laptop=['genbook','mackbook','hp'];
let res=laptop.includes('hp');
console.log(res);

const currentroute=['user/edit/1'];
const result=currentroute.includes('edit');
console.log(result);

//slice=> return new portion of array from orginal array
//does not change original array
const animals=['ant','bison','camel','duck'];
const newlist=animals.slice(1,3);
console.log(newlist);

//splice=> delete and replace array elements
const months=['jan','feb','march','april'];
months.splice(3); //remove item from given index
months.splice(2,1);// remove the no.of item from index 2
months.splice(1,1,'jan1','jan2');// remove previous elements and add new elements
console.log(months);

//sort=> sorting array elements in ascending and decending order
const student=['ram','shyam','hari'];
student.sort();//sorting in alphbetical orders
student.sort().reverse(); //sorting in reverse
console.log(student);

//map=> make new array with size used to change any value and return array
let person=['ram','hari','mohan'];
const newperson=person.map((item,index,array)=>{
let uppercaseName=item.toUpperCase();
return uppercaseName;
});
console.log(newperson);

let array=[1,2,3,4,5];
let array2=array.map((item,index,array)=>{
    let newitem=item*2;
    return newitem;
});
console.log(array2);


//filter=> return new array
//does not change item of array
//order of item,index and array is extremly important
const num=[1,2,3,-4,-6,8,7];
const newnum=num.filter((item,index,array)=>item>0);
console.log(newnum);

const productlist=[
    {
        id:2,
        name:'momo',
        price:10,
    },
    {
        id:1,
    name:'pizza',
    price:30,
    },
]
    const newproduct=productlist.filter((item,index,array)=>{if(item.price<20)return item});
    console.log(newproduct);
