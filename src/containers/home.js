import React, { useState, useEffect } from "react";
import Home from "../components/home/home";
import { habits as habitsModel } from "../models/";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState();

  const fetchData = async () => {
    setLoading(true);
    let habits = await habitsModel.getAll();
    if (!habits || !habits.length) {
      await habitsModel.init();
      habits = await habitsModel.getAll();
    }
    setHabits(habits);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Home loading={loading} habits={habits} reload={fetchData} />;
};
