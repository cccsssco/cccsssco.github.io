function celciusToFarenheit(c,f){
  let temperature;
  if(f === undefined){
    temperature = ((c*9)/5)+32
  }else if(c === undefined){
    temperature = (5*(f-32))/9
  }
  console.log(temperature);
}
