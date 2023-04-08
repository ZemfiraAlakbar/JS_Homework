// 3.Sum of even numbers(e.g: 2,4,6...) in 10.
// Use for loop, 10 is not enter this sum.
let sum = 0
for(let i = 1 ; i<10 ; i++) {
    if (i%2==0) {
        sum = sum + i
    }
}
console.log(sum);

// 4.Multiply the odd numbers(e.g: 1,3,5...) in 17.
// Use for loop, 17 is not enter this multiplication.
let multiply = 1
for( let z = 1 ; z<17 ; z++) {
    if (z%2==1) {
        multiply = multiply * z
    }
}
console.log(multiply);

// 4.Multiply numbers between 10 and 18.
// Use for loop, 10 and 18 enter this multiplication.
let multiply2 = 1
for(let i = 10 ; 10<=i<=18 ; i++) {
    if (10<=i<=18) {
        multiply2 = multiply2 * i   
    }
}
console.log(multiply2);


// 5.Sum numbers between 17 and 30. Except 19, 20.
// Use for loop, 17 and 30 enter this sum
let sum2 = 0
for(let a = 17 ; 17<=a<=30 ; a++) {
    if (a==19) {
        continue;
    }
    else if (a==20) {
        continue;
    } 
    sum2 = sum2 + a
}
console.log(sum2);

// 7.Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2.
// Use for loop, 16 is enter this list.
for ( let i = 1; i<=16; i++) {
    if (i%2==0) {
        console.log(i**2);   
    }
}
