// console.log('hello world')

var abc=123
// console.log(typeof abc)

abc='string'
// console.log(typeof abc)

abc=true
// console.log(typeof abc)

abc=
// console.log(typeof abc)

abc=[123, 'string', {name:'car'}]
console.log(globalVar)

var globalVar=111
console.log(globalVar)

function fun(){
    // console.log(globalVar)
    var localVar= 'local variable'
    // console.log(localVar)
}
fun()
// console.log(localVar)

for(let i=0;i<5;i++){
    console.log('hiii')
}

function sum(number){
    return number+10;
}

console.log(sum(5));

console.log(sum('ben'));

var a='hii'
var b=5

var c=a*b
console.log(c)

var square= function sqr(number) {
    return number*number}(20)
// var x=square(4);

console.log(square);  //ye tb hoga jb bracket mein 20 likha h function mein
//20 bracket mein likhte hi vo square variable ko number bna dega

// console.log(square(10));

// function fun2(){
//     fun2()
// }
// fun2()



function addSquare(x,y){
    function square(j){
        return j*j;
    }
    return square(x)+square(y);
}

a=addSquare(2,3);
b=addSquare(2,6);

console.log(a)