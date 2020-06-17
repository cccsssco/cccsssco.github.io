
var num = 100000;
const odds = [];
for (let i = 0; i < num; i++) {
    if (i % 2 == 1) {
        odds.push(i);
    }
}
console.log(odds.length);
const prime = odds;
var check = odds.length
let mod = 3;
let w = 0
let x = 0
let y = 0
for (let p = 0; p < check; p++) {
    mod = odds[p + 1]

    for (let i = 0; i < check; i++) {
        x++
        if (odds[i] % mod != 0 || odds[i] / mod == 1) {
            odds.push(odds[i])
        }
    }
    for (let i = 0; i < check; i++) {
        odds.shift()
    }
    w++
    check = odds.length
}
    console.log(odds.length, w, x);