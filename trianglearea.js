function triangleArea(a,b,c){
  let output;
  if(a>c && a>b){
    output =  (b*c)/2;
  }
  if(b>a && b>c){
    output = (a*c)/2;
  }
  if(c>a && c>b){
  output = (b*a)/2;
  }
  console.log(output);
}
