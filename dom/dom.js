const body = document.querySelector('body')
body.style.backgroundColor = "#a2a2a2"

const one = document.getElementById('one')
// one.innerHTML = "This is first"
one.style.backgroundColor = "#a2a3a4"

// const first =document.getElementsByClassName('first')

const first = document.querySelectorAll('.first')
Array.from(first)

first.forEach( (item)=> item.style.color = "blue")

const img = document.createElement('p')
img.innerHTML = "hello i am p"