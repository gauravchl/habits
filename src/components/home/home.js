import React, { useState } from 'react';
import styles from './home.module.scss';
import HabitButton from './HabitButton';
import Layout from '../layout';
import AddHabitForm from './AddHabitForm';
import HabitButtons from './HabitButtons';

export default (props) => {
  const { loading, habits, activities, reload } = props;
  const [showAddHabit, setShowAddHabit] = useState();

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
        {showAddHabit ? <AddHabitForm onGoBack={hideForm} onSuccess={onHabitAdded} /> : null}
        <div className={styles.habitBtnContainer}>
          <HabitButtons habits={habits} activities={activities} reload={reload} />
          <HabitButton key={0} className="mx-2 my-4" onClick={() => setShowAddHabit(true)} name="+" />
        </div>
      </div>
    </Layout>
  );
};

//#f9807d
