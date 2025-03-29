import { createContext, useContext, useState } from "react";
export const dataStorage = createContext();

export const DataInfo = ({children})=>{
    const [monthly, setMonthly] = useState(true);
    const [data, setData] = useState([]);


    const handleData = (name, price, isAddon = false) => {
        setData((prevData) => {
            if (isAddon) {
                // Allow multiple add-ons, toggle selection
                const exists = prevData.some((item) => item.name === name);
                return exists ? prevData.filter((item) => item.name !== name) : [...prevData, { name, price }];
            } else {
                // Only one plan should be selected at a time
                return [{ name, price }];
            }
        });
    };
    
    
    
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