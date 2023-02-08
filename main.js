function celTofahr(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrTocel(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let far = prompt("Input Celcius to see in Fahrenheit Temperature");
document.write("Celsius:" + far + "<br>" + "Fahrenheit:" + celTofahr(far));

let cel = prompt("Input Fahrenheit to see in Celcius Temperature");
document.write( "<br>" + "Fahrenheit:" + cel + "<br>" + " Celsius:" + fahrTocel(cel));

