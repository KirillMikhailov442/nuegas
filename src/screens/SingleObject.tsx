'use client';

import TaskCard from '@/components/Cards/Task/Task';
import { useTasksGetAll } from '@/hooks/useTasks';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';

const SingleObjectScreen: NextPage = () => {
  const projectId = useParams<{ id: string }>().id;
  const tasks = useTasksGetAll(projectId);

  return (
    <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
      {tasks.data?.pageItems.map(task => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};

export default SingleObjectScreen;
