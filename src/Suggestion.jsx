import './InputStyle.css';
import PropTypes from 'prop-types';
function Suggestion(props){
    return(
        // eslint-disable-next-line react/prop-types
        <div className="suggest-item" onClick={()=> props.onClick(props.text)}>
            {props.text}
        </div>
    );
}
Suggestion.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Suggestion;