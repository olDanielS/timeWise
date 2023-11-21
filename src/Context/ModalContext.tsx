import { ReactNode, createContext, useState } from "react";

type ModalContextProps = {
    children: ReactNode;
}

interface ModalContextType{
    close: () => void;
    show: boolean;
    title: string;
    children?: ReactNode;
    data?: any
}

export const ModalContext = createContext({} as ModalContextType)

export default function ModalContextProvider({children}: ModalContextProps){
    const [show, setShow] = useState<boolean>(false)
}