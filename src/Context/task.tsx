import {useState, createContext } from "react";
import {ReactNode} from 'react';

import uuid from 'react-native-uuid';


export const TaskContext = createContext({});

type TaskProviderProps = {
    children: ReactNode
}
type TaskProps = {
    descriptionTask: string,
    priorityLevel: string,
    pontuation: number;
}


export default function TasKProvider({children}:TaskProviderProps){
  
    function handleSubmitTask(props:TaskProps){

        const taskID = uuid.v4();

        console.log('Task name: ', props.descriptionTask)
        console.log('Priority: ', props.priorityLevel)
        console.log('Pontuation: ', props.pontuation)
        console.log('TASK ID: ',taskID )
    }

    return (
        <TaskContext.Provider value={{name: 'daniel',handleSubmitTask}}>
            {children}
        </TaskContext.Provider>
    )

}