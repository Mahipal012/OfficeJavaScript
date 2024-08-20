// function addTwo( number1, number2) {
//     console.log(number1 + number2);

// }
// const add = addTwo(5,8)
// console.log(add);


// function addName( firstName, lastName) {
//     return firstName + lastName
// }
//  const fullName = addName("Mahipal", " Chodhary")
//  console.log(fullName);


// function SayName( userName) {

// return ` hello ${userName} !`
// console.log(this);

// }

// const nam = SayName("mahi")

// console.log(nam);


// function checkName(userName) {
//     if (!userName) {
//         console.log("Please enter your name");
//         return
//     }

//     return `Welcome ${userName}`
// }

// const check = checkName("Mahipal")

//    console.log(check);

// =========================


// function takePrice(...price) {
//     console.log(price);

// }
// function takePrice(one, ...price) {
//     console.log( one, '', price);


// function takePrice(...price) {
//     let calculate = price
//     let count = calculate.reduce((total, price) => total + price)
//     console.log(count);


// }

// takePrice(200, 300, 122)

// const my_obj = {
//     name : "mahi",
//     age : 23
// }

// function takeObj(obj) {
//     console.log(`Welcome ${obj.name}`);
    
// }

// takeObj({
//     name : "rohan",
//     age : 23
// })

// takeObj(my_obj)

// function takeArr(arr) {
//     console.log(`third value is ${arr[3]}`);
    
// }
// const myArr = [1, 2, 3, 4]
// takeArr(myArr)

// takeArr([1, 2, 3, 5])


// function info(name, age, id) {
//     this.fullName = name;
//     this.age = age;
//     this.id = id
// }

// const first = new info("rohan", 23, 1001)
// const second = new info("rohit", 24, 1003)
// console.log(second);

// const arro = (num) =>(num + num) arrow function
// console.log(arro(7));

(function hello() {
    console.log("hello");
    
}) 