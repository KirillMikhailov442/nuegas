import type { FC } from 'react';
import { Avatar } from '@chakra-ui/react';
import { Minus } from 'lucide-react';
import { IEmployee } from '@/types/Employee';
import { useEmployeeRemoveFromTask } from '@/hooks/useEmploee';
import { useQueryClient } from 'react-query';
import { useParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { toast } from 'sonner';

const EmployeeItem: FC<IEmployee> = ({ name, surname, img, id }) => {
  const query = useQueryClient();
  const taskId = useParams<{ id: string }>().id;
  const removeFromTask = useEmployeeRemoveFromTask(() => {
    query.invalidateQueries(['task', taskId]);
    toast.success('Успешно удален');
  });
  return (
    <li className="group flex items-center gap-2 py-2 mb-0 ml-4 relative">
      <Avatar size={'sm'} name={`${name} ${surname}`} src={img} />
      <h5
        className={twMerge(
          removeFromTask.isLoading && 'text-[var(--primary-200)]',
        )}>
        {name} {surname}
      </h5>
      <button
        disabled={removeFromTask.isLoading}
        onClick={() => removeFromTask.mutate({ taskId, employeeId: id })}
        className="max-sm:opacity-100 p-1 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2">
        <Minus size={20} />
      </button>
    </li>
  );
};

export default EmployeeItem;
