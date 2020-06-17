function q(a, b, c) {
    let outputx1 = ((-(b) + (Math.sqrt((b ** 2) - (4 * (a * c))))) / (2 * a));
    let outputx2 = ((-(b) - (Math.sqrt((b ** 2) - (4 * (a * c))))) / (2 * a));
    console.log("x = " + outputx1 + " , " + "x = " + outputx2);
}
q(1, -8, 5);
function a(a1, n, d, an) {
    if (an == undefined) {
        let outputan = a1 + ((n - 1) * d);
        console.log(outputan)
    }
    if (a1 == undefined) {
        let outputa1 = an - ((n - 1) * d);
        console.log(outputa1)
    }
    if (n == undefined) {
        let outputn = ((an - a1) / d) + 1;
        console.log(outputn)
    }
    if (d == undefined) {
        let outputd = (an - a1) / (n - 1);
        console.log(outputd)
    }


}
a(3,9,undefined,43);
var formula = "2*3+3+6";
var expression = eval(formula);
console.log(expression);
var sqrt = 100;
var hey = sqrt;
console.log(sqrt);
const perfectSquares = [];
let b= 0;
for(let i = 0; i < 100; i++){
    if(sqrt >=((i + 2) ** 2)){
    perfectSquares.push((i + 2) ** 2);
    }
}
perfectSquares.sort(function(a, b){return a-b});
console.log(perfectSquares);
var big = 1;
var p = 2
for(let i = 0; i < perfectSquares.length; ){
    if(sqrt % perfectSquares[i] == 0){
        console.log(perfectSquares[i])
        outputsqrt = (Math.sqrt(perfectSquares[i])) * big +"√(" + (sqrt/perfectSquares[i]) + ")";
        console.log(outputsqrt);
        sqrt = (sqrt/perfectSquares[i]);
        big = (Math.sqrt(perfectSquares[i])) * big;
    }else{i++;
    }
}

console.log(outputsqrt);

const factors = [];
const refactors = [];
var num = 100000;
for (let i = 0; i < num + 1; i++) {
    factors.push(i);
}
for (let i = 0; i < num + 1; i++) {
    if (num % factors[i] == 0) {
        refactors.push(factors[i]);
    }
}