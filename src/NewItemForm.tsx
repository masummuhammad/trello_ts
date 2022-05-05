import React, { useState } from "react";
import {NewItemFormContainer,NewItemButton,NewItemInput} from "./styles";
import { useFocus } from "./utils/useFocus";
type NewItemFormProps={
    onAdd(value:any):void;
    taskNotList:boolean;
    column?:string;
};
export const NewItemForm=({onAdd,taskNotList,column}:NewItemFormProps)=>{
    const [text,setText]=useState("");
    const inputRef=useFocus();
    let objSave:any;
    if(taskNotList){
       objSave={id:"c1",list_name:column,tasks:[{id:'9',task:text}]};
    }else{
        objSave={id:"c2",list_name:text,tasks:[]};
    }
    const handleAddText=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key==="Enter"){
            onAdd(objSave);
        }
    };

    return(<>

            <NewItemFormContainer>
                <NewItemInput ref={inputRef} value={text} onKeyPress={handleAddText} onChange={v=>setText(v.target.value)} />
                <NewItemButton onClick={()=>onAdd(objSave)}>
                    Create
                </NewItemButton>
            </NewItemFormContainer>
           </>
    )
}