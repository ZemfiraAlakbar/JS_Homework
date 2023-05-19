let startBtn=document.querySelector('.start')
let result0=document.querySelector('.result')
let stopBtn=document.querySelector('.stop')
let incrementBtn=document.querySelector('.increment')
let decrementBtn=document.querySelector('.decrement')
let resetBtn=document.querySelector('.reset')
let inputBtn=document.querySelector('.input-btn')
let increment=document.querySelector('#increment')

startBtn.style.width='120px'
startBtn.style.height='45px'
startBtn.style.backgroundColor='green'
startBtn.style.color='white'
startBtn.style.fontSize='20px'
startBtn.style.border='none'
startBtn.style.cursor='pointer'

stopBtn.style.width='120px'
stopBtn.style.height='45px'
stopBtn.style.backgroundColor='red'
stopBtn.style.color='white'
stopBtn.style.fontSize='20px'
stopBtn.style.border='none'
stopBtn.style.cursor='pointer'

result0.style.fontSize='30px'
result0.style.color='blue'

resetBtn.style.color='black'
resetBtn.style.backgroundColor='orange'
resetBtn.style.border='none'
resetBtn.style.width='130px'
resetBtn.style.height='40px'
resetBtn.style.fontSize='20px'
resetBtn.style.cursor='pointer'

incrementBtn.style.backgroundColor='teal'
incrementBtn.style.color='white'
incrementBtn.style.border='none'
incrementBtn.style.height='30px'
incrementBtn.style.width='170px'
incrementBtn.style.fontSize='15px'
incrementBtn.style.cursor='pointer'

decrementBtn.style.backgroundColor='teal'
decrementBtn.style.color='white'
decrementBtn.style.border='none'
decrementBtn.style.height='30px'
decrementBtn.style.width='170px'
decrementBtn.style.fontSize='15px'
decrementBtn.style.margin='20px'
decrementBtn.style.cursor='pointer'

increment.style.borderRadius='0'
increment.style.outline='none'
increment.style.border='2px solid pink'

inputBtn.style.fontSize='22px'
inputBtn.style.backgroundColor='pink'
inputBtn.style.border='none'
inputBtn.style.cursor='pointer'

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
    startBtn.removeAttribute("disabled");
    this.setAttribute("disabled", "true");
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
inputBtn.addEventListener('click' , function () {
    let inputValue=increment.value
    count+= +inputValue
    result0.innerText=count
})