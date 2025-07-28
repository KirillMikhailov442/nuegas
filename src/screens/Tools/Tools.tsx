import styles from './Tools.module.scss';
import ToolCard from '@/components/Cards/Tool/Tool';
import { NextPage } from 'next';

const ToolsScreen: NextPage = () => {
  return (
    <div className={styles.content}>
      <ToolCard />
      <ToolCard />
      <ToolCard />
      <ToolCard />
    </div>
  );
};

export default ToolsScreen;
