// 1
console.log('task 1');
let arr1 = [1,2,3]
let arr2 = [80,5,100]
 let arr3 = [-500,0,50]
function getFirstValue(anyArr) {
    return anyArr[0];
}
console.log(getFirstValue(arr1));  
console.log(getFirstValue(arr2));  
console.log(getFirstValue(arr3));  


// 2
console.log('task 2');
let array1=[1, 2, 3] 
let array2=["cat", "dog", "duck"] 
let array3=[true, false, true]
function getLastItem(a) {
  return a[2]
}
console.log(getLastItem(array1));
console.log(getLastItem(array2));
console.log(getLastItem(array3));


// 3
// console.log('task 3');
// let arr4=(["hi", "edabit", "fgh", "abc"], "fgh") 
// let arr5=(["Red", "blue", "Blue", "Green"], "blue") 
// let arr6=(["a", "g", "y", "d"], "d") 
// let arr7=(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")
// let findIndex = function (arr,string) {
//   for(i=0;i<arr.length;i++) {
//      if (arr[i]=i) {
//        return arr[1]
//      }
//   }
// }
// console.log(findIndex("pinapple"));
// console.log(findIndex("fgh"));
// console.log(findIndex("d"));


// 4
console.log('task 4');
function addition(a,b) {
    let sum = a+b;
    return a+b;
}
console.log(addition(3,2));
console.log(addition(-3,-6));
console.log(addition(7,3));


// 5
console.log('task 5');
let lessThan100 = (x,y) => {
    let sum1 = x+y;
    if (sum1<100) {
        return true;
    }
    else {
        return false;
    }
}
console.log(lessThan100(22,15));
console.log(lessThan100(83,34));
console.log(lessThan100(3,77));


// 6
console.log('task 6');
let one = { width: 2, length: 5, height: 1 }
let two = { width: 4, length: 2, height: 2 }
let three = { width: 2, length: 3, height: 5 }
function volumeOfBox(a,b,c) {
    return a*b*c;
}
console.log(volumeOfBox(2,5,1));
console.log(volumeOfBox(4,2,2));
console.log(volumeOfBox(2,3,5));


// 7
console.log('task 7');
let points1 = (1, 1) 
let points2 = (7, 5)  
let points3 = (38, 8) 
function points(a,b) {
    let sum = a+b;
    return a+b;
}
console.log(points(1*2,1*3));
console.log(points(7*2,5*3));
console.log(points(38*2,8*3));


// 8
console.log('task 8');
const arr5 = [
        {
            name: 'my name',
            surname: 'my surname',
            city: 'my city'
        },
        {
            name: 'my name',
            surname: 'my surname',
            city: 'my city'
        },
        {
            name: 'my name',
            surname: 'my surname',
            city: 'my city'
        }
    ]
    function fillInfo(name,surname,city) {
        for(let item of arr5) {
           console.log(name,surname,city);
        }
    }
    fillInfo('Zemfira', 'Alakbarova','Ganja')