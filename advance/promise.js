 const firstPromise = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve()
        // console.log("promise complete");
        
    },1000)
 })
 firstPromise.then( ()=>{
    // console.log("promise consumed");
    
 })

const secondPromise = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({userName : "mahi", id : 1234})
    },1000)
})

secondPromise.then( (user)=>{
    // console.log(user);
    return user.userName
    
}).then( (username)=>{
    // console.log(username);
    
})

const fourePromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        const err = true;
        if(!err){
            resolve({
                userName : "shiv",
                age : 15
            })
        } else {
            reject('You have an error in your code')
        }
        
    },1000)
})

fourePromise
.then( (userInfo)=>{
    return userInfo.age
})
.then( (age)=>{
    // console.log(age);
    
})
.catch( (error)=>{
    // console.log(error);
    
})
.finally( ()=>{
    // console.log("These statment run either error in your code or not");
    
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({
                subj : "javascript",
                id : 1234
            }) 
        } else {
            reject("error in your subj")
        }
       
    },1000)
});

async function takeFive() {
    try {
        const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
       
}

takeFive()


async function takeApi() {
    try {
        const response = await fetch('https://randomuser.me/api/')

        let data =  await response.json()
        console.log(data.results[0].gender);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

takeApi()

fetch('https://randomuser.me/api/')
.then( (response)=>{
    return response.json()
})
.then( (data)=>{
    console.log(data.results[0].name);
    
})
.catch( (error)=>{
    console.log(error);
    
})