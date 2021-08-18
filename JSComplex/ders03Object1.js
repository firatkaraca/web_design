//İsim ve deper çiftlerinden oluşur
//Property -- Bir nesne ile ilikili fonksiyonlara method denir



//Object Literal--->Bir nesneyi oluştururken aynı zamanda o nesneye ait değerleri oluşturuyoruz


//  const person={
//      name:"John",
//      surname:"Doe",
//      age:40,
//      fullName:function(){
//          return this.name+" "+this.surname;
//      }
//  }

//  console.log(person);

//dot notation

//  console.log(person.name);
//  console.log(person.fullName());

//  person.job="Student";

//  console.log(person);
//  console.log(person.job);



//bracket notation

//  console.log(person["name"])
//  console.log(person["fullName"]())



// const person = {
//     name: "John",
//     surname: "Doe",
//     age: 40,
//     fullName: function () {
//         return this.name + " " + this.surname;
//     }
// }

// person.address={
//     il:"Erzurum",
//     ilçe:"Yakutiye"
// }
// console.log(person);




//CONSTRUCTOR --> YAPICI 

// function Person(name,surname,age){
//     const obj={};
//     obj.name=name;
//     obj.surname=surname;
//     obj.age=age;
//     obj.fullName=function(){
//         return this.name+" "+this.surname;
//     }

//     return obj;
// }

// const person1=new Person("John","Doe",40);
// const person2=new Person("Ricardo","Quaresma",38);

// console.log(person1);
// console.log(person2);
// console.log(person1.fullName()+" "+person1.age+" yaşındadır...");
// console.log(person2.fullName()+" "+person2.age+" yaşındadır...");



// function Person(name, surname, age) {
//     console.log(this);

//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName = function () {
//         return this.name + " " + this.surname;
//     }
//     console.log(this);
// }

// const person1 = new Person("John", "Doe", 40);
// const person2 = new Person("Ricardo", "Quaresma", 38);




//OBJECT CONSTRUCTOR


// const person1=new Object();
// person1.name="John";
// person1.surname="Doe";
// person1.age=40;
// person1.fullName=function(){
//     return this.name+" "+this.surname;
// }
// console.log(person1.fullName());



//Object.create() ile nesne oluşturmak
//Yeni bir nesneyi oluştururken var olan bir nesneyi kullanmak

const person={
    name:"John",
    surname:"Doe",
    age:40,
    fullName:function(){
        return this.name+" "+this.surname;
    }
}
console.log(person);

const arin=Object.create(person);
arin.name="Arin";
arin.surname="Software";
arin.age=5;

console.log(arin);
console.log(arin.fullName())