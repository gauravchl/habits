import React from "react";
import styles from "./home.module.scss";
import ButtonCircle from "./ButtonCircle";
import NavButton from "./NavButton";

export default () => {
  return (
    <div className={styles.root + " p-4"}>
      <div className="mb-5">
        <h2 className="mb-3">Habit Tracker</h2>
        <p>You have been doing great today, Keep going!</p>
      </div>

      <div className={styles.btnContainer}>
        <ButtonCircle className="mx-2 my-4">Run</ButtonCircle>
        <ButtonCircle className="mx-2 my-4">Gym</ButtonCircle>
        <ButtonCircle className="mx-2 my-4">Write</ButtonCircle>
        <ButtonCircle className="mx-2 my-4">+</ButtonCircle>
      </div>

      <div className={styles.navContainer}>
        <NavButton>+</NavButton>
        <NavButton>-</NavButton>
      </div>
    </div>
  );
};
