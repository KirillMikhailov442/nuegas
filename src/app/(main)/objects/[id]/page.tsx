import SingleObjectScreen from '@screens/SingleObject';
import { Metadata } from 'next';
import ObjectsService from '@services/Projects';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const object = await ObjectsService.getOne(id)
    .then(res => res.data)
    .catch(err => false);
  if (!object) return notFound();

  return {
    title: object.title,
    description: object.description,
  };
}

export default SingleObjectScreen;
