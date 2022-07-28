//ACCEDER AL DOM
const btnSum = document.querySelector('#calcSum');
const btnRes = document.querySelector('#calcRes');
const btnMul = document.querySelector('#calcMul');
const btnDiv = document.querySelector('#calcDiv');
const btnSen = document.querySelector('#calcSen');
const btnCos = document.querySelector('#calcCos');
const btnTan = document.querySelector('#calcTan');

function calcSuma(e){
  let num1Sum = document.querySelector('#num1Sum').value;
  let num2Sum = document.querySelector('#num2Sum').value;
  num1Sum = parseFloat(num1Sum);
  num2Sum = parseFloat(num2Sum);
  let suma = num1Sum + num2Sum;
  document.querySelector('#rtaSum').innerHTML = suma;
  e.preventDefault();
}

function calcResta(e){
  let num1Res = document.querySelector('#num1Res').value;
  let num2Res = document.querySelector('#num2Res').value;
  num1Res = parseFloat(num1Res);
  num2Res = parseFloat(num2Res);
  let resta = num1Res - num2Res;
  document.querySelector('#rtaRes').innerHTML = resta;
  e.preventDefault();
}

function calcMulti(e){
  let num1Mul = document.querySelector('#num1Mul').value;
  let num2Mul = document.querySelector('#num2Mul').value;
  num1Mul = parseFloat(num1Mul);
  num2Mul = parseFloat(num2Mul);
  let multi = num1Mul * num2Mul;
  document.querySelector('#rtaMul').innerHTML = multi;
  e.preventDefault();
}

function calcDivi(e){
  let num1Div = document.querySelector('#num1Div').value;
  let num2Div = document.querySelector('#num2Div').value;
  num1Div = parseFloat(num1Div);
  num2Div = parseFloat(num2Div);
  let divi = num1Div / num2Div;
  document.querySelector('#rtaDiv').innerHTML = divi;
  e.preventDefault();
}

function calcSen(e){
  let numSen = document.querySelector('#numSen').value;
  let numRad = numSen * 0.0174533;
  numRad = parseFloat(numRad);
  let seno = Math.sin(numRad);
  document.querySelector('#rtaSen').innerHTML = seno.toFixed(2);
  e.preventDefault();
}

function calcCos(e){
  let numCos = document.querySelector('#numCos').value;
  let numRad = numCos * 0.0174533;
  numRad = parseFloat(numRad);
  let coseno = Math.cos(numRad);
  document.querySelector('#rtaCos').innerHTML = coseno.toFixed(2);
  e.preventDefault();
}

function calcTan(e){
  let numTan = document.querySelector('#numTan').value;
  let numRad = numTan * 0.0174533;
  numRad = parseFloat(numRad);
  let tangente = Math.tan(numRad);
  document.querySelector('#rtaTan').innerHTML = tangente.toFixed(2);
  e.preventDefault();
}

btnSum.addEventListener('click',calcSuma);
btnRes.addEventListener('click',calcResta);
btnMul.addEventListener('click',calcMulti);
btnDiv.addEventListener('click',calcDivi);
btnSen.addEventListener('click',calcSen);
btnCos.addEventListener('click',calcCos);
btnTan.addEventListener('click',calcTan);