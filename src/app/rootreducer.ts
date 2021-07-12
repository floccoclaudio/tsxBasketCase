import { combineReducers } from '@reduxjs/toolkit'
import shopSlice from '../features/shopSlice'
export const rootReducer = combineReducers({
    shopItemList: shopSlice
})

export type RootState = ReturnType<typeof rootReducer>