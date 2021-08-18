//PROMİSE --> Bir asenkron işlemin nihai sonucunu temsil eden bir javascript nesnesi...


/* const promise1=new Promise(function(resolve,reject){
    resolve("DATA"); 

    reject();
})

console.log(promise1); */

//Pending (undefined)--> isteği gönderdik ama hala sonuca dair elimizde bişey yok
//Biz bir promise oluşturduğumuzda o promisemizin değerinin yani dönüceği değerin ne olduğunu bilmiyoruz

//Pending (undefined) --> fullfilled(başarılı olduğu durum) --> rejected ====>>>>PROMİSE STATE


//Bir promisenin statesini bir kere belirledikmi (başarılı/başarısız) o state o promise içerisinde promise oluşturulurken tekrar değiştirelemez...




/* 
const promise1=new Promise(function(resolve,reject){
    //resolve("DATA");
    reject('ERROR');
})

console.log(promise1); */


/* promise1.then(function(value){
    console.log(value);
}) */


/* promise1.then((value)=>{
    console.log(value);
}) */

//promise1.then(value=>console.log(value));
//promise1.catch(reason=>console.log(reason));

//Promisemiz bize reject verdiği zaman yani herhangi bir şekilde çalışma tamamlanamadığı zaman onu cetch ifadesi ile yalalarız


/* const promise1 = new Promise((resolve, reject) => {
    resolve();
    //reject();
}) */

/* promise1.then(()=>{
    console.log("VERİLER ALINDI");
}); */


/* promise1.catch(()=>{
    console.log("VERİLER ALINAMADI");
}); */


/* promise1
    .then(() => {
        console.log("VERİLER ALINDI");
    })
    .catch(() => {
        console.log("VERİLER ALINMADI");
    })
    .finally(()=>{
        console.log("ÇALIŞ KÖLE")
    }) */


/* const promise1 = new Promise((resolve, reject) => {
    //resolve()
    reject();

})


promise1.then(() => {
    console.log("VERİLER ALINDI")
}, () => {
    console.log("VERİLER ALINMADIIIII")
}

) */


const books =
    [
        { name: "Pinball 1973", author: "Haruki Murakami" },
        { name: "Özgürlük", author: "Zygmunt Bauman" },
        { name: "Türkiyede Çağdaşlaşma", author: "Niyazi Berkes" }
    ]



const listBooks=()=>{
    books.map((book,index)=>{
        console.log(book,index)
    })
}
/* 
const addNewBook=(newBook,callBack)=>{
    books.push(newBook);
    callBack();
} */


const addNewBook=(newBook)=>{
    const promise1=new Promise((resolve,reject)=>{
        books.push(newBook);
        resolve(books);
        //reject("HATA");
    })
    return promise1;
}

//addNewBook({name:"Berlin Hatıralım",author:"Hüsrev Gerede"},listBooks);


addNewBook({name:"Berlin Hatıralım",author:"Hüsrev Gerede"})
.then(()=>{
    console.log("Yeni liste");
    listBooks();
}).catch((reason)=>{
    console.log(reason);
})
