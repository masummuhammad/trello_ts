export type task={
    id:string;
    task:string;
}

export type AppState={
    id:string;
    list_name:string;
    tasks:task[];
};
export const ADD_LIST="ADD_LIST";
export const ADD_TASK="ADD_TASK";
export const addList=(payload:AppState)=>{
    return {type:ADD_LIST,payload:payload};
};
export const addTask=(payload:task)=>{
    return {type:ADD_TASK,payload:payload};
}
