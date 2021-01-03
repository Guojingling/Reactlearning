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
        this.state = {temperature :''};        
    }
    handelChanges(e){
        this.setState({temperature: e.target.value});
    }
    render(){
        const scale = this.props.scale;
        return(
        <fieldset>
            <legend>Enter the temperature in {scaleName[scale]}</legend>
        <input onChange = {this.handelChanges} value={this.state.temperature} />        
        <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
        </fieldset>
        );
    }
}

export default TemperatureInput;