import {useState, createContext } from "react";
import {ReactNode} from 'react';

import { TaskProps } from "../Interfaces/TasksInterface/TaskInterface";
import api from "../Services/api";


type TaskProviderProps = {
    children: ReactNode
}

interface TaskContextType {
    handleSubmitTask: (props: TaskProps) => void;
    
}

export const TaskContext = createContext({} as TaskContextType);

export default function TasKProvider({children}:TaskProviderProps){

    const [newTask, setNewTask] = useState<boolean>(false);
  
    async function handleSubmitTask(props: TaskProps){

        const raw = {
            'description': props.descriptionTask,
            'priorityLevel': props.priorityLevel,
            'pontuation': props.pontuation

        }    
        await api.post('task/create-task',raw, {
            headers: {
                "Content-Type": "application/json"        
            },
        }).then((res)=> {
            setNewTask(!newTask)
            return res
        }).catch((err) =>{
            
            return err
        })
    }

    return (
        <TaskContext.Provider value={{handleSubmitTask, newTask}}>
            {children}
        </TaskContext.Provider>
    )

}