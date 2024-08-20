function name(userName, age){
    this.userName = userName
    this.age = age
}

// create self prototype
name.prototype.fullName = function(){
    console.log(`Your full name is ${this.userName} chodhary`);
    
}

name.prototype.rightName = function(){
    console.log(`right name is ${this.userName.trim()}`);
    
}

const user = new name("  Mahipal  ", 23)
const userOne = name("shivpal", 15)
// console.log(`right name is ${user.userName} `);

// user.rightName()


// ture length

const namee = "mahipal  "

String.prototype.trueLenght = function() {
    console.log(this);
    console.log(`true lenght is ${this.trim().length}`);
      
}

// namee.trueLenght()
// "hello".trueLenght()

const myname = "mahipal"

const arr = [1, 2, 3]
Array.prototype.lenghtCheck = function() {
    console.log(`length is ${this.length}`);
    
}
// arr.lenghtCheck()

const myObj = {
    name : "hello",
    id : 1234
}



Object.prototype.say = function(){
    // console.log("hello mahi");
    
}

// myObj.say()
// arr.say()
// myname.say()


// inheretance

const objOne = {
    name :"hello",
    age :23
}

const obTwo = {
    name :"hii",
    // __proto__:objOne old syntex
}
// console.log(obTwo.age);


const objThree = {
    name :"Bye",
    id : 12345
}

// objThree.__proto__=obTwo old syntex
// console.log(objThree.age);


// new syntex

Object.setPrototypeOf(objThree, objOne)

// console.log(objThree.age);
