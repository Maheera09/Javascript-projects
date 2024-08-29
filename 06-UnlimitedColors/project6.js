const start = document.querySelector('#start') 
const stop = document.querySelector('#stop') 
const canvas =  document.querySelector('.canvas')
let change;

 //generate random color

 const ranColor  = ()=>{
    const hex = '0123456789ABCDEF'
    let color = "#"
    for (let i =0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
 }

 start.addEventListener('click', ()=>{
if (!change){
change = setInterval(()=>{
    canvas.style.backgroundColor = ranColor()
}, 1000)
}
 })

 stop.addEventListener('click',()=>{
clearInterval(change)
change = null
 })
