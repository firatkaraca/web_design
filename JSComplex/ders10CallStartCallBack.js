//JS Single Thread  --> JS aynı anda yalnızca tek bir işlem yapar
//JS Synchronous    --> Ve bu işlemeleride sıralı bir şekilde yapar


/* const func1=()=>{
    console.log("Func 1 Console Log 1");
    console.log("Func 1 Concole Log 2");
    alert('Alert Message');
}

const func2=()=>{
    console.log("Func 2 Console Log 2");
    console.log("Func 2 Concole Log 2");
}

func1();
func2(); */


/* let x=10;
console.log("1. gelen veri :",x);

setTimeout(()=>{
    x=x+5;
    console.log("100. gelen veri :",x);
},1000);

x=x+5;
console.log("2. gelen veri :",x);
x=x+5;
console.log("3. gelen veri :",x); */




//CALL STACK --> Bizim açımızdan fonksiyonların çalışma sırasını gösterir...

/* function func1(){
    console.log("Ben birinciyim");
    func2();
    console.log("Ben tekrar birinciyim");
}


function func2(){
    console.log("Ben ikinciyim");
    func3();
    console.log("Ben tekrar ikinciyim");
}


function func3(){
    console.log("Ben üçüncüyüm");
}
func1(); */



/* function sum(x,y){
    return x+y;
}

function ave(x,y){
    return sum(x,y)/2;
}

let x=ave(6,8);

console.log(x); */






//Call stack tamamlandıktan sonra call back çalışıyor...

/* function task(message){
    let n=10000000000;

    while(n>0){
        n--;
    }
    console.log(message);
}


console.log("1");

setTimeout(()=>{
    console.log("samdksa");
},1000);

console.log("2");
console.log("3");
console.log("4");


task("İşlem tamamlandı");

setTimeout(()=>{
    console.log("mdk");
},3000);

task("İşlem tamamlandı LOO 2");
 */





//CALL BACK --> Geri çağırma fonksiyonu...

//Bize bir işin tamamlandığını veya bir iş tamamlandığında kendine ait olan callback içerisine kendine ait olan başka bir iş yapılabiliceğini gösterir...


/* const myName=()=>{
    console.log("Benim adım Fırat");
}

setTimeout(myName,3000);
myName(); */

//Bir fonksiyon başka bir fonksiyona argüman olarak geliyora bu argüman olarak gelen fonksiyona CALL BACK denir...



/* const myName=()=>{
    console.log("Benim adım Fırat");
}

setTimeout(()=>{
    console.log("Benim adim MAHMÜT");
},3000);

myName(); */





//JavaScript herzaman Synchronousn olarak single thread olarak çalışır...



/* const btn=document.querySelector('button');

btn.addEventListener('click',()=>{
    alert("Ok No");
    let pElem=document.createElement('p');
    pElem.textContent="This a paragraph";
    document.body.appendChild(pElem);
})


let h1Elem=document.createElement('h1');
h1Elem.textContent="H1";
document.body.appendChild(h1Elem); */



const books =
    [
        { name: "Pinball 1973", author: "Haruki Murakami" },
        { name: "Özgürlük", author: "Zygmunt Bauman" },
        { name: "Türkiyede Çağdaşlaşma", author: "Niyazi Berkes" }
    ]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index);
    })
};

const addNewBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

addNewBook({ name: "Berlin Hatıralım", author: "Hüsrev Gerede" }, listBooks);

