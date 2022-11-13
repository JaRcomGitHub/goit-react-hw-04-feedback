import {useState} from "react";
import css from './Feedback.module.css'
import Statistics from "./Statistics"
import FeedbackOptions from "./FeedbackOptions"
import Section from "./Section"
import Notification from "./Notification"

const feedbackOptions = ['good', 'neutral', 'bad'];

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleIncrementFeedback = option => {
        switch (option) {
            case feedbackOptions[0]:
                setGood(prevGood => prevGood + 1);
                break;
            case feedbackOptions[1]:
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case feedbackOptions[2]:
                setBad(prevBad => prevBad + 1);
                break;
            default:
                return;
        }
    }

    const countTotalFeedback = () => {
        return (
            good + neutral + bad
        );
    }

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return (
            total ? Math.round(good / total * 100) : 0
        );
    }

    return (
        <div className={css.feedbackBlock}>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={ feedbackOptions }
                    onLeaveFeedback={handleIncrementFeedback}
                />
            </Section>
            <Section title="Statistics">
                {
                    (countTotalFeedback() > 0)
                    ?
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                    :
                    <Notification message="There is no feedback" />
                }
            </Section>
        </div>
    );
}
