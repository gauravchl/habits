import React, { useState } from "react";
import styles from "./home.module.scss";
import ButtonCircle from "./ButtonCircle";
import Layout from "../layout";
import AddHabitForm from "./AddHabitForm";

export default (props) => {
  const { loading, habits, reload } = props;
  const [showAddHabit, setShowAddHabit] = useState();

  const getHabitButtons = () => {
    if (showAddHabit || loading || !habits || !habits.length) return null;
    const habitItems = habits.map((h) => (
      <ButtonCircle key={h.id} className="mx-2 my-4">
        {h.name}
      </ButtonCircle>
    ));
    habitItems.push(
      <ButtonCircle
        key={0}
        className="mx-2 my-4"
        onClick={() => setShowAddHabit(true)}
      >
        +
      </ButtonCircle>
    );
    return <div className={styles.habitBtnContainer}>{habitItems}</div>;
  };

  const hideForm = () => {
    setShowAddHabit(false);
  };

  const onHabitAdded = () => {
    hideForm();
    reload();
  };

  return (
    <Layout>
      <div className="mt-2">
        {loading ? "loading..." : null}
        {showAddHabit ? (
          <AddHabitForm onGoBack={hideForm} onSuccess={onHabitAdded} />
        ) : null}
        {getHabitButtons()}
      </div>
    </Layout>
  );
};

//#f9807d
