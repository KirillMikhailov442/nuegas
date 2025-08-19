import type { FC } from 'react';
import { Circle, Minus } from 'lucide-react';
import { ITool } from '@/types/Tool';
import { useQueryClient } from 'react-query';
import { useParams } from 'next/navigation';
import { useToolRemoveFromTask } from '@/hooks/useTool';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

const ToolItem: FC<ITool> = ({ name, id }) => {
  const query = useQueryClient();
  const taskId = useParams<{ id: string }>().id;
  const removeFromTask = useToolRemoveFromTask(() => {
    query.invalidateQueries(['task', taskId]);
    toast.success('Успешно удален');
  });
  return (
    <li className="group flex items-center gap-2 py-2 mb-0 ml-4 relative">
      <Circle size={10} />
      <h5
        className={twMerge(
          removeFromTask.isLoading && 'text-[var(--primary-200)]',
        )}>
        {name}
      </h5>
      <button
        disabled={removeFromTask.isLoading}
        onClick={() => removeFromTask.mutate({ taskId, toolId: id })}
        className="max-sm:opacity-100 p-1 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2">
        <Minus size={20} />
      </button>
    </li>
  );
};

export default ToolItem;
