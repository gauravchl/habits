import React, { useState } from "react";
import styles from "./home.module.scss";
import HabitButton from "./HabitButton";
import Layout from "../layout";
import AddHabitForm from "./AddHabitForm";
import { activities as activitiesModel } from "../../models";

export default (props) => {
  const { loading, habits, reload } = props;
  const [showAddHabit, setShowAddHabit] = useState();

  const addNewActivity = async (habit) => {
    await activitiesModel.add(habit.id);
    reload();
  };

  const getHabitButtons = () => {
    if (showAddHabit || loading || !habits || !habits.length) return null;
    const habitItems = habits.map((h) => (
      <HabitButton
        key={h.id}
        className="mx-2 my-4"
        total={21}
        progress={Math.floor(Math.random() * 22)}
        name={h.name}
        onClick={() => addNewActivity(h)}
      />
    ));
    habitItems.push(
      <HabitButton
        key={0}
        className="mx-2 my-4"
        onClick={() => setShowAddHabit(true)}
        name="+"
      />
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
        {loading ? (
          <h3 className="mt-5 text-primary text-center font-weight-light">
            Loading Your Habits...
          </h3>
        ) : null}
        {showAddHabit ? (
          <AddHabitForm onGoBack={hideForm} onSuccess={onHabitAdded} />
        ) : null}
        {getHabitButtons()}
      </div>
    </Layout>
  );
};

//#f9807d
