import {ADD_LIST,ADD_TASK, AppState} from './actions';
type actionType={
    type:string;
    payload:AppState;
}
const initialState:AppState[]=
[{id:"1",
    list_name:"To Do",
    tasks:[{id:"1",task:"complete this app"}]},];
export const reducer=(state:AppState[]=initialState,action:actionType)=>{
        switch(action.type){
            case ADD_LIST:
                return [...state,action.payload];
            case ADD_TASK:
                let temp:any=state.find(e=>e.list_name===action.payload.list_name);
                let temp2:any=temp;
                temp.tasks.push(action.payload.tasks[0]);
                let tempArr:any=state.filter(e=>e!==temp2);
                return [...tempArr,temp];
            default:
                return state;
        }
}