'use client';

import TaskCard from '@components/Cards/Task/Task';
import { useTasksGetAll } from '@hooks/useTasks';
import { NextPage } from 'next';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

const SingleObjectScreen: NextPage = () => {
  const { back } = useRouter();
  const projectId = useParams<{ id: string }>().id;
  const tasks = useTasksGetAll(
    projectId,
    () => {},
    () => {
      toast.error('Что-то пошло не так');
      back();
    },
  );

  return (
    <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
      {tasks.data?.map(task => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};

export default SingleObjectScreen;
