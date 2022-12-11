import { configureStore} from '@reduxjs/toolkit';
import auth from './authStore';
import userReducer from "./userStore"



export  default   configureStore({
 reducer: { 
  user:userReducer,
  auth:auth ,

},
 
});