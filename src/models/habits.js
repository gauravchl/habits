import lf from 'localforage';
import { v4 as uuidv4 } from 'uuid';

export default {
  getAll: async () => {
    const habits = await lf.getItem('habits');
    return habits;
  },

  add: async (habit) => {
    const { name } = habit || {};
    const habits = await lf.getItem('habits');
    habits.push({ id: uuidv4(), name, createdAt: new Date().toISOString() });
    await lf.setItem('habits', habits);
  },

  init: async () => {
    const habits = await lf.getItem('habits');
    if (!habits || !habits.length) {
      await lf.setItem('habits', defaultHabits);
    }
  },

  archive: async (habitId) => {
    const habits = (await lf.getItem('habits')) || [];
    const index = habits.findIndex((h) => h.id === habitId);
    if (index > -1) {
      habits[index].archived = true;
    }
    await lf.setItem('habits', habits);
  },

  unArchive: async (habitId) => {
    const habits = (await lf.getItem('habits')) || [];
    const index = habits.findIndex((h) => h.id === habitId);
    if (index > -1) {
      habits[index].archived = false;
    }
    await lf.setItem('habits', habits);
  },
};

const defaultHabits = [
  {
    id: uuidv4(),
    name: 'Run',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Yoga',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'GYM',
    createdAt: new Date().toISOString(),
  },
];
