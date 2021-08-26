'use strict'

// Task 1

for (let i = 0; i < 11; i++) {
    if ( i % 2 == 0) {
       console.log (`${i} - это четное число`)
    }
    else { console.log (`${i} - это нечетное число`)
    }
    }


// Task 2

// const post = {
//     author: "John", //вывести этот текст
//     postId: 23,
//     comments: [

//     {
//     userId: 10,
//     userName: "Alex",
//     text: "lorem ipsum",
//     rating: {}
//     },

//     {
//     userId: 5, //вывести это число
//     userName: "Jane",
//     text: "lorem ipsum 2", //вывести этот текст
//     rating: {}
//     },
//     ]
//     };
//     console.log(post.author);
//     console.log(post.comments[1].userId);
//     console.log(post.comments[1].text);


// Task 3

// const products = [
//     {
//     id: 3,
//     price: 200,
//     },

//     {
//     id: 4,
//     price: 900,
//     },

//     {
//     id: 1,
//     price: 1000,
//     },

//     ];

// products.forEach(element => {
//     element.price = Math.floor(element.price - (element.price * 0.15));
// });


// Task 4

// const products = [
//     {
//     id: 3,
//     price: 127,
//     photos: ["1.jpg","2.jpg",]
//     },

//     {
//     id: 5,
//     price: 499,
//     photos: []
//     },

//     {
//     id: 10,
//     price: 26,
//     photos: ["3.jpg"]
//     },

//     {
//     id: 8,
//     price: 78,
//     },
// ];

// let productsWithPhoto = products.filter(element => {
//     if(element.photos != undefined && element.photos.length != 0){
//         return element;
//     }
// })
// products.sort(function(item0, item1){
//     if(item0.price > item1.price) {return 1}
//     if(item0.price < item1.price) {return -1} 
//     else {return 0}
// })


// Task 5

// let num = 0
// for(; num < 10; showNum()){};

// function showNum(){
//    console.log(num);
//    num++;
// }


// Task 6

// for(let i = 0, x = 'x'; i <= 20; i ++, x +='x'){
//     console.log(x);
// }