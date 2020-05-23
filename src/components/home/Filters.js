import React from 'react';
import styles from './Filters.module.scss';
import { filterTypes } from '../../constants';

export default (props) => {
  const { currentFilter, onChange } = props;
  return (
    <div className={styles.root + ' my-4'}>
      <div
        className={styles.item}
        data-active={filterTypes.STREAK === currentFilter}
        onClick={() => onChange(filterTypes.STREAK)}
      >
        Streak
      </div>
      <div
        className={styles.item}
        data-active={filterTypes.WEEK === currentFilter}
        onClick={() => onChange(filterTypes.WEEK)}
      >
        Week
      </div>
      <div
        className={styles.item}
        data-active={filterTypes.MONTH === currentFilter}
        onClick={() => onChange(filterTypes.MONTH)}
      >
        Month
      </div>
      <div
        className={styles.item}
        data-active={filterTypes.ALL === currentFilter}
        onClick={() => onChange(filterTypes.ALL)}
      >
        All
      </div>
    </div>
  );
};
