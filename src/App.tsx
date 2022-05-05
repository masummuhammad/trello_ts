import React,{FC} from 'react';
import {AppContainer} from './styles';
import {AddNewItem} from './AddNewItem';
import { Column } from './Column';
import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, addList } from './state/actions';


const App:FC=()=>{
  const state=useSelector<AppState[],AppState[]>(state=>state);
  const dispatch=useDispatch();
  const addListD=(text:any)=>{
        return dispatch(addList(text));
  }
  console.log(state);
  return(
    <AppContainer>
      {state.map(e=>{
       return( <Column key={e.id} text={e.list_name}>
            {e.tasks.map(task=>{
              return <Card key={task.id} text={task.task}/>
            })}
          
        </Column>);
      })}
      <AddNewItem toggleButtonText="+ Add another list" taskNotList={false} onAdd={addListD}/>
    </AppContainer>
  )
}

export default App;
