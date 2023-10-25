import {useState, createContext } from "react";
import {ReactNode} from 'react';

import uuid from 'react-native-uuid';
import { TaskProps } from "../Interfaces/TasksInterface/TaskInterface";



type TaskProviderProps = {
    children: ReactNode
}

interface TaskContextType {
    handleSubmitTask: (props: TaskProps) => void;
    
}

export const TaskContext = createContext({} as TaskContextType);

export default function TasKProvider({children}:TaskProviderProps){
  
    function handleSubmitTask(props: TaskProps){

        const taskID = uuid.v4();

        console.log('Task name: ', props.descriptionTask)
        console.log('Priority: ', props.priorityLevel)
        console.log('Pontuation: ', props.pontuation)
        console.log('TASK ID: ',taskID )
        return taskID
    }

    return (
        <TaskContext.Provider value={{handleSubmitTask}}>
            {children}
        </TaskContext.Provider>
    )

}