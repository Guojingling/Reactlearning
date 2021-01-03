import BoilingVerdict from './BoilingVerdict';
import React from 'react';

const scaleName = {
    c:'Celsius',
    f:'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handelChanges = this.handelChanges.bind(this);
        //this.state = {temperature :''};        
    }
    handelChanges(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const scale = this.props.scale;
        return(
        <fieldset>
            <legend>Enter the temperature in {scaleName[scale]}</legend>
            <input onChange = {this.handelChanges} value={this.props.temperature} />         
        </fieldset>
        );
    }
}

export default TemperatureInput;