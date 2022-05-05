import styled from "styled-components";


export const Button=styled.button`
    background-color:white;
    border-radius:3px;
    border:none;
    box-shadow:none;
`
export const AppContainer=styled.div`
    align-items:flex-start;
    background-color:#4f4f4a;
    display:flex;
    flex-direction:row;
    height:100%;
    width:100%;
    padding:20px;    
`
export const ColumnContainer=styled.div`
    background-color:#232322;
    width:300px;
    min-height:40px;
    margin-right:20px;
    border-radius:3px;
    padding:8px 8px;
    flex-grow:0;
`
export const ColumnTitle=styled.div`
    font-weight:bold;
    padding:6px 16px 12px;
    color:#b6b6ae;
`
export const CardContainer=styled.div`
    background-color:#4f4f4a;
    color:#dbdee6;
    cursor:pointer;
    max-width:300px;
    border-radius:3px;
    box-shadow:black 0px 1px 0px 0px;
    padding:6px;
`
type AddItemButtonProps={
    dark?:boolean
}
export const AddItemButton=styled.button<AddItemButtonProps>`
    background-color:#ffffff3d;
    border:none;
    border-radius:3px;
    padding:6px;
    cursor:pointer;
    text-align:left;
    max-width:300px;
    color:${props=>(props.dark?"#000":"#fff")};
    transition:background 85ms ease-in;
    width:100%;
    &:hover{
        background-color:#ffffff52;
    }

`;
export const NewItemFormContainer=styled.div`
    max-width:300px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100%;    
`;
export const NewItemButton=styled.button`
    background-color:#5aac44;
    border-radius:3px;
    border-none:none;
    box-shadow:none;
    color:#fff;
    padding:6px 12px;
    text-align:center;  
    cursor:pointer;  
`;
export const NewItemInput=styled.input`
    border-radius:3px;
    border:none;
    width:100%;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    box-shadow:black 0px 1px 0px 0px;
`;