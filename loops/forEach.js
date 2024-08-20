const myArr = ["hello", "hii", "by", "namseta"]

// myArr.forEach( (item)=> {
//     console.log(item);
    
// })


// myArr.forEach( (item, index, arr)=> console.log(item, index, arr)
    
// )

const newArr = [
    { 
        name : "rahul",
        age : 23,
        marks : 34
    },
    {
        name : "rohan",
        age : 25,
        marks : 84
    },
    { 
        name : "mukesh",
        age : 34,
        marks : 64
    }
]

const newMarks = newArr.map( (addMarks)=> addMarks.marks + 10)

console.log(newMarks);

console.log(newArr);




// const ageTotal = newArr.reduce( (acc, value)=> (acc + value.age),0)
// console.log(ageTotal);

// const heighAge = newArr.filter( (item) => {
//     return item.age > 25
// }
    
// )
// console.log(heighAge);


// newArr.forEach( (item)=> {
//     console.log(item.name);
    
// })


// const myArray = [1, 2, 3, 4, 5 ]

// const bigNumber = myArray.filter( (num) => num > 3)
// console.log(bigNumber);
