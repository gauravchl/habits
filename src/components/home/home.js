import React, { useState } from 'react';
import styles from './home.module.scss';
import HabitButton from './HabitButton';
import Layout from '../layout';
import AddHabitForm from './AddHabitForm';
import HabitButtons from './HabitButtons';
import Filters from './Filters';
import { filterTypes } from '../../constants';

export default (props) => {
  const { loading, habits, activities, reload } = props;
  const [showAddHabit, setShowAddHabit] = useState();
  const [filter, setFilter] = useState(filterTypes.STREAK);

  const hideForm = () => {
    setShowAddHabit(false);
  };

  const onHabitAdded = () => {
    hideForm();
    reload();
  };

  if (showAddHabit) return <AddHabitForm onGoBack={hideForm} onSuccess={onHabitAdded} />;

  return (
    <Layout>
      <div className="mt-2">
        <Filters currentFilter={filter} onChange={setFilter} />
        <div className={styles.habitBtnContainer}>
          <HabitButtons habits={habits} activities={activities} reload={reload} />
          <HabitButton key={0} className="mx-2 my-4" onClick={() => setShowAddHabit(true)} name="+" />
        </div>
      </div>
    </Layout>
  );
};

//#f9807d
