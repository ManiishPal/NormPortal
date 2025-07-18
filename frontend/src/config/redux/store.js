import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducer/authReducer"
import postReducer from "./reducer/postReducer"


/*STEPS for State Management
*Submit Action
*Handle action in it's reducer
*Register here(store.js) -> Reducer
*/


export const store = configureStore({
    reducer:{
        auth: authReducer,
        posts : postReducer
    }
})