'use client';

import ObjectCard from '@/components/Cards/Object/Object';
import { useProjectGetAll } from '@/hooks/useProject';
import { Skeleton } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { Else, If } from 'react-if';

const ObjectsScreen: NextPage = () => {
  const projects = useProjectGetAll();

  useEffect(() => {
    projects.mutate({
      pagination: {
        page: 1,
        itemsPerPage: 10,
      },
    });
  }, []);

  if (projects.isLoading) {
    return (
      <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
      </div>
    );
  }

  if (projects.isSuccess) {
    return (
      <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
        {projects.data?.data.pageItems.map(project => (
          <ObjectCard key={project.id} {...project} />
        ))}
      </div>
    );
  }
};

export default ObjectsScreen;
