import React from 'react';

import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <TemperatureInput scale='c' />
                {/* Fahrenheit is not showing the right result yet */}
                <TemperatureInput scale='f' />
            </div>
        );
    }
}

export default Calculator;