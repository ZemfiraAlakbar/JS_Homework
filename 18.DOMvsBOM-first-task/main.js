let startBtn=document.querySelector('.start')
let result0=document.querySelector('.result')
let stopBtn=document.querySelector('.stop')
let incrementBtn=document.querySelector('.increment')
let decrementBtn=document.querySelector('.decrement')
let resetBtn=document.querySelector('.reset')
let incrementByInputValue=document.querySelector('.incrementbyinput')
let input=document.querySelector('.input')

startBtn.style.width='120px'
startBtn.style.height='45px'
startBtn.style.backgroundColor='green'
startBtn.style.color='white'
startBtn.style.fontSize='20px'
startBtn.style.border='none'

stopBtn.style.width='120px'
stopBtn.style.height='45px'
stopBtn.style.backgroundColor='red'
stopBtn.style.color='white'
stopBtn.style.fontSize='20px'
stopBtn.style.border='none'

result0.style.fontSize='30px'
result0.style.color='blue'

resetBtn.style.color='black'
resetBtn.style.backgroundColor='orange'
resetBtn.style.border='none'
resetBtn.style.width='130px'
resetBtn.style.height='40px'
resetBtn.style.fontSize='20px'

incrementBtn.style.backgroundColor='teal'
incrementBtn.style.color='white'
incrementBtn.style.border='none'
incrementBtn.style.height='30px'
incrementBtn.style.width='170px'
incrementBtn.style.fontSize='15px'

decrementBtn.style.backgroundColor='teal'
decrementBtn.style.color='white'
decrementBtn.style.border='none'
decrementBtn.style.height='30px'
decrementBtn.style.width='170px'
decrementBtn.style.fontSize='15px'
decrementBtn.style.margin='20px'

input.style.borderRadius='0'
input.style.outline='none'
input.style.border='2px solid pink'

incrementByInputValue.style.fontSize='22px'
incrementByInputValue.style.backgroundColor='pink'
incrementByInputValue.style.border='none'

let interval;
let count=0;
startBtn.addEventListener('click',function() {
    interval=setInterval(()=> {
        count++
        result0.innerText=count
    } ,1000)
    this.setAttribute("disabled", "true");
    stopBtn.removeAttribute("disabled");
})
stopBtn.addEventListener('click',function () {
    clearInterval(interval)
    this.setAttribute("disabled", "true");
    startBtn.removeAttribute("disabled");
})
resetBtn.addEventListener('click',function () {
    count=0;
    result0.innerText=0
    clearInterval(interval);
})
incrementBtn.addEventListener('click',function () {
    count++;
    result0.innerText = count;
})
decrementBtn.addEventListener('click',function () {
    count--;
    result0.innerText = count;
})

// incrementByInputValue.addEventListener('click',function () {
//    input+=count
// })