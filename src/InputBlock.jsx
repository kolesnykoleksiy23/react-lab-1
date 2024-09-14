import './InputStyle.css';
import {useState} from "react";
import SuggestionBlock from "./SuggestionBlock.jsx";

function InputBlock(){
    const [inputValue, setInputValue] = useState('');
    const [wordsArray, setWordsArray] = useState(['abra', 'kadabra', 'alibaba', 'abracadabra']);

    const handleInput = (event) => {
        let value = event.target.value;
        setInputValue(value);
    };

    const handleAddWord = () => {
        if (inputValue.trim() !== '' && !wordsArray.includes(inputValue.trim())) {
            setWordsArray([...wordsArray, inputValue.trim()]);
        }
         setInputValue('');
    };

    const handleSuggestionClick = (text) => {
        setInputValue(text);
    };

    return(
        <>
            <input onChange={handleInput} className="inputStyle" value={inputValue} />
            <button onClick={handleAddWord}>Пошук</button>
            <SuggestionBlock text={inputValue} onClick={handleSuggestionClick} wordsArray={wordsArray} />
        </>
    );
}

export default InputBlock;
