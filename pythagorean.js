function pythagorean(a,b,c){
    if(c == undefined){
        console.log( Math.sqrt( a ** 2 + b ** 2 ));
    }
    if(a == undefined){
        console.log( Math.sqrt( c ** 2 - b ** 2 ));
    }
    if(b == undefined){
        console.log( Math.sqrt( c ** 2 - a ** 2 ));
    }
}
pythagorean(3,4,undefined);
pythagorean(undefined,4,5);
pythagorean(3,undefined,5)

