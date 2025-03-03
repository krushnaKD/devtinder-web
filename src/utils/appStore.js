import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice"
import requestReducr from "./requestSlice"

const appStore = configureStore({
    reducer:{
    user:userReducer,
    feed:feedReducer,
    connection:connectionReducer,
    request:requestReducr
   },
});

export default appStore;