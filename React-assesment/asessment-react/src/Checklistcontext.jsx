import React, { createContext, useState } from 'react';

export const Checklistcontext = createContext()

const CheckListContext = ({children}) => {

    const [selecteditem1, setSelecteditem1] = useState('No');
    const [selecteditem2, setSelecteditem2] = useState('No');

    const handleCheckBox1 = (isCheck) =>{
       
            if(isCheck){
                setSelecteditem1("Yes")
            }else{
                setSelecteditem1("No")
            }
        
    }
    const handleCheckBox2 = (isCheck) =>{

        if(isCheck){
            setSelecteditem2("Yes")
        }else{
            setSelecteditem2("No")
        }
    
}

    return (
        <div>
            <Checklistcontext.Provider value={{selecteditem1,selecteditem2,handleCheckBox1,handleCheckBox2}}>
                {children}
            </Checklistcontext.Provider>
        </div>
    );
}

export default CheckListContext;
