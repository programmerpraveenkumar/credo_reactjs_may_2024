import { configureStore } from '@reduxjs/toolkit'
const calculation =(state=1,action)=>{
    console.log(state,action);
    switch (action.type) {
        case "INC":
            state = state+1;
        break;
        case "DEC":
            state = state-1;
        break;    
    }
    return state;
}


export const myStore = configureStore({
    reducer:{
        "INC_DEC":calculation
    }
})