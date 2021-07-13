import { combineReducers } from '@reduxjs/toolkit'
import shopSlice from '../features/shopSlice'
import cartSlice from '../features/cartSlice'
import fakeStoreItemSlice from '../features/fakestoreItemListSlice'
export const rootReducer = combineReducers({
    shopItemList: shopSlice,
    cartItemList: cartSlice,
    fakeItemList: fakeStoreItemSlice
})

export type RootState = ReturnType<typeof rootReducer>