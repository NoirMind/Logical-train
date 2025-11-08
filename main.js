const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const div = document.querySelector('#schots')
let counter = 0
plus.addEventListener('click', qoshish)
minus.addEventListener('click', ayirish)

function qoshish(){
    counter++
    const item = document.createElement('p')
    item.classList.add('son')
    div.appendChild(item)
    item.textContent = counter
}

function ayirish(){
    const deleteCount = document.createElement("h1")
    deleteCount.textContent = "Tozalandi"
    div.appendChild(deleteCount)
}





















// const inpt = document.querySelector("#ipt");
// const div = document.querySelector('#ota')
// function yechim(){
//     const item = document.createElement('li')
//     item.classList.add("ul-item")
//     item.textContent = inpt.value.trim()
//     ota.appendChild(item)
// }

// div.addEventListener("mouseover", hover)
// div.addEventListener("mouseout", hoverOut)

// 2) function hover(){
//     div.style.transform = 'scale(1.1)'; 
//         div.style.transition = 'transform 0.3s ease'
// }

// function hoverOut(){
//     div.style.transform = 'scale(0.9)'; 
//         div.style.transition = 'transform 0.3s ease'
// }

// 1) let counter = 1

// btn.addEventListener('click', qiymat)

// function qiymat(){
//     if(counter === 1){
//         counter++
//         console.log(`Son oshdi, ${counter}`);
//     }
// }
