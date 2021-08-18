/*const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName: function () {
        return this.name + " " + this.surname;
    }
}
console.log(person);
console.log(person.toString());

console.log(person.hasOwnProperty("name"));*/




// function Person(name,surname,age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age;
//     this.fullName=function(){
//         return this.name+" "+this.surname;
//     }
// }

// const person1=new Person("Fırat","Karaca",21);
// console.log(person1.fullName());
// console.log(person1);

// console.log(person1.toString());

// console.log(person1.__proto__);

// const elis=new Person("Elis","Çelik",4);
// console.log(elis);
// elis.job="Child";
// console.log(elis);

// elis.toString=function(){
//     return "ELISSSSSSSSSSSSSSSSS";
// }

// console.log(elis.toString());





//Javascriptte hemen hemen tüm nesneler başka bir nesneden kendinden daha önce gelen bir nesneden türetilmiştir
//Bu kendinden daha önce gelen ve tanımladığımız o kökteki nesneyede prototype denir...



// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.fullName=function(){
//     return this.name+" "+this.surname;
// }
// Person.prototype.surname="Çekiç";


// const elis=new Person("Elis",4);
// const arin=new Person("Arin",6);

// console.log(elis.surname);

// console.log(elis.fullName());
// console.log(arin.fullName());
// console.log(arin.age);

// console.log(arin);


// const fırat=new Person("Fırat",21);
// console.log(fırat.fullName());



//Bir nesnenin özelliklerinin farklı nesneler tarafından kullanılabilmesine INHERITANCE denir.


const person={
    name:"XXXXXX",
    surname:"XXXXX",
    age:41,
    fullName:function(){
        return this.name+" "+this.surname;
    }
}

const arin=Object.create(person);
console.log(arin);
console.log(arin.name);

arin.name="Arin";

arin.age=6;
console.log(arin);
console.log(arin.name);

console.log(arin.hasOwnProperty("age"));
console.log(arin.hasOwnProperty("surname"));
console.log(person.hasOwnProperty("surname"));

console.log("surname" in arin);//Herhangi bir şekilde arinde bu özellik varmı