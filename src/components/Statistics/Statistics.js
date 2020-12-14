import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercent,
}) => {
  return (
    <div className="wrapper">
      <ul>
        <li key="good" className={styles.item}>
          <span>Good: {good}</span>
        </li>

        <li key="bad" className={styles.item}>
          <span>Bad: {bad}</span>
        </li>

        <li key="neutral" className={styles.item}>
          <span>Neutral: {neutral}</span>
        </li>

        <li key="total" className={styles.item}>
          <span>Total: {totalFeedback}</span>
        </li>

        <li key="positiveFeedback" className={styles.item}>
          <span>Positive feedback: {positiveFeedbackPercent} %</span>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number.isRequired),
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercent: PropTypes.number.isRequired,
};

export default Statistics;
