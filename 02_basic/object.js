// const myObj = {
//     name : "mahi",
//     age : 23,
//     id : 1001,
//     isLoogedin : true
// }

// console.log(myObj);
// console.log(myObj.age);
// console.log(myObj["name"]);
// =========================
let mySymbol = Symbol("key1");
const myObj = {
    name : "hii",
    [mySymbol] : "keyOne",
    id : 2345,
    fn : function () {
        console.log(`How are you ${this.name}`);
        
    }
}
// myObj.name = "hello"
// Object.freeze(myObj);
// myObj.id = 34;
// console.log(myObj);
// console.log(myObj[mySymbol]);
// console.log( typeof myObj[mySymbol]);

// console.log(myObj.fn());

// ==============================


// const anotherObj = {
//     id : 1323,
//     userName : {
//         fullName :{
//             name : "rohan",
//             lName : "gupta"
//         }
//     }
// }

// console.log(anotherObj.userName.fullName.name);

// const anObj = [
//     22,
//     {
//         name : "rohan",
//         id : 1234
//     },
//     {
//         lName : "Gupta"
//     }
// ]

// console.log(anObj[1].name);

const a = {
    A :1,
    B : 2
}
const b = {
    C :3,
    D : 4
}
const c = {
    E :5,
    F : 6
}

// const newObj = { a, b, c}

// const newObj = Object.assign(a, b, c)

// const newObj = { ...a, ...b, ...c}

// console.log(newObj);
// ========================================================


const my_obj = {
    1 : "hello",
    2 : 12e3,
    3 : 2323
}

console.log(Object.keys(my_obj));
// console.log(Object.values(my_obj));

const keys = Object.keys(my_obj)
console.log(typeof keys);


// keys.forEach( (key) => console.log(key)
// )

// keys.map( ( key) => console.log(key + "h11")
// )

// ===============================================================
// destructure Object

// const newObj = {
//     myName : "hitesh",
//     id : 12345
// }

// // console.log(newObj.name);

// const {myName : name} = newObj;

// console.log(name);



// console.log(this);

