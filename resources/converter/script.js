let measurementOptions = `     
        <option value="nanometers">Nanometers</option>
        <option value="micrometers">Micrometers</option>
        <option value="millimeters">Millimeters</option>
        <option value="meters">Meters</option>
        <option value="centimeters">Centimeters</option>
        <option value="kilometers">Kilometers</option>
        <option value="mile">Miles</option>
        <option value="yard">Yards</option>
        <option value="foot">Foot</option>
        <option value="inch">Inches</option>
        <option value="nauticalMile">Nautical Mile</option>
        `;
let temperatureOptions = `     
        <option value="celcius">Celcius</option>
        <option value="farenheit">Farenheit</option>
        <option value="kelvin">Kelvin</option>
        `;
let massOptions = `
        <option value="microgram">Microgram</option>
        <option value="milligram">Milligram</option>
        <option value="gram">Gram</option>
        <option value="kilogram">Kilogram</option>
        <option value="tonne">Tonne</option>
        <option value="imperialTon">Imperial Ton</option>
        <option value="usTon">US Ton</option>
        <option value="stone">Stone</option>
        <option value="pound">Pound</option>
        <option value="ounce">Ounce</option>
        `;
let volumeOptions = `
        <option value="cubicMeters">Cubic Meters</option>
        <option value="liters">Liters</option>
        <option value="milliliters">Milliliters</option>
        <option value="usGallon">US Liquid Gallon</option>
        <option value="gallon">Gallon</option>
        <option value="cubicFoot">Cubic Foot</option>
        <option value="cubicInch">Cubic Inch</option>
        `;
let conversionOptions = document.getElementById("type-of-conversions");
let inputOptions = document.getElementById("inputConversion");
let outputOptions = document.getElementById("outputConversion");
conversionOptions.addEventListener("change", function () {
 "measurement"==conversionOptions.value&&(inputOptions.innerHTML=measurementOptions,outputOptions.innerHTML=measurementOptions),"temperature"==conversionOptions.value&&(inputOptions.innerHTML=temperatureOptions,outputOptions.innerHTML=temperatureOptions),"mass"==conversionOptions.value&&(inputOptions.innerHTML=massOptions,outputOptions.innerHTML=massOptions);
  if (conversionOptions.value == "volume") {
    inputOptions.innerHTML = volumeOptions;
    outputOptions.innerHTML = volumeOptions;
  }
});

