import './InputStyle.css';
import Suggestion from "./Suggestion.jsx";
import { useState, useEffect } from "react";

function SuggestionBlock({onClick, text, wordsArray}) {
    const [suggests, setSuggest] = useState([]);

    const handleSuggestedClick = (text) => {
        setSuggest([]);
        onClick(text);
    }

    useEffect(() => {
        if (text) {
            const filteredSuggestions = wordsArray
                .filter(word => word.startsWith(text) && word !== text)
                .slice(0, 3);
            setSuggest(filteredSuggestions);
        } else {
            setSuggest([]);
        }
    }, [text, wordsArray]);

    return (
        <>
            {suggests.length > 0 && (
                <div className="suggest">
                    {suggests.map((word, index) => (
                        <Suggestion key={index} text={word} onClick={handleSuggestedClick} />
                    ))}
                </div>
            )}
        </>
    );
}

export default SuggestionBlock;
