import { configureStore } from "@reduxjs/toolkit";
import companyReducer from '../services/company'
import switchReducer from '../services/switchTheme'
export default configureStore({
    reducer:{
        companies: companyReducer,
        switch: switchReducer
    }
})