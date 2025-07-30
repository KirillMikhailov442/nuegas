import { FC } from 'react';
import CreateEmployeeModal from './CreateEmployee';
import CreateObjectModal from './CreateObject';
import CreateTaskModal from './CreateTask';
import CreateToolModal from './CreateTool';
import DeleteEmployeeModal from './DeleteEmployee';
import DeleteObjectModal from './DeleteObject';
import DeleteTaskModal from './DeleteTask';
import DeleteToolModal from './DeleteTool';
import EditEmployeeModal from './EditEmployee';
import EditObjectModal from './EditObject';
import EditTaskModal from './EditTask';
import EditToolModal from './EditTool';

export {
  CreateEmployeeModal,
  CreateObjectModal,
  CreateTaskModal,
  CreateToolModal,
  DeleteEmployeeModal,
  DeleteObjectModal,
  DeleteTaskModal,
  DeleteToolModal,
  EditEmployeeModal,
  EditObjectModal,
  EditTaskModal,
  EditToolModal,
};

const Modals: FC = () => {
  return (
    <>
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
    </>
  );
};

export default Modals;