function conversion() {
  let input = document.getElementById("inputConversionInput").value;
  let output = document.getElementById("inputConversionOutput");
  "temperature"==conversionOptions.value&&(inputOptions.value==outputOptions.value&&(output.value=input),"celcius"==inputOptions.value&&"farenheit"==outputOptions.value&&(output.value=celciusToFarenheit(input)),"farenheit"==inputOptions.value&&"celcius"==outputOptions.value&&(output.value=farenheitToCelcius(input)),"celcius"==inputOptions.value&&"kelvin"==outputOptions.value&&(output.value=celciusToKelvin(input)),"kelvin"==inputOptions.value&&"celcius"==outputOptions.value&&(output.value=kelvinToCelcius(input)),"farenheit"==inputOptions.value&&"kelvin"==outputOptions.value&&(output.value=farenheitToKelvin(input)),"kelvin"==inputOptions.value&&"farenheit"==outputOptions.value&&(output.value=kelvinToFarenheit(input)));
 "measurement"==conversionOptions.value&&(inputOptions.value==outputOptions.value&&(output.value=input),"nanometers"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=dividedByThousand(input)),"micrometers"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=timesThousand(input)),"nanometers"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=dividedBy1e6(input)),"millimeters"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e6(input)),"nanometers"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=dividedBy1e7(input)),"centimeters"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e7(input)),"nanometers"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedBy1e9(input)),"meters"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e9(input)),"nanometers"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedBy1e12(input)),"kilometers"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e12(input)),"micrometers"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=dividedByThousand(input)),"millimeters"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=timesThousand(input)),"micrometers"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=dividedByTenThousand(input)),"centimeters"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=timesTenThousand(input)),"micrometers"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedBy1e6(input)),"meters"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=times1e6(input)),"micrometers"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedBy1e9(input)),"kilometers"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=times1e9(input)),"millimeters"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=dividedByTen(input)),"centimeters"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=timesTen(input)),"millimeters"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedByThousand(input)),"meters"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=timesThousand(input)),"millimeters"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedBy1e6(input)),"kilometers"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=times1e6(input)),"centimeters"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedByHundred(input)),"meters"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=timesHundred(input)),"centimeters"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedByHundredThousand(input)),"meters"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=timesHundredThousand(input)),"meters"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedByThousand(input)),"kilometers"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=timesThousand(input)),"mile"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=mileToYard(input)),"yard"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=yardToMile(input)),"mile"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=mileToFoot(input)),"foot"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=footToMile(input)),"mile"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=mileToInch(input)),"inch"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=inchToMile(input)),"mile"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=mileToNauticalMile(input)),"nauticalMile"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=nauticalMileToMile(input)),"yard"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=yardToFoot(input)),"foot"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=footToYard(input)),"yard"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=yardToInch(input)),"inch"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=inchToYard(input)),"yard"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=yardToNauticalMile(input)),"nauticalMile"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=nauticalMileToYard(input)),"foot"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=footToInch(input)),"inch"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=inchToFoot(input)),"foot"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=footToNauticalMile(input)),"nauticalMile"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=nauticalMileToFoot(input)),"inch"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=inchToNauticalMile(input)),"nauticalMile"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=nauticalMileToInch(input)),"mile"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e7(mileToCentimeter(input))),"nanometers"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=dividedBy1e7(centimeterToMile(input))),"mile"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=timesTenThousand(mileToCentimeter(input))),"micrometers"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=dividedByTenThousand(centimeterToMile(input))),"mile"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=timesTen(mileToCentimeter(input))),"millimeters"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=dividedByTen(centimeterToMile(input))),"mile"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=mileToCentimeter(input)),"centimeters"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=centimeterToMile(input)),"mile"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedByHundred(mileToCentimeter(input))),"meters"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=timesHundred(centimeterToMile(input))),"mile"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedByHundredThousand(mileToCentimeter(input))),"kilometers"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=timesHundredThousand(centimeterToMile(input))),"yard"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e7(mileToCentimeter(yardToMile(input)))),"nanometers"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=dividedBy1e7(centimeterToMile(mileToYard(input)))),"yard"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=timesTenThousand(mileToCentimeter(yardToMile(input)))),"micrometers"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=dividedByTenThousand(centimeterToMile(mileToYard(input)))),"yard"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=timesTen(mileToCentimeter(yardToMile(input)))),"millimeters"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=dividedByTen(centimeterToMile(mileToYard(input)))),"yard"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=mileToCentimeter(yardToMile(input))),"centimeters"==inputOptions.value&&"mile"==outputOptions.value&&(output.value=centimeterToMile(mileToYard(input))),"yard"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedByHundred(mileToCentimeter(yardToMile(input)))),"meters"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=timesHundred(centimeterToMile(mileToYard(input)))),"yard"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedByHundredThousand(mileToCentimeter(yardToMile(input)))),"kilometers"==inputOptions.value&&"yard"==outputOptions.value&&(output.value=timesHundredThousand(centimeterToMile(mileToYard(input)))),"foot"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e7(mileToCentimeter(footToMile(input)))),"nanometers"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=dividedBy1e7(centimeterToMile(mileToFoot(input)))),"foot"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=timesTenThousand(mileToCentimeter(footToMile(input)))),"micrometers"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=dividedByTenThousand(centimeterToMile(mileToFoot(input)))),"foot"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=timesTen(mileToCentimeter(footToMile(input)))),"millimeters"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=dividedByTen(centimeterToMile(mileToFoot(input)))),"foot"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=mileToCentimeter(footToMile(input))),"centimeters"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=centimeterToMile(mileToFoot(input))),"foot"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedByHundred(mileToCentimeter(footToMile(input)))),"meters"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=timesHundred(centimeterToMile(mileToFoot(input)))),"foot"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedByHundredThousand(mileToCentimeter(footToMile(input)))),"kilometers"==inputOptions.value&&"foot"==outputOptions.value&&(output.value=timesHundredThousand(centimeterToMile(mileToFoot(input)))),"inch"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e7(mileToCentimeter(inchToMile(input)))),"nanometers"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=dividedBy1e7(centimeterToMile(mileToInch(input)))),"inch"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=timesTenThousand(mileToCentimeter(inchToMile(input)))),"micrometers"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=dividedByTenThousand(centimeterToMile(mileToInch(input)))),"inch"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=timesTen(mileToCentimeter(inchToMile(input)))),"millimeters"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=dividedByTen(centimeterToMile(mileToInch(input)))),"inch"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=mileToCentimeter(inchToMile(input))),"centimeters"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=centimeterToMile(mileToInch(input))),"inch"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedByHundred(mileToCentimeter(inchToMile(input)))),"meters"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=timesHundred(centimeterToMile(mileToInch(input)))),"inch"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedByHundredThousand(mileToCentimeter(inchToMile(input)))),"kilometers"==inputOptions.value&&"inch"==outputOptions.value&&(output.value=timesHundredThousand(centimeterToMile(mileToInch(input)))),"nauticalMile"==inputOptions.value&&"nanometers"==outputOptions.value&&(output.value=times1e7(mileToCentimeter(nauticalMileToMile(input)))),"nanometers"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=dividedBy1e7(centimeterToMile(mileToNauticalMile(input)))),"nauticalMile"==inputOptions.value&&"micrometers"==outputOptions.value&&(output.value=timesTenThousand(mileToCentimeter(nauticalMileToMile(input)))),"micrometers"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=dividedByTenThousand(mileToNauticalMile(mileToYard(input)))),"nauticalMile"==inputOptions.value&&"millimeters"==outputOptions.value&&(output.value=timesTen(mileToCentimeter(nauticalMileToMile(input)))),"millimeters"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=dividedByTen(centimeterToMile(mileToNauticalMile(input)))),"nauticalMile"==inputOptions.value&&"centimeters"==outputOptions.value&&(output.value=mileToCentimeter(nauticalMileToMile(input))),"centimeters"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=centimeterToMile(mileToNauticalMile(input))),"nauticalMile"==inputOptions.value&&"meters"==outputOptions.value&&(output.value=dividedByHundred(mileToCentimeter(nauticalMileToMile(input)))),"meters"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=timesHundred(centimeterToMile(mileToNauticalMile(input)))),"nauticalMile"==inputOptions.value&&"kilometers"==outputOptions.value&&(output.value=dividedByHundredThousand(mileToCentimeter(nauticalMileToMile(input)))),"kilometers"==inputOptions.value&&"nauticalMile"==outputOptions.value&&(output.value=timesHundredThousand(centimeterToMile(mileToNauticalMile(input)))));
  "mass"==conversionOptions.value&&(inputOptions.value==outputOptions.value&&(output.value=input),"microgram"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=dividedByThousand(input)),"milligram"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=timesThousand(input)),"microgram"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=dividedBy1e6(input)),"gram"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=times1e6(input)),"microgram"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=dividedBy1e9(input)),"kilogram"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=times1e9(input)),"milligram"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=dividedByThousand(input)),"gram"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=timesThousand(input)),"milligram"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=dividedBy1e6(input)),"kilogram"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=times1e6(input)),"gram"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=dividedByThousand(input)),"kilogram"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=timesThousand(input)),"gram"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedBy1e6(input)),"tonne"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=times1e6(input)),"microgram"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedBy1e12(input)),"tonne"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=times1e12(input)),"milligram"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedBy1e9(input)),"tonne"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=times1e9(input)),"kilogram"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedByThousand(input)),"tonne"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=timesThousand(input)),"microgram"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=dividedByThousand(input)),"microgram"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=dividedByThousand(input)),"imperialTon"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=imperialTonToUSTon(input)),"usTon"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=usTonToImperialTon(input)),"imperialTon"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=imperialTonToStone(input)),"stone"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=stoneToImperialTon(input)),"imperialTon"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=imperialTonToPound(input)),"pound"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=poundToImperialTon(input)),"imperialTon"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=imperialTonToOunce(input)),"ounce"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=ounceToImperialTon(input)),"imperialTon"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=times1e6(imperialTonToGram(input))),"microgram"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=dividedBy1e6(gramToImperialTon(input))),"imperialTon"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=timesThousand(imperialTonToGram(input))),"milligram"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=dividedByThousand(gramToImperialTon(input))),"imperialTon"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=imperialTonToGram(input)),"gram"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=gramToImperialTon(input)),"imperialTon"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=dividedByThousand(imperialTonToGram(input))),"kilogram"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=timesThousand(gramToImperialTon(input))),"imperialTon"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedBy1e6(imperialTonToGram(input))),"tonne"==inputOptions.value&&"imperialTon"==outputOptions.value&&(output.value=times1e6(gramToImperialTon(input))),"usTon"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=usTonToStone(input)),"stone"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=stoneToUSTon(input)),"usTon"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=usTonToPound(input)),"pound"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=poundToUSTon(input)),"usTon"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=usTonToOunce(input)),"ounce"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=ounceToUSTon(input)),"usTon"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=times1e6(usTonToGram(input))),"microgram"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=dividedBy1e6(gramToUSTon(input))),"usTon"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=timesThousand(usTonToGram(input))),"milligram"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=dividedByThousand(gramToUSTon(input))),"usTon"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=usTonToGram(input)),"gram"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=gramToUSTon(input)),"usTon"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=dividedByThousand(usTonToGram(input))),"kilogram"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=timesThousand(gramToUSTon(input))),"usTon"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedBy1e6(usTonToGram(input))),"tonne"==inputOptions.value&&"usTon"==outputOptions.value&&(output.value=times1e6(gramToUSTon(input))),"stone"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=stoneToPound(input)),"pound"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=poundToStone(input)),"stone"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=stoneToOunce(input)),"ounce"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=ounceToStone(input)),"stone"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=times1e6(stoneToGram(input))),"microgram"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=dividedBy1e6(gramToStone(input))),"stone"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=timesThousand(stoneToGram(input))),"milligram"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=dividedByThousand(gramToStone(input))),"stone"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=stoneToGram(input)),"gram"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=gramToStone(input)),"stone"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=dividedByThousand(stoneToGram(input))),"kilogram"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=timesThousand(gramToStone(input))),"stone"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedBy1e6(stoneToGram(input))),"tonne"==inputOptions.value&&"stone"==outputOptions.value&&(output.value=times1e6(gramToStone(input))),"pound"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=poundToOunce(input)),"ounce"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=ounceToPound(input)),"pound"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=times1e6(poundToGram(input))),"microgram"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=dividedBy1e6(gramToPound(input))),"pound"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=timesThousand(poundToGram(input))),"milligram"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=dividedByThousand(gramToPound(input))),"pound"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=poundToGram(input)),"gram"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=gramToPound(input)),"pound"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=dividedByThousand(poundToGram(input))),"kilogram"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=timesThousand(gramToPound(input))),"pound"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedBy1e6(poundToGram(input))),"tonne"==inputOptions.value&&"pound"==outputOptions.value&&(output.value=times1e6(gramToPound(input))),"ounce"==inputOptions.value&&"microgram"==outputOptions.value&&(output.value=times1e6(ounceToGram(input))),"microgram"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=dividedBy1e6(gramToOunce(input))),"ounce"==inputOptions.value&&"milligram"==outputOptions.value&&(output.value=timesThousand(ounceToGram(input))),"milligram"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=dividedByThousand(gramToOunce(input))),"ounce"==inputOptions.value&&"gram"==outputOptions.value&&(output.value=ounceToGram(input)),"gram"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=gramToOunce(input)),"ounce"==inputOptions.value&&"kilogram"==outputOptions.value&&(output.value=dividedByThousand(ounceToGram(input))),"kilogram"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=timesThousand(gramToOunce(input))),"ounce"==inputOptions.value&&"tonne"==outputOptions.value&&(output.value=dividedBy1e6(ounceToGram(input))),"tonne"==inputOptions.value&&"ounce"==outputOptions.value&&(output.value=times1e6(gramToOunce(input))));
  if (conversionOptions.value == "volume") {
    if (inputOptions.value == outputOptions.value) {
      output.value = input;
    }
    if (
      inputOptions.value == "cubicMeters" &&
      outputOptions.value == "liters"
    ) {
      output.value = timesThousand(input);
    }
    if (
      inputOptions.value == "liters" &&
      outputOptions.value == "cubicMeters"
    ) {
      output.value = dividedByThousand(input);
    }
    if (
      inputOptions.value == "cubicMeters" &&
      outputOptions.value == "milliliters"
    ) {
      output.value = times1e6(input);
    }
    if (
      inputOptions.value == "milliliters" &&
      outputOptions.value == "cubicMeters"
    ) {
      output.value = dividedBy1e6(input);
    }
    if (
      inputOptions.value == "liters" &&
      outputOptions.value == "milliliters"
    ) {
      output.value = timesThousand(input);
    }
    if (
      inputOptions.value == "milliliters" &&
      outputOptions.value == "liters"
    ) {
      output.value = dividedByThousand(input);
    }
    if (
      inputOptions.value == "milliliters" &&
      outputOptions.value == "gallon"
    ) {
      output.value = dividedByThousand(litersToGallon(input));
    }
    if (
      inputOptions.value == "gallon" &&
      outputOptions.value == "milliliters"
    ) {
      output.value = timesThousand(gallonToLiters(input));
    }
    if (inputOptions.value == "liters" && outputOptions.value == "gallon") {
      output.value = litersToGallon(input);
    }
    if (inputOptions.value == "gallon" && outputOptions.value == "liters") {
      output.value = litersToGallon(input);
    }
    if (
      inputOptions.value == "cubicMeters" &&
      outputOptions.value == "gallon"
    ) {
      output.value = timesThousand(litersToGallon(input));
    }
    if (
      inputOptions.value == "gallon" &&
      outputOptions.value == "cubicmeters"
    ) {
      output.value = dividedByThousand(gallonToLiters(input));
    }
    if (inputOptions.value == "cubicFoot" && outputOptions.value == "liters") {
      output.value = multiply(input, 28.3168466);
    }
    if (inputOptions.value == "liters" && outputOptions.value == "cubicFoot") {
      output.value = divide(input, 28.3168466);
    }
    if (
      inputOptions.value == "cubicFoot" &&
      outputOptions.value == "milliliters"
    ) {
      output.value = multiply(input, 28316.8466);
    }
    if (
      inputOptions.value == "milliliters" &&
      outputOptions.value == "cubicFoot"
    ) {
      output.value = divide(input, 28316.8466);
    }
    if (
      inputOptions.value == "cubicFoot" &&
      outputOptions.value == "cubicMeters"
    ) {
      output.value = multiply(input, 0.02831685);
    }
    if (
      inputOptions.value == "cubicMeters" &&
      outputOptions.value == "cubicFoot"
    ) {
      output.value = divide(input, 0.02831685);
    }
    if (inputOptions.value == "cubicFoot" && outputOptions.value == "gallon") {
      output.value = multiply(input, 6.22883507);
    }
    if (inputOptions.value == "gallon" && outputOptions.value == "cubicFoot") {
      output.value = divide(input, 6.22883507);
    }
    if (inputOptions.value == "cubicInch" && outputOptions.value == "liters") {
      output.value = multiply(input, 0.016387064069264);
    }
    if (inputOptions.value == "liters" && outputOptions.value == "cubicInch") {
      output.value = divide(input, 0.016387064069264);
    }
    if (
      inputOptions.value == "cubicInch" &&
      outputOptions.value == "milliliters"
    ) {
      output.value = multiply(input, 16.387064069264);
    }
    if (
      inputOptions.value == "milliliters" &&
      outputOptions.value == "cubicInch"
    ) {
      output.value = divide(input, 16.387064069264);
    }
    if (inputOptions.value == "cubicInch" && outputOptions.value == "gallon") {
      output.value = multiply(input, 0.003604650165145);
    }
    if (inputOptions.value == "gallon" && outputOptions.value == "cubicInch") {
      output.value = divide(input, 0.003604650165145);
    }
    if (
      inputOptions.value == "cubicInch" &&
      outputOptions.value == "cubicFoot"
    ) {
      output.value = divide(input, 1728);
    }
    if (
      inputOptions.value == "cubicFoot" &&
      outputOptions.value == "cubicInch"
    ) {
      output.value = multiply(input, 1728);
    }
    if (inputOptions.value == "usGallon" && outputOptions.value == "liters") {
      output.value = multiply(input, 3.785411784);
    }
    if (inputOptions.value == "liters" && outputOptions.value == "usGallon") {
      output.value = divide(input, 3.785411784 );
    }
    if (inputOptions.value == "usGallon" && outputOptions.value == "milliliters") {
      output.value = multiply(input, 3785.411784);
    }
    if (inputOptions.value == "milliliters" && outputOptions.value == "usGallon") {
      output.value = divide(input, 3785.411784);
    }
    if (inputOptions.value == "usGallon" && outputOptions.value == "gallon") {
      output.value = multiply(input, 1.2009499204287);
    }
    if (inputOptions.value == "gallon" && outputOptions.value == "usGallon") {
      output.value = divide(input, 1.2009499204287);
    }
    if (inputOptions.value == "usGallon" && outputOptions.value == "cubicMeters") {
      output.value = multiply(input, 0.0037854118);
    }
    if (inputOptions.value == "cubicMeters" && outputOptions.value == "usGallon") {
      output.value = divide(input, 0.0037854118);
    }
    if (inputOptions.value == "usGallon" && outputOptions.value == "cubicFoot") {
      output.value = multiply(input, 0.13368055555556);
    }
    if (inputOptions.value == "cubicFoot" && outputOptions.value == "usGallon") {
      output.value = divide(input, 0.13368055555556);
    }
    if (inputOptions.value == "usGallon" && outputOptions.value == "cubicInch") {
      output.value = multiply(input, 277.419);
    }
    if (inputOptions.value == "cubicInch" && outputOptions.value == "usGallon") {
      output.value = divide(input, 277.419);
    }
  }
}
function celciusToFarenheit(celcius){return 1.8*celcius+32}function farenheitToCelcius(farenheit){return 5/9*(farenheit-32)}function celciusToKelvin(celcius){return parseFloat(celcius+273.15)}function kelvinToCelcius(kelvin){return kelvin-273.15}function farenheitToKelvin(farenheit){return farenheitToCelcius(farenheit)+273.15}function kelvinToFarenheit(kelvin){return celciusToFarenheit(kelvinToCelcius(kelvin))}function timesTen(input){return 10*input}function dividedByTen(input){return input/10}function timesHundred(input){return 100*input}function dividedByHundred(input){return input/100}function timesThousand(input){return 1e3*input}function dividedByThousand(input){return input/1e3}function timesTenThousand(input){return 1e4*input}function dividedByTenThousand(input){return input/1e4}function timesHundredThousand(input){return 1e5*input}function dividedByHundredThousand(input){return input/1e5}function times1e6(input){return 1e6*input}function dividedBy1e6(input){return input/1e6}function times1e7(input){return 1e7*input}function dividedBy1e7(input){return input/1e7}function times1e9(input){return 1e9*input}function dividedBy1e9(input){return input/1e9}function times1e12(input){return 1e12*input}function dividedBy1e12(input){return input/1e12}function mileToYard(mile){return 1760*mile}function yardToMile(yard){return yard/1760}function mileToFoot(mile){return 3*mileToYard(mile)}function footToMile(foot){return yardToMile(foot)/3}function mileToInch(mile){return 12*mileToFoot(mile)}function inchToMile(inch){return footToMile(inch)/12}function mileToNauticalMile(mile){return mile/1.151}function nauticalMileToMile(nauticalMile){return 1.151*nauticalMile}function yardToFoot(yard){return 3*yard}function footToYard(foot){return foot/3}function yardToInch(yard){return 36*yard}function inchToYard(inch){return inch/36}function yardToNauticalMile(yard){return yard/2025}function nauticalMileToYard(nauticalMile){return 2025*nauticalMile}function footToInch(foot){return 12*foot}function inchToFoot(inch){return inch/12}function footToNauticalMile(foot){return foot/6076}function nauticalMileToFoot(nauticalMile){return 6076*nauticalMile}function inchToNauticalMile(inch){return 72913*inch}function nauticalMileToInch(nauticalMile){return nauticalMile/72913}function mileToCentimeter(mile){return 160934*mile}function centimeterToMile(centimeter){return centimeter/160934}function yardToCentimeter(yard){return mileToCentimeter(yardToMile(yard))}function footToCentimeter(foot){return mileToCentimeter(footToMile(foot))}function inchToCentimeter(inch){return mileToCentimeter(inchToMile(inch))}function nauticalMileToCentimeter(nauticalMile){return mileToCentimeter(nauticalMileToMile(nauticalMile))}function imperialTonToUSTon(imperialTon){return 1.12*imperialTon}function usTonToImperialTon(usTon){return usTon/1.12}function imperialTonToStone(imperialTon){return 160*imperialTon}function stoneToImperialTon(stone){return stone/160}function stoneToPound(stone){return 14*stone}function poundToStone(pound){return pound/14}function imperialTonToPound(imperialTon){return stoneToPound(imperialTonToStone(imperialTon))}function poundToImperialTon(pound){return poundToStone(stoneToImperialTon(pound))}function imperialTonToOunce(imperialTon){return 35840*imperialTon}function ounceToImperialTon(ounce){return ounce/35840}function usTonToStone(usTon){return 142.85714286*usTon}function stoneToUSTon(stone){return stone/142.85714286}function usTonToPound(usTon){return 2*timesThousand(usTon)}function poundToUSTon(pound){return dividedByThousand(pound)/2}function usTonToOunce(usTon){return 32*timesThousand(usTon)}function ounceToUSTon(ounce){return dividedByThousand(ounce)/32}function stoneToOunce(stone){return 224*stone}function ounceToStone(ounce){return ounce/224}function poundToOunce(pound){return 16*pound}function ounceToPound(ounce){return ounce/16}function imperialTonToGram(imperialTon){return 1016046.91*imperialTon}function gramToImperialTon(gram){return gram/1016046.91}function usTonToGram(usTon){return 907184.74*usTon}function gramToUSTon(gram){return gram/907184.74}function stoneToGram(stone){return 6350.29318*stone}function gramToStone(gram){return gram/6350.29318}function poundToGram(pound){return 453.59237*pound}function gramToPound(gram){return gram/453.59237}function ounceToGram(ounce){return 28.34952*ounce}function gramToOunce(gram){return gram/28.34952}function multiply(input,multiplier){return input*multiplier}function divide(input,divider){return input/divider}function litersToGallon(liters){return liters/4.546}function gallonToLiters(gallon){return 4.546*gallon}
