import React from 'react';
import styles from './HabitButton.module.scss';
import ProgressDial from './ProgressDial';

export default (props) => {
  const { className, progress, total, name, label, ...other } = props;
  return (
    <button className={styles.btn + ' ' + className} {...other}>
      {name}
      {label ? <div className={styles.label}>{label}</div> : null}
      <ProgressDial total={total} progress={progress} />
    </button>
  );
};
