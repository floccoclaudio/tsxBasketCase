import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Item from '../types/item'

interface CartInitialStateType {
    cart: Item[]
}

const cartInitialState: CartInitialStateType = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => { state.cart.push(action.payload) }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer