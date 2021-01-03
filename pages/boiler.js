import React from 'react';

function BoilingVerdict(props){
    if(props.celsius >=100){
        return <p>The water would boil.</p>;
    }
    else{
        return <p>The water would not boil.</p>;
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handelChanges = this.handelChanges.bind(this);
        this.state = {temperature :''};        
    }
    handelChanges(e){
        this.setState({temperature: e.target.value});
    }
    render(){
        return(
        <fieldset>
            <legend>Enter the temperature</legend>
        <input onChange = {this.handelChanges} value={this.state.temperature} />
        <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
        </fieldset>
        );
    }
}

export default Calculator;