import React from "react";
import styles from "./NavButton.module.scss";

export default (props) => {
  const { children, className, ...other } = props;
  return (
    <button className={styles.btn + " " + className} {...other}>
      {children}
    </button>
  );
};
