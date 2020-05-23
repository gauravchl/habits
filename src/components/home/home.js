import React, { useState } from 'react';
import styles from './home.module.scss';
import HabitButton from './HabitButton';
import Layout from '../layout';
import AddHabitForm from './AddHabitForm';
import { activities as activitiesModel } from '../../models';
import { isSameDay, subDays } from 'date-fns';

export default (props) => {
  const { loading, habits, activities, reload } = props;
  const [showAddHabit, setShowAddHabit] = useState();

  const addNewActivity = async (habit) => {
    await activitiesModel.add(habit.id);
    reload();
  };

  const getHabitProgress = (habitId) => {
    const habitActivities = activities && activities.filter((a) => a.habitId === habitId);
    if (!habitActivities || !habitActivities.length) return 0;

    habitActivities.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const activityRecordedToday = isSameDay(new Date(), new Date(habitActivities[0].createdAt));

    let progress = activityRecordedToday ? 1 : 0;
    for (let i = 0; i < habitActivities.length; i++) console.log(habitActivities[i].createdAt);

    for (let i = activityRecordedToday ? 1 : 0; i < habitActivities.length; i++) {
      const d1 = new Date(habitActivities[i].createdAt);
      const d2 = subDays(new Date(), activityRecordedToday ? i : i + 1);
      const isOnSameDay = isSameDay(d1, d2);
      if (!isOnSameDay) break;
      progress++;
    }

    return progress;
  };

  const renderHabitButtons = () => {
    if (showAddHabit || !habits || !habits.length) return null;
    const habitItems = habits.map((h) => (
      <HabitButton
        key={h.id}
        className="mx-2 my-4"
        total={21}
        progress={getHabitProgress(h.id)}
        name={h.name}
        onClick={() => addNewActivity(h)}
      />
    ));
    habitItems.push(<HabitButton key={0} className="mx-2 my-4" onClick={() => setShowAddHabit(true)} name="+" />);
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
        {showAddHabit ? <AddHabitForm onGoBack={hideForm} onSuccess={onHabitAdded} /> : null}
        {renderHabitButtons()}
      </div>
    </Layout>
  );
};

//#f9807d
