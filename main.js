const inpt = document.querySelector("#ipt");
const input = document.querySelector("#iput");
const btn = document.querySelector('#plus')
const math = document.querySelector('#math')

btn.addEventListener('click', summ)

function summ(){
    const item1 = Number(inpt.value)
    const item2 = Number(input.value)
    const result = item1 + item2
    if(result>0){
        const h1 = document.createElement('h1')
        h1.textContent = result
        h1.classList.add('yigindi');
        math.appendChild(h1)
        math.classList.remove('hidden')
        console.log(result);
    }
    else{
        math.classList.add('hidden')
    }
}




















// const p = document.querySelector('#p')
// btn.addEventListener('click', yoq)

// function yoq(){
//     p.classList.toggle('hidden')
// }

// const div = document.querySelector('#boxes')
// div.addEventListener('click', rang)

// function rang(){
//     div.style.background = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
// }

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
