import { createContext, useContext, useState } from "react";
export const dataStorage = createContext();

export const DataInfo = ({children})=>{
    const [monthly, setMonthly] = useState(true);
    const [data, setData] = useState({});


    const handleData = (selectedItem)=>{
        setData(selectedItem);
    }
    const handleDate = () =>{
        setMonthly((id)=> !id)
    }
    
    return(
        <dataStorage.Provider value={{data, monthly, handleData, handleDate}}>
        {children}
        </dataStorage.Provider>
    )

}
 export const Info = ()=>{
    return useContext(dataStorage);
}