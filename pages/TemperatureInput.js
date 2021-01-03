import BoilingVerdict from './BoilingVerdict';

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