import './InputStyle.css';
function Suggestion({onClick,text,key}){
    return(
        <div className="suggest-item" onClick={()=> onClick(text)} id={key}>
            {text}
        </div>
    );
}
export default Suggestion;