import React, {useState} from 'react';
import Card from '../pages/useRef';



const inputElement = () =>{
    const [inputValue, setInputValue] = useState("");
    const [historyList, setHistoryList] = useState([]);
    return(
        <div>
            <input placeholder = "Enter your name"
                    onChange = {(e)=>{
                        setInputValue(e.target.value);
                        setHistoryList([...historyList, e.target.value]);
                    }}     
            ></input><br />
            <label>
                {inputValue}                
            </label>
            <ul>
                {historyList.map((rec)=>{
                    return (<div>{rec}</div>)
                })
                }
            </ul>
            <Card title = "something" body="very interesting" />
        </div>

    );
};

export default inputElement;