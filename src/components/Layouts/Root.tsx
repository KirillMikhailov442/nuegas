import { type FC } from 'react';
import Providers from './Providers';
import '@styles/globals.scss';
import CreateObjectModal from '../Modals/CreateObject/CreateObject';
import { Toaster } from 'sonner';
import CreateTaskModal from '../Modals/CreateTask/CreateTask';
import EditObjectModal from '../Modals/EditObject/EditObject';
import EditTaskModal from '../Modals/EditTask/EditTask';
import DeleteObjectModal from '../Modals/DeleteObject/DeleteObject';
import DeleteTaskModal from '../Modals/DeleteTask/DeleteTask';
import CreateEmployeeModal from '../Modals/CreateEmployee/CreateEmployee';
import EditEmployeeModal from '../Modals/EditEmployee/EditEmployee';
import DeleteEmployeeModal from '../Modals/DeleteEmployee/DeleteEmployee';
import CreateToolModal from '../Modals/CreateTool/CreateTool';
import EditToolModal from '../Modals/EditTool/EditTool';
import DeleteToolModal from '../Modals/DeleteTool/DeleteTool';

const RootLayout: FC = () => {

  return (
    <Providers>
      <Toaster richColors />
      <CreateObjectModal />
      <CreateTaskModal />
      <EditObjectModal />
      <EditTaskModal />
      <DeleteObjectModal />
      <DeleteTaskModal />
      <CreateEmployeeModal />
      <EditEmployeeModal />
      <DeleteEmployeeModal />
      <CreateToolModal />
      <EditToolModal />
      <DeleteToolModal />
      <div className="wrapper">
      </div>
    </Providers>
  );
};

export default RootLayout;
