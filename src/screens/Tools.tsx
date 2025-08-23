'use client';

import ToolCard from '@components/Cards/Tool';
import { useToolGetAll } from '@hooks/useTool';
import { ITool } from '@/types/Tool';
import { Skeleton } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect } from 'react';

const ToolsScreen: NextPage = () => {
  const tools = useToolGetAll({ isFree: false });

  useEffect(() => {
    tools.refetch();
  }, []);

  if (tools.isLoading) {
    return (
      <div className="grid grid-cols-4 gap-4 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
      {tools.data?.data.pageItems.map((tool: ITool) => (
        <ToolCard key={tool.id} {...tool} />
      ))}
    </div>
  );
};

export default ToolsScreen;
