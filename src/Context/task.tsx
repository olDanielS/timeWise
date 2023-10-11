import {useState, createContext } from "react";
import {ReactNode} from 'react'

export const TaskContext = createContext({});

type TaskProviderProps = {
    children: ReactNode
}


export default function TasKProvider({children}:TaskProviderProps){
    const [descriptionTask, setDescriptionTask ] = useState('');
    const [priorityLevel, setPriorityLevel] = useState('');



    return (
        <TaskContext.Provider value={{name: 'daniel', setDescriptionTask, priorityLevel, descriptionTask,setPriorityLevel}}>
            {children}
        </TaskContext.Provider>
    )

}