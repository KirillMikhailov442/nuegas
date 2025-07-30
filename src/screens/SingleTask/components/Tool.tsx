import type { FC } from 'react';
import { Minus } from 'lucide-react';

const ToolItem: FC = () => {
  return (
    <li className="group flex items-center gap-2 py-2 mb-0 ml-4 relative">
      <h5>Лестница</h5>
      <button className="max-sm:opacity-100 p-1 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2">
        <Minus size={20} />
      </button>
    </li>
  );
};

export default ToolItem;
