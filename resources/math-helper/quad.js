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
var sqrt = 9409;
console.log(sqrt);
const perfectSquares = [];
for(let i = 0; i < 97; i++){
    perfectSquares.push((i + 2) ** 2);
}
perfectSquares.sort(function(a, b){return a-b});
console.log(perfectSquares);

var outputsqrt ;
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
console.log(Math.sqrt(256));
console.log((4 ** 10) * (3 ** 10));
console.log(big ** 2);