function q(a,b,c){
    let outputx1 = ((-(b) + (Math.sqrt((b ** 2) - (4 * (a * c)))))/(2 * a));
    let outputx2 = ((-(b) - (Math.sqrt((b ** 2) - (4 * (a * c)))))/(2 * a));
    console.log("x = " + outputx1 + " , " + "x = " + outputx2);
}
q(1,-8,5);