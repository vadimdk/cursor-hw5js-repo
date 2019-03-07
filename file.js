/*Завдання 1*/
function convert(amount) { 
  let dollarRate = 8;
   console.log( amount*dollarRate);
 }

convert(10) 

/*Завдання 2*/
/*function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("abc");*/

/*Завдання 3*/
/*function printStairs(n) { 
    for(let i = 1; i <= n; i++) {
        console.log( '#' .repeat(i))
    }
}

printStairs(4)*/

/*Завдання 4*/
/*function range(start, end, step) {
  let arr = []; //declare an empty array
  var step = step || 1;//tests to see if step was supplied, otherwise it's 1
  if(start < end) 
  {
    for(let i = start; i <= end; i += step)
    {
      arr.push(i);
    }
  }
  
  return arr;
}
function sum(array) {
  let total = 0;
  for(let i = 0; i < array.length; i++) 
  { 
    total += array[i];
  }
  return total;
}

console.log(sum(range(0,10)));*/