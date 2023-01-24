import {configureStore} from '@reduxjs/toolkit'

import {setupListeners} from '@reduxjs/toolkit/query'
import {adminReducer} from "./cfg/adminSlice";
import {cfgApi} from "./cfg/tracer.api";


export const store = configureStore({
    reducer: {
        [cfgApi.reducerPath]: cfgApi.reducer,
        adminReducer: adminReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cfgApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>