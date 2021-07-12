import { combineReducers } from '@reduxjs/toolkit'
import shopSlice from '../features/shopSlice'
import cartSlice from '../features/cartSlice'
export const rootReducer = combineReducers({
    shopItemList: shopSlice,
    cartItemList: cartSlice
})

export type RootState = ReturnType<typeof rootReducer>