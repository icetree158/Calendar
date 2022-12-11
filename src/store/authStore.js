import { createSlice } from "@reduxjs/toolkit"



const auth = createSlice({
    name: 'auth',
    initialState: {
       
       isAuth:false

    },
    reducers: {
        setAuth(state, action) {
            state.isAuth=action.payload
        }
        
     

    
}})
export const { setAuth} = auth.actions
export default auth.reducer