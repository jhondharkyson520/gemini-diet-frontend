import { createContext, useContext, useState } from "react";

interface DietData {
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    level: string;
    objective: string;
}

interface DietContextProps {
    dietData: DietData;
    setDietData: React.Dispatch<React.SetStateAction<DietData>>;
    clearDietData: () => void;
}

const defaultDietData: DietData ={
    name: '',
    weight: '',
    height: '',
    age: '',
    gender: '',
    level: '',
    objective: ''
}

const DietContext = createContext<DietContextProps | undefined>(undefined);

export const DietProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [dietData, setDietData] = useState<DietData>(defaultDietData);
    const clearDietData = () => setDietData(defaultDietData);

    return(
        <DietContext.Provider value={{dietData, setDietData, clearDietData}}>
            {children}
        </DietContext.Provider>
    );
}

export const useDiet = () => {
    const context = useContext(DietContext);
    if(!context) {
        throw new Error('useDiet must be used with a DietProvider!');
    }
    return context;
}
