var num = 1;
for(let q = 0; q < 100 ; q++, num *=10){
var h;
const perfectSquaresArr = [];
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
for (let i = 0, p = 0; p <= num; i++, h = i) {
    p = i ** 7;
}

for (h = 2; h <= 7; h++) {
    for (let i = 2; i ** h <= num; i++) {
        if (h == 2) {
            two.push(i ** h);
        }
        if (h == 3) {
            three.push(i ** h);
        }
        if (h == 4) {
            four.push(i ** h);
        }
        if (h == 5) {
            five.push(i ** h);
        }
        if (h == 6) {
            six.push(i ** h);
        }
        if (h == 7) {
            seven.push(i ** h);
        }
    }
    
}
perfectSquaresArr.push(two, three, four, five, six, seven);
console.log(perfectSquaresArr[0].length, perfectSquaresArr[1].length, perfectSquaresArr[2].length, perfectSquaresArr[3].length, perfectSquaresArr[4].length, perfectSquaresArr[5].length)
}