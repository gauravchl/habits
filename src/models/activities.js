import lf from "localforage";
import { v4 as uuidv4 } from "uuid";
import { isSameDay } from "date-fns";

export default {
  getAll: async () => {
    return await lf.getItem("activities");
  },

  add: async (habitId) => {
    const activities = (await lf.getItem("activities")) || [];

    // Don't add activity if already added this day;
    const activity = activities.find(
      (activity) =>
        isSameDay(new Date(activity.createdAt), new Date()) &&
        activity.habitId === habitId
    );
    if (activity) return;

    activities.push({
      id: uuidv4(),
      habitId,
      createdAt: new Date().toISOString(),
    });
    await lf.setItem("activities", activities);
  },
};
