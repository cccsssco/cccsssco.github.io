let measurementOptions = `     
        <option value=" " disabled selected>...Choose...</option>
        <option value="nanometers">Nanometers</option>
        <option value="micrometers">Micrometers</option>
        <option value="millimeters">Millimeters</option>
        <option value="meters">Meters</option>
        <option value="decimeters">Decimeters</option>
        <option value="centimeter">Centimeters</option>
        <option value="kilometes">Kilometers</option>
        <option value="miles">Miles</option>
        <option value="yards">Yards</option>
        <option value="foot">Foot</option>
        <option value="inches">Inches</option>
        <option value="nauticalMile">Nautical Mile</option>
        `;
let temperatureOptions = `     
        <option value=" " disabled selected>...Choose...</option>
        <option value="celcius">Celcius</option>
        <option value="farenheit">Farenheit</option>
        <option value="kelvin">Kelvin</option>
        `;
let conversionOptions = document.getElementById("type-of-conversions");
let inputOptions = document.getElementById("inputConversion");
let outputOptions = document.getElementById("outputConversion");
conversionOptions.addEventListener("change", function () {
  if (conversionOptions.value == "measurement") {
    inputOptions.innerHTML = measurementOptions;
    outputOptions.innerHTML = measurementOptions;
  }
  if(conversionOptions.value == 'temperature'){
      inputOptions.innerHTML = temperatureOptions;
      outputOptions.innerHTML = temperatureOptions;
  }
});
function conversion(){
    let input = document.getElementById('inputConversionInput').value;
    let output = document.getElementById('inputConversionOutput');
    if(inputOptions.value == 'celcius' && outputOptions.value =='farenheit'){
        output.value = celciusToFarenheit(input);
    }
}
function celciusToFarenheit(celcius){
    return (celcius * (9/5))+32;
}
