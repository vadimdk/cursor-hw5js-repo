/*Завдання 1*/
function convert(amount) { 
  const dollarRate = 8;
    let grn = amount*dollarRate; 
     return grn;
   
 }

//console.log(convert(10)); 



/*Завдання 2*/
function reverseString(str) {
    return str.split("").reverse().join("");
}
//reverseString("abc")



/*Завдання 3*/
function printStairs(n) { 
    for(let i = 0; i <= n; i++) {
        console.log('#'.repeat(i))
    }
}

//printStairs(4)

/*Завдання 4*/
function range(start, end, step) {
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

//console.log(sum(range(0,10)));



    //  Завдання 5 a function which returns the smallest of three numbers

function min(a, b, c) { 
    
    if (a < b && a < c) {
     return  a;
 }
    else if(b < a && b < c) {
        return b;
    }
     else {
         return c;
     }
 
}

//console.log(min(10, 5, 11)); 
//console.log(min(3, 8, 4)); 


function min(a, b, c) { 
    let result = Math.min(a,b,c);
         return result;
     }

//console.log(min(10, 5, 11));
//console.log(min(3, 8, 4));
 



    //Завдання 6 function which prints the pyramid picture of size n
//function printStairs(n) { 
//    for(let i = 1; i <= n; i++) {
//        if(i == 1) {
//        console.log( ' '.repeat(n-i),'#'.repeat(i));
//    }
//        else if(i == 2){
//            console.log( ' '.repeat(n-i),'#'.repeat(i+1));
//        }
//        else {
//            console.log( ' '.repeat(n-i),'#'.repeat(i+2));
//        }
//        }
//}
//
//printStairs(3)


      //Завдання 7 A function which transforms first and last letter to uppercase

//function firstAndLastToUpper(str) { 
//    let sln = str.length;
//    let lastLet = str.slice(-1);
//    let insideStr = str.slice(1,sln-1);
//    let lastLettoUpper = lastLet.toUpperCase();
//    let firstLet = str.slice(0,1);
//    let firstLettoUpper = firstLet.toUpperCase();
//    let resultStr = firstLettoUpper.concat(insideStr, lastLettoUpper);
//
//    console.log(resultStr);
//    
//    
//    
//}
//
//firstAndLastToUpper('abcd')


