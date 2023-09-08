import {configureStore} from '@reduxjs/toolkit'

import AuthSliceReducer from './Slices/AuthSlice'

// create store
const store = configureStore({
    reducer: {
        auth: AuthSliceReducer
    },
    devTools: true
})

export default store
