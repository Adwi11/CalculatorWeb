const add = function(a,b) {
  return a+b
	
};

const subtract = function(a,b) {
  return a-b
	
};

const multiply = function(a,b) {
  return a*b
	
};

const divide =  function(a,b){
  return a/b
}

function operator(opr,a,b){
  if (opr==='+'){
    add(a,b)
  }

  else if (opr==='-'){
    subtract(a,b)
  }

  else if (opr==='x'){
    multiply(a,b)
  }

  else {
    divide(a,b)
  }
}
const num=document.querySelector('.buttons')
console.log(num)