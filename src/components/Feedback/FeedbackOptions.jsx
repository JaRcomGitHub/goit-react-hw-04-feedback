import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map((option, index) => (
                <button
                    key={index}
                    type='button'
                    onClick={() => onLeaveFeedback(option)}
                >{option}</button>
            ))}
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
