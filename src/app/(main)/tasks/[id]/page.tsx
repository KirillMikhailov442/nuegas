import SingleTaskScreen from '@screens/SingleTask/SingleTask';
import TasksService from '@services/Tasks';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const task = await TasksService.getOne(id)
    .then(res => res.data)
    .catch(err => false);

  if (!task) return notFound();

  return {
    title: task.title,
    description: task.description,
  };
}

export default SingleTaskScreen;
