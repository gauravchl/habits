import React from 'react';
import styles from './habitCard.module.scss';
import { MdUnarchive, MdDelete } from 'react-icons/md';
import { habits as habitsModel } from '../../models/';
import If from 'react-simple-if';

export default (props) => {
  const { habit, reload } = props;
  const { archived } = habit || {};

  const handleArchivedClick = async () => {
    if (archived) {
      await habitsModel.unArchive(habit.id);
    } else {
      await habitsModel.archive(habit.id);
    }
    reload();
  };

  return (
    <div className={styles.card + ' my-2 p-4'}>
      {habit.name}
      <div>
        <If exp={!archived}>
          <MdDelete className={styles.actionBtn} size={22} onClick={handleArchivedClick} />
        </If>
        <If exp={archived}>
          <MdUnarchive className={styles.actionBtn} size={22} onClick={handleArchivedClick} />
        </If>
      </div>
    </div>
  );
};
