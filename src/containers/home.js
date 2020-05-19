import React, { useState, useEffect } from "react";
import Home from "../components/home/home";
import {
  habits as habitsModel,
  activities as activitiesModel,
} from "../models/";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState();
  const [activities, setActivities] = useState();

  const fetchData = async () => {
    setLoading(true);
    let habits = await habitsModel.getAll();
    const activities = await activitiesModel.getAll();

    if (!habits || !habits.length) {
      await habitsModel.init();
      habits = await habitsModel.getAll();
    }
    setHabits(habits);
    setActivities(activities);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.table(activities);
  console.table(habits);

  return (
    <Home
      loading={loading}
      habits={habits}
      activities={activities}
      reload={fetchData}
    />
  );
};
