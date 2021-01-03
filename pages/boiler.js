import React from 'react';
import {tryConvert, toCelsius, toFahrenheit} from './utilities';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {scale:'c', temperature:''};
        this.handleCeisius = this.handleCeisius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
    }
    handleCeisius(temperature) {
        this.setState({scale:'c', temperature});          
    }
    handleFahrenheit(temperature){
        this.setState({scale:'f', temperature});  
    }
    render(){

        const stateTemp = this.state.temperature;
        const stateScale = this.state.scale;
        var celsiusTemp = '';
        var fahrenheitTemp = '';

        if (stateScale === 'c') {
           fahrenheitTemp = tryConvert(stateTemp, toFahrenheit);
           celsiusTemp = stateTemp;

        }

        if (stateScale === 'f') {
            celsiusTemp = tryConvert(stateTemp, toCelsius);
            fahrenheitTemp = stateTemp;
        }

        return(
            <div>
                <TemperatureInput scale='c' 
                    onTemperatureChange = {this.handleCeisius} 
                    temperature = {celsiusTemp} />
                {/* Fahrenheit is not showing the right result yet */}
                <TemperatureInput scale='f' 
                onTemperatureChange = {this.handleFahrenheit} 
                temperature = {fahrenheitTemp} />
                <BoilingVerdict celsius = {parseFloat(celsiusTemp)} />
            </div>
        );
    }
}

export default Calculator;