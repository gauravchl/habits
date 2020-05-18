import lf from "localforage";
import { v4 as uuidv4 } from "uuid";

export default {
  getAll: async () => {
    const habits = await lf.getItem("habits");
    return habits;
  },

  add: async (habit) => {
    const { name } = habit || {};
  },

  init: async () => {
    const habits = await lf.getItem("habits");
    if (!habits || !habits.length) {
      await lf.setItem("habits", defaultHabits);
    }
  },
};

const defaultHabits = [
  {
    id: uuidv4(),
    name: "Run",
  },
  {
    id: uuidv4(),
    name: "Yoga",
  },
  {
    id: uuidv4(),
    name: "GYM",
  },
];
