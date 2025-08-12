import task_img from '@images/project.jpg';
import { Calendar } from 'lucide-react';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import EmployeeItem from './components/Employee';
import ToolItem from './components/Tool';
import { NextPage } from 'next';
import Image from 'next/image';

const SingleTaskScreen: NextPage = () => {
  return (
    <div className="flex justify-center items-center gap-6 m-6 max-lg:block max-sm:m-3">
      <div className="basis-[820px] c-border bg-[var(--primary-0)] overflow-hidden rounded-md">
        <Image
          className="min-h-[250px] w-full object-cover object-center"
          src={task_img}
          alt="task image"
        />
        <div className="p-6">
          <h3 className="mb-2">Название задачи</h3>
          <div className="flex items-center gap-4 mb-10">
            <p className="flex items-center gap-1.5">
              <Calendar size={20} /> 12 Декабря
            </p>
            <div className="flex items-center gap-1.5">
              <span>Персонал:</span>
              <AvatarGroup size={'sm'} max={3}>
                <Avatar name="fake" /> <Avatar name="fake" />{' '}
                <Avatar name="fake" /> <Avatar name="fake" />
              </AvatarGroup>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="mb-4">Описание</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              tempora assumenda, ea esse quia delectus ipsam temporibus. Totam
              possimus, esse vero fugiat eius iste ab magni hic vitae labore
              veritatis.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="mb-4">Микрозадачи</h4>
            <ul>
              <li className="mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                doloribus ducimus similique voluptas nulla suscipit! Temporibus,
                error cumque officia doloribus quod aperiam ipsa voluptatibus,
                velit aliquid a nulla rem mollitia!
              </li>
              <li className="mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                doloribus ducimus similique voluptas nulla suscipit! Temporibus,
                error cumque officia doloribus quod aperiam ipsa voluptatibus,
                velit aliquid a nulla rem mollitia!
              </li>
              <li className="mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                doloribus ducimus similique voluptas nulla suscipit! Temporibus,
                error cumque officia doloribus quod aperiam ipsa voluptatibus,
                velit aliquid a nulla rem mollitia!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <aside className="basis-[320px] c-border bg-[var(--primary-0)] p-6 rounded-md">
        <div className="mb-6">
          <h4 className="mb-4">Персонал</h4>
          <ul>
            <EmployeeItem />
            <EmployeeItem />
            <EmployeeItem />
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="mb-4">Инвентарь</h4>
          <ul>
            <ToolItem />
            <ToolItem />
            <ToolItem />
            <ToolItem />
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SingleTaskScreen;
