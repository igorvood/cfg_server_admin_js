import {configureStore} from '@reduxjs/toolkit'

import {setupListeners} from '@reduxjs/toolkit/query'
import {adminReducer} from "./cfg/adminSlice";


export const store = configureStore({
    reducer: {
        adminReducer: adminReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()//.concat(tracerApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>