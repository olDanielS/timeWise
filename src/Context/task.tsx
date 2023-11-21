import {useState, createContext } from "react";
import {ReactNode} from 'react';

import { TaskProps } from "../Interfaces/TasksInterface/TaskInterface";
import api from "../Services/api";


type TaskProviderProps = {
    children: ReactNode
}

interface TaskContextType {
    handleSubmitTask: (props: TaskProps) => void;
    handleUpdateTask: (props: TaskProps) => void;
    newTask: boolean
    
}

export const TaskContext = createContext({} as TaskContextType);

export default function TasKProvider({children}:TaskProviderProps){

    const [newTask, setNewTask] = useState<boolean>(false);
  
    const handleSubmitTask = async (props) => {
        try {
          const raw = {
            'description': props.descriptionTask,
            'priorityLevel': props.priorityLevel,
            'pontuation': props.pontuation
          };
    
          const response = await api.post('task/create-task', raw, {
            headers: {
              "Content-Type": "application/json"        
            },
          });
    
          setNewTask(!newTask);
          return response.data;

        } catch(err){
            return err.response.data
        }
      };
    const handleUpdateTask = async (props) => {
        try {
          const raw = {
            'description': props.descriptionTask,
            'priorityLevel': props.priorityLevel,
            'pontuation': props.pontuation
          };
    
          const response = await api.post('task/create-task', raw, {
            headers: {
              "Content-Type": "application/json"        
            },
          });
    
          setNewTask(!newTask);
          return response.data;

        } catch(err){
            return err.response.data
        }
      };

    const handleUpdateStatusTask = async (props) => {
        try {
          const raw = {
            'status': !props.status
            
          };
    
          const response = await api.put(`task/${props._id}`, raw, {
            headers: {
              "Content-Type": "application/json"        
            },
          });
          console.log(response)
    
          setNewTask(!newTask);
          return response.data;

        } catch(err){
            return err.response.data
        }
      };

    return (
        <TaskContext.Provider value={{handleSubmitTask, newTask,handleUpdateStatusTask}}>
            {children}
        </TaskContext.Provider>
    )

}