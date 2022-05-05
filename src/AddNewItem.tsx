import {useState} from 'react';
import {AddItemButton} from './styles';
import {NewItemForm} from './NewItemForm';
//types
type AddNewItemProps={
    onAdd(text:any):void;
    toggleButtonText:string;    
    dark?:boolean;
    taskNotList:boolean;
    column?:string;
}
export const AddNewItem=(props:AddNewItemProps)=>{
    const [showForm,setShowForm]=useState(false);
    const {toggleButtonText,dark,column,onAdd,taskNotList}=props;

    if(showForm){
       return (
       <NewItemForm  column={column} taskNotList={taskNotList} onAdd={text=>{onAdd(text);
                setShowForm(false)}}/>
       )
    }

    return(<>

        <AddItemButton dark={true} onClick={()=>{setShowForm(true)}}>
            {toggleButtonText}
        </AddItemButton>

    </>)
}