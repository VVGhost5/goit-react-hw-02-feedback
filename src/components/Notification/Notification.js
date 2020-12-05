import styles from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
