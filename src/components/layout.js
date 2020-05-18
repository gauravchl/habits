import React from "react";
import NavButton from "./NavButton";
import styles from "./layout.module.scss";

export default ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header + " px-4 py-3"}>
        <h2 className="mb-2 font-weight-light">Hello there!</h2>
        <p>You have been doing great today, Keep going!</p>
      </div>

      <div className={styles.container + " px-4 mt-4"}>{children}</div>

      <div className={styles.navContainer + " px-4 pb-4"}>
        <NavButton>+</NavButton>
        <NavButton>-</NavButton>
      </div>
    </div>
  );
};
