// Task 1
// Написать функцию, преобразующую число в объект.

// function numToObj(num){
//     if(num < 0 || num > 999){
//         return 0;
//     }
//     if(!(Number.isInteger(num))){
//         num = Math.floor(num);
//     }
//     let obj = {};
//     let digit = String(num).length;
    
//     switch(digit) {
//     case 1:
//         obj.units = num;
//         break;
//     case 2:
//         obj.units = Number(String(num)[1])
//         obj.tens = Number(String(num)[0])
//         break;
//     case 3:
//         obj.units = Number(String(num)[2])
//         obj.tens = Number(String(num)[1])
//         obj.hundreds = Number(String(num)[0])
//         break;
//     }

//     console.log(obj)
// }
// numToObj(49);


// Task 1.1
// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
// make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
// объект-прототип (как объект transport в уроке).

// ES5
// function Product(name, price) {
//     this.name = name,
//     this.price = price,

//     Product.prototype.make25PercentDiscount = function() {
//         this.price = this.price - (this.price * 0.25);
//     }
// }
// let obj1 = new Product(`milk`, 22);
// obj1.make25PercentDiscount();




// ES6
// class Product2 {
//     constructor(name, price){
//     this.name = name;
//     this.price = price;
//     }
//     make25PercentDiscount() {
//         this.price = this.price - (this.price * 0.25);
//     }
// }
// let obj2 = new Product2('milk', 33);
// obj2.make25PercentDiscount();


// Task 1.2
// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
//     видео -> 3 примеры наследования -> механика наследования),
//     а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
//     типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
//     б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
//     помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
//     свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
//     Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
//     highlighted значение true.

// ES5
// function Post(author,text,date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;

//     Post.prototype.edit = function(text2) {
//         this.text2 = text2;
//     }
// }
// let obj1 = new Post('milk', 'hello', 22.02);
// obj1.edit('hey');

// function AttachedPost(author,text,date) {
//     Post.call(this, author, text, date );
//     this.highlighted = false;
// }
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
// AttachedPost.prototype.makeTextHighlighted = function(){
//     this.highlighted = true;
// }
// let obj2 = new AttachedPost('pepsi', 'hell', 23.02);

//ES6
// class Post {
//     constructor(author, text, date) {
//         this.author = author;
//         this.text = text;
//         this.date = date;
//     }

//     edit(text) {
//         this.text = text;
//     }
// }

// const post1 = new Post('cola', 'more', 24.03);

// class AttachedPost extends Post {
//     constructor(author, text, date) {
//         super(author, text, date);
//         this.highlighted = false;
//     }

//     makeTextHighlighted() {
//         this.highlighted = true;
//     }
// }