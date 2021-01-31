// function doubleIt(number){
//     return number*2;
// }


// const doubleIt=function myFun(number){
//     return number*2;
// }

// const doubleIt=number=>number*2;

const add=(x,y)=>x+y;

const gives=()=>5;

const doMath=(x,y)=>{
    const add=x+y;
    const minus=add-y;
    const mul=add*minus;
    return mul;
}

const result=add(30,20);
const result2=gives();
const result3=doMath(5,10);
console.log(result3);