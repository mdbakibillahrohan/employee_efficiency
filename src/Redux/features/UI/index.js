import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tags:[],
    isCollapsed:false
}

const uiSlice=createSlice({
    name:'UI',
    initialState,
    reducers:{
        addTags:(state,action)=>{
            state.tags=[...state.tags,action.payload]
        },
        deleteTags:(state,action)=>{
            state.tags=state.tags.filter((tData)=>{
                if(tData.id===action.payload.id){
                    return false;
                }
            })
        },
        handleCollapsed:(state,action)=>{
            state.isCollapsed=!state.isCollapsed
        }
    }
});

export const {addTags,deleteTags,handleCollapsed}=uiSlice.actions;
export default uiSlice.reducer;