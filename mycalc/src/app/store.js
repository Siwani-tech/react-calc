

import { configureStore } from "@reduxjs/toolkit";
import calculator from "../features/calcSlice";

const store=configureStore({
    reducer:{
        calculator
    }
})


export default store;
