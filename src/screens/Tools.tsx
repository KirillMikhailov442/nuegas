import ToolCard from '@/components/Cards/Tool';
import { NextPage } from 'next';

const ToolsScreen: NextPage = () => {
  return (
    <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
      <ToolCard />
      <ToolCard />
      <ToolCard />
      <ToolCard />
    </div>
  );
};

export default ToolsScreen;
