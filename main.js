const btn = document.querySelector('#plus')
const div = document.querySelector('#math')
btn.addEventListener('click', plus)

function plus(){
    let word = "Javascript"
    if(word.includes('s')){
        console.log(`Xa s bor ${word}`);
    }
    else{
        console.log("yoq");
        
    }
}































































// function plus(){
//     let word = "hello"
//     let result = word.split("").reverse().join('')
//     console.log(result);
// }
// function plus(){
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`FizzBuzz ${i}`);
//   } else if (i % 3 === 0) {
//     console.log(`Fizz ${i}`);
//   } else if (i % 5 === 0) {
//     console.log(`Buzz ${i}`);
//   } else {
//     console.log(i);
//   }
// }
// }

// function katta (){
    //     let newArr = [2, 5, 8, 11, 15]
    //     let newLength = newArr.filter(num => num > 10)
    //     console.log(newLength);
    // }
    
    // const users = [
        //   { id: 1, name: "Ali", age: 25, city: "Toshkent" },
        //   { id: 2, name: "Bekzod", age: 28, city: "Samarqand" },
        //   { id: 3, name: "Dilshod", age: 22, city: "Andijon" },
        //   { id: 4, name: "Malika", age: 27, city: "Farg‘ona" },
        //   { id: 5, name: "Sardor", age: 30, city: "Buxoro" },
//   { id: 6, name: "Shahnoza", age: 24, city: "Namangan" },
//   { id: 7, name: "Ulug‘bek", age: 26, city: "Jizzax" },
//   { id: 8, name: "Gulbahor", age: 21, city: "Navoiy" },
//   { id: 9, name: "Javohir", age: 29, city: "Toshkent" },
//   { id: 10, name: "Rayhona", age: 23, city: "Sirdaryo" },
//   { id: 11, name: "Aziz", age: 31, city: "Qashqadaryo" },
//   { id: 12, name: "Nigora", age: 20, city: "Andijon" },
//   { id: 13, name: "Sherzod", age: 27, city: "Samarqand" },
//   { id: 14, name: "Madina", age: 22, city: "Farg‘ona" },
//   { id: 15, name: "Diyor", age: 28, city: "Toshkent" },
//   { id: 16, name: "Kamola", age: 25, city: "Namangan" },
//   { id: 17, name: "Bahrom", age: 32, city: "Buxoro" },
//   { id: 18, name: "Nilufar", age: 21, city: "Jizzax" },
//   { id: 19, name: "Ravshan", age: 29, city: "Toshkent" },
//   { id: 20, name: "Zarnigor", age: 24, city: "Samarqand" }
// ];

// const ip = document.querySelector('#iput')
// const btn = document.querySelector('#plus')

// btn.addEventListener('click', filtr)

// function filtr(){
//     let type = ip.value
//     if(type !== ""){
//         const result = users.filter(item => item.age > 25)
//     console.log(result);
//     }
// }





// const inpt = document.querySelector("#ipt");
// const input = document.querySelector("#iput");
// const btn = document.querySelector('#plus')
// const math = document.querySelector('#math')

// btn.addEventListener('click', summ)

// function summ(){
    //     const item1 = Number(inpt.value)
    //     const item2 = Number(input.value)
    //     const result = item1 + item2
    //     if(result>0){
        //         const h1 = document.createElement('h1')
        //         h1.textContent = result
        //         h1.classList.add('yigindi');
        //         math.appendChild(h1)
        //         math.classList.remove('hidden')
        //         console.log(result);
        //     }
        //     else{
            //         math.classList.add('hidden')
            //     }
            // }
            
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
