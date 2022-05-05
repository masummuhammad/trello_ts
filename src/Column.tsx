import { FC } from 'react';
import {ColumnContainer,ColumnTitle} from './styles';
import {AddNewItem} from './AddNewItem';
import { useDispatch } from 'react-redux';
import {addTask} from './state/actions';
type ColumnProps={
    text:string
}
export const Column:FC<ColumnProps>=({text,children})=>{
    const dispatch=useDispatch();
    const addTaskD=(text:any)=>{
        return dispatch(addTask(text));
    }
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem toggleButtonText="+ Add another task" taskNotList={true} dark={true} column={text} onAdd={addTaskD}/>
        </ColumnContainer>
    )
}
