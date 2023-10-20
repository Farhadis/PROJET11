import { configureStore } from "@reduxjs/toolkit";
import connectionSlice from "../Redux/actions";


export default configureStore({
  reducer: {
    user: connectionSlice,
  },
  
});