//FONKSİYONLAR
//Function Declarion   Statement

// function square (num){
//     return (num*num);
// }
// var x=square(5);
// console.log(x);

// console.log(square());// ()-->Invoke

//FUNCTION DECLARION --> HOISTED olarak çalışır


//FUNCTION EXPRESSION 

// const square=function (num)
// {
//     return (num*num);
// }
// console.log(square(4));


//Func name is optional
//İsim kullanmadığımız fonksiyon anonymus olur

//FIRST - CLASS FUNCTION -->>Bir fonskiyon bir değişkene atandığ zaman 


// const myArr=[6,"Arin",function(){console.log("Array Element");}]

// console.log(myArr[2]());
// myArr[2]();

// const myObj =
// {
//     age: 5,
//     name: "Arin",
//     func: function () { console.log("Object Element"); }
// }

// myObj.func();
// console.log(20 +(function () {return 10;})())

// square(5);

// const square=function(num)
// {
//     return (num*num);
// }

//FUNCTION EXPRESSION is not HOISTED
//Function expression can be anonymous

//FIRST CLASS FUNCTIN DEVAM
//Bir bir fonksiyonu başka bir fonksiyona argüman olarak alabiliriz

// const addFive = function(num,func){
//     console.log(num+func());
// }
// addFive(10,function(){return 5;});
// addFive(5,function(){return 5*5;})

//Bir fonksiyonu başka bir fonksiyonun return ifadesindede kullanabiliriz

// const myFunc=function(num){
//     return function toDouble(){
//         console.log(num*2);
//     }
// }

// // myFunc(5)();

// const result=myFunc(14);

// result();


//IIFE
//Immediately Invocable Function Expression  --> Bir fonksiyonun oluşturuluğu anda çalışmasını istemek

// const sum=function(){
//     console.log(5+12);
// }();
// console.log(sum);


// (function (){
//     console.log(1+17);
// })();

//JavaScriptte her fonskiyon birer nesnedir

function square(num1,num2,num3)
{
    return (num1*num2*num3);
}

console.log(square.length);
console.log("Fonksiyonun ismi : " +(square.name).toUpperCase());
