//ARROW FUNCTION

//Function Declaration

/* function square(num) {
    return (num * num);
}

console.log(square(4));

//Function Expression

const square2 = function (num) {
    return num * num;
}

console.log(square2(5));


//Arrow Function Expression


//const square3=function(num){return num*num;};

//const square3=(num)=>{return num*num;};

const square3 = num => (num * num);

console.log(square3(8)); */




/* window.name="Arin";

function tellName(){
    console.log(this);
    console.log(this.name);
}

tellName();




const Person={
    name:'Elis',
    tellName:function(){
        console.log(this);
        console.log(this.name);
    }
}
console.log("\n\n\n");
Person.tellName(); */

/* window.name="Arin";

const tellName=()=>{
    console.log(this);
    console.log(this.name);
}

tellName();


//Normal fonksiyonlar thisi olduğu consepte göre gösterir...
//Arrow function'nun kendine ait bir thisi yok...


const Person={
    name:'Elis',
    tellName:()=>{
        console.log(this);
        console.log(this.name);
    }
}
console.log("\n\n\n");
Person.tellName();
console.log(Person.name); */


/* window.name='Fırat';

const person={
    name:'Arin',
    tellName:function(){
        console.log(this);
        console.log(this.name);

        setTimeout(function(){
            console.log(this);
            console.log(this.name);
        },2000)
    }
}

person.tellName(); */


/* window.name='Fırat';

const person={
    name:'Arin',
    tellName:function(){
        console.log(this);
        console.log(this.name);

        setTimeout(()=>{
            console.log(this);
            console.log(this.name);
        },2000)
    }
}

person.tellName(); */




/* function Person(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.fullName=function(){
        return this.name+" "+this.surname;
    }
}

const Person1=new Person("John","Doe",40);

console.log(Person1);

//Arrow function constructoe function olamaz neden this ile olan ilişkisinden dolayı...


const Person=(name,surname,age)=>{
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.fullName=function(){
        return this.name+" "+this.surname;
    }
}

const Person1=new Person("John","Doe",40);

console.log(Person1); */



 


/* const myObj={
    year:2021,
    showYear:function(){
        console.log(this.year,this);
    },
    showYear2:()=> console.log(this.year,this)
}

myObj.showYear();
myObj.showYear2(); */







//CALL <--> Bir fonksiyonu veya methodu ilgili olduğu nesneden farklı bir nesneden kullanmamızı sağlar...


window.name="Gürcan";
window.grade=100;


const student={
    examResult:()=>{
        return this.name+" "+this.grade;
    }
}

const student1={
    name:"Arin",
    grade:80
}

const student2={
    name:"Elis",
    grade:77
}

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));