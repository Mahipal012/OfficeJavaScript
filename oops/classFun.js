
const user = function(username, age, city){
    this.username = username
    this.age = age
    this.city = city
    // console.log(this);
    
    return this
}

// const userOne = new user("Mahipal", 23, "jaipur")
// const userTwo = new user("shivpal", 15, "Khariya")
// console.log(userOne);
// console.log(userTwo);


class userNam {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    changePass(){
        return `${this.password}asdf`
    }

    changeName(){
        return `${this.username.toUpperCase()}`
    }

}

// const me = new userNam("mahipal", "mahipl@gmail.com", 123)
// console.log(me.changeName());

// console.log(typeof userNam);


// class inheretance

class one {
    constructor(username){
        this.username = username
    }

    logged(){
        return `${this.username} you are looged in`
    }
}

class two extends one {
    constructor(username, id, email){
        super(username)
        this.id = id
        this.email = email
    }

}
const tea = new one("hello")
const chai = new two("chai", 123, "chai@gmail")
// console.log(tea);
