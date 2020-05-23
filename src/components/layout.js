import React from 'react';
import NavButton from './NavButton';
import styles from './layout.module.scss';
import { MdHome } from 'react-icons/md';
import { FaRegChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header + ' px-3 pt-3 m-2 d-none'}>
        <h2 className="mb-2 font-weight-light">Hello there!</h2>
        <p>You have been doing great today, Keep going!</p>
      </div>

      <div className={styles.container + ' px-4'}>{children}</div>

      <div className={styles.navContainer + ' px-4 pb-4'}>
        <Link to="/">
          <NavButton>
            <MdHome size="32" />
          </NavButton>
        </Link>
        <Link to="/activity">
          <NavButton>
            <FaRegChartBar size="28" />
          </NavButton>
        </Link>
      </div>
    </div>
  );
};
