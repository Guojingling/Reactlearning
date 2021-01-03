export function toCelsius(Fahrenheit){
    return (Fahrenheit-32)/9*5;
}

export function toFahrenheit(Celsius){
    return Celsius*9/5 + 32;
}

export function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}