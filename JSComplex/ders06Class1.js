//JS CLASSES

//constructor function

// function Person(name,surname,age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age;
//     this.fullName=fullName;
// }

// function fullName(){
//     return this.name+" "+this.surname;
// }

// Person.prototype.fullName=function(){
//     return this.name+" "+this.surname;
// }
// Person.prototype.friends=["Ela","Rüzgar"];

// const arin=new Person("Arin","Çekiç",5);
// const elis=new Person("Elis","Çekiç",6);

// console.log(arin);
// console.log(elis);

// console.log(arin.fullName());
// console.log(elis.fullName());

// console.log(arin.friends);
// console.log(elis.friends);
// console.log(Person.prototype.friends);

// arin.friends.push("Çınar");
// console.log(arin.friends);
// console.log(elis.friends);
// console.log(Person.prototype.friends);





// function Person(name,surname,age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age;
//     this.fullName=fullName;
// }


class Person{
    constructor(name,surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.friends=["Ela","Rüzgar"];
    }
    fullName(){
        return this.name+" "+this.surname;
    }
}

const arin=new Person("Arin","Çekiç",6);
const elis=new Person("Elis","Çekiç",3);

console.log(Person);

console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());


console.log(arin.friends);
console.log(elis.friends);
arin.friends.push("Çınar");
console.log(arin.friends);
console.log(elis.friends);

elis.friends.push("Mehmet","Fırat","Mustafa");
console.log(elis.friends);
console.log(arin.friends);


//Javascript classları özel bir javascript fonksiyonudur...
