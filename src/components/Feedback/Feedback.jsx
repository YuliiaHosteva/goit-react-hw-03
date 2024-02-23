import styles from '../Feedback/Feedback.module.css' 

const Feedback = ({ feedback, totalFeedback }) => {
  const percentagePositive = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  return (
    <div className={styles.feedback}>
      <h2>Feedback statistics:</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {isNaN(percentagePositive) ? 0 : percentagePositive}%</p>
    </div>
  );
};

export default Feedback;
