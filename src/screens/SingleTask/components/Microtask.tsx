import { useMicrotaskDelete, useMicrotasksUpdate } from '@/hooks/useMicrotasks';
import { IMicrotask } from '@/types/Microtask';
import { Checkbox } from '@chakra-ui/react';
import { Minus } from 'lucide-react';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { useQueryClient } from 'react-query';
import { twMerge } from 'tailwind-merge';

const Microtask: FC<IMicrotask> = ({ title, isCompleted, description, id }) => {
  const update = useMicrotasksUpdate();
  const query = useQueryClient();
  const taskId = useParams<{ id: string }>().id;
  const deleteMicrotask = useMicrotaskDelete(() => {
    query.invalidateQueries(['task', taskId]);
  });
  return (
    <li role="button" className="group flex items-center gap-5 mt-4">
      <label className="flex items-start gap-3">
        <Checkbox
          disabled={
            update.isLoading || deleteMicrotask.isLoading || isCompleted
          }
          onChange={() => {
            update.mutate({
              id,
              description,
              title,
              isCompleted: true,
            });
          }}
          checked={isCompleted}
          className="mt-[2px]"
        />
        <h6 className={twMerge(isCompleted && 'line-through')}>{title}</h6>
      </label>
      <button
        className="group-hover:opacity-100 opacity-0 max-md:opacity-100"
        onClick={e => {
          e.stopPropagation();
          deleteMicrotask.mutate(id);
        }}>
        <Minus size={15} />
      </button>
    </li>
  );
};

export default Microtask;
