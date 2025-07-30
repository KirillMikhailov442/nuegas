import TaskCard from '@/components/Cards/Task/Task';
import { NextPage } from 'next';

const SingleObjectScreen: NextPage = () => {
  return (
    <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default SingleObjectScreen;
