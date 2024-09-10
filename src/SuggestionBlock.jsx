import './InputStyle.css';
import Suggestion from "./Suggestion.jsx";
import { useState, useEffect } from "react";

function SuggestionBlock(props) {
    const [suggests, setSuggest] = useState([]);

    const wordsArray = ['abra', 'kadabra', 'alibaba', 'abracadabra'];

    const handleSuggestedClick = (text)=>{
        setSuggest([]);
        // eslint-disable-next-line react/prop-types
        props.onClick(text);
    }
    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (props.text) {
            const filteredSuggestions = wordsArray
                // eslint-disable-next-line react/prop-types
                .filter(word => word.startsWith(props.text) && word !== props.text)
                .slice(0, 3);
            setSuggest(filteredSuggestions);
        } else {
            setSuggest([]);
        }
        // eslint-disable-next-line react/prop-types
    }, [props.text]);

    return (
        <div className="suggest">
            {suggests.length > 0 &&
                suggests.map((word, index) => (
                    <Suggestion key={index} text={word} onClick={handleSuggestedClick} />
                ))
            }
        </div>
    );
}

export default SuggestionBlock;
