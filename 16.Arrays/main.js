// 1
console.log('task 1');
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack);

// let fullStack1=[...frontEnd,...backEnd]
// console.log(fullStack1);

// 2
console.log('task 2');
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sum = 0
ages.forEach((Element) => {
     sum+=Element;
})
console.log(`average age: ${Math.round(sum/ages.length)}`);

// 3
console.log('task 3');
const countries = [ 
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]  
let shortCountriesName = countries.map((element,index)=>{
   return `${index}.${element.slice(0,3).toLocaleUpperCase()}`
})
console.log(shortCountriesName);

// 4
console.log('task 4');
let numbers = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
    5, 6, 3, 7, 3, 7,];
//   let newArrForNumbers = numbers.forEach((element,index)=>element===7 ? console.log(element) : null) 
//   newArrForNumbers.findIndex(numbers.forEach((element,index)=>element===7 ? console.log(element) : null))
//   console.log(newArrForNumbers);

let sum2 = 0;
for (let i=0;i<numbers.length;i++){
    if (numbers[i]===7) {
        sum2+=i
    } 
       }
    console.log(`Sum of all indexes of 7: ${sum2}`);
   
// 5
console.log('task 5')
const todos = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
  ];

  let newArr = todos.filter((element)=>element.completed==true)
console.log(newArr);

// 6
console.log('task 6');
let newArr2 = todos.filter((element)=>element.title.length>40)
console.log(newArr2);