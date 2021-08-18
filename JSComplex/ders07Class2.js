//CLASS DECLARATION
//JavaScriptte claslar aslında özel bir fonksiyondur

// class Person{
//     constructor(name,surname,age){
//         this.name=name;
//         this.surname=surname;
//         this.age=age;
//     }
//     fullName(){
//         return this.name+" "+this.surname;
//     }
//     static showName="Person";
    
//     static staMethod(){
//         console.log("STATIC METHOD ÇALIŞIYOR...");
//     }
// }

// console.log(typeof Person)

// const arin=new Person("Arin","Çekiç",6);//Arin Person clasının instancesidir...
// const elis=new Person("Elis","Çekiç",3);//ELis Person clasının instancesidir...

// console.log(arin instanceof Person);
// console.log(elis instanceof Person);

// console.log(arin);
// console.log(elis);

//Static Method --> Bazen belli metotları yalnızca o classa bağlamak isteriz

// console.log(arin.showName);
// console.log(Person.showName);
// Person.staMethod();


/*
class Person{
    constructor(name,surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
    fullName(){
        return this.name+" "+this.surname;
    }
}

class Engineer extends Person{};//Engineer--> Subclass(child)   Person-->Superclass(parent)

const  Gurcan=new Engineer("Gürcan","Çekiç",40);
console.log(Gurcan);

const a=new Person("Fırat","Karaca",21);
console.log(a);

console.log(a instanceof Engineer);
*/



// class Person{
//     constructor(name,surname,age){
//         this.name=name;
//         this.surname=surname;
//         this.age=age;
//     }
//     fullName(){
//         return this.name+" "+this.surname;
//     }
// }

// class Engineer extends Person{
//     constructor(name,surname,age,job){
//         super(name,surname,age);
//         this.job=job;
//     }
//     getMoney(){
//         console.log("PARA KAZAN");
//     }
// }

// const arin=new Person("Arin","Çekiç",6);
// const gurcan=new Engineer("Gurcan","Çekiç",40,"Engineer");

// console.log(arin);
// console.log(gurcan);
// gurcan.getMoney();
// console.log(gurcan.fullName());
// console.log(arin.fullName());




class Person{
    constructor(name,surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
    fullName(){
        return this.name+" "+this.surname;
    }
}

class Engineer extends Person{
    constructor(name,surname,age,job){
        super(name,surname,age);
        this.job=job;
    }
    getMoney(){
        console.log("PARA KAZAN");
    }
}
