//NEW OBJECT SYNTAX




//1 - Shorthand Proporties
/*
let name="Arin",age=5;

const myObj={
    name:name,
    age:age
}
console.log(myObj.name+" "+myObj.age+" yaşındadır...")
console.log(name+" "+(age+5)+" yaşındadır...");
*/







//2 - Computed Property Names

// let prop1="name";
// let myObj={};

// myObj[prop1]="Arin";
// console.log(myObj);

// let prop1="name";

// let myObj={
//     [prop1]:"Elis"
// }
// console.log(myObj);




//3 - Short Method Syntax

// const person={
//     name:"John",
//     surname:"Doe",
//     age:40,
//     fullName:function(){
//         return this.name+" "+this.surname;
//     }
// }


// const person={
//     name:"John",
//     surname:"Doe",
//     age:40,
//     fullName(){
//         return this.name+" "+this.surname;
//     }
// }
// console.log(person.fullName());






//4 - Object Desturucturing  --> Nesne Parçalama
// Bir nesnenin içerisindeki değerleri değişkenlere atamak için kullanılır

// const person={
//     name:"John",
//     surname:"Doe",
//     age:40,
//     fullName(){
//         return this.name+" "+this.surname;
//     }
// }

// let myVar1=person.name;
// console.log(myVar1);

// let myVar2=person.age;
// console.log(myVar2);

// let {name:myVar1,age:myVar2}=person;
// console.log(myVar1);
// console.log(myVar2); 

// let {name:name,age:age}=person;
// console.log(name);
// console.log(age);

// let {name,age}=person;
// console.log(name);
// console.log(age);







//5 - Spread Operator in Object Literals (...)
//Ya varolan bir nesnenin özelliklerini kopyalamada veya nesneleri birleştiemede kullanılır

// const person={
//     name:"John",
//     surname:"Doe",
//     age:40,
//     fullName(){
//         return this.name+" "+this.surname;
//     }
// }
// let person2={...person};
// console.log(person);
// console.log(person2);


// const myObj1={
//     name:"Arin",
//     age:6
// }
// const myObj2={
//     job:"Student",
//     gender:"female"
// }

// const arin={
//     ...myObj1,
//     school:"Zehra Baysal",
//     ...myObj2
// }

// console.log(myObj1);
// console.log(myObj2);
// console.log(arin);






//6 - REST Operator in Object Literals

// const person = {
//     name: "John",
//     surname: "Doe",
//     age: 40,
//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }

// const {name,surname,age}=person;
// console.log(person);
// console.log(name);
// console.log(surname);
// console.log(age);

// const {name,...rest}=person;
// console.log(name);
// console.log(rest );




//7 - Object Values - Object Entries

//Object Entries --> Key ve values çiftini ayrı ayrı arrayler içine alıyor
const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName() {
        return this.name + " " + this.surname;
    }
}
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));