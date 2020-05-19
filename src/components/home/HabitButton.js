import React from "react";
import styles from "./HabitButton.module.scss";
import ProgressDial from "./ProgressDial";

export default (props) => {
  const { className, progress, total, name, ...other } = props;
  return (
    <button className={styles.btn + " " + className} {...other}>
      {name}
      {progress ? <div className={styles.progress}>{progress}</div> : null}
      <ProgressDial total={total} progress={progress} />
    </button>
  );
};
