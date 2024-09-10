import './InputStyle.css';
import {useState} from "react";
import SuggestionBlock from "./SuggestionBlock.jsx";

function InputBlock(){
    const [inputValue, setInputValue] = useState('');

    const handleSuggestionClick = (text) => {
        setInputValue(text);
    };
        const handleInput = (event) => {
            let value = event.target.value;
            setInputValue(value);
    };
    return(
        <>
            <input onChange={handleInput} className="inputStyle"  value={inputValue}/>
            {inputValue && <SuggestionBlock text={inputValue} onClick={handleSuggestionClick}/>}
        </>
    );
}
export default InputBlock;
