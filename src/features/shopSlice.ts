import Item from '../types/item'
import { createSlice } from '@reduxjs/toolkit'

interface InitialShopStateType {
    inventory: Item[]
}

const initialShopState: InitialShopStateType = {
    inventory: [
        {
            label: 'mouse',
            price: 10,
            id: 'mouseID',
            stock: 15,
        },
        {
            label: 'keyboard',
            price: 15,
            id: 'keyboardID',
            stock: 1,
        },
        {
            label: 'headphones',
            price: 60,
            id: 'headphonesID',
            stock: 0,
        },
        {
            label: 'laptop',
            price: 250,
            id: 'laptopID',
            stock: 5,
        },
    ]
}

const shopSlice = createSlice({
    name: 'shop',
    initialState: initialShopState,
    reducers: {
    }
})

export default shopSlice.reducer