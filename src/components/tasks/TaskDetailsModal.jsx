import React from 'react';
import Modal from '../ui/Modal';
import { useSelector } from 'react-redux';

const TaskDetailsModal = ({isOpen, setIsOpen, id}) => {
    const {tasks} = useSelector((state)=> state.tasksSlice);
    const task = tasks.find(item=> item.id === id); 
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Task Details'}>
            <div className=" rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.priority === 'high' ? 'text-red-500' : ''
        } ${task?.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task?.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>        
      </div>
    </div>
        </Modal>
    );
};

export default TaskDetailsModal;