import {createSlice} from '@reduxjs/toolkit'



const initialState={
    isOpen:false,
}

const teachersSlice=createSlice(
    {
        name:'teacher',
        initialState,
        reducers: {
            openModal: (state, action) => {
                state.isOpen = true;
              },
              closeModal:(state,action)=>{
                state.isOpen=false;
              }
        }
    }
)

export const { openModal, closeModal } = teachersSlice.actions;

export default teachersSlice.reducer;