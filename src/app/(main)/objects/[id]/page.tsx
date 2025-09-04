import SingleObjectScreen from '@screens/SingleObject';
import { Metadata } from 'next';
import ObjectsService from '@services/Projects';
import { notFound } from 'next/navigation';

// @ts-ignore
export async function generateMetadata({ params }): Promise<Metadata> {
  const id = params.id;
  const object = await ObjectsService.getOne(id)
    .then(res => res.data)
    .catch(err => null);
  if (!object) return notFound();

  return {
    title: object.title,
    description: object.description,
  };
}

export default SingleObjectScreen;
