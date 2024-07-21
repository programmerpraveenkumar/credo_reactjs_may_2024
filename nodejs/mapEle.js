var numbers = [2,3,5,4,8,9];
let n = numbers.map((ele)=>ele*2);
console.log(n);


//extract the even number and * by 2
let res1 = numbers.filter((ele)=>ele%2 == 0).map((ele)=>ele*2);
console.log(res1);

//extract the odd number and * by 3