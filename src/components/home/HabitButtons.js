import React from 'react';
import { isSameDay, subDays, getDaysInMonth, isSameWeek, getDay } from 'date-fns';
import HabitButton from './HabitButton';
import { activities as activitiesModel } from '../../models';
import { filterTypes } from '../../constants';

export default (props) => {
  const { habits = [], activities, reload, currentFilter } = props;

  const addNewActivity = async (habit) => {
    await activitiesModel.add(habit.id);
    reload();
  };

  const getStreakData = (habitId) => {
    const total = 21;
    const habitActivities = activities && activities.filter((a) => a.habitId === habitId);
    if (!habitActivities || !habitActivities.length) return 0;

    habitActivities.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const activityRecordedToday = isSameDay(new Date(), new Date(habitActivities[0].createdAt));

    let progress = activityRecordedToday ? 1 : 0;

    for (let i = activityRecordedToday ? 1 : 0; i < habitActivities.length; i++) {
      const d1 = new Date(habitActivities[i].createdAt);
      const d2 = subDays(new Date(), activityRecordedToday ? i : i + 1);
      const isOnSameDay = isSameDay(d1, d2);
      if (!isOnSameDay) break;
      progress++;
    }

    return { total, progress, label: progress };
  };

  const getWeekData = (habitId) => {
    const total = 7;
    const habitActivities = activities.filter((a) => {
      return a.habitId === habitId && isSameWeek(new Date(a.createdAt), new Date());
    });
    const progress = habitActivities.map((a) => getDay(new Date(a.createdAt)) + 1);
    return { total, progress, label: progress.length };
  };

  const getMonthData = (habitId) => {
    const total = getDaysInMonth(new Date());
    return { total };
  };
  const getAllData = (habitId) => {
    return {};
  };

  const getData = (habitId) => {
    switch (currentFilter) {
      case filterTypes.STREAK:
        return getStreakData(habitId);
      case filterTypes.WEEK:
        return getWeekData(habitId);
      case filterTypes.MONTH:
        return getMonthData(habitId);
      case filterTypes.ALL:
        return getAllData(habitId);
      default:
        return null;
    }
  };

  return habits.map((h) => {
    const { total, progress, label } = getData(h.id);

    return (
      <HabitButton
        key={h.id}
        className="mx-2 my-4"
        total={total}
        progress={progress}
        label={label}
        name={h.name}
        onClick={() => addNewActivity(h)}
      />
    );
  });
};
