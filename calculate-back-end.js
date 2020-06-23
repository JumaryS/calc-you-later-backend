/******************
 * YOUR CODE HERE *
 ******************/
function calculate(num1,num2,param){
  
  num1= Number(num1)
  num2= Number(num2)
  if (param === '+' || param === 'plus' || param === 'added to')
  {
    return num1+num2
  } else if (param === '-' || param === 'minus' || param === 'subtracted from'){
    return num1-num2
  }else if (param === 'x' || param === 'times' || param === 'X' || param === 'multiplied by' ){
    return num1*num2
  }else if (param === '/' || param === 'divided by'){
    return num1/num2
  }else if (param === '%' || param == 'modulus' || param === 'mod'){
    return num1%num2
  }
  else {
    return "Sorry, that's not a mathematical operation!"
  }
  }
  

 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;