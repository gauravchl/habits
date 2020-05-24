import React from 'react';
import If from 'react-simple-if';
import Layout from '../layout';
import styles from './settings.module.scss';
import HabitCard from './HabitCard';

export default (props) => {
  const { habits = [], reload } = props;
  const archivedHabits = habits.filter((h) => !!h.archived);
  const unArchivedHabits = habits.filter((h) => !h.archived);

  return (
    <Layout>
      <h3 className="my-4 font-weight-light text-primary text-left">
        Your Habits <span className="font-weight-bold">Settings!</span>
      </h3>

      <div className={styles.container}>
        {unArchivedHabits.map((h, i) => (
          <HabitCard key={i} habit={h} reload={reload} />
        ))}
      </div>
      <If exp={archivedHabits && archivedHabits.length}>
        <h6 className="mt-5 font-weight-light text-primary text-left">
          Archived <span className="font-weight-bold">Habits!</span>
        </h6>
        <hr />
        <div className={styles.container}>
          {archivedHabits.map((h, i) => (
            <HabitCard key={i} habit={h} reload={reload} />
          ))}
        </div>
      </If>
    </Layout>
  );
};
