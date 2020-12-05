import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ state, totalFeedback, positiveFeedbackPercent }) => {
  const stateValuesArray = Object.keys(state);
  return (
    <div className="wrapper">
      <ul className="list">
        {stateValuesArray.map((el) => {
          return (
            <li key={stateValuesArray.indexOf(el)} className={styles.item}>
              <span>
                {el}: {state[el]}
              </span>
            </li>
          );
        })}
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
};

export default Statistics;
