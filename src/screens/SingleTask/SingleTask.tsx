import styles from './SingleTask.module.scss';
import task_img from '@images/project.jpg';
import { Calendar } from 'lucide-react';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import EmployeeItem from './components/Employee/Employee';
import ToolItem from './components/Tool/Tool';
import { NextPage } from 'next';
import Image from 'next/image';

const SingleTaskScreen: NextPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Image
          className={styles.img}
          src={task_img}
          alt="task image"
        />
        <div className={styles.container}>
          <h3 className={styles.title}>Название задачи</h3>
          <div className={styles.details}>
            <p className={styles.date}>
              <Calendar size={20} /> <span>12 Деаабря</span>
            </p>
            <div className={styles.employees}>
              <span>Персонал:</span>
              <AvatarGroup
                size={'sm'}
                max={3}>
                <Avatar name="fake" /> <Avatar name="fake" />{' '}
                <Avatar name="fake" /> <Avatar name="fake" />
              </AvatarGroup>
            </div>
          </div>
          <div className={styles.field}>
            <h4>Описание</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              tempora assumenda, ea esse quia delectus ipsam temporibus. Totam
              possimus, esse vero fugiat eius iste ab magni hic vitae labore
              veritatis.
            </p>
          </div>
          <div className={styles.field}>
            <h4>Микрозадачи</h4>
            <ul className={styles.list}>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                doloribus ducimus similique voluptas nulla suscipit! Temporibus,
                error cumque officia doloribus quod aperiam ipsa voluptatibus,
                velit aliquid a nulla rem mollitia!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                doloribus ducimus similique voluptas nulla suscipit! Temporibus,
                error cumque officia doloribus quod aperiam ipsa voluptatibus,
                velit aliquid a nulla rem mollitia!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                doloribus ducimus similique voluptas nulla suscipit! Temporibus,
                error cumque officia doloribus quod aperiam ipsa voluptatibus,
                velit aliquid a nulla rem mollitia!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <aside className={styles.side}>
        <div className={styles.field}>
          <h4>Персонал</h4>
          <ul className={styles.list}>
            <EmployeeItem />
            <EmployeeItem />
            <EmployeeItem />
          </ul>
        </div>
        <div className={styles.field}>
          <h4>Инвентарь</h4>
          <ul className={styles.list}>
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
