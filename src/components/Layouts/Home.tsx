import type { FC } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import styles from './Layouts.module.scss';
import BottomBar from '../BottomBar/BottomBar';

const HomeLayout: FC = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.home}>
        <Header />
      </div>
      <BottomBar />
    </>
  );
};

export default HomeLayout;
