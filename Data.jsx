import { createContext, useContext, useState } from "react";
export const dataStorage = createContext();

export const DataInfo = ({children})=>{
    const [monthly, setMonthly] = useState(true);
    const [data, setData] = useState([]);


    const handleData = (selectedItem, price) => {
        setData((prevData) => {
            const itemExists = prevData.some(item => item.name === selectedItem && item.price === price);
            if (itemExists) {
                return prevData.filter(item => !(item.name === selectedItem && item.price === price)); // Remove if unchecked
            } else {
                return [...prevData, { name: selectedItem, price }]; // Add if checked
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